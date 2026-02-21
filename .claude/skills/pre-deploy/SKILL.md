---
description: Run the full pre-deployment verification checklist.
---

## Steps (run all sequentially, stop on critical failure)

### 1. Build Check
```bash
npm run build
```
If this fails, fix the errors before proceeding.

### 2. Lint Check
```bash
npm run lint
```
Fix any errors. Warnings are acceptable.

### 3. TypeScript Check
```bash
npx tsc --noEmit
```
Report any type errors.

### 4. Schema Validation
For each page that has JSON-LD schema:
- Verify the schema is valid JSON
- Check required fields are present
- Ensure no duplicate schema types on same page (especially FAQPage)
- Verify @id references are consistent

### 5. Sitemap Check
- Parse `app/sitemap.ts` output
- Verify no duplicate URLs
- Check all `/technologies/*` pages are listed
- Check all `/services/*` pages are listed

### 6. llms.txt Check
- Verify `public/llms.txt` lists all current pages
- Check for any 404 URLs (pages that were removed)

### 7. Content Standards
Spot-check 3 random pages for:
- No em dashes (—)
- Meta title doesn't contain "Procedure"
- og:description is 100+ characters
- H1 exists and is unique per page

## Output
Print a summary table:

| Check | Status | Notes |
|-------|--------|-------|
| Build | PASS/FAIL | |
| Lint | PASS/FAIL | X warnings |
| TypeScript | PASS/FAIL | |
| Schema | PASS/FAIL | |
| Sitemap | PASS/FAIL | |
| llms.txt | PASS/FAIL | |
| Content | PASS/FAIL | |

If all pass, say "Ready to deploy." If any fail, list the fixes needed.
