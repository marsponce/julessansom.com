# julessansom.com

Portfolio, gallery, and blog site for photographer and mixed media artist Jules Ferguson. Built with Next.js and TypeScript, hosted on Netlify, with content managed via Decap CMS.

## Tech Stack

- **[Next.js](https://nextjs.org/)** — React framework
- **[TypeScript](https://www.typescriptlang.org/)** — type safety
- **[Decap CMS](https://decapcms.org/)** — content management (coming soon)
- **[Netlify](https://www.netlify.com/)** — hosting and deployment

## Project Status

See the [project board](https://github.com/users/marsponce/projects/16) for active development tickets.

<details>
<summary><h2>Local Development</h2></summary>

### Prerequisites

- Node.js (v18+)
- npm

### Setup

```bash
git clone https://github.com/marsponce/tobytran.art.git
cd tobytran.art
npm install
```

### Commands

| Command             | Description                                       |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Start local dev server at `http://localhost:3000` |
| `npm run build`     | Production build                                  |
| `npm run start`     | Serve production build locally                    |
| `npm run lint`      | Run ESLint                                        |
| `npm run typecheck` | Run TypeScript type checking manually             |

### Project Structure

```
tobytran.art/
├── src/
│   ├── app/           # App router pages and layouts
│   ├── components/    # Reusable components
│   └── styles/        # Global CSS
├── public/            # Static assets
├── next.config.ts     # Next.js configuration
└── tsconfig.json      # TypeScript configuration
```

### Branch Strategy

| Branch               | Purpose                                   |
| -------------------- | ----------------------------------------- |
| `main`               | Production — auto-deploys to tobytran.art |
| `dev`                | Development — preview deploy on Netlify   |
| `{id}-ticket-{name}` | Feature branches — merge into `dev`       |

**Workflow:** feature branch → `dev` (test) → `main` (release)

### Deployment

Netlify automatically deploys:

- `main` → [tobytran.art](https://tobytran.art) (production)
- `dev` → preview URL (development)

No manual deployment steps required — push to the appropriate branch and Netlify handles the rest.

### Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commitlint enforces this on every commit via Husky.

| Prefix      | Use for                       |
| ----------- | ----------------------------- |
| `feat:`     | New features                  |
| `fix:`      | Bug fixes                     |
| `docs:`     | Documentation changes         |
| `chore:`    | Tooling, config, dependencies |
| `style:`    | Formatting, CSS changes       |
| `refactor:` | Code restructuring            |

### Dev Tooling

- **Prettier** — code formatting, runs automatically on staged files before each commit
- **ESLint** — linting via Next.js built-in config
- **commitlint** — enforces conventional commit messages
- **Husky** — manages git hooks
- **tsc** — TypeScript type checking, runs before each commit
</details>

---

<p align="center">Built by: Mars Ponce (<a href="mailto:mars@marsponce.ca">mars@marsponce.ca</a>)</p>
