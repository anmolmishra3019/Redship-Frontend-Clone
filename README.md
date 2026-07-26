# RedditRadar (SaaS Lead Generation & Reddit Monitoring Tool)

RedditRadar is a modern, high-fidelity landing page and interactive sandbox simulator built with **React**, **Vite**, and **Tailwind CSS v4**. It helps SaaS founders, marketers, and solopreneurs automate the discovery of high-intent customer conversations on Reddit and draft contextual, AI-assisted responses.

🚀 **Live Simulator Demo Included**: The project features a fully interactive client-side Reddit monitoring scanner that simulates AI keyword extraction, subreddit crawling, relevance scoring (0-100), and reply drafting.

---

## ✨ Features

- **Responsive Landing Page**: Sleek, dark-mode SaaS interface built using mobile-first design principles.
- **Interactive Reddit Lead Simulator**:
  - Input custom product names and descriptions.
  - Asynchronous simulated crawler sequence showing crawling steps.
  - Custom relevance-scoring algorithm (0-100) representation.
  - Interactive post detail panel with editable reply drafts and copy-to-clipboard functionality.
- **Infinite Scrolling Marquee**: Clean marquee effect displaying simulated Reddit search queries.
- **Interactive Pricing Tables**: Subscriptions with a dynamic billing period toggle (Monthly vs. Annual with 20% discount calculation).
- **Collapsible FAQ Accordion**: Interactive state-based FAQ cards explaining scoring logic, account protection, and sweep intervals.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React](https://react.dev/) (Functional components, hooks architecture)
- **Build Tool**: [Vite](https://vite.dev/) (Fast ESM-based hot module replacement)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration, native cascade layers, and CSS-based custom keyframe animations)
- **Icons**: [Lucide React](https://lucide.dev/) (Modern typography icons)

### Component Organization
```text
src/
├── components/
│   ├── Navbar.jsx          # Glassmorphic header with responsive mobile panel
│   ├── Hero.jsx            # Dynamic headline and query ticker
│   ├── RedditSimulator.jsx # Lead scanner and draft editor state machine
│   ├── Features.jsx        # Product capabilities grid
│   ├── Process.jsx         # 3-step setup timeline
│   ├── FounderNote.jsx     # Personal note/letter layout
│   ├── Testimonials.jsx    # Star-rated review cards
│   ├── Pricing.jsx         # Billing cycle toggle and pricing tiers
│   ├── FAQ.jsx             # Collapsible FAQ accordion cards
│   └── Footer.jsx          # Directory links and newsletter actions
├── App.jsx                 # Layout wireframe coordination
├── index.css               # Global configurations & animations
└── main.jsx                # Application root mounting
```

---

## 🚀 Local Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/reddit-radar.git
   cd reddit-radar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   *The server will start at `http://localhost:5173/`.*

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 💡 Key Technical Learnings & Patterns Used

### 1. State Management & Conditional Rendering
- Handled UI workflows (Idle form -> Loading progress -> Scanned results) using local component states (`useState`).
- Synced state properties from list selections to detail views to populate sidebar data dynamically.

### 2. Side Effect Cleanup (useEffect)
- Built a multi-step simulated crawler loading bar that increments at set intervals using `setInterval`.
- Implemented state cleanup by returning a function to clear the interval upon component unmount, preventing memory leaks.

### 3. Tailwind CSS v4 Configurations
- Configured layout themes (custom font families, color palettes, and scrollbars) directly inside `src/index.css` via the `@theme` directive, avoiding the need for a separate config file.
