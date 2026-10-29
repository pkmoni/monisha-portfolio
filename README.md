# Monisha PK — Professional Digital Marketing Portfolio

A modern, high-performance personal portfolio website built with semantic **HTML5**, **CSS3**, and vanilla **JavaScript**. Designed with a premium black aesthetic (`#080808`), glowing neon accents (Cyan, Purple, Pink, and Orange), and interactive UI/UX features.

---

## 🌟 Key Features

- **Theme & Aesthetics:** Deep black background (`#080808`), surface cards (`#141416`), vibrant neon gradients, smooth glowing button effects, and responsive glassmorphism.
- **Hero Section:** Prominently frames Monisha's portrait photo with a neon border, introduction, role typewriter animation, CV download button, and social links.
- **About Me:** Verified personal background, B.Tech qualification, and clickable contact links (`tel:`, `mailto:`).
- **Resume Section:** Chronological vertical experience timeline (Nova IT Park, NIT Calicut, Calicut Civil Station), student training card, verified skill badges, and a direct PDF download & preview modal.
- **Interactive Portfolio:** 19 real-world client projects categorized under **SEO**, **SMO**, **Website Development**, **Graphic Design**, **Meta Ads**, and **Google Business Profile**, complete with custom client logos and verified links.
- **Contact Section:** Working contact form with JavaScript validation, real `mailto:` submission fallback, and location details in Calicut, Kerala.
- **100% Responsive & Accessible:** Fluid layouts tested across mobile, tablet, laptop, and desktop displays with zero horizontal overflow.

---

## 📁 Project Directory Structure

```text
D:\wamp64\www\portfolio\
├── index.html            # Main website structure & SEO meta tags
├── style.css             # Complete design system & neon animations
├── script.js             # Project data array, typing effect, filters, form validation
├── README.md             # Documentation and customization guide
├── assets/
│   ├── profile.jpg       # Monisha's profile picture
│   ├── profile.png       # High-res copy of profile photo
│   └── resume.pdf        # Downloadable verified resume PDF
├── image/
│   └── moni.png          # Original profile photo
└── resume/
    ├── 100.pdf           # Original resume PDF
    └── resume.pdf        # Standard alias
```

---

## 🚀 How to Run Locally

### Option A: Using WampServer (Recommended)
1. Ensure your WampServer is running (green icon in taskbar).
2. Open your browser and navigate to:
   ```text
   http://localhost/portfolio/
   ```

### Option B: Direct Browser Preview
Double-click `index.html` or right-click `index.html` → **Open with** → **Google Chrome** / **Microsoft Edge** / **Firefox**.

---

## 🛠️ How to Customize & Update Details

### 1. Updating the Profile Photo
Your profile photo is currently loaded from:
- `assets/profile.jpg` (or `assets/profile.png` / `image/moni.png`)

To update your photo:
1. Replace `assets/profile.jpg` with your new picture (recommended dimensions: ~700×900 px portrait, JPG or PNG).
2. The website will automatically display the new image while preserving natural proportions.

---

### 2. Updating Your Resume PDF
Your resume download button links to:
- `assets/resume.pdf`

To update your resume:
1. Export your latest resume as a PDF.
2. Rename it to `resume.pdf` and replace `assets/resume.pdf`.
3. Visitors clicking **Download Resume** or **Download My Resume (PDF)** will immediately get the updated version.

---

### 3. Editing Client Project URLs & Social Links
All 19 portfolio projects are centrally managed in `script.js` inside the `projectsData` array:

```javascript
// Open script.js:
const projectsData = [
  {
    id: 'relycred',
    name: 'RelyCred',
    service: 'SMO (Social Media Optimization)',
    categories: ['smo'],
    description: '...',
    hasUrl: true,
    primaryUrl: 'https://www.facebook.com/...', // <-- Edit URL here
    primaryLabel: 'View Facebook Page'
  },
  // ... other projects
];
```

- To activate a placeholder link (e.g. for **Vedha Wellness**, **Zyroquip**, or **Google Business Profiles**):
  1. Change `hasUrl: false` to `hasUrl: true`.
  2. Put your live link in `primaryUrl: 'https://...'`.

- To edit your personal social profiles (LinkedIn, Facebook, GitHub):
  1. Open `index.html`.
  2. Search for `hero-socials` or `footer-social-icons` and replace the placeholder URLs with your personal links.

---

### 4. Connecting a Form Backend (Optional)
Currently, the contact form opens the visitor's email client directly with pre-filled details to **monishapk@gmail.com**. If you want form submissions sent silently via email without opening the user's mail app:
1. Sign up for free at [Web3Forms](https://web3forms.com/) or [Formspree](https://formspree.io/).
2. Obtain your free Access Key.
3. In `script.js`, update the form submission handler to `fetch('https://api.web3forms.com/submit', { method: 'POST', ... })`.

---

## 🌐 How to Deploy to Vercel (Free & Instant)

1. Create a free account at [vercel.com](https://vercel.com).
2. Install the Vercel CLI in your terminal:
   ```bash
   npm install -g vercel
   ```
3. In terminal, navigate to your portfolio directory:
   ```bash
   cd D:\wamp64\www\portfolio
   ```
4. Run:
   ```bash
   vercel
   ```
5. Follow the quick prompts (select default settings). Your portfolio will be live worldwide with a custom free HTTPS domain (e.g. `monishapk.vercel.app`) in under 60 seconds!

---

## 🌐 Deploy to GitHub Pages (Alternative)

1. Create a repository on GitHub (e.g., `monishapk-portfolio`).
2. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Monisha PK portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/monishapk-portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings** → **Pages** → under **Build and deployment**, select **main** branch and save.
4. Your website is now live at `https://<your-username>.github.io/monishapk-portfolio/`!

---

© 2026 Monisha PK. All rights reserved.

