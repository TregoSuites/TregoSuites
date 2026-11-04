# Trego Suites — website

Static one-page lead-gen site for Trego Suites (Hiawatha, Iowa). No build step, no
framework, no dependencies. Netlify publishes the folder exactly as it sits here.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site — hero, models, pricing tiers, specs, process, service area, FAQ, quote form |
| `styles.css` | All styling. Colors live in the `:root` block at the top |
| `script.js` | Three small conveniences. The page works fine without it |
| `thanks.html` | Where the quote form lands after a successful submit |
| `404.html` | Netlify serves this automatically for bad URLs |
| `netlify.toml` | Headers, caching, and the `/quote` and `/pricing` short links |
| `assets/suite.svg` | The building illustration |
| `assets/favicon.svg` | Browser tab icon |
| `robots.txt`, `sitemap.xml` | For Google |

## Deploying

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Build command: leave empty. Publish directory: `.` (a single dot).
4. Deploy. Every push to `main` redeploys automatically.

## Form notifications

The quote form uses Netlify Forms. After the first deploy, go to
**Site configuration → Forms → Form notifications** and add an email notification
to `josh@tregocustomhomes.com`. Submissions are also stored in the Netlify dashboard.

The form is wired up with:
- `data-netlify="true"` and a hidden `form-name` input — Netlify needs both
- `netlify-honeypot="bot-field"` — a hidden field that traps spam bots

## Things to change

**Prices** — in `index.html`, search for `tier-price`. Three places, plus the
hero note (`Starting at $12,800`) and the options in the `tier` dropdown.

**Phone number** — search for `3194327122` (the `tel:` links) and `432-7122`
(the visible text).

**Lead email** — not in the code. It's a Netlify setting, see above.

**Colors** — the `:root` block at the top of `styles.css`. `--accent` is the rust
orange from the brochure.

**Domain** — once `tregosuites.com` is registered: Netlify → **Domain management →
Add a domain**, then point the registrar's nameservers at Netlify. Also update the
`canonical`, `og:url` and schema `url` values in `index.html`, plus `robots.txt`
and `sitemap.xml`, which currently assume `tregosuites.com`.

## Legal note

Every price and claim on the page comes from the November 2026 costing workbook and
the brochure. The footer disclaimer — non-habitable accessory structure, customer
provides pad, access and permits — needs to stay on the page. Don't let a future
edit market these as dwellings, ADUs or tiny homes.
