# Contributing to Procedure Website

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/website.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Running Locally

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run linter
npm run typecheck  # Run TypeScript checks
```

### Code Style

- Use TypeScript for all new code
- Follow the existing code patterns and naming conventions
- Use Tailwind CSS for styling (see design system in CLAUDE.md)
- Keep components small and focused

### Commit Messages

Use clear, descriptive commit messages:

```
feat: Add new component for X
fix: Resolve issue with Y
docs: Update README
refactor: Simplify Z logic
```

## Pull Request Process

1. Ensure your code passes all checks:
   ```bash
   npm run lint
   npm run typecheck
   npm run build
   ```

2. Update documentation if needed

3. Submit a PR with:
   - Clear title describing the change
   - Description of what and why
   - Screenshots for UI changes

4. Wait for review and address any feedback

## Project Structure

See [CLAUDE.md](./CLAUDE.md) for detailed architecture documentation.

## Questions?

Open an issue for questions or discussions.
