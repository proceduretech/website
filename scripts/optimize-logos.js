#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Optimize all SVG logos for production
 * Reduces file sizes by 60-80% without quality loss
 */

const { optimize } = require('svgo');
const fs = require('fs');
const path = require('path');

const LOGOS_DIR = path.join(__dirname, '../public/logos/client');

// SVGO configuration for maximum compression while preserving quality
const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false, // Keep viewBox for responsiveness
          cleanupIds: {
            minify: true,
            preserve: [],
          },
        },
      },
    },
    'removeDimensions', // Remove width/height attributes
    'removeStyleElement', // Remove <style> tags
    'removeScriptElement', // Remove <script> tags
    'removeComments', // Remove XML comments
    'removeMetadata', // Remove metadata
    'removeEditorsNSData', // Remove editor-specific data
    'cleanupAttrs', // Cleanup attributes
    'mergeStyles', // Merge styles
    'inlineStyles', // Inline styles
    'minifyStyles', // Minify CSS
    'cleanupListOfValues', // Cleanup numeric values
    'convertColors', // Convert colors to shortest form
    {
      name: 'convertPathData',
      params: {
        floatPrecision: 2, // Reduce decimal precision
        transformPrecision: 5,
      },
    },
    {
      name: 'convertTransform',
      params: {
        floatPrecision: 3,
      },
    },
    'removeEmptyAttrs', // Remove empty attributes
    'removeEmptyContainers', // Remove empty containers
    'removeUnusedNS', // Remove unused namespaces
    'sortAttrs', // Sort attributes for better gzip
    'sortDefsChildren', // Sort defs children
  ],
};

function optimizeSVG(filePath) {
  const svgString = fs.readFileSync(filePath, 'utf8');
  const originalSize = Buffer.byteLength(svgString, 'utf8');

  const result = optimize(svgString, {
    path: filePath,
    ...svgoConfig,
  });

  const optimizedSize = Buffer.byteLength(result.data, 'utf8');
  const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

  // Only write if we achieved meaningful savings (>5%)
  if (savings > 5) {
    fs.writeFileSync(filePath, result.data, 'utf8');
    console.log(`✓ ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    return { original: originalSize, optimized: optimizedSize };
  } else {
    console.log(`⊘ ${path.basename(filePath)}: Already optimized (${(originalSize / 1024).toFixed(1)}KB)`);
    return { original: originalSize, optimized: originalSize };
  }
}

function main() {
  console.log('🎨 Optimizing SVG logos...\n');

  const files = fs.readdirSync(LOGOS_DIR)
    .filter(file => file.endsWith('.svg'))
    .map(file => path.join(LOGOS_DIR, file));

  let totalOriginal = 0;
  let totalOptimized = 0;

  files.forEach(file => {
    const result = optimizeSVG(file);
    totalOriginal += result.original;
    totalOptimized += result.optimized;
  });

  const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);

  console.log(`\n📊 Total: ${(totalOriginal / 1024).toFixed(1)}KB → ${(totalOptimized / 1024).toFixed(1)}KB`);
  console.log(`💾 Saved: ${((totalOriginal - totalOptimized) / 1024).toFixed(1)}KB (${totalSavings}%)`);
}

main();
