# S&D TVET Consult Limited — Web Platform

Modern web platform for **S&D TVET Consult Limited**, Ghana's premier TVET accreditation and institutional excellence consultancy.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v20 or higher (v24 tested)
- **NPM**: v10 or higher

### 2. Run Locally
```bash
cd sdtvet-web
npm run dev
# On Windows PowerShell if script execution is restricted:
# npm.cmd run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
cd sdtvet-web
npm run build
npm start
```

---

## 📁 Architecture & File Layout

```
sdtvet-web/
├── public/
│   └── pics/                 # Preserved high-resolution logos, gallery photos, and director images
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/      # Validated consultation inquiry backend handler
│   │   ├── globals.css       # Tailwind theme tokens, glassmorphism & hover utilities
│   │   ├── layout.tsx        # SEO metadata, OpenGraph, Canonical URLs, and typography
│   │   └── page.tsx          # Main assembled landing page
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky glass navigation with mobile drawer & top contact bar
│   │   ├── Hero.tsx          # Split hero with accreditation badge & trust counters
│   │   ├── TrustMetrics.tsx  # Impact statistics (22+ schools, 500+ trainers, 8+ years)
│   │   ├── AboutSection.tsx  # History, mission, vision, and leadership profiles
│   │   ├── ServicesSection.tsx # The 9 core TVET solutions with interactive cards
│   │   ├── AccreditationProcess.tsx # 5-stage roadmap to CTVET certification
│   │   ├── SchoolsDirectory.tsx # Filterable portfolio with live search & GTVP badges
│   │   ├── GallerySection.tsx # Category-filtered photo gallery with lightbox modal
│   │   ├── TestimonialsSection.tsx # Authentic client reviews with star ratings
│   │   ├── BlogSection.tsx   # TVET educational and governance insights
│   │   ├── ContactSection.tsx # Lead capture form with live feedback & office coordinates
│   │   ├── Footer.tsx        # Comprehensive corporate footer
│   │   └── FloatingWhatsApp.tsx # 1-tap WhatsApp consultation channel
│   ├── data/
│   │   └── site-data.ts      # Centralized data store: schools, testimonials, services, and contacts
│   └── lib/
│       └── utils.ts          # Utility functions (cn class merger)
```

---

## 🛠️ How to Edit Content

To update website text, contact numbers, services, or accredited schools, edit **`src/data/site-data.ts`**:
- **Contact Details**: Update `SITE_CONFIG.contact` (phone numbers, email, physical address).
- **Accredited Schools**: Add or remove entries in the `SCHOOLS` array.
- **Leadership**: Update bios and photos in `LEADERSHIP`.
- **Testimonials**: Add new client reviews in `TESTIMONIALS`.
- **Services**: Update offerings or descriptions in `SERVICES`.

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push your repository to GitLab or GitHub.
2. Connect the repo on [Vercel](https://vercel.com).
3. Set the root directory to `sdtvet-web`.
4. Deploy!

### Static Export / Other Hosts
To generate pure static HTML/CSS/JS export for Apache, Nginx, or cPanel:
1. Add `output: 'export'` to `next.config.ts`.
2. Run `npm run build`.
3. Upload the resulting `out/` folder to your web server.
