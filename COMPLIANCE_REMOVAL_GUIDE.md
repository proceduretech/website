# SOC2 & GDPR Compliance References - Removal Guide

**Date:** December 31, 2025
**Task:** Remove all SOC2 and GDPR compliance references from codebase
**Status:** ⚠️ In Progress

---

## Files That Need Updates

### ✅ Already Fixed

1. **[app/about-us/page.tsx](app/about-us/page.tsx#L644)**
   - Removed SOC 2 Type II badge
   - Removed GDPR Compliant badge

2. **[app/contact-us/page.tsx](app/contact-us/page.tsx)**
   - Already removed UK, Singapore, Sydney offices
   - Now shows only Mumbai + San Francisco

---

## 🔴 Files Requiring Manual Updates

### High Priority - Marketing Pages

1. **[app/ai-safety/page.tsx](app/ai-safety/page.tsx)**
   - Line 1008: Remove "SOC 2 for SaaS"
   - Line 1165: Remove "SOC 2 Type II" badge

2. **[app/services/enterprise/layout.tsx](app/services/enterprise/layout.tsx)**
   - Line 6 & 13: Remove "SOC 2, HIPAA, GDPR compliant teams"
   - Replace with: "Enterprise-grade AI solutions with security built in. Production AI at enterprise scale."

### Content Files (MDX)

3. **[content/services/enterprise.mdx](content/services/enterprise.mdx)**
   - Line 16: Remove "SOC 2, HIPAA, GDPR, PCI-DSS"
   - Line 51-53: Remove compliance badges
   - Line 73: Update meta description

4. **[content/expertise/ai-security.mdx](content/expertise/ai-security.mdx)**
   - Line 63: Remove "SOC 2, HIPAA" from compliance-ready claim

5. **[content/expertise/ai-privacy.mdx](content/expertise/ai-privacy.mdx)**
   - Line 15: Remove "GDPR & HIPAA Compliance" title
   - Line 44: Remove GDPR data subject rights question
   - Line 55: Update description
   - Line 60: Remove compliance expertise claim

6. **[content/use-cases/document-ai.mdx](content/use-cases/document-ai.mdx)**
   - Line 87: Remove "SOC 2 and HIPAA compliance available"

### Industry Pages (MDX)

7. **[content/industries/financial-services.mdx](content/industries/financial-services.mdx)**
   - Line 3: Remove "SOC 2 compliant" from tagline
   - Line 12: Remove "SOC 2 compliant deployments" stat
   - Line 47-53: Remove compliance badges (SOC 2 Type II, GDPR)
   - Line 65: Remove SOC 2 audit claim
   - Line 79 & 86: Update descriptions

8. **[content/industries/healthcare.mdx](content/industries/healthcare.mdx)**
   - Check for HIPAA references (may need to keep some as it's healthcare-specific)

9. **[content/industries/saas.mdx](content/industries/saas.mdx)**
   - Line 47-49: Remove SOC 2 and GDPR badges

10. **[content/industries/education.mdx](content/industries/education.mdx)**
    - Line 53: Remove SOC 2 badge

### Data/Config Files

11. **[lib/industries-data.tsx](lib/industries-data.tsx)**
    - Line 367, 373, 379: Financial services SOC 2 references
    - Line 470, 473, 478: Remove compliance badges
    - Line 490: Remove SOC 2 audit claim
    - Line 761: Remove SOC 2 badge
    - Line 906-907: Remove SOC 2 and GDPR badges

12. **[lib/expertise-data.tsx](lib/expertise-data.tsx)**
    - Line 717: Remove "SOC 2, HIPAA" claim
    - Line 756: Update AI privacy description
    - Line 781: Remove "GDPR & HIPAA Compliance"
    - Line 814: Remove compliance expertise
    - Line 836: Remove GDPR question

---

## Recommended Replacements

### Instead of "SOC 2 Compliant"

Replace with:
- "Enterprise-grade security"
- "Production-ready security controls"
- "Audit-ready architecture"
- "Security-first development"

### Instead of "GDPR Compliant"

Replace with:
- "Privacy-first design"
- "Data protection built-in"
- "Privacy-preserving AI"
- "Secure data handling"

### Instead of Compliance Badges

Replace with:
- "Enterprise Security" badge
- "Production Ready" badge
- "Audit-Ready" badge
- Or remove badges entirely

---

## Quick Find & Replace Commands

```bash
# Find all SOC2 references
grep -rn "SOC" --include="*.tsx" --include="*.ts" --include="*.mdx" .

# Find all GDPR references
grep -rn "GDPR" --include="*.tsx" --include="*.ts" --include="*.mdx" .

# Find compliance badge components
grep -rn "ComplianceBadge" --include="*.tsx" --include="*.ts" .
```

---

## Compliance Badge Component

**[components/badges/ComplianceBadge.tsx](components/badges/ComplianceBadge.tsx)**
**[components/industries/ComplianceBadges.tsx](components/industries/ComplianceBadges.tsx)**

**Decision Needed:**
- **Option A:** Keep component, just don't pass SOC2/GDPR data
- **Option B:** Remove component entirely if no longer needed

---

## Healthcare Exception (HIPAA)

**Note:** HIPAA is healthcare-specific and may be legitimately claimed if:
1. You actually work with healthcare clients
2. You have HIPAA compliance processes
3. It's accurate for your business

**Recommendation:** Review HIPAA claims separately with legal/compliance team

---

## Testing After Changes

1. **Build Test:**
   ```bash
   npm run build
   # Check for TypeScript errors
   ```

2. **Search Test:**
   ```bash
   # Should return NO results:
   grep -r "SOC 2" --include="*.tsx" --include="*.mdx" app content
   grep -r "GDPR" --include="*.tsx" --include="*.mdx" app content
   ```

3. **Visual Test:**
   - Visit /about-us - No compliance badges
   - Visit /services/enterprise - No compliance claims
   - Visit industries pages - No compliance badges

---

## Example Updates

### Before (Financial Services):
```tsx
tagline: "Sub-100ms. SOC 2 compliant. Production-ready."
stats: [
  { value: "100%", label: "SOC 2 compliant deployments" }
]
compliance: [
  { name: "SOC 2 Type II", description: "Certified" },
  { name: "GDPR", description: "Compliant" }
]
```

### After:
```tsx
tagline: "Sub-100ms latency. Production-ready AI."
stats: [
  { value: "100%", label: "Production deployments" }
]
// Remove compliance array entirely
```

### Before (AI Privacy):
```mdx
- title: "GDPR & HIPAA Compliance"
  description: "Meet regulatory requirements"
```

### After:
```mdx
- title: "Privacy-First Architecture"
  description: "Data protection built into every system"
```

---

## Priority Order

1. **CRITICAL:** Marketing pages (about, ai-safety, enterprise service)
2. **HIGH:** Industry pages (financial-services, saas, education)
3. **MEDIUM:** Expertise pages (ai-security, ai-privacy)
4. **LOW:** Use case pages, data files

---

_Last Updated: December 31, 2025_
_Status: Removal in progress_
