# Cold Case — Terminal 04

A React + Vite desktop-shell game. You play an investigator working a reopened
case file from a locked-down constabulary terminal: read the case documents,
work the interview transcripts, search the network by nickname, and name a
suspect. Three arrests authorised, no more.

No game engine and no runtime dependencies beyond React — the windowing, dock,
and network browser are all plain components.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to <http://localhost:5173/>).

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Oxlint |

## The `BASE_PATH` variable

GitHub Pages serves project sites from `https://<user>.github.io/<repo>/`, not
from the domain root, so the build needs to know that prefix — otherwise every
asset request 404s and the page comes up blank.

`vite.config.js` reads it from the `BASE_PATH` environment variable and falls
back to `/`, so local dev and preview are unaffected. The deploy workflow sets
it from the repository name automatically. To reproduce a Pages build locally:

```bash
BASE_PATH=/coldcase/ npm run build
BASE_PATH=/coldcase/ npm run preview
```

## Deployment

Pushing to `main` builds and publishes this app to GitHub Pages via
`.github/workflows/deploy-pages.yml`. See the repository root `README.md` for
the one-time setup.
