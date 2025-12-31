# Company Address & CEO Name Updates

**Date:** December 31, 2025
**Status:** ✅ Complete

---

## Changes Made

### 1. Company Addresses Updated

**Files Modified:**
- `app/layout.tsx` - Organization schema (structured data)
- `app/contact-us/page.tsx` - Contact page locations

**New Addresses:**

#### Primary Office (Mumbai, India)
```
406, Shrishti Square, LBS Marg, Bhandup West
Mumbai - 400078
India
```

#### Secondary Office (US)
```
Bay Area, San Francisco
California
United States
```

### 2. CEO Name Updated

**Changed from:** Braj Baheti
**Changed to:** Brajkishor Baheti

**Files Modified:**
- `app/about-us/page.tsx` - Leadership team section
- `app/layout.tsx` - Organization schema (founder & employee)

---

## Implementation Details

### Organization Schema (Schema.org)

Updated in `app/layout.tsx` to include both office locations:

```typescript
address: [
  {
    "@type": "PostalAddress",
    streetAddress: "406, Shrishti Square, LBS Marg, Bhandup West",
    addressLocality: "Mumbai",
    postalCode: "400078",
    addressCountry: "IN",
  },
  {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
]
```

**SEO Benefits:**
- Google can display both locations in search results
- Local SEO for both markets (India & US)
- Rich snippets with location information
- Better Google Business Profile integration

### Contact Page Locations

Simplified from 4 global locations to 2 primary offices:

**Before:**
- San Francisco, US
- London, UK
- Singapore, SG
- Sydney, AU

**After:**
- Mumbai, India (with full street address)
- San Francisco, US (Bay Area)

**Layout:**
- Changed from 4-column grid to 2-column centered grid
- Added full street address display for both locations
- Maintained timezone information

### Leadership Updates

CEO name now consistently shows as **Brajkishor Baheti** across:
- About page leadership section
- Organization schema (founder field)
- Organization schema (employee field)

---

## Verification

### Build Status
✅ Production build successful
✅ TypeScript compilation passed
✅ All 52 pages generated correctly

### Files to Verify After Deploy

1. **Organization Schema:**
   ```bash
   curl -s https://procedure.tech | grep -A 20 '"@type":"Organization"'
   ```
   Should show both addresses

2. **Contact Page:**
   ```
   https://procedure.tech/contact-us
   ```
   Should display both Mumbai and San Francisco offices with addresses

3. **About Page:**
   ```
   https://procedure.tech/about-us
   ```
   Should show "Brajkishor Baheti" as CEO

---

## SEO Impact

### Positive Effects

1. **Local SEO Enhancement:**
   - Dual presence in India & US markets
   - Complete address information for Google My Business
   - Better local search rankings in both regions

2. **Structured Data:**
   - Rich snippets with office locations
   - Knowledge panel updates
   - Google Maps integration potential

3. **Trust Signals:**
   - Full legal address shown
   - Multiple office locations demonstrate scale
   - Professional presentation

### Google Business Profile

**Next Steps (Optional):**
1. Claim/update Google Business Profile for Mumbai office
2. Claim/update Google Business Profile for San Francisco office
3. Ensure both profiles link to https://procedure.tech
4. Add office photos and details

---

## Related Pages Using Address Info

### Current Usage:
- ✅ `app/layout.tsx` - Organization schema
- ✅ `app/contact-us/page.tsx` - Contact locations

### Not Currently Using (but could):
- `app/about-us/page.tsx` - Could add office section
- `app/careers/page.tsx` - Could mention office locations
- Footer - Could add address in legal section

---

## Consistency Check

All instances of company information now show:

| Field | Value |
|-------|-------|
| **CEO Name** | Brajkishor Baheti |
| **Legal Name** | Procedure Technologies |
| **Brand Name** | Procedure |
| **Primary Office** | Mumbai, India |
| **Secondary Office** | San Francisco, California |
| **Founded** | 2017 |
| **Website** | https://procedure.tech |

---

## Testing Checklist

After deployment, verify:

- [ ] Contact page shows both offices
- [ ] Mumbai office shows full street address
- [ ] San Francisco shows "Bay Area, California"
- [ ] About page shows "Brajkishor Baheti" as CEO
- [ ] Google search shows updated location info (may take 1-2 weeks)
- [ ] Rich snippets display office information
- [ ] LinkedIn/social profiles match CEO name

---

_Last Updated: December 31, 2025_
_Status: ✅ Ready for Production_
