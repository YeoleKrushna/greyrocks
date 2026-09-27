# GreyRocks design system

## Research synthesis

### Product / audience

GreyRocks is positioned as a B2B technology services and engineering company: software engineering consultancy + AI/data/cloud engineering partner. Primary buyers are business and product leaders who need practical delivery help rather than a consumer SaaS interface.

### Direction selected

- **Structural style:** Minimalism & Swiss/editorial style — grid-based, spacious, high-contrast, restrained decoration.
- **Landing pattern:** Trust & Authority, blended with a strong hero and editorial storytelling. Use proof through engineering clarity and process, not fake logos or metrics.
- **Editorial layer:** sparse editorial grid / magazine rhythm for section introductions and insights.
- **Material layer:** restrained light glass for the sticky navigation and selected interface surfaces; the public site stays on one light visual system instead of alternating dark/light sections.
- **Signature element:** an isometric cube SVG based on the supplied visual reference, surrounded by sparse construction geometry, orbit rings, nodes and brass data lines. Motion is intentionally limited to slow orbit drift, a small cube breathe, and pointer-parallax on capable desktop pointers.

### Palette

| Token | Hex | Role |
|---|---|---|
| `--color-midnight` | `#102542` | Primary text, navigation, logo, structural lines |
| `--color-sapphire` | `#1E3A5F` | Visual accents, links, hero geometry |
| `--color-champagne` | `#D8C3A5` | Borders, subtle facets, decorative surfaces |
| `--color-ivory` | `#FAF8F5` | Primary background |
| `--color-brass` | `#C79C5A` | Small accent details, numbering, data-line detail |

Brass is deliberately treated as an accent rather than a dominant brand color.

### Typography

- **UI / body:** Bricolage Grotesque, selected for a distinctive contemporary engineering/editorial voice.
- **Editorial accent:** Newsreader, used sparingly for the highlighted hero phrase; Georgia is the offline fallback.
- Base body size is 16px with approximately 1.55 line-height.
- Headlines use fluid `clamp()` values so they reflow instead of clipping.

### Spacing / geometry

- Container: `1320px` max content width with centralized gutters from 32px desktop down to 16px on very small screens; the grid is capped rather than stretching with the viewport.
- Spacing rhythm: 4/8/12/16/24/32/48/64/96/128px.
- Corners: mostly 10–18px; the visual language is architectural, not pill-heavy.
- Borders: 1px, low-opacity champagne on dark, cool neutral on light.

### Motion

- Scroll reveal uses `IntersectionObserver`, `opacity` and `transform` only.
- Cards move 4–8px on hover, not large parallax.
- The hero visual uses slow, low-amplitude motion: orbit drift, cube breathing, and restrained connector/node changes. Reduced motion turns all loops off.
- Shared timing tokens: 140ms micro, 220ms standard, 520ms reveal.
- `prefers-reduced-motion: reduce` removes non-essential transforms and animated loops.

### Accessibility / interaction

- Skip link is always available.
- Semantic landmarks (`header`, `nav`, `main`, `footer`) are used.
- Visible `:focus-visible` states are present on controls.
- Icon-only buttons have accessible names.
- Form fields have labels, descriptions and an `aria-live` status region.
- Mobile navigation locks body scroll, closes on `Escape`, and restores focus to its trigger.
- Interactive targets are sized for touch and no interaction relies on hover alone.
- No color is used as the sole indicator.

## Anti-patterns deliberately rejected

AI-purple gradients, neon glow, floating 3D blobs, fake social proof, huge statistic counters, template-like card farms, excessive rounded cards, perpetual animation, cursor gimmicks and giant hero videos.

## Source references

- UI/UX Pro Max repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- UI/UX Pro Max search workflow: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md
- UI/UX Pro Max style catalog: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/src/ui-ux-pro-max/data/styles.csv
- UI/UX Pro Max quick reference: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/src/ui-ux-pro-max/templates/base/quick-reference.md
- Astro content collections: https://docs.astro.build/en/guides/content-collections/
