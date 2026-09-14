# coldcase

**Cold Case — Terminal 04**, an investigation game built as a fake desktop OS.
The app lives in [`cold-case-game/`](cold-case-game/).

Live site: <https://totallyrat.github.io/coldcase/>

## Enabling GitHub Pages (one-time setup)

The deploy workflow is already committed at
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), but
GitHub will not run it until Pages is switched on for the repository.

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
   Do *not* pick "Deploy from a branch" — this project builds with Vite, so
   there is no checked-in `dist/` for a branch deploy to serve.
3. That's it. There is no branch or folder to select, and nothing to save
   beyond that dropdown.

## Deploying

Every push to `main` builds the app and publishes it. You can also run it
manually from **Actions → Deploy to GitHub Pages → Run workflow**.

Watch the run under the **Actions** tab. The first deploy takes a couple of
minutes; afterwards the site URL appears on the workflow run and under
**Settings → Pages**.

## How the workflow works

It runs in two jobs, which is the shape GitHub Pages expects:

- **build** — checks out the repo, installs Node 22 with an npm cache, runs
  `npm ci` and `npm run build` inside `cold-case-game/`, and uploads
  `cold-case-game/dist` as a Pages artifact.
- **deploy** — publishes that artifact to the `github-pages` environment.

Two details matter if you change it:

- **`BASE_PATH`.** Project sites are served from `/<repo>/`, not the domain
  root. The build step sets `BASE_PATH=/${{ github.event.repository.name }}/`
  and `vite.config.js` feeds it into Vite's `base`. Without it, the deployed
  page loads and then requests `/assets/…`, gets a 404 for each, and renders
  blank. Because it is derived from the repository name rather than hardcoded,
  renaming or forking the repo keeps working.
- **Permissions.** The `pages: write` and `id-token: write` permissions in the
  workflow are what let `deploy-pages` publish. Removing them fails the deploy.

## Troubleshooting

| Symptom | Cause |
| --- | --- |
| Blank page, 404s on `/assets/…` in the browser console | The build ran without `BASE_PATH`. |
| Workflow fails with "Pages is not enabled" or a 404 on the deploy step | Step 2 above was skipped, or Source is still set to a branch. |
| Workflow never triggers | The commit went to a branch other than `main`; merge it or use **Run workflow**. |
| Site serves an old build | Deploys are not instant — check the Actions run finished, then hard-reload. |
