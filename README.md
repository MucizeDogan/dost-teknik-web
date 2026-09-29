# Dost Teknik · Klima & Beyaz Eşya Servisi

Mobile-first, vanilla HTML/CSS/JavaScript website for Dost Teknik in Bodrum. The site is static and can be hosted on GitHub Pages; no backend, database, CMS, build step, or framework is required.

## Run locally

Open `index.html` in a browser, or run a simple static server from the repository root, for example `npx serve .`. All internal paths are relative, so project pages work below the GitHub Pages repository path.

## Technology and structure

- `index.html`: home page and LocalBusiness schema
- `css/style.css`: responsive styles, mobile menu, service layouts
- `js/config.js`: business contact details, service links, review data
- `js/main.js`: accessible menu, FAQ, and WhatsApp contact form
- `assets/images/`: supplied Dost Teknik logo and real shop/showroom photos, plus a compact SVG favicon using the brand mark colors
- `klima-*/index.html`, `beyaz-esya-servisi/index.html`: individual service pages
- `hizmet-bolgeleri/`: region directory and the substantive Turgutreis landing page
- `hakkimizda.html`, `iletisim.html`, `404.html`: supporting pages
- `robots.txt`, `sitemap.xml`: crawl and index hints
- `scripts/generate-pages.js`: regenerate the committed static service, region, about, and contact HTML

The user-supplied original JPEG/JPG files are retained as provided. They are already modest in size (about 237–455 KB); the website references them directly to avoid adding conversion dependencies.

## Update business details

Edit `js/config.js` for the name, telephone, WhatsApp number, address, hours, Instagram account, verified Maps business URL, coordinates, website, and service areas. Telephone links and Maps links are updated from this configuration when JavaScript loads; their HTML values remain useful fallbacks. Phone text shown in page content and the LocalBusiness JSON-LD should be updated alongside the config if the number changes.

`googleMapsUrl`, `latitude`, and `longitude` are empty/unset until verified details are available. The current directions links use a Google Maps address search, not a claimed Business Profile pin. Do not replace this with an unverified pin.

The current sitemap and `js/config.js` website setting use this repository’s standard GitHub Pages address: `https://mucizedogan.github.io/dost-teknik-web/`. If a custom domain is connected, update the website setting, `sitemap.xml`, `robots.txt`, and the absolute URL/logo fields in `index.html` structured data. Canonical and Open Graph URLs are relative to each page, so they continue working under the GitHub Pages subpath.

## Reviews and analytics

`window.TESTIMONIALS` in `js/config.js` is intentionally empty; no fabricated review/rating appears. Add only genuine customer feedback, with permission, and create the display markup only when real review data exists. No Google Analytics or Search Console IDs have been invented. Add measurement IDs only after the owner creates those properties and updates the site tags.

## Local SEO and content

The home page targets Turgutreis climate service intent, with a dedicated Turgutreis page, a Bodrum service-area directory, and individual service pages. The directory names the requested Peninsula regions; separate thin, near-duplicate location pages are intentionally not generated. Add another local landing page only when there is useful, genuinely distinct content for it.

Metadata, headings, and service copy are present in HTML source. The home page includes HVACBusiness JSON-LD with the supplied phone, address, daily hours, service area, and Instagram. No coordinates, reviews, ratings, verified Maps listing, or customer promises are fabricated.

The reference sites were used only as high-level UX inspiration: navigation, service discovery, contact actions, region browsing, and FAQs. Their text, layout, and assets were not copied.

## GitHub Pages deployment

1. Push this repository to GitHub (`main` branch).
2. Open the repository’s **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Wait for the Pages deployment to finish and open the URL shown in Settings → Pages.
6. If that URL differs from the current canonical/sitemap base, update the URLs listed above and push the change.

## Post-launch Local SEO checklist

1. Create the Google Business Profile using the real business name.
2. Add the verified storefront/service address and telephone number.
3. Add the live website URL, hours, correct primary category, and services.
4. Upload genuine shop, showroom, and team/service photos.
5. Ask real customers for honest reviews and reply to reviews.
6. Connect the domain/property in Google Search Console.
7. Submit `sitemap.xml` in Search Console.
8. Add the verified Google Maps business URL to `googleMapsUrl` in `js/config.js`.
9. Add coordinates only after verifying them from the real Business Profile/map pin.
10. Add Analytics only if the business chooses to use it, and configure its real measurement ID.

## Contact form

The contact form is a static HTML form that composes the entered details into a WhatsApp message. It does not store or transmit form data to this site. The WhatsApp app/web page opens on submit.
