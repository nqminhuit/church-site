# Hy Vọng Parish - Website

This is the official website of Hy Vọng Parish, built with Next.js 15 and React 19. The website provides information about the parish, mass schedules, announcements, activities, and community images.

## Purpose

- Introduce Hy Vọng Parish
- Announce liturgical calendars, events, and pastoral activities
- Share images and community news
- Contact and communication information

## Installation and Running

### Requirements
- Node.js 24+
- npm or yarn

### Installation Steps
1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in the browser to view the website.

## Project Structure

- **app/**: Next.js pages (app router)
  - `page.js`: Home page
  - `layout.js`: Common layout
  - Subdirectories for each page (e.g., `lien-he/page.js`)
- **components/**: Reusable components (e.g., `CalendarSection.js`)

## Adding and Updating Content

- **Update announcements**:
  1. use a markdown editor e.g., https://stackedit.io (online) and write the new announcement there
  2. review content, then copy it to a file temp: e.g., `/tmp/ann.md`
  3. encode the file into 1 single line of text with this command: `base64 -w0 /tmp/ann.md`
  4. go to github action 'Create Announcement' then trigger with inputs:
	  1. Content: the output of step #3
	  2. Slug: filename also will be the slug in url path
	  3. Summary: short texts to let people know about the content
	  4. Thumbnail: for the /thong-bao page

- **Galleries**:
Upload to `s3://web/church/hyvong/media/galleries/` then update in `s3://web/church/hyvong/photos.json`
 ``` bash
 aws s3 cp /path/to/photo.jpg s3://web/church/hyvong/media/galleries/

 aws s3 cp s3://web/church/hyvong/photos.json - | jq > /tmp/photos.json
 # edit /tmp/photos.json, then:
 aws s3 cp /tmp/photos.json s3://web/church/hyvong/
 ```

- **Image assets**:
Upload to `s3://web/church/hyvong/media/assets/`
 ``` bash
 aws s3 cp /path/to/asset.jpg s3://web/church/hyvong/media/assets/
 ```


- **Update Main banner**:
 ``` bash
 aws s3 cp /path/to/file.jpg s3://web/church/hyvong/media/main_banner.jpg
 ```

- **Gospel of the day**:
There will be another repository responsible for this content: https://github.com/nqminhuit/liturgical-calendar
  - The calendar must be committed to `resources/liturgical-calendar-<year>.json` of that repository
  - The `resources/lectionary.json` is one-time-work and will be reused every year.
  - `resources/vietnam-liturgical-calendar-<year>.json`: this file will override some Masses specific only in Vietnam.


## Deployment
Automatic deployment when pushing changes to the main branch


### Manual Deployment Steps
1. Build production:
 ```bash
 npm run build
 ```

2. Start server (dev):
 ```bash
 (cd out && python -m http.server 8000)
 ```

### Deploying to Test / Staging vs Production
When you publish a public test server (so external testers can verify changes) show a prominent test-banner to avoid confusion with production. This project uses a client-side banner that is shown when the build-time environment variable NEXT_PUBLIC_DEPLOY_ENV is set to `test` or `staging`, or when the hostname contains `test`/`staging`.

1) Set environment variable at build time
- For test deployment (recommended):
  - NEXT_PUBLIC_DEPLOY_ENV=test
- For production deployment (recommended):
  - NEXT_PUBLIC_DEPLOY_ENV=production

How to set this:
- Vercel / Netlify / other CI: add NEXT_PUBLIC_DEPLOY_ENV=test to the test site's environment variables.
- Local build for testing:
  - NEXT_PUBLIC_DEPLOY_ENV=test npm run build && npm run export

2) What the banner does
- The banner appears at the top of every page (global) and is dismissible for the browser session.
- It is implemented in components/TestServerBanner.jsx and injected in app/layout.js.
- The banner is visible if NEXT_PUBLIC_DEPLOY_ENV is not 'production' or if the site hostname contains 'test' or 'staging'.

3) Recommended test deploy checklist
- Build the site using NEXT_PUBLIC_DEPLOY_ENV=test so the banner appears for testers.
- Use a test-specific domain, e.g., test-your-site.example.org or staging-your-site.example.org. The banner will detect the hostname as well if you cannot set the env var.
- Use separate environment variables for credentials on the test server (do not reuse production keys). For example:
  - CONTACT_EMAIL=test+notify@example.org
  - SENDGRID_API_KEY=<test-sendgrid-key-or-empty>
  - SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS (test SMTP account if required)

4) Rollback / promotion
- When ready to promote to production, build with NEXT_PUBLIC_DEPLOY_ENV=production (or unset it) and deploy to the production host.
- Ensure production environment variables (SENDGRID_API_KEY, CONTACT_EMAIL) are set and correct.

5) Additional notes
- The banner is session-dismissible using sessionStorage so testers can dismiss it for the current browser session.
- If you prefer a non-dismissible banner (stronger visual cue), remove the dismiss logic in components/TestServerBanner.jsx.
- If you need a forced interstitial (e.g., 'I understand this is test data' modal) I can add a small consent modal that blocks access until acknowledged.


## Contributing

All contributions are welcome! Please create an issue or pull request.
