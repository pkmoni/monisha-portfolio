/**
 * ==============================================================================
 * MONISHA PK — PROFESSIONAL DIGITAL MARKETING PORTFOLIO JAVASCRIPT
 * Features:
 *   - Central Reusable Portfolio Data Array (19 Verified Projects & Client Logos)
 *   - Category Filtering with Dynamic Counts & Smooth Transitions
 *   - Typing Effect for Roles
 *   - Mobile Hamburger Menu & Active Navigation Tracker
 *   - Interactive Contact Form with Validation & Real Mailto Fallback
 *   - Custom Desktop Glowing Cursor Follower
 *   - Interactive Modals (Resume Preview & Project Case-Study Notice)
 *   - Intersection Observer Section Reveal Animations
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. CENTRAL REUSABLE PORTFOLIO PROJECTS DATA
     (All 19 Projects with verified URLs, categories, factual descriptions & SVG logos)
     * You can easily add, update or edit client URLs, logos, or categories here.
     ========================================================================== */
  const projectsData = [
    {
      id: 'relycred',
      name: 'RelyCred',
      service: 'SMO (Social Media Optimization)',
      categories: ['smo'],
      description: 'Executed social media optimization campaigns to elevate brand positioning, organic audience reach, and page interactions on Facebook.',
      badgeType: 'smo',
      hasUrl: true,
      // EDIT HERE: Verified Facebook Page URL
      primaryUrl: 'https://www.facebook.com/profile.php?id=61592578922279&rdid=rXX0N11SD9uuAgIG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Dk8Y9cqZD%2F',
      primaryLabel: 'View Facebook Page',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="RelyCred Logo">
          <defs>
            <linearGradient id="relyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00f5ff" />
              <stop offset="100%" stop-color="#a855f7" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M50 18 L76 30 V50 C76 68 50 82 50 82 C50 82 24 68 24 50 V30 Z" fill="none" stroke="url(#relyGrad)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M42 50 L48 56 L62 42" fill="none" stroke="#00f5ff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `
    },
    {
      id: 'srt-global',
      name: 'SRT Global Service',
      service: 'SMO (Social Media Optimization)',
      categories: ['smo'],
      description: 'Strengthened corporate social presence and cross-channel engagement through structured SMO strategies, feed curation, and audience interaction.',
      badgeType: 'smo',
      hasUrl: true,
      // EDIT HERE: Verified Facebook Page URL
      primaryUrl: 'https://www.facebook.com/srtGlobalServices',
      primaryLabel: 'View Facebook Page',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="SRT Global Service Logo">
          <defs>
            <linearGradient id="srtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a855f7" />
              <stop offset="100%" stop-color="#ec4899" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <circle cx="50" cy="50" r="28" fill="none" stroke="url(#srtGrad)" stroke-width="3.5"/>
          <ellipse cx="50" cy="50" rx="28" ry="12" fill="none" stroke="#a855f7" stroke-width="2.5" transform="rotate(-30 50 50)"/>
          <ellipse cx="50" cy="50" rx="28" ry="12" fill="none" stroke="#ec4899" stroke-width="2.5" transform="rotate(30 50 50)"/>
          <circle cx="50" cy="50" r="5" fill="#00f5ff"/>
        </svg>
      `
    },
    {
      id: 'leaf-medical',
      name: 'Leaf Medical Centre',
      service: 'Website Design',
      categories: ['web'],
      description: 'Engineered an accessible, high-performance healthcare website design emphasizing clinical specialties, doctor directories, and seamless patient inquiries.',
      badgeType: 'web',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://leafmedicalcentre.com/',
      primaryLabel: 'Visit Website',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Leaf Medical Centre Logo">
          <defs>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#00f5ff" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <!-- Medical Cross & Leaf Silhouette -->
          <rect x="44" y="24" width="12" height="52" rx="4" fill="url(#leafGrad)"/>
          <rect x="24" y="44" width="52" height="12" rx="4" fill="url(#leafGrad)"/>
          <path d="M50 30 C65 30 75 42 75 55 C75 70 55 75 50 75 C45 75 25 70 25 55 C25 42 35 30 50 30 Z" fill="none" stroke="#34d399" stroke-width="2" opacity="0.6"/>
        </svg>
      `
    },
    {
      id: 'myg-international',
      name: 'MyG International',
      service: 'Search Engine Optimization (SEO)',
      categories: ['seo'],
      description: 'Conducted comprehensive on-page & off-page SEO, technical search audits, competitive keyword research, and indexation improvements for high search rankings.',
      badgeType: 'seo',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://myginternational.com/',
      primaryLabel: 'Visit Website',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="MyG International Logo">
          <defs>
            <linearGradient id="mygGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f97316" />
              <stop offset="100%" stop-color="#ec4899" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <text x="50%" y="42%" text-anchor="middle" dominant-baseline="central" font-family="'Syne', sans-serif" font-weight="900" font-size="28" fill="url(#mygGrad)">myG</text>
          <text x="50%" y="68%" text-anchor="middle" dominant-baseline="central" font-family="'JetBrains Mono', monospace" font-weight="700" font-size="9" letter-spacing="2" fill="#94a3b8">INTL</text>
          <path d="M25 80 L75 80" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: 'zoom-cabs',
      name: 'Zoom Cabs',
      service: 'Search Engine Optimization (SEO)',
      categories: ['seo'],
      description: 'Formulated localized search optimization targeting route keywords, taxi booking queries, and geographic search intent to expand organic ride reservations.',
      badgeType: 'seo',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://zoomcabs.in/',
      primaryLabel: 'Visit Website',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Zoom Cabs Logo">
          <defs>
            <linearGradient id="zoomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#facc15" />
              <stop offset="100%" stop-color="#f97316" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M30 60 L45 35 H68 L76 60 H30 Z" fill="none" stroke="url(#zoomGrad)" stroke-width="3.5" stroke-linejoin="round"/>
          <circle cx="40" cy="62" r="6" fill="#facc15"/>
          <circle cx="68" cy="62" r="6" fill="#facc15"/>
          <path d="M22 50 H32" stroke="#00f5ff" stroke-width="3" stroke-linecap="round"/>
          <path d="M18 42 H28" stroke="#00f5ff" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: 'vedha-wellness',
      name: 'Vedha Wellness',
      service: 'Poster Design & Graphic Design',
      categories: ['graphic'],
      description: 'Designed creative wellness marketing posters, promotional treatment infographics, and social media banners aligned with holistic health aesthetics.',
      badgeType: 'graphic',
      hasUrl: false, // Configurable placeholder as requested
      // EDIT HERE: Add verified case-study or Behance / Drive URL when available
      primaryUrl: '',
      primaryLabel: 'View Poster Design',
      noticeMessage: 'Creative poster designs and brand collateral for Vedha Wellness are available in the portfolio presentation. Contact to view full high-res design assets.',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Vedha Wellness Logo">
          <defs>
            <linearGradient id="vedhaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ec4899" />
              <stop offset="100%" stop-color="#f97316" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M50 24 C50 24 64 38 64 52 C64 64 54 74 50 76 C46 74 36 64 36 52 C36 38 50 24 50 24 Z" fill="none" stroke="url(#vedhaGrad)" stroke-width="3.5"/>
          <circle cx="50" cy="52" r="6" fill="url(#vedhaGrad)"/>
          <path d="M34 60 C38 68 44 72 50 74 C56 72 62 68 66 60" fill="none" stroke="#ec4899" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: 'zyroquip',
      name: 'Zyroquip',
      service: 'E-brochure Design & Graphic Design',
      categories: ['graphic'],
      description: 'Crafted a professional, sleek digital e-brochure showcasing technical equipment specifications, enterprise features, and corporate branding.',
      badgeType: 'graphic',
      hasUrl: false, // Configurable placeholder as requested
      // EDIT HERE: Add brochure PDF / Drive link when ready
      primaryUrl: '',
      primaryLabel: 'View E-Brochure',
      noticeMessage: 'The Zyroquip digital e-brochure case study file is configured for direct client review. Request a copy or sample design via the contact form.',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Zyroquip Logo">
          <defs>
            <linearGradient id="zyroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00f5ff" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <polygon points="50,22 78,38 78,70 50,86 22,70 22,38" fill="none" stroke="url(#zyroGrad)" stroke-width="3.5" stroke-linejoin="round"/>
          <path d="M35 42 H65 L35 66 H65" fill="none" stroke="#00f5ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `
    },
    {
      id: 'athinus',
      name: 'Athinus',
      service: 'Website Creation',
      categories: ['web'],
      description: 'Engineered a modern, responsive corporate website with streamlined navigation, fast-loading architecture, and seamless cross-platform performance.',
      badgeType: 'web',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://athinus.in/',
      primaryLabel: 'Visit Website',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Athinus Logo">
          <defs>
            <linearGradient id="athGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#818cf8" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M50 22 L75 74 H62 L50 48 L38 74 H25 Z" fill="url(#athGrad)"/>
          <line x1="36" y1="62" x2="64" y2="62" stroke="#18181f" stroke-width="3"/>
          <circle cx="50" cy="38" r="4" fill="#00f5ff"/>
        </svg>
      `
    },
    {
      id: 'golden-wings',
      name: 'Golden Wings',
      service: 'SMO and SMM',
      categories: ['smo', 'ads'],
      description: 'Managed Social Media Optimization and targeted Social Media Marketing campaigns on Facebook and Instagram to drive education and consultancy inquiries.',
      badgeType: 'smo',
      hasUrl: true,
      // EDIT HERE: Verified Facebook Page URL
      primaryUrl: 'https://www.facebook.com/goldenwings.consultants',
      primaryLabel: 'View Facebook Page',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Golden Wings Logo">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fde047" />
              <stop offset="50%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#ca8a04" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M50 65 C40 55 24 50 18 36 C30 38 42 46 50 56 C58 46 70 38 82 36 C76 50 60 55 50 65 Z" fill="url(#goldGrad)"/>
          <circle cx="50" cy="34" r="7" fill="#fde047"/>
          <path d="M26 44 C34 47 42 52 50 60 C58 52 66 47 74 44" stroke="#ffffff" stroke-width="1.5" fill="none"/>
        </svg>
      `
    },
    {
      id: 'nature-abode-resort',
      name: 'Nature Abode Resort',
      service: 'Website Creation',
      categories: ['web'],
      description: 'Developed an immersive hospitality website highlighting cottages, eco-amenities, nature experiences, and mobile-friendly reservation funnels.',
      badgeType: 'web',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://natureaboderesort.com/',
      primaryLabel: 'Visit Website',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Nature Abode Resort Logo">
          <defs>
            <linearGradient id="resortGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#84cc16" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M24 70 L42 40 L52 56 L64 36 L80 70 Z" fill="none" stroke="url(#resortGrad)" stroke-width="3.5" stroke-linejoin="round"/>
          <circle cx="66" cy="30" r="6" fill="#facc15"/>
          <path d="M20 74 H82" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: 'noretsa-pharma',
      name: 'Noretsa Pharma',
      service: 'Website Creation',
      categories: ['web'],
      description: 'Developed a structured pharmaceutical corporate website featuring comprehensive therapeutic product catalogs and regulatory compliance information.',
      badgeType: 'web',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://noretsapharma.com/',
      primaryLabel: 'Visit Website',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Noretsa Pharma Logo">
          <defs>
            <linearGradient id="pharmaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06b6d4" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <rect x="30" y="38" width="40" height="24" rx="12" transform="rotate(-45 50 50)" fill="none" stroke="url(#pharmaGrad)" stroke-width="4"/>
          <path d="M42 42 L58 58" stroke="#06b6d4" stroke-width="3"/>
          <circle cx="50" cy="50" r="3" fill="#ffffff"/>
        </svg>
      `
    },
    {
      id: 'bros-tours',
      name: 'Bros Tours & Travels',
      service: 'Search Engine Optimization (SEO)',
      categories: ['seo'],
      description: 'Implemented comprehensive travel & tour SEO strategies, optimizing regional tour package pages and search rankings for vacation seekers.',
      badgeType: 'seo',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://brostourstravels.com/',
      primaryLabel: 'Visit Website',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Bros Tours & Travels Logo">
          <defs>
            <linearGradient id="toursGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#0284c7" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <!-- Airplane and Globe Contour -->
          <circle cx="50" cy="50" r="26" fill="none" stroke="#2a2a35" stroke-width="2"/>
          <path d="M30 65 L48 50 L75 56 L68 46 L48 46 L38 35 L33 37 L38 46 L25 48 L20 44 L18 46 L24 53 Z" fill="url(#toursGrad)" transform="translate(4, -2)"/>
        </svg>
      `
    },
    {
      id: 'markoseries',
      name: 'MarkoSeries',
      service: 'SMO and SMM (Meta Ads)',
      categories: ['smo', 'ads'],
      description: 'Created social media optimization and paid Meta Ads campaigns on Facebook, elevating brand identity, digital reach, and audience interaction.',
      badgeType: 'smo',
      hasUrl: true,
      // EDIT HERE: Verified Facebook Page URL
      primaryUrl: 'https://www.facebook.com/markoseries.pvt.ltd',
      primaryLabel: 'Official Facebook Page',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="MarkoSeries Logo">
          <defs>
            <linearGradient id="markoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a855f7" />
              <stop offset="100%" stop-color="#ec4899" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M26 74 V28 L50 52 L74 28 V74" fill="none" stroke="url(#markoGrad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="50" cy="65" r="4" fill="#00f5ff"/>
        </svg>
      `
    },
    {
      id: 'weone-comfort',
      name: 'WeOne Comfort',
      service: 'Website Design',
      categories: ['web'],
      description: 'Designed a customer-centric comfort solutions website with an intuitive product showcase, service breakdown, and responsive mobile layout.',
      badgeType: 'web',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://weonecomfort.com/',
      primaryLabel: 'Visit Website',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="WeOne Comfort Logo">
          <defs>
            <linearGradient id="weoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00f5ff" />
              <stop offset="100%" stop-color="#38bdf8" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M22 46 C32 30 46 30 50 44 C54 30 68 30 78 46 C70 66 50 78 50 78 C50 78 30 66 22 46 Z" fill="none" stroke="url(#weoneGrad)" stroke-width="3.5" stroke-linejoin="round"/>
          <text x="50%" y="54%" text-anchor="middle" dominant-baseline="central" font-family="'Syne', sans-serif" font-weight="800" font-size="16" fill="#fff">W1</text>
        </svg>
      `
    },
    {
      id: 'aquaguard-calicut',
      name: 'AquaGuard Calicut',
      service: 'Google Business Profile (GBP)',
      categories: ['gbp', 'seo'],
      description: 'Configured and optimized the local Google Business Profile to capture local water purifier service searches, map queries, and direct customer reviews.',
      badgeType: 'gbp',
      hasUrl: false, // Configurable placeholder as requested
      // EDIT HERE: Add Google Maps / GBP link
      primaryUrl: '',
      primaryLabel: 'Google Business Profile',
      noticeMessage: 'Local Google Business Profile listing for AquaGuard Calicut. Map coordinates and citation details configured for regional service visibility.',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="AquaGuard Calicut Logo">
          <defs>
            <linearGradient id="aquaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06b6d4" />
              <stop offset="100%" stop-color="#00f5ff" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M50 20 C50 20 68 45 68 58 C68 68 60 76 50 76 C40 76 32 68 32 58 C32 45 50 20 50 20 Z" fill="url(#aquaGrad)"/>
          <path d="M42 58 C42 63 46 68 52 68" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        </svg>
      `
    },
    {
      id: 'aashiana-plantation',
      name: 'Aashiana Plantation',
      service: 'Google Business Profile (GBP)',
      categories: ['gbp'],
      description: 'Optimized local business presence on Google Maps, enriching farm tourism discovery, location geotagging, operating hours, and photo galleries.',
      badgeType: 'gbp',
      hasUrl: false, // Configurable placeholder as requested
      // EDIT HERE: Add Google Maps link
      primaryUrl: '',
      primaryLabel: 'Google Business Profile',
      noticeMessage: 'Aashiana Plantation local business profile and map location optimization details are available upon inquiry.',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Aashiana Plantation Logo">
          <defs>
            <linearGradient id="aashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <circle cx="50" cy="40" r="18" fill="url(#aashGrad)"/>
          <rect x="47" y="55" width="6" height="20" rx="2" fill="#78350f"/>
          <path d="M30 75 H70" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: 'vogue-beauty-parlour',
      name: 'Vogue Beauty Parlour',
      service: 'Website Design',
      categories: ['web'],
      description: 'Crafted an elegant beauty parlour & salon website showcasing treatment menus, bridal packages, client testimonials, and online appointment booking.',
      badgeType: 'web',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://voguebeautyparlour.com/',
      primaryLabel: 'Visit Website',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Vogue Beauty Parlour Logo">
          <defs>
            <linearGradient id="vogueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ec4899" />
              <stop offset="100%" stop-color="#f43f5e" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <path d="M30 30 L50 72 L70 30" fill="none" stroke="url(#vogueGrad)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="50" cy="24" r="5" fill="#f43f5e"/>
          <path d="M22 75 H78" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="3 3"/>
        </svg>
      `
    },
    {
      id: 'microsurvey-digital',
      name: 'Microsurvey Digital Land Survey',
      service: 'Google Business Profile (GBP)',
      categories: ['gbp'],
      description: 'Established the Google Business Profile citation, optimizing discovery for engineering land surveying, GPS mapping, and property assessment services.',
      badgeType: 'gbp',
      hasUrl: false, // Configurable placeholder as requested
      // EDIT HERE: Add Google Maps link
      primaryUrl: '',
      primaryLabel: 'Google Business Profile',
      noticeMessage: 'Microsurvey Digital Land Survey Google Profile and local map optimization case study. Contact to view local SEO performance.',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Microsurvey Digital Logo">
          <defs>
            <linearGradient id="microGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00f5ff" />
              <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <!-- Survey Theodolite / Target Reticle -->
          <circle cx="50" cy="46" r="20" fill="none" stroke="url(#microGrad)" stroke-width="3"/>
          <circle cx="50" cy="46" r="6" fill="#00f5ff"/>
          <line x1="50" y1="20" x2="50" y2="72" stroke="url(#microGrad)" stroke-width="2"/>
          <line x1="24" y1="46" x2="76" y2="46" stroke="url(#microGrad)" stroke-width="2"/>
          <path d="M38 72 L50 56 L62 72" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: 'optimist-laptop-service',
      name: 'Optimist Laptop Service',
      service: 'Website Creation and Google Business Profile',
      categories: ['web', 'gbp'],
      description: 'Delivered an integrated digital presence featuring a fast responsive repair service website coupled with a verified local Google Business Profile.',
      badgeType: 'web',
      hasUrl: true,
      // EDIT HERE: Verified Website URL
      primaryUrl: 'https://optimistlaptopservice.com/',
      primaryLabel: 'Visit Website',
      // Secondary link: Google Business Profile (editable placeholder)
      secondaryUrl: '', // Add GBP URL here
      secondaryLabel: 'Google Business Profile',
      secondaryNotice: 'Optimist Laptop Service Google Business Profile citation and map pack management details.',
      logoSvg: `
        <svg viewBox="0 0 100 100" class="client-logo-svg" aria-label="Optimist Laptop Service Logo">
          <defs>
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#a855f7" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#18181f" stroke="#2a2a35" stroke-width="2"/>
          <rect x="28" y="32" width="44" height="28" rx="4" fill="none" stroke="url(#laptopGrad)" stroke-width="3.5"/>
          <path d="M20 64 H80 L74 69 H26 Z" fill="url(#laptopGrad)"/>
          <circle cx="50" cy="46" r="5" fill="#00f5ff"/>
        </svg>
      `
    }
  ];

  /* ==========================================================================
     2. RENDER PORTFOLIO PROJECTS & CLIENT LOGOS
     ========================================================================== */
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderPortfolio(filterCategory = 'all') {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    const filtered = projectsData.filter(item => {
      if (filterCategory === 'all') return true;
      return item.categories.includes(filterCategory);
    });

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);

      // Render category badges
      const badgesHtml = project.categories.map(cat => {
        let label = cat.toUpperCase();
        if (cat === 'web') label = 'Web Dev';
        if (cat === 'gbp') label = 'Google Profile';
        if (cat === 'graphic') label = 'Graphic';
        if (cat === 'ads') label = 'Meta Ads';
        return `<span class="cat-pill ${cat}">${label}</span>`;
      }).join('');

      // Build primary action button
      let primaryBtnHtml = '';
      if (project.hasUrl && project.primaryUrl) {
        primaryBtnHtml = `
          <a href="${project.primaryUrl}" target="_blank" rel="noopener noreferrer" class="card-btn" title="Open verified link for ${project.name}">
            <span>${project.primaryLabel}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        `;
      } else {
        primaryBtnHtml = `
          <button type="button" class="card-btn card-btn-disabled placeholder-btn" data-project-id="${project.id}">
            <span>${project.primaryLabel}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </button>
        `;
      }

      // Build secondary action button if present (e.g. Optimist Laptop Service)
      let secondaryBtnHtml = '';
      if (project.secondaryLabel) {
        if (project.secondaryUrl) {
          secondaryBtnHtml = `
            <a href="${project.secondaryUrl}" target="_blank" rel="noopener noreferrer" class="card-btn btn-secondary" title="Open ${project.secondaryLabel}">
              <span>${project.secondaryLabel}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          `;
        } else {
          secondaryBtnHtml = `
            <button type="button" class="card-btn btn-secondary card-btn-disabled placeholder-btn" data-project-id="${project.id}" data-secondary="true">
              <span>${project.secondaryLabel}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </button>
          `;
        }
      }

      card.innerHTML = `
        <div class="card-thumbnail-wrap">
          <div class="category-badges">
            ${badgesHtml}
          </div>
          <div class="client-logo-holder">
            ${project.logoSvg}
            <span class="client-brand-name">${project.name}</span>
          </div>
        </div>
        <div class="card-content">
          <h3 class="card-title">${project.name}</h3>
          <span class="card-service-meta">${project.service}</span>
          <p class="card-description">${project.description}</p>
          <div class="card-actions">
            ${primaryBtnHtml}
            ${secondaryBtnHtml}
          </div>
        </div>
      `;

      portfolioGrid.appendChild(card);
    });

    // Attach listeners for placeholder buttons
    attachPlaceholderListeners();
  }

  // Update dynamic count badges on filter tabs
  function updateFilterCounts() {
    const counts = {
      all: projectsData.length,
      seo: projectsData.filter(p => p.categories.includes('seo')).length,
      smo: projectsData.filter(p => p.categories.includes('smo')).length,
      web: projectsData.filter(p => p.categories.includes('web')).length,
      graphic: projectsData.filter(p => p.categories.includes('graphic')).length,
      ads: projectsData.filter(p => p.categories.includes('ads')).length,
      gbp: projectsData.filter(p => p.categories.includes('gbp')).length
    };

    for (const [key, val] of Object.entries(counts)) {
      const el = document.getElementById(`count-${key}`);
      if (el) el.textContent = val;
    }
  }

  // Filter button click event handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const cat = btn.getAttribute('data-filter') || 'all';
      renderPortfolio(cat);
    });
  });

  // Initial render
  updateFilterCounts();
  renderPortfolio('all');

  /* ==========================================================================
     3. ANIMATED TYPING EFFECT (CYCLES THROUGH 4 EXACT ROLES)
     ========================================================================== */
  const typewriterEl = document.getElementById('roleTypewriter');
  const roles = [
    'I am a Digital Marketing Executive',
    'I am an SEO Specialist',
    'I am a Graphic Designer',
    'I am a WordPress Developer'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function typeRoleEffect() {
    if (!typewriterEl) return;
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      // Pause at end of completed sentence
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeRoleEffect, typingSpeed);
  }

  // Start typing loop
  setTimeout(typeRoleEffect, 500);

  /* ==========================================================================
     4. STICKY NAVBAR, MOBILE MENU & SCROLL MONITOR
     ========================================================================== */
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTop');

  // Sticky header background & Back to top button visibility
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    highlightActiveNav();
  }, { passive: true });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hamburger menu toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      hamburgerBtn.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Highlight active nav item during scroll
  const sections = document.querySelectorAll('section[id]');
  function highlightActiveNav() {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop;
      const secId = sec.getAttribute('id');
      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ==========================================================================
     5. SECTION REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ==========================================================================
     6. CONTACT FORM VALIDATION & VERIFIED EMAIL SUBMISSION
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('fullName');
      const emailInput = document.getElementById('emailAddress');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, 'nameError');
        isValid = false;
      } else {
        clearError(nameInput, 'nameError');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'emailError');
        isValid = false;
      } else {
        clearError(emailInput, 'emailError');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        showError(subjectInput, 'subjectError');
        isValid = false;
      } else {
        clearError(subjectInput, 'subjectError');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, 'messageError');
        isValid = false;
      } else {
        clearError(messageInput, 'messageError');
      }

      if (!isValid) {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please fill out all required fields with valid information.';
        }
        return;
      }

      // Genuine Submission via mailto protocol
      const recipient = 'monishapk@gmail.com';
      const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
      const mailBody = encodeURIComponent(
        `Name: ${nameInput.value.trim()}\n` +
        `Email: ${emailInput.value.trim()}\n` +
        `Subject: ${subjectInput.value.trim()}\n\n` +
        `Message:\n${messageInput.value.trim()}\n\n` +
        `Sent via Monisha PK Portfolio Website`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;

      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.innerHTML = `
          <strong>Email Client Launching:</strong> Opening your default mail app with your pre-filled inquiry to <strong>${recipient}</strong>.<br>
          <small>If your mail client didn't open automatically, <a href="${mailtoUrl}" class="link-highlight" style="text-decoration:underline;">click here to launch</a> or write directly to <strong>${recipient}</strong>.</small>
        `;
      }

      // Open user's default email client
      window.location.href = mailtoUrl;

      // Note: To connect a backend service (e.g. Formspree or Web3Forms), replace this block
      // with a fetch() call pointing to your API endpoint.
    });

    // Clear inline error on input
    ['fullName', 'emailAddress', 'subject', 'message'].forEach(id => {
      const field = document.getElementById(id);
      if (field) {
        field.addEventListener('input', () => {
          clearError(field, id.replace('Address', '').replace('full', '').toLowerCase() + 'Error');
          if (formStatus) formStatus.style.display = 'none';
        });
      }
    });
  }

  function showError(inputEl, errorId) {
    const parent = inputEl.closest('.form-group');
    if (parent) parent.classList.add('has-error');
  }

  function clearError(inputEl, errorId) {
    const parent = inputEl.closest('.form-group');
    if (parent) parent.classList.remove('has-error');
  }

  /* ==========================================================================
     7. MODALS (RESUME PREVIEW & NOTICE MODAL)
     ========================================================================== */
  const resumeModal = document.getElementById('resumeModal');
  const viewResumeModalBtn = document.getElementById('viewResumeModalBtn');
  const closeResumeModalBtn = document.getElementById('closeResumeModalBtn');

  if (viewResumeModalBtn && resumeModal) {
    viewResumeModalBtn.addEventListener('click', () => {
      openModal(resumeModal);
    });
  }

  if (closeResumeModalBtn && resumeModal) {
    closeResumeModalBtn.addEventListener('click', () => {
      closeModal(resumeModal);
    });
  }

  // Notice / Placeholder Modal Handler
  const projectNoticeModal = document.getElementById('projectNoticeModal');
  const closeNoticeModalBtn = document.getElementById('closeNoticeModalBtn');
  const dismissNoticeBtn = document.getElementById('dismissNoticeBtn');
  const noticeProjectTitle = document.getElementById('noticeProjectTitle');
  const noticeHeadline = document.getElementById('noticeHeadline');
  const noticeMessage = document.getElementById('noticeMessage');
  const noticeContactBtn = document.getElementById('noticeContactBtn');

  function attachPlaceholderListeners() {
    const placeholderBtns = document.querySelectorAll('.placeholder-btn');
    placeholderBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pId = btn.getAttribute('data-project-id');
        const isSecondary = btn.getAttribute('data-secondary') === 'true';
        const project = projectsData.find(p => p.id === pId);

        if (project && projectNoticeModal) {
          if (noticeProjectTitle) noticeProjectTitle.textContent = project.name;
          if (noticeHeadline) {
            noticeHeadline.textContent = isSecondary ? project.secondaryLabel : project.service;
          }
          if (noticeMessage) {
            if (isSecondary && project.secondaryNotice) {
              noticeMessage.textContent = project.secondaryNotice;
            } else if (project.noticeMessage) {
              noticeMessage.textContent = project.noticeMessage;
            } else {
              noticeMessage.textContent = `The public link for ${project.name} is configurable or available upon client confidentiality request.`;
            }
          }
          openModal(projectNoticeModal);
        }
      });
    });
  }

  if (closeNoticeModalBtn) {
    closeNoticeModalBtn.addEventListener('click', () => closeModal(projectNoticeModal));
  }
  if (dismissNoticeBtn) {
    dismissNoticeBtn.addEventListener('click', () => closeModal(projectNoticeModal));
  }
  if (noticeContactBtn) {
    noticeContactBtn.addEventListener('click', () => closeModal(projectNoticeModal));
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Close modals on outside click or ESC key
  window.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeModal(resumeModal);
    if (e.target === projectNoticeModal) closeModal(projectNoticeModal);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(resumeModal);
      closeModal(projectNoticeModal);
    }
  });

  /* ==========================================================================
     8. CUSTOM DESKTOP GLOWING CURSOR FOLLOWER
     ========================================================================== */
  const cursorDot = document.getElementById('cursorDot');
  const cursorGlow = document.getElementById('cursorGlow');

  if (cursorDot && cursorGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }, { passive: true });

    // Smooth lerp for glow cursor
    function animateGlowCursor() {
      glowX += (mouseX - glowX) * 0.18;
      glowY += (mouseY - glowY) * 0.18;
      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;
      requestAnimationFrame(animateGlowCursor);
    }
    requestAnimationFrame(animateGlowCursor);

    // Expand cursor over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .filter-btn, .project-card, .skill-badge, .detail-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  console.log('Monisha PK — Portfolio initialized successfully with 19 verified client projects.');
});

