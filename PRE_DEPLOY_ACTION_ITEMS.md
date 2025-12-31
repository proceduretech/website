# 🚨 Pre-Deploy Action Items - MUST FIX

**Date:** December 31, 2025
**Priority:** CRITICAL - Must complete before production deploy
**Estimated Time:** 2-3 hours

---

## ✅ Already Completed

1. **URL Structure** - Fixed to match live site ✅
   - `/blogs` (not /blog)
   - `/about-us` (not /about)
   - `/contact-us` (not /contact)
   - `/work` (not /case-studies)

2. **Company Information** - Updated ✅
   - CEO name: Brajkishor Baheti (verified consistent)
   - Offices: Mumbai + San Francisco Bay Area only
   - Removed: UK, Singapore, Sydney references

3. **About Page** - Leadership cards centered ✅
   - Changed from 4-column to 2-column centered grid
   - Max-width constraint for better centering

4. **Initial Compliance Cleanup** - Partial ✅
   - Removed SOC2/GDPR badges from about-us page

---

## 🚨 CRITICAL - Must Fix Before Deploy

### 1. Missing Team Photos (BLOCKER)

**Status:** ❌ **BLOCKS PRODUCTION DEPLOY**

**Problem:**
```
❌ /public/team/ulhas.jpg - CTO photo MISSING
❌ /public/team/braj.jpg - CEO photo MISSING
```

**Impact:** About page will show broken image placeholders

**Fix Options:**

**Option A: Add actual photos (Recommended)**
```bash
# Add these files to public/team/
- ulhas.jpg (Ulhas Mandrawadkar photo)
- braj.jpg (Brajkishor Baheti photo)
# Recommended size: 400x400px, JPG, quality 85
```

**Option B: Already implemented fallback**
The code already shows initials in a circle if photo is missing, but it's better to have real photos.

**Test after fix:**
```bash
npm run build
npm run start
# Visit http://localhost:3000/about-us
# Verify photos display correctly
```

---

### 2. SOC2 & GDPR References (URGENT)

**Status:** ⚠️ **PARTIALLY COMPLETE** - Many files still need updates

**Already fixed:**
- ✅ about-us/page.tsx - Removed compliance badges

**Still needs fixing (see [COMPLIANCE_REMOVAL_GUIDE.md](COMPLIANCE_REMOVAL_GUIDE.md)):**

#### High Priority Files:

1. **app/ai-safety/page.tsx**
   - Remove SOC 2 references (lines 1008, 1165)

2. **app/services/enterprise/layout.tsx**
   - Remove "SOC 2, HIPAA, GDPR" from description

3. **content/services/enterprise.mdx**
   - Remove compliance section entirely

4. **content/industries/financial-services.mdx**
   - Remove SOC 2 from tagline and stats
   - Remove compliance badges section

5. **content/industries/saas.mdx**
   - Remove SOC 2 and GDPR badges

6. **content/industries/education.mdx**
   - Remove SOC 2 badge

7. **content/expertise/ai-security.mdx**
   - Remove SOC 2, HIPAA claims

8. **content/expertise/ai-privacy.mdx**
   - Remove GDPR compliance sections

9. **lib/industries-data.tsx**
   - Remove all SOC 2/GDPR references (multiple lines)

10. **lib/expertise-data.tsx**
    - Remove all compliance claims

**Quick verification:**
```bash
# Should return ZERO results after fixes:
grep -r "SOC 2" --include="*.tsx" --include="*.mdx" app content lib
grep -r "GDPR" --include="*.tsx" --include="*.mdx" app content lib
```

**Replacement text suggestions:**
- "SOC 2 compliant" → "Enterprise-grade security"
- "GDPR compliant" → "Privacy-first architecture"
- Compliance badges → Remove or replace with "Production Ready"

---

### 3. Office Location Verification

**Status:** ✅ **ALREADY FIXED** (but verify)

**Expected:**
- ✅ Mumbai, India (with full address)
- ✅ San Francisco, Bay Area, California
- ❌ NO UK, Singapore, Sydney, Australia

**Files to verify:**
- [x] app/contact-us/page.tsx - Already fixed
- [x] app/layout.tsx - Organization schema updated
- [ ] Check any remaining references

```bash
# Should return ZERO results:
grep -ri "London\|Singapore\|Sydney\|UK\|Australia" --include="*.tsx" app components | grep -v "node_modules"
```

---

## ⚠️ IMPORTANT - Should Fix Before Deploy

### 4. Internal Link Audit

**Status:** ⚠️ **NEEDS VERIFICATION**

**Potential issues:**
Some components may still reference old URLs like `/about`, `/contact`, `/blog`

**Verification:**
```bash
# Find any remaining old URL references:
grep -r 'href="/about"' --include="*.tsx" app components
grep -r 'href="/contact"' --include="*.tsx" app components
grep -r 'href="/blog"' --include="*.tsx" app components
grep -r 'href="/case-studies"' --include="*.tsx" app components

# Fix any findings to use:
# /about-us, /contact-us, /blogs, /work
```

**Already known to be fixed:**
- ✅ Navigation menu
- ✅ Footer
- ✅ Blog post cards
- ✅ Sitemap

---

### 5. Analytics (Ready but commented)

**Status:** ✅ **READY** - Just needs uncommenting

**Before going live:**

1. Open `app/layout.tsx`
2. Find line ~155 with comment: `TODO: UNCOMMENT DURING PRODUCTION MIGRATION`
3. Delete `{/*` at line 155
4. Delete `*/}` at line 190
5. This enables:
   - GA4: G-2KW21KL401
   - GTM: GTM-KD7CJ8RC

**Test after enabling:**
Visit site in incognito, check GA4 Realtime dashboard

---

## 📋 Pre-Deploy Checklist

### Must Complete (Blockers)

- [ ] **Add team photos** (ulhas.jpg, braj.jpg) OR verify fallback looks good
- [ ] **Remove all SOC2/GDPR references** from 10+ files (see list above)
- [ ] **Verify no old office locations** (London, Singapore, Sydney)
- [ ] **Fix any broken internal links** (verify with grep commands)

### Before Final Commit

- [ ] Run production build: `npm run build`
- [ ] Check build output for errors
- [ ] Test locally: `npm run start`
- [ ] Verify about-us page (team photos, no compliance badges, centered cards)
- [ ] Verify contact-us page (only 2 offices)
- [ ] Verify no console errors
- [ ] Check Network tab for 404s

### During Migration

- [ ] Uncomment analytics in app/layout.tsx
- [ ] Set Notion env vars in Cloudflare
- [ ] Commit and push
- [ ] Wait for build
- [ ] Immediate smoke tests

---

## 🧪 Testing Commands

### Build Test
```bash
npm run build 2>&1 | grep -i "error\|failed"
# Should see no errors
```

### Compliance Check
```bash
# Should return ZERO files:
grep -r "SOC" --include="*.tsx" --include="*.mdx" app content lib | wc -l
grep -r "GDPR" --include="*.tsx" --include="*.mdx" app content lib | wc -l
```

### Office Location Check
```bash
# Should return ZERO results:
grep -ri "London\|Singapore\|Sydney" --include="*.tsx" app
```

### Image Check
```bash
# Should return "✅ exists" for both:
test -f public/team/ulhas.jpg && echo "✅ ulhas.jpg exists" || echo "❌ MISSING"
test -f public/team/braj.jpg && echo "✅ braj.jpg exists" || echo "❌ MISSING"
```

### URL Structure Check
```bash
# Verify new URLs are used:
grep -r 'href="/blogs"' --include="*.tsx" app components | wc -l
grep -r 'href="/about-us"' --include="*.tsx" app components | wc -l
grep -r 'href="/work"' --include="*.tsx" app components | wc -l
```

---

## 📊 Progress Tracker

| Task | Status | Priority | Est. Time |
|------|--------|----------|-----------|
| URL Structure | ✅ Done | Critical | 30 min |
| CEO Name (Brajkishor) | ✅ Done | Critical | 5 min |
| Office Locations | ✅ Done | Critical | 15 min |
| Leadership Cards Centered | ✅ Done | Important | 5 min |
| About Page Compliance | ✅ Done | Critical | 5 min |
| **Team Photos** | ❌ **TODO** | **BLOCKER** | **30 min** |
| **Compliance Removal** | ⚠️ **Partial** | **Critical** | **60-90 min** |
| Internal Links | ⚠️ Verify | Important | 15 min |
| Analytics Uncomment | ⚠️ Ready | Critical | 2 min |

**Estimated Time Remaining:** 2-3 hours

---

## 🎯 Recommended Order

1. **Add team photos** (30 min) - Highest priority blocker
2. **Remove SOC2/GDPR** (90 min) - Critical for legal/compliance
3. **Verify internal links** (15 min) - Prevent 404s
4. **Run full build test** (10 min) - Catch any issues
5. **Uncomment analytics** (2 min) - Just before deploy
6. **Deploy** (15 min) - Push and verify

**Total:** ~2.5 hours before ready to deploy

---

## 💡 Quick Wins

If short on time, **minimum viable deploy:**

1. **MUST FIX:**
   - Add team photos (or verify fallback looks acceptable)
   - Remove compliance from about-us page ✅ (already done)
   - Uncomment analytics before deploy

2. **CAN FIX POST-DEPLOY:**
   - Remaining SOC2/GDPR in content files (update via CMS/git later)
   - Internal link cleanup (gradual fix)

---

## 📞 Questions to Answer

1. **Team Photos:**
   - Do you have photos of Ulhas and Brajkishor?
   - If not, should we use the initials fallback? (already coded)

2. **Compliance:**
   - Confirm you want ALL SOC2/GDPR removed?
   - Or keep for specific pages (e.g., healthcare)?

3. **Timeline:**
   - How soon do you need to deploy?
   - Can we do partial deploy and fix remaining items after?

---

_Last Updated: December 31, 2025_
_Status: 60% Complete - 2-3 hours remaining_
