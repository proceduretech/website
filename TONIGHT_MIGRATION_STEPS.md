# 🌙 Tonight's Migration - Quick Steps

**Time:** 15 minutes total
**Risk:** Low 🟢
**Downtime:** 0 minutes

---

## RIGHT NOW (Commit staging changes)

```bash
git add .
git commit -m "Pre-migration: Fix URL structure, prepare analytics, optimize SEO"
git push origin main
```

✅ This deploys to staging with new URLs (analytics still off)

---

## WHEN READY TO GO LIVE (Tonight)

### Step 1: Enable Analytics (2 min)

Open `app/layout.tsx`:

```diff
- {/*
-   TODO: UNCOMMENT DURING PRODUCTION MIGRATION
+ {/* Google Tag Manager - GTM-KD7CJ8RC */}
+ <Script id="gtm" strategy="afterInteractive"...>

  (keep all the script code)

- */}
```

**What to do:**
1. Delete line 155: `{/*`
2. Delete line 190: `*/}`
3. Save file

### Step 2: Set Environment Variables (1 min)

In Cloudflare Pages dashboard:

```
NOTION_API_KEY = your_notion_key
NOTION_BLOG_DATABASE_ID = your_database_id
```

### Step 3: Deploy (1 min)

```bash
git add app/layout.tsx
git commit -m "Enable analytics for production"
git push origin main
```

### Step 4: Wait for Build (5 min)

Watch Cloudflare Pages dashboard for successful build.

### Step 5: Verify (5 min)

**Test these URLs:**

```bash
# Should work (new URLs)
✓ https://procedure.tech/blogs
✓ https://procedure.tech/about-us
✓ https://procedure.tech/contact-us
✓ https://procedure.tech/work

# Should redirect
→ https://procedure.tech/policies/privacy-policy
→ https://procedure.tech/policies/terms-conditions
```

**Check analytics:**
1. Visit https://procedure.tech in incognito
2. Open GA4 Realtime: https://analytics.google.com/analytics/web/
3. Confirm you see the pageview

**Check SEO:**
```bash
curl -s https://procedure.tech/blogs | grep canonical
# Should show: <link rel="canonical" href="https://procedure.tech/blogs" />
```

---

## ✅ Done!

If all checks pass, you're live with:
- ✅ New URL structure (matches old site)
- ✅ Analytics tracking
- ✅ SEO optimized
- ✅ AI crawlers allowed

**Submit to Google:**
1. Go to Google Search Console
2. Submit sitemap: https://procedure.tech/sitemap.xml
3. Request indexing of key pages

---

## 🆘 If Something Breaks

**Quick rollback:**
```bash
git revert HEAD
git push origin main
```

Or use Cloudflare Pages dashboard → Rollback to previous deployment

---

## 📞 Quick Reference

**Analytics IDs:**
- GA4: G-2KW21KL401
- GTM: GTM-KD7CJ8RC

**Critical Files:**
- Analytics: `app/layout.tsx` (lines 155-190)
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`

**Docs:**
- Full guide: [DEPLOY_NOW_CHECKLIST.md](DEPLOY_NOW_CHECKLIST.md)
- Details: [MIGRATION_SUMMARY.md](MIGRATION_SUMMARY.md)

---

**Ready? Let's go! 🚀**
