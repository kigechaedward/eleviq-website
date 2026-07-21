# Eleviq Project Memory

## Project Overview
- **Type**: Vite + React website
- **Repo**: kigechaedward/eleviq-website
- **URL**: https://kigechaedward.github.io/eleviq-website/
- **Framework**: Vite, React, Tailwind CSS
- **Node**: 18

## Key Files
- `vite.config.js` - Vite config with base '/eleviq-website/'
- `tailwind.config.cjs` - Tailwind config
- `postcss.config.cjs` - PostCSS config
- `.github/workflows/deploy-gh-pages.yml` - GitHub Actions deployment

## Project Structure
```
├── public/              # Static files (copied to dist/)
│   ├── favicon.svg
│   ├── logo.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── app-ads.txt      # Added for Google AdMob
├── src/                 # Source code
├── dist/                # Build output (deployed)
└── api/                 # API related files
```

## Changes Made (2026-07-22)
- Created `public/app-ads.txt` with Google AdMob entry
  - Format: IAB Tech Lab spec
  - Content: `google.com, pub-7568116810884123, DIRECT, f08c47fec0942fa0`
  - Deployed to: https://kigechaedward.github.io/eleviq-website/app-ads.txt

## Important Notes
- `public/` folder contents get copied to `dist/` during build
- GitHub Actions runs on push to `main` branch
- Uses `actions/upload-pages-artifact@v3` and `actions/deploy-pages@v4`
- Environment secrets: `VITE_FORM_ENDPOINT`

## Testing/Verification
- After pushing changes, check GitHub Actions tab
- Once workflow succeeds, verify at live URL
- AdMob may take time to validate app-ads.txt