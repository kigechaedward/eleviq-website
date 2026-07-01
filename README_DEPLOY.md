Deploy notes for GitHub Pages:

1. In your repository settings, enable GitHub Pages to serve from gh-pages branch (or use the repository's Pages settings).
2. Ensure "homepage" or vite base is configured if the site will be served from a subpath: set `VITE_BASE` env var during build or edit vite.config.js base to '/<repo-name>/'.
3. CI example (GitHub Actions): set up workflow to run `npm ci`, `npm run build` with VITE_BASE, and push dist to gh-pages via `npm run deploy`.
4. For contact form, set `VITE_FORM_ENDPOINT` as an environment variable at build time.
