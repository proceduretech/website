import { chromium } from 'playwright';

const PAGES = [
  '/',
  '/about',
  '/contact',
  '/services/enterprise',
  '/services/startups',
  '/case-studies',
  '/expertise/llm-applications',
  '/industries/healthcare',
];

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

async function checkPage(page, url) {
  const errors = [];
  const warnings = [];
  const fullUrl = `${BASE_URL}${url}`;

  try {
    // Use domcontentloaded instead of networkidle to avoid timeouts on pages with external embeds
    await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    // Wait a bit for any client-side rendering
    await page.waitForTimeout(1000);
  } catch (err) {
    errors.push(`[${url}] Failed to load page: ${err.message}`);
    return { errors, warnings };
  }

  // Check title
  const title = await page.title();
  if (!title) {
    errors.push(`[${url}] Missing title tag`);
  } else if (title.length < 30) {
    warnings.push(`[${url}] Title too short: "${title}" (${title.length} chars, recommend 30-60)`);
  } else if (title.length > 70) {
    warnings.push(`[${url}] Title too long: "${title}" (${title.length} chars, recommend 30-60)`);
  }

  // Check meta description
  const metaDesc = await page
    .$eval('meta[name="description"]', (el) => el.content)
    .catch(() => null);
  if (!metaDesc) {
    errors.push(`[${url}] Missing meta description`);
  } else if (metaDesc.length < 100) {
    warnings.push(
      `[${url}] Meta description short: ${metaDesc.length} chars (recommend 120-160)`
    );
  } else if (metaDesc.length > 170) {
    warnings.push(
      `[${url}] Meta description long: ${metaDesc.length} chars (recommend 120-160)`
    );
  }

  // Check H1
  const h1s = await page.$$('h1');
  if (h1s.length === 0) {
    errors.push(`[${url}] Missing H1 tag`);
  } else if (h1s.length > 1) {
    warnings.push(`[${url}] Multiple H1 tags found (${h1s.length})`);
  }

  // Check canonical
  const canonical = await page
    .$eval('link[rel="canonical"]', (el) => el.href)
    .catch(() => null);
  if (!canonical) {
    warnings.push(`[${url}] Missing canonical URL`);
  }

  // Check OpenGraph
  const ogTitle = await page
    .$eval('meta[property="og:title"]', (el) => el.content)
    .catch(() => null);
  const ogDesc = await page
    .$eval('meta[property="og:description"]', (el) => el.content)
    .catch(() => null);
  const ogImage = await page
    .$eval('meta[property="og:image"]', (el) => el.content)
    .catch(() => null);

  if (!ogTitle) warnings.push(`[${url}] Missing og:title`);
  if (!ogDesc) warnings.push(`[${url}] Missing og:description`);
  if (!ogImage) warnings.push(`[${url}] Missing og:image`);

  // Check Twitter card
  const twitterCard = await page
    .$eval('meta[name="twitter:card"]', (el) => el.content)
    .catch(() => null);
  if (!twitterCard) warnings.push(`[${url}] Missing twitter:card`);

  // Check images have alt
  const imagesWithoutAlt = await page.$$eval(
    'img:not([alt])',
    (imgs) => imgs.length
  );
  if (imagesWithoutAlt > 0) {
    warnings.push(`[${url}] ${imagesWithoutAlt} images without alt attribute`);
  }

  // Check for empty alt on meaningful images (not decorative)
  const emptyAltImages = await page.$$eval(
    'img[alt=""]',
    (imgs) => imgs.filter((img) => !img.getAttribute('role')?.includes('presentation')).length
  );
  if (emptyAltImages > 0) {
    warnings.push(`[${url}] ${emptyAltImages} images with empty alt (may be decorative)`);
  }

  return { errors, warnings };
}

async function main() {
  console.log('\n=== SEO Validation Report ===\n');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Pages to check: ${PAGES.length}\n`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  let allErrors = [];
  let allWarnings = [];

  for (const url of PAGES) {
    process.stdout.write(`Checking ${url}... `);
    const { errors, warnings } = await checkPage(page, url);
    allErrors = allErrors.concat(errors);
    allWarnings = allWarnings.concat(warnings);

    if (errors.length === 0 && warnings.length === 0) {
      console.log('OK');
    } else if (errors.length > 0) {
      console.log(`FAIL (${errors.length} errors, ${warnings.length} warnings)`);
    } else {
      console.log(`WARN (${warnings.length} warnings)`);
    }
  }

  await browser.close();

  // Print summary
  console.log('\n=== Summary ===\n');

  if (allErrors.length > 0) {
    console.log('ERRORS (blocking):');
    allErrors.forEach((err) => console.log(`  - ${err}`));
    console.log('');
  }

  if (allWarnings.length > 0) {
    console.log('WARNINGS (non-blocking):');
    allWarnings.forEach((warn) => console.log(`  - ${warn}`));
    console.log('');
  }

  console.log(`Total: ${allErrors.length} errors, ${allWarnings.length} warnings\n`);

  if (allErrors.length > 0) {
    console.log('SEO check FAILED\n');
    process.exit(1);
  } else {
    console.log('SEO check PASSED\n');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('SEO check failed with error:', err);
  process.exit(1);
});
