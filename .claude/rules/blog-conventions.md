---
paths: content/blog/**
---

# Blog Content Conventions

## Image Structure

Blog images use a **parallel folder structure**:
- MDX content: `content/blog/[slug].mdx`
- Images: `public/content/blog/[slug]/`

**Convention:**
- Image folder name must match the MDX filename (slug)
- Cover image: `cover.jpg` (or `.png`, `.webp`) - auto-detected
- Inline images: Any filename, referenced with absolute paths

**Frontmatter:**
```yaml
featuredImage: /content/blog/my-article/cover.jpg
```

**Inline images in MDX:**
```markdown
![Architecture Diagram](/content/blog/my-article/architecture.png)
```

## Features
- Automatic blur placeholder generation via `plaiceholder`
- `next/image` optimization with AVIF/WebP conversion
- Responsive sizes and lazy loading for inline images

## Content Standards
- Engineers write the blogs - tone should reflect genuine technical experience
- Format: Problem > Solution > Implementation
- Technical depth is non-negotiable
- Include code examples where relevant
- Link to related technology/service pages (see `@docs/notion-interlinking-strategy.md`)
- Frontmatter must include: title, description, author, date, featured image, tags
