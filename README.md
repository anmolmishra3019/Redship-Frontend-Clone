# RedditRadar — Frontend SaaS Interface

A responsive **SaaS lead-generation interface** inspired by Reddit monitoring products. The project combines a marketing landing page with an interactive client-side simulator for discovering relevant Reddit conversations and drafting contextual replies.

> **Important:** Reddit crawling, relevance scoring, and AI reply generation are simulated. The demo does not crawl Reddit or require an external AI API.

## What I Built

- Responsive SaaS landing page
- Interactive lead-scanning workflow
- Product name + description input flow
- Simulated crawling/progress states
- Relevance scores from 0–100
- Post detail and reply-drafting experience
- Editable response drafts
- Copy-to-clipboard interaction
- Monthly/annual pricing toggle
- FAQ accordion
- Responsive desktop and mobile layouts
- Reusable React components and hooks-based state

## Tech Stack

- **React 19** — component architecture and UI state
- **Vite** — development and production tooling
- **Tailwind CSS v4** — responsive styling
- **Lucide React** — interface icons
- **ESLint** — linting and code quality

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

`App.jsx` composes the page from focused sections. The simulator is implemented as a state-driven workflow covering input, scanning, results, selection, and reply drafting.

## Simulator Flow

```text
Product details
      ↓
Simulated scan
      ↓
Progress states
      ↓
Relevant posts
      ↓
Post details
      ↓
Edit reply → Copy
```

The UI is structured so the simulated data layer can later be replaced with a real API/service without redesigning the product interface.

## Engineering Highlights

- **Component-driven design** — page sections are separated into reusable components.
- **State-driven interactions** — simulator stages and user selections are controlled through React state.
- **Responsive-first UI** — layouts adapt across desktop and mobile breakpoints.
- **Effect cleanup** — timed simulator work is cleaned up when components unmount.
- **Clear product UX** — loading, results, editing, pricing, and FAQ interactions are represented as distinct UI states.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/anmolmishra3019/Redship-Frontend-Clone.git
cd Redship-Frontend-Clone
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Future Improvements

- Connect the simulator to a real Reddit/API-backed data source
- Move mock data and scoring into dedicated service modules
- Add authentication and persistent projects
- Add automated tests
- Integrate a real AI response-generation service

## Author

**Anmol Mishra**  
B.Tech ECE | Frontend Development | React | JavaScript | Tailwind CSS
