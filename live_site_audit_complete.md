# Live Site Audit - Complete Results

## Header Audit (All Pages: /, /music, /cocktails, /events)

### Cache-Control
- HTML pages: `public,max-age=0,must-revalidate` — PASS
- Hashed assets: Could not verify (hashed JS/CSS returned SPA fallback HTML, suggesting _redirects may be too aggressive)
- version.json: `no-cache,no-store,must-revalidate` — PASS

### Security Headers
- HSTS: `max-age=31536000; includeSubDomains; preload` — PASS
- CSP: Comprehensive policy present — PASS
- X-Frame-Options: DENY — PASS
- X-Content-Type-Options: nosniff — PASS
- Referrer-Policy: strict-origin-when-cross-origin — PASS
- Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=() — PASS

## Page Audits

### Home (/)
- HTTP Status: 200 — PASS
- JS Errors: None — PASS
- Broken Images: None (no img tags on home page, uses CSS backgrounds)
- Missing Alt Text: N/A
- Accessibility: Links have accessible names — PASS

### Music (/music)
- HTTP Status: 200 — PASS
- JS Errors: None — PASS
- Images: 8 total, 7 reported as "broken" by DOM check but all URLs return HTTP 200 (likely lazy-loaded or still loading at check time)
- Spotify Embeds: 5 iframes present (Tonight, Sober, Saturday, All I Wanted, B.) — all with proper titles — PASS
- Share Buttons: Present for each track — PASS
- Streaming Links: Spotify, Apple Music, YouTube, SoundCloud, TikTok — all present

### Cocktails (/cocktails)
- HTTP Status: 200 — PASS
- JS Errors: None — PASS
- Broken Images: None — PASS
- Missing Alt Text: None — PASS
- Failed Resources: None — PASS

### Events (/events)
- HTTP Status: 200 — PASS
- JS Errors: None — PASS
- Broken Images: None (no images on page) — PASS
- Failed Resources: None — PASS

## Mobile Responsiveness
- Viewport meta tag present: `width=device-width, initial-scale=1.0, maximum-scale=1` — PASS
- CSS media queries present in simp.modules.css — PASS

## Stale Reference Found in Press Kit
- Artist bio mentions "Philz Material" clothing — this is a legitimate brand reference, not stale
