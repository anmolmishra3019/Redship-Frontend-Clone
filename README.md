# RedditRadar — SaaS Lead Generation & Reddit Monitoring UI

A high-fidelity SaaS product interface for discovering high-intent customer conversations on Reddit. The project combines a polished marketing landing page with an interactive **Reddit lead-scanning simulator** that demonstrates how a monitoring workflow could identify relevant posts and assist with contextual reply drafting.

> **Note:** The Reddit crawler, relevance scoring, and AI reply generation are intentionally simulated on the client side. No real Reddit data is crawled and no external AI API is required to run the demo.

## Highlights

- Responsive SaaS landing page with dark, modern UI
- Interactive Reddit lead-generation simulator
- Product name + description based search workflow
- Simulated crawling/progress states
- Relevance scoring visualization (0–100)
- Post detail view with editable response drafts
- Copy-to-clipboard interaction for generated replies
- Monthly / annual pricing toggle with discount calculation
- FAQ accordion and animated UI sections
- Responsive layouts for desktop and mobile
- Reusable React components and hooks-based state management

## Tech Stack

- **React 19** — component-based UI and state management
- **Vite** — development server and production build tooling
- **Tailwind CSS v4** — responsive styling and design system
- **Lucide React** — interface icons
- **ESLint** — code quality and linting

## Architecture

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── RedditSimulator.jsx
│   ├── Features.jsx
│   ├── Process.jsx
│   ├── FounderNote.jsx
│   ├── Testimonials.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   └── Footer.jsx
├── App.jsx
├── index.css
└── main.jsx
```

`App.jsx` is responsible for page composition, while individual sections are implemented as reusable components. The simulator manages its workflow locally, moving through input, scanning, results, and reply-drafting states.

## How the Simulator Works

1. Enter a product name and description.
2. Start the simulated Reddit scan.
3. The UI progresses through crawler-style loading states.
4. Simulated posts are displayed with relevance scores.
5. Select a post to inspect its details and suggested response.
6. Edit the response and copy it to the clipboard.

The simulator is structured so the mock data layer can later be replaced with a real Reddit/API-backed service without changing the overall product UI.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/anmolmishra3019/Redship-Frontend-Clone.git
cd Redship-Frontend-Clone
npm install
```

### Development

```bash
npm run dev
```

The Vite development server will provide a local URL, typically `http://localhost:5173`.

### Production Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Engineering Decisions

### Component-driven UI
The page is split into focused sections instead of keeping the entire interface inside a single component. This makes individual sections easier to reason about and modify.

### State-driven simulator
The Reddit scanner is implemented as a state-driven UI workflow. Loading, progress, results, selected posts, and reply drafts are updated through React state rather than hard-coded page transitions.

### Responsive-first styling
Tailwind utilities are used to keep layouts responsive across desktop and mobile breakpoints while maintaining consistent spacing, typography, and interaction states.

### Cleanup of asynchronous UI work
Timed simulator steps use effect cleanup so active intervals do not continue running after the component unmounts.

## Future Improvements

- Connect the simulator to a real Reddit/API-backed data source
- Move mock scenarios and scoring logic into dedicated data/service modules
- Add backend authentication and persistent user projects
- Add automated tests for scoring and workflow logic
- Add real AI-powered reply generation

## Author

**Anmol Mishra**

GitHub: [@anmolmishra3019](https://github.com/anmolmishra3019)
