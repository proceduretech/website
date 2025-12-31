# 🚀 Deploy Now - Quick Checklist

**Ready to Deploy:** YES ✅
**Est. Time:** 10-15 minutes
**Risk Level:** LOW

---

## Before You Deploy

### Step 1: Uncomment Analytics (2 min)

Open `app/layout.tsx` and uncomment the analytics code:

1. Find the comment block starting with `TODO: UNCOMMENT DURING PRODUCTION MIGRATION`
2. Remove the `{/*` at line 155
3. Remove the `*/}` at line 190
4. Save the file

**This enables:**
- Google Analytics (G-2KW21KL401)
- Google Tag Manager (GTM-KD7CJ8RC)

### Step 2: Set Environment Variables

Set these in your deployment platform (Cloudflare Pages):

```bash
NOTION_API_KEY=your_notion_api_key_here
NOTION_BLOG_DATABASE_ID=your_notion_database_id_here
```

> ⚠️ **CRITICAL:** Without these, blog posts won't show up!

---

## Deploy Steps

### 1. Commit & Push (2 min)

```bash
git add .
git commit -m "Migration ready: Fix URL structure, add analytics (commented), update SEO"
git push origin main
```

> 📝 **Note:** Analytics is commented out for now. Uncomment in `app/layout.tsx` before final migration.

### 2. Deploy to Production (5 min)

- Cloudflare Pages will auto-deploy from `main` branch
- Wait for build to complete
- Build should take ~3-5 minutes

### 3. Immediate Verification (3 min)

Test these URLs immediately after deploy:

```bash
# Homepage
https://procedure.tech/

# Blog (NEW URL - most critical)
https://procedure.tech/blogs

# About (NEW URL)
https://procedure.tech/about-us

# Contact (NEW URL)
https://procedure.tech/contact-us

# Case Studies (NEW URL)
https://procedure.tech/work

# Test a blog post (if Notion is connected)
https://procedure.tech/blogs/llm-security-gordon-ai-breakdown
```

### 4. Check Analytics (2 min)

1. Open Google Analytics: https://analytics.google.com/analytics/web/
2. Go to Realtime report
3. Visit https://procedure.tech/ in a new incognito window
4. Verify pageview shows up in GA4

### 5. Check Canonical Tags (1 min)

```bash
curl -s https://procedure.tech/blogs | grep canonical
# Should show: <link rel="canonical" href="https://procedure.tech/blogs" />
```

### 6. Check Sitemap (1 min)

```bash
# Visit and verify URLs look correct
https://procedure.tech/sitemap.xml

# Should show /blogs, /about-us, /contact-us, /work
# NOT /blog, /about, /contact, /case-studies
```

---

## ✅ Success Criteria

You're good if:

- [x] Homepage loads
- [x] `/blogs` page loads (not `/blog`)
- [x] `/about-us` page loads (not `/about`)
- [x] `/contact-us` page loads (not `/contact`)
- [x] `/work` page loads (not `/case-studies`)
- [x] GA4 shows pageview in realtime
- [x] Sitemap shows correct URLs
- [x] No console errors in browser

---

## ⚠️ Troubleshooting

### If Blog Posts Don't Show

**Problem:** Notion API not connected

**Fix:**
1. Go to Cloudflare Pages dashboard
2. Add environment variables:
   - `NOTION_API_KEY`
   - `NOTION_BLOG_DATABASE_ID`
3. Trigger a new deployment (or wait for next auto-deploy)

### If Analytics Doesn't Track

**Problem:** GA4 script blocked or misconfigured

**Check:**
1. Open browser DevTools → Network tab
2. Look for requests to `google-analytics.com/gtag/js`
3. Check console for errors
4. Verify ad blocker is disabled for testing

### If Old URLs Still Work

**Problem:** CDN/Browser cache

**Fix:**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear Cloudflare cache in dashboard
3. Wait 5-10 minutes for CDN propagation

---

## 📊 Post-Deploy Monitoring

### Day 1

- [ ] Check GA4 for traffic (should match previous days)
- [ ] Monitor GSC for crawl errors
- [ ] Test key user flows (contact form, blog reading)

### Week 1

- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing of key pages
- [ ] Monitor Core Web Vitals
- [ ] Check for any 404s in analytics

---

## 🆘 Emergency Rollback

If something goes critically wrong:

### Option 1: Revert Git (Fastest)
```bash
git revert HEAD
git push origin main
```
Cloudflare will auto-deploy the previous version in ~3 minutes.

### Option 2: Cloudflare Rollback
1. Go to Cloudflare Pages dashboard
2. Find previous successful deployment
3. Click "Rollback to this deployment"

---

## 📞 Need Help?

### Analytics Not Working?
- Check: GA4 Property ID is G-2KW21KL401
- Check: GTM Container ID is GTM-KD7CJ8RC
- Verify: Scripts are loading (Network tab in DevTools)

### SEO Issues?
- Check: Canonical tags with `curl -s <url> | grep canonical`
- Check: Sitemap at https://procedure.tech/sitemap.xml
- Check: Robots.txt at https://procedure.tech/robots.txt

### Build Failures?
- Check: All dependencies installed (`npm install`)
- Check: Environment variables set in Cloudflare
- Check: Build logs in Cloudflare Pages dashboard

---

## 🎉 You're Done!

Once all checks pass:

1. Celebrate! 🎊
2. Submit sitemap to Google Search Console
3. Monitor analytics for 24 hours
4. Check back in a week to verify everything is stable

**Questions?** Check [MIGRATION_FIXES_APPLIED.md](MIGRATION_FIXES_APPLIED.md) for detailed docs.

---

_Last Updated: December 31, 2025_
