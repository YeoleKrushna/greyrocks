# GreyRocks — static corporate website

Astro 7 static site for GreyRocks (`greyrocks.in`), a technology engineering company focused on software, AI, data, cloud and automation.

## Stack

- Astro 7, static output
- Astro MDX integration 8 for Markdown/MDX content
- TypeScript 6.x (kept compatible with `@astrojs/check` 0.9.x)
- CSS-first design system, no UI framework and no React runtime
- Small progressive-enhancement JavaScript layer for navigation, concise reveal motion, and configurable contact submission
- Bricolage Grotesque + Newsreader typography pairing

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

Production build:

```bash
npm run check
npm run validate
npm run build
npm run preview
```

## Configuration

Edit `src/config/site.ts` rather than changing company details across components.

- `companyName`
- `domain`
- `description`
- `headquarters`
- `officeLocations`
- `contactEmail`
- `socialLinks`
- `contactFormEndpoint`

GreyRocks currently uses `support@greyrocks.in` as its configured support/contact email.
Unknown legal entity name, legal address, effective date, and governing jurisdiction are intentionally omitted from the public legal pages until the contracting entity is confirmed; the public pages do not expose replacement brackets.

### Contact form

Set `PUBLIC_CONTACT_FORM_ENDPOINT` in the deployment environment to a real endpoint. When it is not configured, the form does **not** pretend to submit: it shows a clear configuration message.

## Content

Blog posts live in `src/content/blog/*.md`. The content schema supports Markdown and MDX.

Service definitions live in `src/data/services.ts`. Careers and representative work content are data-driven so verified records can be added later without rebuilding the page architecture.

## Routes

`/`
`/about`
`/services`
`/services/web-software`
`/services/ai-intelligent-systems`
`/services/data-science`
`/services/backend-data`
`/services/cloud-devops`
`/services/automation-integrations`
`/services/technology-consulting`
`/work`
`/careers`
`/insights`
`/insights/[slug]`
`/insights/category/[category]`
`/insights/tag/[tag]`
`/contact`
`/privacy`
`/terms`
`/cookies`
`/404`
`/sitemap.xml`
`/robots.txt`

## Design direction

The visual system is intentionally light across the entire site. Ivory is the page background, Midnight is used for type and structure, Sapphire provides depth in the hero geometry and links, Champagne supports borders and subtle surfaces, and Brass is reserved for small accents rather than filled CTAs.

The signature logo follows the supplied reference direction: a minimal isometric cube mark with a restrained GREYROCKS wordmark. The hero uses the supplied cube reference as its core geometry, surrounded by restrained construction lines/orbits and subtle motion rather than a perpetual 3D spin.

Typography uses Bricolage Grotesque for UI/body and Newsreader for sparse editorial emphasis. The pairing is intentionally distinctive and editorial while remaining practical for a B2B engineering site.

## Design research basis

The implementation follows the current UI/UX Pro Max guidance around product-specific design systems, responsive/mobile-first layouts, semantic color tokens, visible focus states, adequate touch targets, reduced motion, and transform/opacity-based motion.

Anthropic's current frontend-design guidance similarly emphasizes distinctive typography, a cohesive committed theme, deliberate motion, context-specific backgrounds, and avoidance of generic “AI slop” patterns. Anthropic's engineering write-up describes a generator/evaluator loop that uses live-page interaction and screenshots to critique design quality, originality, craft, and functionality. The project structure and review process are designed around those same principles rather than a single-pass template build.

See `docs/design-system.md` and `docs/logo-guidelines.md` for the synthesis and brand rules.

## Deployment

The output of `npm run build` is the static `dist/` directory. Deploy `dist/` to a static host that supports clean URLs, such as Cloudflare Pages, Netlify, Vercel, GitHub Pages, or an S3-compatible static host.

Set the custom domain to `greyrocks.in` at the host and update DNS according to that host's instructions.

## QA

`npm run validate` checks route sources, required assets, brand tokens and obvious prohibited/fabricated-content patterns.

Before launch, run `npm run check` and `npm run build`, then manually review the live site at 320/375/430/768/1024/1280/1440/1728 widths. Verify the initial navbar, mobile menu, hero composition, form behavior, reduced motion, and absence of horizontal overflow.

Legal pages are editable business templates. The source comments explicitly request legal counsel review before publication.
