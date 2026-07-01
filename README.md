# Eleviq Technologies Website

React + Vite + Tailwind corporate site scaffold.

Quick start:

1. Install dependencies: npm install
2. Dev: npm run dev (http://localhost:5173)
3. Build: npm run build
4. Deploy to GitHub Pages: set `VITE_BASE` or update vite.config.js `base` to `'/repo-name/'`, then `npm run deploy` (uses gh-pages). Replace `repo-name` with your repository name.

Contact form:
- The site supports using a Formspree or similar endpoint by setting VITE_FORM_ENDPOINT during build (e.g. in GitHub Actions): `VITE_FORM_ENDPOINT=https://formspree.io/f/<id>`
- If VITE_FORM_ENDPOINT is not set, the contact form opens the user's mail client as a fallback.

SEO & Accessibility:
- Basic meta tags in index.html. For richer SEO, extend per-page meta using React Helmet or server-side rendering.

Customization:
- Update colors in tailwind.config.cjs, replace placeholder projects, and add case studies in src/data.

License: MIT
