# Jackson Kelley — Personal Website

A personal website built with vanilla HTML, CSS, and JavaScript. No frameworks.

## Stack
- HTML5, CSS3, vanilla JavaScript (ES modules)
- Deployed on Cloudflare Pages
- Contact form via Formspree
- Weather data via Open-Meteo API

## Running Locally
```bash
npx serve .
```
Then open http://localhost:3000

## Pages
- `index.html` — Home (About, Interests, Projects, Weather, Contact)
- `resume.html` — Résumé (inline PDF viewer)

## Architecture
The site uses a hybrid SPA/MPA approach. The main content lives in a single scrollable page where users move between sections without page loads, keeping navigation fast and simple. A separate `resume.html` route was added to satisfy the requirement of the résumé being reachable as a dedicated URL. This hybrid pattern keeps the simplicity of a SPA while still supporting real routes where needed.

## Multilingual Support
All user-facing text lives in `strings.js` as a structured object with English, Spanish, and German locales. No text is hardcoded in the HTML — elements use `data-string` attributes as keys that JavaScript uses to inject the correct text when the page loads or the language is switched. Adding a new language requires only duplicating a locale block and translating the values.

## Progressive Enhancement
The site is usable without JavaScript. All section content is present in the HTML as static fallback text. The contact form has a `mailto:` action that works without JS. The weather widget shows a fallback loading message if JS fails. JavaScript layers enhancements on top of a functional baseline rather than gating core content.

## Deployment
Deployed on Cloudflare Pages, connected directly to this GitHub repository. Every push to `main` triggers an automatic deployment. Cloudflare Pages was chosen for its fast global CDN, automatic HTTPS, and free tier for static sites.

## Contact Form
Form submissions are handled by Formspree, which delivers messages to the site owner's email without requiring any server-side code. The form retains a `mailto:` fallback so it remains submittable without JavaScript. Formspree also handles spam filtering and provides a submissions dashboard.

## Weather Widget
Fetches live weather data from the Open-Meteo API (`api.open-meteo.com`) for three locations — San Diego CA, Seattle WA, and Desolation Sound BC. Displays current temperature, feels-like temperature, weather condition, and wind speed. Supports a Fahrenheit/Celsius toggle. No API key required. All three locations are fetched in parallel using `Promise.all` for performance. Built as a vanilla JS module with loading and error states.

## Links
- Live site: https://jacksonkelley005.jacksonrkelley.workers.dev
- Repository: https://github.com/jkelley678/Web_dev_final