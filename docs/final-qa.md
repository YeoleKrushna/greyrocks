# GreyRocks final QA checklist

## Source-level checks completed
- All requested page routes have source files or dynamic route generators.
- Reusable Astro components and centralized site/design configuration are in place.
- The public site uses one light visual system rather than alternating dark/light sections.
- The sticky navigation is a light glass surface and is visible on first paint.
- Mobile navigation is a compact popover rather than a full-screen block, with keyboard dismissal and body scroll lock.
- The hero uses an isometric cube based on the supplied visual reference with restrained construction geometry and low-amplitude motion.
- The old floating hero label and old faceted-rock animation are removed.
- The primary CTA is a light surface; Brass is reserved for small accents.
- Bricolage Grotesque + Newsreader are the current type pairing.
- `support@greyrocks.in` is the configured business contact email.
- Explicit replacement-bracket legal placeholders are removed from public pages.
- No fabricated client proof, metrics, awards, certifications or exact street addresses are present.
- Contact form submission remains configurable and does not claim success without a real endpoint.
- Blog, sitemap, robots, legal pages, favicon, OG image and manifest are included.

## Validation
Run:

```bash
npm install
npm run check
npm run validate
npm run build
```

`npm run validate` is designed to confirm required routes/assets, core palette tokens, reduced-motion/focus support and the absence of obvious fabricated social-proof patterns.

## Manual browser pass
Review the running site at:

- 320×844
- 375×812
- 430×932
- 768×1024
- 1024×900
- 1280×900
- 1440×900
- 1728×1000

At minimum inspect `/`, `/services`, one service detail page, `/work`, `/careers`, `/insights`, `/contact`, `/privacy`, `/terms`, `/cookies`, and `/404`.

Check:
- no horizontal overflow
- no clipped headings or graphics
- hero remains compositionally balanced
- cube remains coherent and does not spin or break apart
- navbar is visible immediately
- navbar remains light and glossy over light pages/sections
- mobile menu stays compact and usable
- CTA hierarchy remains clear
- reduced-motion mode preserves functionality
- keyboard focus remains visible

The restricted implementation environment did not have reliable outbound npm/Git access, so a production Astro build could not be truthfully claimed here. Perform the commands above in the networked development environment before deployment.
