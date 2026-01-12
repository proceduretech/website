# Procedure Website

A premium enterprise website built with Next.js 16, showcasing modern web development practices for AI engineering services.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** Inter (body) + Outfit (headings)
- **Content:** MDX with Notion integration
- **Testing:** Playwright (E2E), Lighthouse CI

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/proceduretech/website.git
cd website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys (optional - for Notion blog integration)

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run lighthouse` | Run Lighthouse CI audits |

## Project Structure

```
app/                    # App Router pages and layouts
components/
  navigation/           # Navigation system with mega menus
  sections/             # Homepage sections (Hero, Services, etc.)
  ui/                   # Reusable UI components
content/                # MDX blog posts and service pages
lib/                    # Utilities and configurations
public/                 # Static assets
docs/                   # Project documentation
tests/                  # E2E tests
```

See [CLAUDE.md](./CLAUDE.md) for detailed architecture documentation.

## Design System

- **Theme:** Dark theme with premium enterprise aesthetic
- **Colors:** Dark navy base (#0F172A), Teal accent (#14B8A6)
- **Typography:** Inter for body, Outfit for headings
- **Components:** Glassmorphic cards, floating label inputs, scroll animations

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NOTION_TOKEN` | Notion API token for blog integration | Optional |
| `GOOGLE_API_KEY` | Google API key | Optional |

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](./CONTRIBUTING.md) before submitting a PR.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

Built by [Procedure](https://procedure.tech) - AI Engineering Services
