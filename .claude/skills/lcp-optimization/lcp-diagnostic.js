#!/usr/bin/env node

/**
 * LCP Diagnostic Script for Next.js
 * 
 * Run this in your Next.js project root to identify LCP issues:
 * node lcp-diagnostic.js
 * 
 * What it checks:
 * 1. Image components missing priority prop
 * 2. Third-party scripts without lazy loading
 * 3. Font loading issues
 * 4. CSS that might block render
 * 5. Animation classes that could delay LCP
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const issues = [];
const warnings = [];
const info = [];

// Colors for output
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const GREEN = '\x1b[32m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

function log(color, prefix, message) {
  console.log(`${color}${prefix}${RESET} ${message}`);
}

function findFiles(dir, extensions, excludeDirs = ['node_modules', '.next', '.git', 'dist', 'build']) {
  let results = [];
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        if (!excludeDirs.includes(file)) {
          results = results.concat(findFiles(filePath, extensions, excludeDirs));
        }
      } else if (extensions.some(ext => file.endsWith(ext))) {
        results.push(filePath);
      }
    }
  } catch (e) {
    // Directory not accessible
  }
  
  return results;
}

function checkFile(filePath, content) {
  const relativePath = path.relative(process.cwd(), filePath);
  const lines = content.split('\n');
  
  // Check 1: Images that might be LCP without priority
  const imageMatches = content.matchAll(/<Image[^>]*src=["'][^"']*["'][^>]*>/g);
  for (const match of imageMatches) {
    const imageTag = match[0];
    const lineNum = content.substring(0, match.index).split('\n').length;
    
    // Check if it's likely an above-fold image
    const isHero = /hero|banner|cover|header|main|primary/i.test(imageTag);
    const hasPriority = /priority/.test(imageTag);
    const hasLazyLoading = /loading=["']lazy["']/.test(imageTag);
    const hasFill = /fill/.test(imageTag);
    
    if (isHero && !hasPriority) {
      issues.push({
        file: relativePath,
        line: lineNum,
        type: 'MISSING_PRIORITY',
        message: `Hero/banner image likely LCP candidate but missing 'priority' prop`,
        code: imageTag.substring(0, 100) + (imageTag.length > 100 ? '...' : '')
      });
    }
    
    if (hasPriority && hasLazyLoading) {
      issues.push({
        file: relativePath,
        line: lineNum,
        type: 'CONFLICTING_LOADING',
        message: `Image has both 'priority' and 'loading="lazy"' - priority will be ignored`,
        code: imageTag.substring(0, 100)
      });
    }
  }
  
  // Check 2: Script tags without proper strategy
  const scriptMatches = content.matchAll(/<Script[^>]*src=["'][^"']*["'][^>]*>/g);
  for (const match of scriptMatches) {
    const scriptTag = match[0];
    const lineNum = content.substring(0, match.index).split('\n').length;
    
    const hasStrategy = /strategy=["'](lazyOnload|afterInteractive|beforeInteractive|worker)["']/.test(scriptTag);
    const isThirdParty = /https?:\/\//.test(scriptTag);
    const isAnalytics = /analytics|gtag|gtm|segment|mixpanel|hotjar|clarity|cal\.com/i.test(scriptTag);
    
    if (isThirdParty && !hasStrategy) {
      warnings.push({
        file: relativePath,
        line: lineNum,
        type: 'SCRIPT_NO_STRATEGY',
        message: `Third-party script without loading strategy - may block LCP`,
        suggestion: `Add strategy="lazyOnload" or strategy="afterInteractive"`,
        code: scriptTag.substring(0, 100)
      });
    }
    
    if (isAnalytics && !hasStrategy) {
      issues.push({
        file: relativePath,
        line: lineNum,
        type: 'ANALYTICS_BLOCKING',
        message: `Analytics script without lazy loading - blocking LCP`,
        suggestion: `Add strategy="lazyOnload"`,
        code: scriptTag.substring(0, 100)
      });
    }
  }
  
  // Check 3: CSS animations that might delay LCP
  const animationPatterns = [
    /className=["'][^"']*opacity-0[^"']*["']/g,
    /className=["'][^"']*invisible[^"']*["']/g,
    /className=["'][^"']*hidden[^"']*["']/g,
    /animate-fadeIn|animate-slideIn|animate-fade/g,
    /animation-delay/g,
  ];
  
  for (const pattern of animationPatterns) {
    const matches = content.matchAll(pattern);
    for (const match of matches) {
      const lineNum = content.substring(0, match.index).split('\n').length;
      const context = lines[lineNum - 1]?.trim() || '';
      
      // Check if this is in a hero/header area
      const surroundingCode = content.substring(Math.max(0, match.index - 200), match.index + 200);
      const isInHero = /hero|header|banner|main-content|above-fold/i.test(surroundingCode);
      
      if (isInHero) {
        warnings.push({
          file: relativePath,
          line: lineNum,
          type: 'ANIMATION_DELAY',
          message: `Animation/visibility class in hero area might delay LCP`,
          suggestion: `Remove initial opacity-0/hidden from LCP content, or use CSS that doesn't affect initial render`,
          code: context.substring(0, 100)
        });
      }
    }
  }
  
  // Check 4: Background images in CSS (can't be preloaded)
  const bgImageMatches = content.matchAll(/bg-\[url\(['"]?([^'")\]]+)['"]?\)\]|backgroundImage:\s*['"]?url\(['"]?([^'")\]]+)['"]?\)['"]?/g);
  for (const match of bgImageMatches) {
    const lineNum = content.substring(0, match.index).split('\n').length;
    const imageUrl = match[1] || match[2];
    
    // Check if it looks like a hero/main image
    const isLikelyLCP = /hero|banner|cover|main|primary|header/i.test(imageUrl) || 
                        /\.jpg|\.png|\.webp/i.test(imageUrl);
    
    if (isLikelyLCP) {
      warnings.push({
        file: relativePath,
        line: lineNum,
        type: 'CSS_BACKGROUND_IMAGE',
        message: `CSS background image detected - cannot be preloaded, may hurt LCP`,
        suggestion: `Consider using next/image with fill prop instead, or add manual <link rel="preload">`,
        code: match[0].substring(0, 80)
      });
    }
  }
  
  // Check 5: External fonts without next/font
  const externalFontMatches = content.matchAll(/href=["']https:\/\/fonts\.(googleapis|gstatic)\.com[^"']*["']/g);
  for (const match of externalFontMatches) {
    const lineNum = content.substring(0, match.index).split('\n').length;
    
    issues.push({
      file: relativePath,
      line: lineNum,
      type: 'EXTERNAL_FONT',
      message: `External Google Font link detected - use next/font instead for better performance`,
      suggestion: `Replace with: import { FontName } from 'next/font/google'`,
      code: match[0].substring(0, 80)
    });
  }
}

function checkNextConfig() {
  const configPath = path.join(process.cwd(), 'next.config.js');
  const configMjsPath = path.join(process.cwd(), 'next.config.mjs');
  
  let configContent = '';
  let configFile = '';
  
  if (fs.existsSync(configPath)) {
    configContent = fs.readFileSync(configPath, 'utf8');
    configFile = 'next.config.js';
  } else if (fs.existsSync(configMjsPath)) {
    configContent = fs.readFileSync(configMjsPath, 'utf8');
    configFile = 'next.config.mjs';
  } else {
    warnings.push({
      file: 'next.config.js',
      type: 'NO_CONFIG',
      message: 'No next.config.js found - default image settings may not be optimal'
    });
    return;
  }
  
  // Check for modern image formats
  if (!configContent.includes('avif') && !configContent.includes('webp')) {
    warnings.push({
      file: configFile,
      type: 'IMAGE_FORMATS',
      message: 'Modern image formats (AVIF/WebP) not explicitly enabled',
      suggestion: `Add to images config: formats: ['image/avif', 'image/webp']`
    });
  }
  
  // Check for image optimization
  if (configContent.includes('unoptimized: true')) {
    issues.push({
      file: configFile,
      type: 'IMAGES_UNOPTIMIZED',
      message: 'Image optimization is disabled! This significantly hurts LCP',
      suggestion: 'Remove unoptimized: true from images config'
    });
  }
}

function checkLayoutFiles() {
  const layoutFiles = [
    'app/layout.tsx',
    'app/layout.jsx',
    'pages/_app.tsx',
    'pages/_app.jsx',
    'pages/_document.tsx',
    'pages/_document.jsx',
  ];
  
  for (const layoutFile of layoutFiles) {
    const filePath = path.join(process.cwd(), layoutFile);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for font preload
      const hasNextFont = content.includes('next/font');
      const hasGoogleFontLink = content.includes('fonts.googleapis.com');
      
      if (hasGoogleFontLink && !hasNextFont) {
        issues.push({
          file: layoutFile,
          type: 'FONT_LOADING',
          message: 'Using Google Fonts via <link> instead of next/font',
          suggestion: 'Migrate to next/font for automatic font optimization'
        });
      }
      
      // Check for font-display
      if (content.includes('@font-face') && !content.includes('font-display')) {
        warnings.push({
          file: layoutFile,
          type: 'FONT_DISPLAY',
          message: '@font-face without font-display property',
          suggestion: 'Add font-display: swap to prevent invisible text during font load'
        });
      }
    }
  }
}

function countPriorityImages() {
  let priorityCount = 0;
  const files = findFiles(process.cwd(), ['.tsx', '.jsx', '.js']);
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/<Image[^>]*priority[^>]*>/g);
    if (matches) {
      priorityCount += matches.length;
    }
  }
  
  if (priorityCount === 0) {
    issues.push({
      type: 'NO_PRIORITY_IMAGES',
      message: 'No images with priority prop found - LCP image should have priority',
      suggestion: 'Add priority prop to your above-the-fold hero/banner image'
    });
  } else if (priorityCount > 3) {
    warnings.push({
      type: 'TOO_MANY_PRIORITY',
      message: `${priorityCount} images have priority - too many priority images dilute the optimization`,
      suggestion: 'Only 1-2 images (the actual LCP candidates) should have priority'
    });
  } else {
    info.push({
      type: 'PRIORITY_COUNT',
      message: `Found ${priorityCount} image(s) with priority prop`
    });
  }
}

// Main execution
console.log('\n🔍 LCP Diagnostic Tool for Next.js\n');
console.log('Scanning project...\n');

// Run checks
const tsxFiles = findFiles(process.cwd(), ['.tsx', '.jsx', '.js', '.ts']);
console.log(`Found ${tsxFiles.length} source files to analyze\n`);

for (const file of tsxFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    checkFile(file, content);
  } catch (e) {
    // Skip unreadable files
  }
}

checkNextConfig();
checkLayoutFiles();
countPriorityImages();

// Output results
console.log('═'.repeat(60));
console.log('\n📊 RESULTS\n');

if (issues.length === 0 && warnings.length === 0) {
  log(GREEN, '✅', 'No LCP issues detected!\n');
} else {
  if (issues.length > 0) {
    log(RED, `\n❌ ISSUES (${issues.length})`, '- These are likely hurting your LCP\n');
    for (const issue of issues) {
      console.log(`  ${RED}●${RESET} [${issue.type}] ${issue.file || ''}${issue.line ? ':' + issue.line : ''}`);
      console.log(`    ${issue.message}`);
      if (issue.suggestion) {
        console.log(`    ${BLUE}→ ${issue.suggestion}${RESET}`);
      }
      if (issue.code) {
        console.log(`    ${YELLOW}Code: ${issue.code}${RESET}`);
      }
      console.log('');
    }
  }
  
  if (warnings.length > 0) {
    log(YELLOW, `\n⚠️  WARNINGS (${warnings.length})`, '- Consider fixing these\n');
    for (const warning of warnings) {
      console.log(`  ${YELLOW}●${RESET} [${warning.type}] ${warning.file || ''}${warning.line ? ':' + warning.line : ''}`);
      console.log(`    ${warning.message}`);
      if (warning.suggestion) {
        console.log(`    ${BLUE}→ ${warning.suggestion}${RESET}`);
      }
      if (warning.code) {
        console.log(`    Code: ${warning.code}`);
      }
      console.log('');
    }
  }
}

if (info.length > 0) {
  log(BLUE, '\nℹ️  INFO', '\n');
  for (const item of info) {
    console.log(`  ${BLUE}●${RESET} ${item.message}`);
  }
}

console.log('\n' + '═'.repeat(60));
console.log('\n📚 Quick fixes for common issues:');
console.log('');
console.log('  1. Add priority to LCP image:');
console.log('     <Image src="/hero.jpg" priority />');
console.log('');
console.log('  2. Lazy load third-party scripts:');
console.log('     <Script src="..." strategy="lazyOnload" />');
console.log('');
console.log('  3. Use next/font for fonts:');
console.log("     import { Inter } from 'next/font/google'");
console.log('');
console.log('  4. Enable modern formats in next.config.js:');
console.log("     images: { formats: ['image/avif', 'image/webp'] }");
console.log('');
console.log('═'.repeat(60) + '\n');

// Exit with error code if issues found
process.exit(issues.length > 0 ? 1 : 0);
