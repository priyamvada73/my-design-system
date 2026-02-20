# CLAUDE.md — AI Assistant Guide for my-design-system

This file provides context for AI assistants (Claude and others) working in this repository. Read it before making any changes.

---

## Project Overview

**my-design-system** is a React-based component library / design system built with Create React App, Tailwind CSS, and Storybook. Its purpose is to provide reusable, accessible UI components documented and previewed via Storybook and deployed to GitHub Pages.

- **Language:** JavaScript (JSX) — no TypeScript
- **Framework:** React 19 (functional components + hooks only)
- **Styling:** Tailwind CSS v3
- **Component explorer:** Storybook v10 (React-Webpack5 builder)
- **Visual regression:** Chromatic

---

## Repository Structure

```
my-design-system/
├── .github/workflows/
│   └── deploy-storybook.yml   # CI: build & deploy Storybook to GitHub Pages on push to main
├── .storybook/
│   ├── main.js                # Storybook addons, framework, story glob patterns
│   └── preview.js             # Global decorators, controls config, imports global CSS
├── public/                    # CRA static assets (index.html, favicon, manifest)
├── src/
│   ├── components/            # Design system components (the core of this repo)
│   │   ├── Checkbox/
│   │   │   └── Checkbox.jsx
│   │   ├── Toggle/
│   │   │   └── Toggle.jsx
│   │   ├── GenderToggle/
│   │   │   └── GenderToggle.jsx
│   │   └── GettingStartedCard/
│   │       └── GettingStartedCard.jsx
│   ├── stories/               # Storybook story files and example components
│   │   ├── Button.jsx / Button.stories.js
│   │   ├── Header.jsx / Header.stories.js
│   │   ├── Page.jsx  / Page.stories.js
│   │   ├── GettingStartedCard.stories.js
│   │   └── Configure.mdx      # Storybook configuration guide (MDX)
│   ├── App.js                 # CRA default app shell (not part of design system)
│   ├── index.js               # React 19 entry point (createRoot)
│   ├── index.css              # Tailwind directives (@tailwind base/components/utilities)
│   ├── setupTests.js          # Jest setup (imports @testing-library/jest-dom)
│   └── App.test.js            # Smoke test for App component
├── tailwind.config.js         # Tailwind content paths + theme config
├── postcss.config.js          # PostCSS with tailwindcss + autoprefixer
├── package.json               # Scripts, dependencies, ESLint config
└── my-design-system.code-workspace  # VS Code workspace file
```

---

## Development Workflows

### Install dependencies
```bash
npm install
```

### Run the CRA dev server (app shell only)
```bash
npm start          # http://localhost:3000
```

### Run Storybook (primary development environment)
```bash
npm run storybook  # http://localhost:6006
```
Storybook is the main way to develop and preview components. Prefer it over the CRA dev server when building or modifying components.

### Run tests
```bash
npm test           # Jest in watch mode
npm test -- --watchAll=false   # single run (useful in CI)
```

### Build for production
```bash
npm run build           # CRA production build → ./build
npm run build-storybook # Storybook static build → ./storybook-static
```

### Visual regression testing (Chromatic)
```bash
npm run chromatic  # Upload stories to Chromatic for visual diff review
```

---

## Key Conventions

### Component authoring

1. **All components live in `src/components/<ComponentName>/`** as `<ComponentName>.jsx`.
2. **Functional components only** — no class components.
3. **No TypeScript** — use PropTypes (from the `prop-types` package) when runtime prop validation is needed, as seen in `GenderToggle`.
4. **Default prop values** are set via destructured defaults in the function signature (e.g., `size = 'medium'`, `disabled = false`).
5. **Styling is Tailwind-only** — do not add CSS modules or plain CSS files for components. Use Tailwind utility classes directly in JSX.
6. **Size variants** follow the `small | medium | large` pattern with a `sizeStyles` lookup object inside the component.
7. **Accessibility:** Use `sr-only` for visually-hidden inputs, `focus-within:ring-*` for keyboard focus indicators, and semantic HTML (e.g., `<label>` wrapping inputs).
8. **Transitions** use `transition-all duration-200` (Tailwind) for smooth interactive states.

### Color palette in use (Tailwind tokens)
| Purpose | Token |
|---|---|
| Primary / selected | `emerald-500`, `emerald-600` |
| Disabled / muted text | `gray-400` |
| Default border | `gray-300`, `gray-400` (hover) |
| Background | `white` |
| GenderToggle accent | `cyan-200`, `cyan-300`, `cyan-900` |

Stick to these tokens when adding new components to maintain visual consistency.

### Story authoring

1. **Story files** are named `<ComponentName>.stories.js` (or `.jsx`) and live alongside the component or in `src/stories/`.
2. **Use CSF3 format** with a default export `meta` object:
   ```js
   export default {
     title: 'Components/MyComponent',
     component: MyComponent,
     tags: ['autodocs'],  // enables auto-generated docs page
   };
   ```
3. **Named exports** are individual stories:
   ```js
   export const Default = { args: { label: 'Click me' } };
   ```
4. **`tags: ['autodocs']`** must be present on components that should have an auto-generated documentation page.
5. Do not duplicate story files — one `.stories.js` per component.

### Testing

- Tests live next to the component or in `src/` for app-level tests.
- Use `@testing-library/react` and `@testing-library/user-event` for component tests.
- Avoid snapshot tests; prefer behavioural assertions (`getByRole`, `getByLabelText`, etc.).
- The `setupTests.js` file already imports `@testing-library/jest-dom`, so matchers like `toBeInTheDocument()` are available globally.

### Linting

ESLint is configured in `package.json` (`eslintConfig` key):
```json
{
  "extends": ["react-app", "react-app/jest", "plugin:storybook/recommended"]
}
```
- CRA's built-in ESLint runs automatically during `npm start` and `npm test`.
- The `plugin:storybook/recommended` ruleset enforces Storybook best practices.
- No Prettier config is present; use your editor's default formatting.

---

## CI/CD

### GitHub Actions — Storybook deployment (`.github/workflows/deploy-storybook.yml`)

| Property | Value |
|---|---|
| Trigger | Push to `main` branch |
| Node version | 18 |
| Steps | `npm ci` → `npm run build-storybook` → deploy to GitHub Pages |
| Deploy action | `peaceiris/actions-gh-pages@v3` |
| Publish directory | `./storybook-static` |

**Do not change the workflow trigger branch** unless you also update the branch protection rules.

---

## Adding a New Component

Follow this checklist when adding a component to the design system:

1. Create `src/components/<Name>/<Name>.jsx` with a functional component.
2. Export the component as a **default export**.
3. Accept `size` (`'small' | 'medium' | 'large'`), `disabled`, and any component-specific props.
4. Style exclusively with Tailwind CSS utility classes.
5. Ensure keyboard accessibility (`focus-within` rings, proper `aria-*` attributes where needed).
6. Create `src/stories/<Name>.stories.js` (or co-locate next to the component) with `tags: ['autodocs']`.
7. Add a basic test in `src/components/<Name>/<Name>.test.js` (or `<Name>.test.jsx`).
8. Run `npm run storybook` and verify the story renders correctly.
9. Run `npm test` and ensure all tests pass.

---

## Common Pitfalls

- **React 19 root API:** `index.js` uses `createRoot` from `react-dom/client`. Do not revert to the legacy `ReactDOM.render`.
- **Tailwind purging:** Only classes referenced in `src/**/*.{js,jsx,ts,tsx}` are included in the production build. Do not construct class names dynamically by string concatenation; use full class strings so PurgeCSS can detect them.
  ```js
  // Bad — Tailwind will purge 'w-' + size
  className={`w-${size}`}

  // Good — full class string in a lookup object
  const sizes = { small: 'w-5', medium: 'w-6' };
  className={sizes[size]}
  ```
- **PropTypes vs TypeScript:** This project uses PropTypes (not TypeScript). Add PropTypes imports from `'prop-types'` if you need runtime prop validation for a component.
- **No eject:** Do not run `npm run eject`. All build customisation should go through Storybook config or PostCSS/Tailwind config.
- **Storybook version:** This project uses Storybook **v10** (not v6/v7). Story format and addon APIs follow v10 conventions.

---

## Dependency Reference

| Package | Version | Purpose |
|---|---|---|
| `react` / `react-dom` | `^19.2.4` | UI framework |
| `react-scripts` | `5.0.1` | CRA build tooling |
| `tailwindcss` | `^3.4.15` | Utility-first CSS |
| `postcss` + `autoprefixer` | `^8.x` / `^10.x` | CSS processing |
| `storybook` | `^10.2.8` | Component explorer |
| `@storybook/react-webpack5` | `^10.2.8` | Storybook React + Webpack 5 builder |
| `@storybook/addon-docs` | `^10.2.8` | Auto-generated component docs |
| `@storybook/addon-a11y` | `^10.2.8` | Accessibility auditing in Storybook |
| `chromatic` | `^15.1.0` | Visual regression / review |
| `@testing-library/react` | `^16.3.2` | Component testing |
| `@testing-library/jest-dom` | `^6.9.1` | DOM matchers for Jest |
| `prop-types` | `^15.8.1` | Runtime prop validation |
| `webpack` | `^5.105.2` | Underlying bundler |
