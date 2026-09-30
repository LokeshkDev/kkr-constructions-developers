---
name: construction-static-website-performance
description: Site-specific performance, Core Web Vitals, technical SEO, local SEO, accessibility, image optimization, and static frontend optimization skill for KKR Construction & Developers at https://www.kkrconstructiondevelopers.in/. Designed for a construction/developer website focused on civil engineering and Mivan construction in the Thiruvallur/Chennai market. Use when auditing, optimizing, rebuilding, or improving the website without breaking its content, branding, lead-generation flows, or visual design.
---

# KKR Construction & Developers — Static Website Performance Skill

A production-focused skill for optimizing the KKR Construction & Developers website as a fast, mobile-first, SEO-friendly construction website.

The live website identifies KKR Construction & Developers with **Civil Engineering & Mivan Construction** positioning in Thiruvallur. External business-directory results also associate the business with Thiruvallur and Mivan shuttering/construction services. Treat the website itself and client-provided business information as the authoritative source for business claims; never copy unverified third-party claims into website content.

## Primary Goal

Build and maintain a construction website that is:

- Fast on mobile networks
- Fast on desktop
- Strong on Core Web Vitals
- Lightweight in JavaScript
- Image-optimized
- Static/SSG-first where possible
- Search-engine crawlable
- Strong for local construction searches
- Accessible
- Lead-generation focused
- Stable across mobile/tablet/desktop
- Visually faithful to the approved design

The optimization priority is:

```text
Fast HTML
  ↓
Optimized Hero / Project Images
  ↓
Minimal CSS + JavaScript
  ↓
Stable Layout / Core Web Vitals
  ↓
Technical SEO
  ↓
Local Construction SEO
  ↓
Accessibility
  ↓
Lead Generation
  ↓
Optional Enhancements
```

---

# 1. NON-NEGOTIABLE RULES

## 1.1 Inspect Before Editing

Never modify code blindly.

Before making changes:

1. Identify the framework.
2. Identify the build system.
3. Identify whether the site is static, SSG, SSR, CSR, or hybrid.
4. Inspect package dependencies.
5. Inspect image assets.
6. Inspect fonts.
7. Inspect third-party scripts.
8. Inspect routing.
9. Inspect metadata.
10. Inspect deployment configuration.
11. Run a production build.
12. Establish a performance baseline.

## 1.2 Preserve the Existing Website

Do not change without an explicit requirement:

- Brand identity
- Logo
- Approved colors
- Typography direction
- Page structure
- Service information
- Project information
- Business contact details
- Existing URLs
- Lead forms
- Phone links
- WhatsApp links
- Analytics
- Tracking
- Approved images

Performance work must be non-destructive.

## 1.3 Do Not Invent Business Claims

Never invent:

- Number of completed projects
- Years of experience
- Awards
- Certifications
- Client names
- Project values
- Reviews
- Ratings
- Guarantees
- Locations
- Employees
- Technical capabilities
- Government approvals
- Construction results

Only use claims supported by the existing site or information explicitly supplied by the client.

---

# 2. WEBSITE-SPECIFIC SEO CONTEXT

The site is for:

**KKR Construction & Developers**

Known positioning from the live website:

- Civil Engineering
- Mivan Construction
- Construction/development services
- Thiruvallur market

External directory information currently associates the business with Thiruvallur and Mivan shuttering services, but such sources should not override the website's own verified business information.

The optimization should therefore support searches around:

- Construction services
- Civil engineering
- Mivan construction
- Mivan formwork/shuttering
- Building construction
- Construction contractors
- Construction services in Thiruvallur
- Relevant Chennai-region searches only where the business actually serves those areas

Do not keyword-stuff pages or create location pages without genuine service relevance.

---

# 3. PHASE 1 — ARCHITECTURE DISCOVERY

## 3.1 Framework

Identify whether the project uses:

- HTML/CSS/JavaScript
- React + Vite
- Next.js
- Astro
- Gatsby
- Vue/Nuxt
- Svelte
- Other static framework

If React/Vite is used, determine whether pages can be delivered as static assets.

If Next.js/Astro or another SSG framework is used, prefer static generation for brochure/content pages.

## 3.2 Dependency Audit

Inspect:

- React
- Router
- UI libraries
- CSS frameworks
- Animation libraries
- Carousel libraries
- Icon packages
- Form libraries
- Analytics packages
- Maps
- Chat widgets
- Social embeds

For every dependency ask:

> Is this required for the first page render?

If not, defer, lazy-load, replace with native functionality, or remove if unused.

## 3.3 Page Inventory

Identify actual pages.

Typical construction structure:

```text
/
├── About
├── Services
│   ├── Civil Engineering
│   └── Mivan Construction
├── Projects
├── Project Details
├── Why Choose Us
├── Contact
└── Legal Pages
```

Do not create pages merely because this structure is recommended.

---

# 4. PHASE 2 — PERFORMANCE BASELINE

Run the production build and test the deployed production website.

Record:

| Metric | Target |
|---|---:|
| Lighthouse Performance | 90+ |
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| FCP | < 1.8s |
| TTFB | < 800ms |
| TBT | < 200ms |

Targets are goals, not fabricated results.

## 4.1 Test Conditions

Test:

- Mobile
- Desktop
- Fast connection
- Typical mobile connection
- Cold load
- Repeat load

Where possible, compare:

- Before optimization
- After optimization

---

# 5. PHASE 3 — HERO / LCP OPTIMIZATION

For a construction website, the hero section is likely to contain the most visually important and potentially largest asset.

## Rules

1. Identify the actual LCP element.
2. Do not lazy-load the LCP image.
3. Use an appropriately sized image.
4. Prefer AVIF/WebP.
5. Use responsive image sources.
6. Use `fetchpriority="high"` where appropriate.
7. Preload only the actual critical image.
8. Define width/height or aspect ratio.
9. Avoid oversized desktop assets on mobile.
10. Avoid unnecessary hero video.

Preferred pattern:

```html
<img
  src="/images/hero-1280.webp"
  srcset="
    /images/hero-640.webp 640w,
    /images/hero-1280.webp 1280w,
    /images/hero-1920.webp 1920w
  "
  sizes="100vw"
  width="1920"
  height="900"
  fetchpriority="high"
  decoding="async"
  alt="KKR Construction & Developers construction project"
/>
```

Do not blindly use this exact markup if the actual image dimensions or layout differ.

---

# 6. CONSTRUCTION IMAGE OPTIMIZATION

Construction websites are image-heavy.

Potential image groups:

- Hero banners
- Building photographs
- Mivan construction images
- Civil engineering work
- Project images
- Site photographs
- Team images
- Gallery images
- Background images

## Required image workflow

For every important image:

```text
Original
 ↓
Determine actual display size
 ↓
Resize
 ↓
Compress
 ↓
Convert to AVIF/WebP
 ↓
Generate responsive variants
 ↓
Use srcset/sizes
 ↓
Set dimensions/aspect-ratio
 ↓
Lazy-load if below fold
```

Do not upload a 4000–6000px image when the website displays it at 1200px.

## Image Rules

Above fold:

```html
loading="eager"
fetchpriority="high"
```

Below fold:

```html
loading="lazy"
decoding="async"
```

All images:

- Must reserve layout space.
- Must have meaningful `alt` text when content images.
- Decorative images should use empty alt where appropriate.
- Do not put important textual content only inside images.

---

# 7. PROJECT GALLERY OPTIMIZATION

If project galleries exist:

- Do not load every full-resolution image immediately.
- Load thumbnails first.
- Lazy-load off-screen images.
- Use responsive image sizes.
- Use lightweight gallery interaction.
- Avoid large gallery libraries unless necessary.
- Avoid layout shifts.
- Avoid downloading hidden slides during initial render.

Recommended:

```text
Initial page
 ├── Project thumbnail
 ├── Project thumbnail
 └── Project thumbnail

User opens gallery
        ↓
Load larger image
```

---

# 8. STATIC-FIRST JAVASCRIPT STRATEGY

A construction company website generally does not need application-level JavaScript.

Prefer:

```text
Semantic HTML
+
Modern CSS
+
Small progressive-enhancement JavaScript
```

JavaScript should primarily handle:

- Mobile navigation
- FAQ interaction
- Gallery interaction
- Form validation
- Lightweight animation
- Scroll behavior
- Cookie/consent UI
- Analytics where required

Do not use JavaScript to render content that could be present in HTML.

---

# 9. REACT / NEXT.JS OPTIMIZATION

If the website is React-based:

- Keep informational sections static.
- Avoid unnecessary client state.
- Avoid global state management.
- Avoid unnecessary context providers.
- Avoid hydration for non-interactive sections.
- Split only genuinely heavy interactive components.
- Remove unused packages.
- Import icons individually.
- Avoid entire icon libraries in the main bundle.
- Keep animations CSS-first.

If Next.js is used:

- Prefer static generation for content pages.
- Minimize client components.
- Avoid unnecessary server/client boundaries.
- Avoid runtime API calls for static business content.
- Use metadata APIs appropriately.
- Use optimized image delivery without over-processing small assets.

---

# 10. CSS PERFORMANCE

Prefer:

- Modern CSS
- CSS Grid
- Flexbox
- CSS variables
- Media queries
- `aspect-ratio`
- `content-visibility` where appropriate
- CSS animations for simple effects

Avoid:

- Unused framework CSS
- Duplicate styles
- Excessive selectors
- Large animation libraries
- Render-blocking third-party stylesheets
- Unused icon fonts

Do not rewrite the entire stylesheet unless necessary.

---

# 11. FONT OPTIMIZATION

Construction websites should normally use a restrained typography system.

Rules:

- Use only required font families.
- Limit font weights.
- Prefer WOFF2.
- Self-host when practical.
- Use `font-display: swap`.
- Preload only fonts required for initial rendering.
- Avoid loading unnecessary font subsets.
- Avoid icon fonts where SVG icons are practical.

---

# 12. THIRD-PARTY SCRIPT OPTIMIZATION

Audit all external scripts:

- Google Analytics
- Google Tag Manager
- Meta Pixel
- WhatsApp
- Google Maps
- YouTube
- Instagram
- Chat widgets
- Review widgets
- Other marketing tools

Priority:

```text
Critical
 ↓
Required after page load
 ↓
Required after interaction
 ↓
Optional
```

Never allow a non-critical third-party widget to delay the first meaningful render.

---

# 13. GOOGLE MAPS OPTIMIZATION

Do not load an interactive Google Map during initial page rendering unless genuinely required.

Preferred strategy:

```text
Location information
        ↓
Map thumbnail / lightweight link
        ↓
User interaction
        ↓
Interactive map
```

This prevents unnecessary third-party JavaScript from affecting initial performance.

---

# 14. VIDEO OPTIMIZATION

If construction/project videos exist:

- Use a poster image.
- Do not automatically download large videos.
- Lazy-load video.
- Avoid autoplay with sound.
- Prefer click-to-play.
- Respect `prefers-reduced-motion`.
- Use compressed formats.
- Do not use a video background when an optimized image provides the same business value.

---

# 15. TECHNICAL SEO

Every important indexable page should have:

```html
<title>Unique relevant title</title>
<meta name="description" content="Unique relevant description">
<link rel="canonical" href="https://www.kkrconstructiondevelopers.in/...">
```

Audit:

- Title
- Meta description
- Canonical
- Robots
- Sitemap
- Open Graph
- Heading hierarchy
- Internal links
- Image alt
- Clean URLs
- 404 page
- HTTPS

Avoid:

- Duplicate titles
- Keyword stuffing
- Hidden SEO text
- Duplicate location pages
- Fake reviews
- Fake service claims

---

# 16. LOCAL SEO

Because the business is associated with Thiruvallur, local SEO should be factual and geographically precise.

Prioritize genuine service areas only.

Potential page/topic structure:

```text
Construction Services
Civil Engineering
Mivan Construction
Projects
Service Areas
Contact
```

If the business genuinely serves Chennai or nearby areas, create location content only when there is real business relevance.

Do not create dozens of thin city pages merely to target keywords.

---

# 17. STRUCTURED DATA

Use only valid, relevant schema.

Potential schema:

- Organization
- LocalBusiness
- WebSite
- BreadcrumbList
- Service
- ContactPage

For LocalBusiness information, verify:

- Business name
- Address
- Telephone
- Website
- Service area
- Opening hours where actually known

Never invent values.

Do not add fake:

- AggregateRating
- Review
- Award
- Project count
- Price
- Certification

---

# 18. CONSTRUCTION SERVICE SEO

Each actual service should have a clear semantic structure:

```text
H1
 ↓
Service introduction
 ↓
What the service includes
 ↓
Process / methodology
 ↓
Project evidence
 ↓
Relevant benefits
 ↓
Service area
 ↓
CTA
```

Use natural language.

Do not repeat:

> best construction company in Thiruvallur

multiple times unnaturally.

---

# 19. INTERNAL LINKING

Build a logical structure:

```text
Home
 ├── About
 ├── Services
 │    ├── Civil Engineering
 │    └── Mivan Construction
 ├── Projects
 ├── Service Areas
 └── Contact
```

Use descriptive anchors.

Examples:

```text
Explore our Mivan construction services
View completed construction projects
Contact KKR Construction & Developers
```

Avoid generic anchors where a descriptive anchor is more useful.

---

# 20. LEAD GENERATION PERFORMANCE

Construction websites are primarily lead-generation websites.

Protect and optimize:

- Call CTA
- WhatsApp CTA
- Enquiry CTA
- Contact form
- Quote request
- Email link

Use native links where possible:

```html
<a href="tel:+91XXXXXXXXXX">Call Now</a>
<a href="https://wa.me/...">WhatsApp</a>
<a href="mailto:...">Email Us</a>
```

Do not introduce JavaScript unnecessarily for simple links.

## Form requirements

Check:

- Labels
- Required fields
- Validation
- Error messages
- Success state
- Keyboard access
- Mobile usability
- Spam protection
- Analytics events where already configured

Never break an existing submission endpoint.

---

# 21. ACCESSIBILITY

Target WCAG 2.1 AA principles.

Check:

- Semantic HTML
- H1 → H2 → H3 hierarchy
- Keyboard navigation
- Visible focus
- Mobile menu keyboard behavior
- Accessible buttons
- Accessible links
- Form labels
- Alt text
- Contrast
- Reduced motion
- Touch target sizing

Minimum contrast goals:

- Normal text: 4.5:1
- Large text: 3:1

Do not use ARIA when native semantic HTML already provides the required behavior.

---

# 22. MOBILE-FIRST TESTING

Minimum viewports:

```text
320px
375px
390px
768px
1024px
1440px
```

Check:

- Header
- Navigation
- Hero
- CTA
- Typography
- Images
- Project galleries
- Forms
- WhatsApp/call buttons
- Footer
- Horizontal overflow
- Sticky elements
- CLS

The website should not require horizontal scrolling.

---

# 23. CACHE, COMPRESSION & HOSTING

For static assets:

- Enable Brotli where available.
- Use Gzip fallback.
- Cache hashed assets aggressively.
- Use CDN delivery where available.
- Avoid cache-busting unversioned static assets.
- Compress text responses.
- Minify CSS/JS.
- Optimize HTML where appropriate.

Recommended concept:

```text
HTML
Short/appropriate cache

Hashed JS/CSS
Long immutable cache

Images
Long cache + CDN

Fonts
Long cache
```

Do not apply caching rules blindly to dynamic/API endpoints.

---

# 24. PERFORMANCE PRIORITY MATRIX

Always begin with:

| Priority | Focus |
|---|---|
| P0 | Hero/LCP |
| P0 | Image payload |
| P0 | Render-blocking resources |
| P0 | CLS |
| P1 | JavaScript bundle |
| P1 | Fonts |
| P1 | Third-party scripts |
| P1 | Project galleries |
| P1 | TTFB/CDN/cache |
| P1 | Technical SEO |
| P2 | Local SEO |
| P2 | Accessibility |
| P2 | Animation refinement |

Actual measurements override this default order.

---

# 25. DO NOT OVER-OPTIMIZE

Do not:

- Remove useful content merely for score.
- Replace real project imagery with placeholders.
- Remove important CTAs.
- Remove analytics without authorization.
- Break SEO metadata.
- Remove accessible labels.
- Convert all images to low quality.
- Add unnecessary preload tags.
- Add excessive lazy loading.
- Lazy-load the LCP element.
- Replace a working framework purely because another framework is theoretically faster.

Performance must improve the real user experience, not only the Lighthouse number.

---

# 26. VERIFICATION CHECKLIST

## Build

- [ ] Production build succeeds
- [ ] No build warnings that affect output
- [ ] No missing assets
- [ ] No broken imports
- [ ] No runtime console errors

## Performance

- [ ] LCP checked
- [ ] INP checked
- [ ] CLS checked
- [ ] FCP checked
- [ ] TTFB checked
- [ ] TBT checked
- [ ] Hero image optimized
- [ ] Below-fold images lazy-loaded
- [ ] Fonts optimized
- [ ] JS minimized
- [ ] Third-party scripts deferred
- [ ] Compression enabled
- [ ] Caching verified

## SEO

- [ ] Titles
- [ ] Meta descriptions
- [ ] Canonicals
- [ ] Robots
- [ ] Sitemap
- [ ] Open Graph
- [ ] Heading hierarchy
- [ ] Internal linking
- [ ] Structured data
- [ ] Local SEO accuracy

## Accessibility

- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Alt text
- [ ] Form labels
- [ ] Contrast
- [ ] Semantic HTML
- [ ] Mobile navigation
- [ ] Reduced motion

## Lead Generation

- [ ] Phone CTA
- [ ] WhatsApp CTA
- [ ] Email CTA
- [ ] Contact form
- [ ] Enquiry form
- [ ] Success/error handling
- [ ] Analytics events where applicable

## Responsive

- [ ] 320px
- [ ] 375px
- [ ] 390px
- [ ] 768px
- [ ] 1024px
- [ ] 1440px

---

# 27. BEFORE / AFTER REPORT

Always provide:

| Metric | Before | After | Target | Status |
|---|---:|---:|---:|---|
| Lighthouse Performance | Actual | Actual | 90+ | Actual |
| LCP | Actual | Actual | < 2.5s | Actual |
| INP | Actual | Actual | < 200ms | Actual |
| CLS | Actual | Actual | < 0.1 | Actual |
| FCP | Actual | Actual | < 1.8s | Actual |
| TTFB | Actual | Actual | < 800ms | Actual |
| TBT | Actual | Actual | < 200ms | Actual |
| JS Bundle | Actual | Actual | Minimize | Actual |
| Page Weight | Actual | Actual | Minimize | Actual |
| Accessibility | Actual | Actual | 90+ | Actual |
| SEO | Actual | Actual | 90+ | Actual |

Never fill this table with example or estimated values.

---

# 28. FINAL DELIVERY REPORT

After optimization, report:

## Performance

- Main bottlenecks
- LCP changes
- Image savings
- JavaScript reduction
- CSS improvements
- Third-party script changes
- Cache/compression changes

## SEO

- Metadata
- Sitemap
- Robots
- Canonical
- Structured data
- Internal links
- Local SEO

## Accessibility

- Semantic HTML
- Keyboard navigation
- Forms
- Alt text
- Contrast

## Lead Generation

- Phone
- WhatsApp
- Email
- Forms
- CTA behavior

## Regression

- Desktop
- Mobile
- Navigation
- Forms
- Projects
- Gallery
- Production build

## Remaining Work

Separate:

- Completed
- Recommended next
- Not changed due to design/functionality constraints

Never claim a performance improvement that was not measured.

---

# 29. GOLDEN RULES FOR KKR CONSTRUCTION & DEVELOPERS

1. Treat this as a **construction lead-generation website**, not an e-commerce application.
2. Keep informational content static whenever possible.
3. Optimize the hero image first.
4. Optimize every large construction/project image.
5. Never ship unnecessarily large images to mobile.
6. Never lazy-load the LCP element.
7. Lazy-load below-the-fold project media.
8. Keep JavaScript minimal.
9. Avoid unnecessary React hydration.
10. Defer maps, chat, social embeds, video, and non-critical marketing scripts.
11. Keep typography lightweight.
12. Preserve existing branding and visual design.
13. Protect phone, WhatsApp, email, and enquiry functionality.
14. Use factual Thiruvallur/local SEO signals.
15. Do not fabricate construction claims or reviews.
16. Use accurate construction/civil/Mivan terminology.
17. Use structured data only when supported by real business information.
18. Keep project images accessible and optimized.
19. Test on mobile first.
20. Benchmark before and after optimization.
21. Optimize for real users, not only Lighthouse scores.
22. Never trade away important content merely to increase a performance score.
23. Prefer native browser capabilities over heavy dependencies.
24. Keep the production build clean and deployable.
25. Make every optimization measurable where possible.

---

# 30. OPERATIONAL COMMAND

When this skill is used against the KKR Construction & Developers project:

```text
1. Inspect repository
2. Identify framework/build system
3. Inspect all pages and assets
4. Run production build
5. Audit hero/LCP
6. Audit image payload
7. Audit JavaScript/CSS
8. Audit fonts
9. Audit third-party scripts
10. Audit Core Web Vitals
11. Audit technical SEO
12. Audit local SEO
13. Audit accessibility
14. Create P0/P1/P2 optimization plan
15. Implement only verified improvements
16. Run production build again
17. Test mobile + desktop
18. Verify forms and CTAs
19. Re-measure performance
20. Produce before/after report
```

The optimization is complete only when the production website remains visually/functionally correct and the measurable performance bottlenecks have been addressed.
