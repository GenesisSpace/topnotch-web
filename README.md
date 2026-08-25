# Topnotch Inc. — Corporate Website

A static, multi-page corporate website for **Topnotch Inc.** (general supply, procurement, technical and professional services). Built with plain HTML5, CSS3 and vanilla JavaScript — no build tools or frameworks required.

## 📁 Project Structure

```
topnotch-website/
├── index.html          Homepage
├── about.html           About Us
├── services.html        Services (5 divisions)
├── products.html        Products & Supply
├── projects.html        Projects / Our Work
├── catalog.html         Company Catalog download page
├── contact.html         Contact page with form + map
├── css/
│   └── style.css        All site styling (brand colors as CSS variables)
├── js/
│   └── main.js           Mobile menu, dropdowns, FAQ accordion, form demo, scroll reveal
├── assets/
│   └── images/
│       └── logo.png      Official Topnotch Inc. logo (unmodified)
└── README.md
```

## 🎨 Brand Colors

Colors were sampled directly from the provided logo file so the palette matches exactly:

| Token | Hex | Usage |
|---|---|---|
| `--brand-blue` | `#035DD7` | Primary brand color, links, buttons |
| `--brand-blue-dark` | `#024BB0` | Hover states, gradients |
| `--brand-green` | `#6FB223` | Accent color, CTAs, highlights |
| `--brand-green-dark` | `#598F1B` | Accent hover states |
| `--brand-navy` | `#0A1B4D` | Headings, dark backgrounds, footer |

All variables live at the top of `css/style.css` under `:root` — change them there to update the whole site.

## 🖥️ Run It Locally

This is a plain HTML/CSS/JS site — there's no framework or build step. Pick whichever option is easiest for you:

### Option A — npm (no VS Code extension needed)
Requires [Node.js](https://nodejs.org) installed.
```bash
cd topnotch-website
npm install
npm start
```
This installs `live-server` locally and opens the site at `http://127.0.0.1:5500` with auto-reload on save.

If you'd rather not auto-reload, `npm run serve` starts a plain static server at `http://localhost:8000` instead.

### Option B — VS Code Live Server extension
1. Open the `topnotch-website` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel.
3. Right-click `index.html` → **Open with Live Server**.

### Option C — Python (no Node.js needed)
```bash
cd topnotch-website
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## 🖼️ Placeholder Images

Section and project images currently load from Unsplash (`images.unsplash.com`) as realistic placeholders. Before going live:

1. Replace the `src` attributes in each HTML file with your own photography (site operations, staff, projects, products).
2. Keep images in `assets/images/` and update paths accordingly, e.g. `assets/images/project-1.jpg`.
3. Update the WhatsApp number (`wa.me/255700000000`), phone numbers, email and address placeholders across all pages with real company details.
4. Add your actual PDF catalog file and link it from the **Download Company Catalog** button in `catalog.html`.

## 🚀 Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `topnotch-website`).
2. From inside the `topnotch-website` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Topnotch Inc. website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/topnotch-website.git
   git push -u origin main
   ```
3. In the GitHub repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. Your site will be live at:
   `https://<your-username>.github.io/topnotch-website/`

### Custom Domain (optional)
Add a `CNAME` file in the root containing your domain (e.g. `www.topnotchinc.co.tz`) and point your DNS `A`/`CNAME` records to GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## ✅ Notes on the Build

- Fully responsive: desktop, tablet, and mobile breakpoints tested down to 360px width.
- Sticky header with dropdown **Services** menu (desktop hover, mobile accordion).
- Mobile hamburger menu with slide-in panel and overlay.
- Breadcrumbs on all inner pages.
- FAQ accordion, scroll-reveal animations, and a WhatsApp floating button (`js/main.js`).
- Contact form is front-end only (`js/main.js` shows a "sent" confirmation). Connect it to a real backend or a form service (e.g. Formspree, Getform, or your own API endpoint) before going live.
- Google Map embed uses a generic Dar es Salaam query string — replace with your exact address/coordinates in each page's `<iframe src="...">`.
- The logo file (`assets/images/logo.png`) is used exactly as uploaded — untouched, unmodified, un-recreated.

## 🛠️ Tech Stack

- HTML5
- CSS3 (custom properties / variables, Grid, Flexbox — no framework)
- Vanilla JavaScript (no dependencies)
- Google Fonts: Poppins (headings) + Inter (body)
