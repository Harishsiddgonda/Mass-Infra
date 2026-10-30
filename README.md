# Mass Infra

Mass Infra is a responsive, frontend-only corporate website for showcasing the company's land development, construction, and real-estate partnership work. It is built with React and Vite and presents company information, project listings, partnership details, and contact options.

## Features

- Home, About, Projects, Upcoming Projects, Completed Projects, Partner With Us, Contact, Privacy Policy, and Terms of Use pages.
- Client-side navigation with React Router.
- Responsive layout and reusable navigation, footer, project-card, and enquiry-form components.
- Contact and partnership enquiry forms prepare an email in the visitor's default email application. They do not send or store information on a server.

## Project architecture

```text
Mass_Infra_Frontend/
├── index.html             # HTML entry point, page metadata, and font loading
├── public/
│   └── favicon.svg        # Static site icon
├── src/
│   ├── assets/            # Brand assets
│   ├── main.jsx           # React app, shared UI, page components, and route table
│   └── styles.css         # Global styles, responsive layout, and page styling
├── package.json           # Dependencies and npm scripts
├── package-lock.json      # Locked dependency versions
└── vite.config.js         # Vite and React plugin configuration
```

The browser loads `index.html`, which mounts the React application from `src/main.jsx`. `BrowserRouter` selects page components for each URL; shared layout elements and page-specific content are composed in that entry module. `src/styles.css` provides the site-wide visual system and responsive rules. Vite serves the app during development and bundles the static frontend for production. There is no backend, database, authentication, or server-side lead storage.

## Routes

| Page | Path |
| --- | --- |
| Home | `/` |
| About Us | `/about` |
| All Projects | `/projects` |
| Upcoming Projects | `/upcoming-projects` |
| Completed Projects | `/completed-projects` |
| Partner With Us | `/partner` |
| Contact Us | `/contact` |
| Privacy Policy | `/privacy` |
| Terms of Use | `/terms` |

## Requirements

- Node.js 20 or later (recommended)
- npm

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Production build

```sh
npm run build
npm run preview
```

The production bundle is generated in `dist/`. Configure the hosting provider to serve `index.html` as the SPA fallback so routes work when opened directly or refreshed.

## Before publishing

- Replace `info@massinfra.example` in `src/main.jsx` with Mass Infra's verified business email.
- Replace illustrative project names, descriptions, statuses, locations, and images with approved company information.
- Add verified company contact information and review the legal page templates.
