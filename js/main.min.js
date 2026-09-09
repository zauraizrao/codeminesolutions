/**
 * js/main.js — Codemine Solutions static site
 * Single source of truth for data, icons, rendering, and all interactivity.
 * No React, no Framer Motion, no framework runtime.
 */

/* =========================================================
   ICON STRINGS (inline SVG replacing lucide-react)
   ========================================================= */
const ICONS = {
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  arrowUpRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  arrowUpRightSm: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowUpRightFooter: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  arrowUpRightFooterSm: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  layout: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  box: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  // --- Additional service icons ---
  truck: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  trendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/></svg>`,
};

const SITE_ORIGIN = "https://www.codeminesolutions.com";
const DEFAULT_SOCIAL_IMAGE = `${SITE_ORIGIN}/assets/logo.webp`;

function absoluteUrl(path) {
  if (!path) return SITE_ORIGIN + "/";
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_ORIGIN}/${path.replace(/^\/+/, "")}`;
}

function upsertMeta(selector, createAttrs, valueAttr, value) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(createAttrs).forEach(([key, attrValue]) => tag.setAttribute(key, attrValue));
    document.head.appendChild(tag);
  }
  tag.setAttribute(valueAttr, value);
}

function setPageMeta({ title, description, url, image = DEFAULT_SOCIAL_IMAGE, schema }) {
  const canonicalUrl = absoluteUrl(url);
  const imageUrl = absoluteUrl(image);
  document.title = title;
  upsertMeta('meta[name="description"]', { name: 'description' }, 'content', description);
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);
  upsertMeta('meta[property="og:title"]', { property: 'og:title' }, 'content', title);
  upsertMeta('meta[property="og:description"]', { property: 'og:description' }, 'content', description);
  upsertMeta('meta[property="og:url"]', { property: 'og:url' }, 'content', canonicalUrl);
  upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'content', 'website');
  upsertMeta('meta[property="og:image"]', { property: 'og:image' }, 'content', imageUrl);
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'content', 'summary_large_image');
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, 'content', title);
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, 'content', description);
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, 'content', imageUrl);

  if (schema) {
    let script = document.getElementById('page-schema');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-schema';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }
}

/* =========================================================
   PROJECTS DATA (mirrors src/app/data/projects.ts exactly)
   ========================================================= */
const PROJECTS = [
  // ── Graphic Design portfolio ─────────────────────────────────────────────
  {
    id: "gdpt-ci",
    slug: "gdpt-ci",
    title: "Character Illustration",
    category: "Graphic Designing",
    image: "assets/gdpt3-ci.png",
    year: "2026",
    client: "NDA Confidential",
    role: "Character Illustration",
    description: "A clean and modern character illustration focused on a mysterious masked persona, strong silhouette, and a minimal yet striking color palette."
  },
  {
    id: "gdpt-aci",
    slug: "gdpt-aci",
    title: "Anime Character Illustration",
    category: "Graphic Designing",
    image: "assets/gdpt4-aci.png",
    year: "2025",
    client: "NDA Confidential",
    role: "Anime Character Design",
    description: "A detailed anime-style character design combining elegant fashion, expressive features, and a strong fantasy-inspired personality."
  },

  {
    id: "gdpt-dfi-1",
    slug: "gdpt-dfi-1",
    title: "Digital Fantasy Illustration I",
    category: "Graphic Designing",
    image: "assets/gdpt5-dfi.png",
    year: "2026",
    client: "NDA Confidential",
    role: "Digital Illustration",
    description: "A bold Halloween-inspired character illustration featuring a mysterious dark-fantasy aesthetic, vibrant colors, and dramatic visual elements"
  },
  {
    id: "gdpt-c-11",
    slug: "gdpt-c-11",
    title: "Character Concept XI",
    category: "Graphic Designing",
    image: "assets/gdpt11-c.png",
    year: "2026",
    client: "NDA - Confidential",
    role: "Character Concept",
    description: "A creative art room designed for a client, featuring a cozy streaming setup, gaming elements, artwork, and a custom character. The scene combines a vibrant blue theme with personalized details to create a unique and lively creative space"
  },
  {
    id: "gdpt-dfi-2",
    slug: "gdpt-dfi-2",
    title: "Digital Fantasy Illustration II",
    category: "Graphic Designing",
    image: "assets/gdpt6-dfi.png",
    year: "2025",
    client: "NDA - Confidential",
    role: "Digital Illustration",
    description: "A Dark Fantasy character illustration featuring a mysterious armored knight standing in a post apocalyptic desert landscape. The artwork combines detailed armor design, dramatic scenery, a custom flag, and a powerful cinematic atmosphere"
  },
  {
    id: "gdpt-7",
    slug: "gdpt-7",
    title: "Graphic Design VII",
    category: "Graphic Designing",
    image: "assets/gdpt-7.png",
    year: "2025",
    client: "NDA - Confidential",
    role: "Graphic Design",
    description: "A charming full body character illustration featuring a soft blue aesthetic, curly hair, round glasses, and a classic school inspired outfit. The expressive pose and gentle color palette give the character a cute, elegant, and whimsical personality."
  },
  {
    id: "gdpt-c-8",
    slug: "gdpt-c-8",
    title: "Character Concept VIII",
    category: "Graphic Designing",
    image: "assets/gdpt8-c.png",
    year: "2026",
    client: "NDA - Confidential",
    role: "Character Concept",
    description: "A cute chibi style character featuring a magical unicorn theme, with floral details, soft colors, and a charming outfit. The expressive pose and detailed hair accessories give the artwork a playful and whimsical look"
  },
  {
    id: "gdpt-c-9",
    slug: "gdpt-c-9",
    title: "Character Concept IX",
    category: "Graphic Designing",
    image: "assets/gdpt9-c.png",
    year: "2026",
    client: "NDA - Confidential",
    role: "Character Concept",
    description: "A cute chibi style illustration created for a client, featuring a creative artist character with glasses, a paintbrush, and palette. The colorful outfit and dreamy starry background give the artwork a playful and charming feel"
  },
  {
    id: "gdpt-c-10",
    slug: "gdpt-c-10",
    title: "Character Concept X",
    category: "Graphic Designing",
    image: "assets/gdpt10-c.png",
    year: "2025",
    client: "NDA - Confidential",
    role: "Character Concept",
    description: "A custom 2D character model designed for a client, featuring a detailed anime inspired style with a sleek black and gold outfit. The model is fully rigged for animation, allowing smooth movement and posing. Perfect for VTuber, streaming, and digital content creation"
  },


  // ── Moved last: chibi & characterdesign (portrait/small, best at end) ──────
  {
    id: "gdpt-chibi",
    slug: "gdpt-chibi",
    title: "Chibi Character",
    category: "Graphic Designing",
    image: "assets/gdpt1-chibi.png",
    year: "2025",
    client: "NDA - Confidential",
    role: "Character Design",
    description: ""
  },
  {
    id: "gdpt-characterdesign",
    slug: "gdpt-characterdesign",
    title: "Character Design",
    category: "Graphic Designing",
    image: "assets/gdpt2-characterdesign.png",
    year: "2026",
    client: "NDA - Confidential",
    role: "Character Design",
    description: ""
  },
  {
    id: "gdpt-vtuber",
    slug: "gdpt-vtuber",
    title: "2D/3D VTubers",
    category: "Graphic Designing",
    image: "assets/2dvid.mp4",
    year: "2026",
    client: "NDA Confidential",
    role: "VTuber Model Design & Rigging",
    description: "A dynamic 2D/3D VTuber model featuring the same original character designed for the Anime Character Illustration portfolio, fully rigged for expressive motion and streaming."
  }
];

const FEATURED_PROJECT_ORDER = ["gdpt-aci", "gdpt-c-10", "gdpt-characterdesign"];
PROJECTS.sort((a, b) => {
  const aIndex = FEATURED_PROJECT_ORDER.indexOf(a.slug);
  const bIndex = FEATURED_PROJECT_ORDER.indexOf(b.slug);
  if (aIndex === -1 && bIndex === -1) return 0;
  if (aIndex === -1) return 1;
  if (bIndex === -1) return -1;
  return aIndex - bIndex;
});

const characterDesignProject = PROJECTS.find(project => project.slug === "gdpt-characterdesign");
if (characterDesignProject && !characterDesignProject.description) {
  characterDesignProject.description = "A polished character design study focused on expressive styling, clean proportions, and a presentation-ready visual identity.";
}

const IMAGE_DIMENSIONS = {
  "assets/logo.webp": { width: 1020, height: 1020 },
  "assets/logow.png": { width: 1020, height: 1020 },
  "assets/hero2-optimized.webp": { width: 1200, height: 1500 },
  "assets/gdpt3-ci.png": { width: 1024, height: 1024 },
  "assets/gdpt4-aci.png": { width: 1398, height: 1600 },
  "assets/gdpt5-dfi.png": { width: 1024, height: 1024 },
  "assets/gdpt11-c.png": { width: 1024, height: 1024 },
  "assets/gdpt6-dfi.png": { width: 1024, height: 1024 },
  "assets/gdpt-7.png": { width: 1024, height: 1024 },
  "assets/gdpt8-c.png": { width: 1024, height: 1024 },
  "assets/gdpt9-c.png": { width: 1024, height: 1024 },
  "assets/gdpt10-c.png": { width: 1024, height: 1024 },
  "assets/gdpt1-chibi.png": { width: 1024, height: 1024 },
  "assets/gdpt2-characterdesign.png": { width: 1024, height: 1024 }
};

const WEB_PROJECTS = [
  {
    id: "web-nexus-blend",
    slug: "web-nexus-blend",
    title: "Nexus Blend",
    category: "Web Development",
    year: "2025",
    client: "Nexus Blend Studio",
    role: "UI/UX Design & Development",
    description: "Designed and developed the Nexus Blend Studio website using React.js and Next.js — modern, responsive, performance-optimized UX.",
    tag: "React · Next.js",
    date: "Jun 2025",
    image: "assets/img/projects/nexus-blend.webp",
    url: "https://www.nexusblendstudio.online/"
  },
  {
    id: "web-blush-baby-store",
    slug: "web-blush-baby-store",
    title: "Blush Baby Store",
    category: "Web Development",
    year: "2026",
    client: "Blush Baby Store",
    role: "Shopify Design & Development",
    description: "Custom Shopify dynamic web app for baby products, responsive design with a robust backend.",
    tag: "Custom · Shopify",
    date: "",
    image: "assets/img/projects/blush-baby-store.svg",
    url: ""
  },
  {
    id: "web-torvix-chauffeur",
    slug: "web-torvix-chauffeur",
    title: "Torvix Chauffeur",
    category: "Web Development",
    year: "2026",
    client: "Torvix Chauffeur",
    role: "Web Design & Development",
    description: "Professional chauffeur service website — modern UI, responsive design, optimized booking/service presentation flow.",
    tag: "Custom · WordPress",
    date: "Mar 2026",
    image: "assets/img/projects/torvix-chauffeur.webp",
    url: "https://torvixchauffeurksa.com/"
  },
  {
    id: "web-publishing-heaven",
    slug: "web-publishing-heaven",
    title: "Publishing Heaven",
    category: "Web Development",
    year: "2025",
    client: "Publishing Heaven",
    role: "Custom PHP Development",
    description: "Custom PHP-based e-books platform enabling seamless content delivery and client outreach via integrated forms.",
    tag: "Custom PHP · E-Books",
    date: "Oct 2025",
    image: "assets/img/projects/publishing-heaven.svg",
    url: "https://publishing-lp1.thepublishingheaven.com/"
  },
  {
    id: "web-bare-skin-blog",
    slug: "web-bare-skin-blog",
    title: "Bare Skin Blog",
    category: "Web Development",
    year: "2026",
    client: "Bare Skin",
    role: "WordPress Design & SEO",
    description: "Client-optimized skincare blog built and managed to drive organic traffic.",
    tag: "WordPress Blog",
    date: "Sep 2026",
    image: "assets/img/projects/bare-skin-blog.webp",
    url: "https://bareskin.infinityfree.me/"
  }
];

const SEO_PROJECTS = [
  {
    id: "seo-capital-bathrooms", slug: "seo-capital-bathrooms", title: "Capital Bathrooms", category: "Search Engine Optimization", year: "2024", client: "Capital Bathrooms", role: "Local SEO & Web Development", description: "Local-search strategy and website improvements focused on connecting Canberra bathroom-renovation customers with the business.", tag: "Local SEO · Canberra", date: "2024", image: "assets/img/projects/seo-capital-bathrooms.webp", previewOnly: true
  },
  {
    id: "seo-rhowe-electric", slug: "seo-rhowe-electric", title: "Rhowe Electric", category: "Search Engine Optimization", year: "2025", client: "Rhowe Electric", role: "SEO, Web & Brand Refresh", description: "Search-focused web presence and brand refresh for an established Central Florida electrical contractor.", tag: "SEO · Electrical", date: "2025", image: "assets/img/projects/seo-rhowe-electric.webp", previewOnly: true
  },
  {
    id: "seo-harness-hvac", slug: "seo-harness-hvac", title: "Harness HVAC", category: "Search Engine Optimization", year: "2024", client: "Harness HVAC", role: "SEO & Website Optimization", description: "Targeted SEO and a user-focused website experience tailored to a growing HVAC company.", tag: "SEO · HVAC", date: "2024", image: "assets/img/projects/seo-harness-hvac.webp", previewOnly: true
  },
  {
    id: "seo-youth-insight", slug: "seo-youth-insight", title: "Youth Insight", category: "Search Engine Optimization", year: "2024", client: "Youth Insight", role: "SEO & Web Development", description: "A clearer, search-ready web presence built to help the organisation reach a wider online audience.", tag: "SEO · Education", date: "2024", image: "assets/img/projects/seo-youth-insight.webp", previewOnly: true
  },
  {
    id: "seo-birds-valley", slug: "seo-birds-valley", title: "Birds Valley", category: "Search Engine Optimization", year: "2024", client: "Birds Valley", role: "SEO Strategy & On-Page Optimization", description: "Structured SEO work across priority pages to strengthen discoverability and organic search performance.", tag: "SEO · Content", date: "2024", image: "assets/img/projects/seo-birds-valley.webp", previewOnly: true
  },
  {
    id: "seo-flavour-street", slug: "seo-flavour-street", title: "Flavour Street", category: "Search Engine Optimization", year: "2025", client: "Flavour Street", role: "Local SEO", description: "Local-search optimisation designed to help more customers discover the restaurant online.", tag: "Local SEO · Food", date: "2025", image: "assets/img/projects/seo-flavour-street.webp", previewOnly: true
  },
  {
    id: "seo-trends-insider", slug: "seo-trends-insider", title: "Trends Insider", category: "Search Engine Optimization", year: "2024", client: "Trends Insider", role: "SEO & Content Growth", description: "A combined website, SEO, social, and design engagement supporting a consistent, discoverable digital presence.", tag: "SEO · Publishing", date: "2024", image: "assets/img/projects/seo-trends-insider.webp", previewOnly: true
  },
  {
    id: "seo-tafheem", slug: "seo-tafheem", title: "Tafheem", category: "Search Engine Optimization", year: "2025", client: "Tafheem", role: "SEO & Digital Presence", description: "Ongoing SEO alongside website, social, and design support to improve discoverability and brand consistency.", tag: "SEO · Education", date: "2025", image: "assets/img/projects/seo-tafheem.webp", previewOnly: true
  },
  {
    id: "seo-ecommerce-business", slug: "seo-ecommerce-business", title: "Ecommerce Business", category: "Search Engine Optimization", year: "2024", client: "Ecommerce Business", role: "SEO & Conversion Support", description: "SEO, web, and paid-media support for an online business focused on practical, measurable growth.", tag: "SEO · Ecommerce", date: "2024", image: "assets/img/projects/seo-ecommerce-business.webp", previewOnly: true
  }
];

// The Work archive uses the same projects featured on their matching service pages.
PROJECTS.push(...WEB_PROJECTS, ...SEO_PROJECTS);

/* =========================================================
   SERVICES DATA (Feature 1 — extensible)

   --- Add a new service by copying this block ---
   {
     icon: ICONS.box,          // pick any key from ICONS above
     title: "New Service",     // must exactly match a project category to deep-link the filter
     description: "Brief description of what this service entails and the value it delivers."
   },
   ========================================================= */
const SERVICES = [
  {
    icon: ICONS.layout,
    title: "Graphic Designing",
    category: "Graphic Designing",
    description: "Striking visual identities, brand collateral, and packaging that communicate instantly and leave a lasting impression."
  },
  {
    icon: ICONS.globe,
    title: "Web Development",
    slug: "web-development",
    description: "Performant, scalable websites and web applications built with clean code, modern frameworks, and pixel-perfect precision."
  },
  {
    icon: ICONS.trendingUp,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven campaigns across paid, organic, and social channels that grow your audience and convert at scale."
  },
  {
    icon: ICONS.search,
    title: "Search Engine Optimization",
    slug: "seo",
    description: "Technical audits, content strategy, and authority building that move your rankings and drive qualified organic traffic."
  },
  {
    icon: ICONS.truck,
    title: "Truck Dispatching",
    slug: "truck-dispatching",
    description: "Reliable end-to-end freight coordination — maximising load efficiency, minimising deadhead miles, and keeping drivers moving."
  },
  {
    icon: ICONS.home,
    title: "Real Estate Services",
    slug: "real-estate",
    description: "Full-service digital presence for agents and developers — listings, virtual tours, lead funnels, and market reports."
  },
   {
    icon: ICONS.book,
    title: "E-Books",
    slug: "E-Books",
    description: "Full-service digital presence for agents and developers — listings, virtual tours, lead funnels, and market reports."
  }
];

const SERVICE_LANDINGS = [
  {
    slug: "web-development",
    title: "Web Development",
    summary: "High-performance websites and web applications built to feel precise, fast, and easy to manage.",
    image: "assets/web-development-services.jpg",
    imageWidth: 1600,
    imageHeight: 1065,
    cta: "Start a Web Project",
    sections: [
      {
        heading: "Built for the Way Your Business Works",
        paragraphs: [
          "A strong website is not just a digital brochure. It should guide visitors, support operations, and make the next step obvious.",
          "We plan every build around your audience, conversion goals, content structure, and long-term maintenance needs so the final product feels polished on launch day and practical after it."
        ]
      },
      {
        heading: "Clean Code, Strong Foundations",
        paragraphs: [
          "Our development process focuses on responsive layouts, accessible interaction patterns, fast load times, and a codebase that can grow with new pages, features, and integrations.",
          "From landing pages to more advanced web experiences, we keep the interface sharp and the implementation durable."
        ]
      },
      {
        heading: "Launch Support That Does Not Stop at Handoff",
        paragraphs: [
          "We help prepare the site for real users with performance checks, content polish, analytics readiness, and post-launch refinements.",
          "The result is a site that looks intentional, behaves reliably, and gives your team a stronger digital foundation."
        ]
      }
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary: "Campaign strategy, creative direction, and channel execution designed to turn attention into measurable growth.",
    image: "assets/sm.jpeg",
    imageWidth: 1536,
    imageHeight: 1024,
    cta: "Plan a Campaign",
    sections: [
      {
        heading: "Strategy Before Spend",
        paragraphs: [
          "Effective marketing starts with a clear picture of who you are trying to reach, what they need to believe, and where they are most likely to act.",
          "We shape campaigns around audience research, offer clarity, creative messaging, and the metrics that matter to your business."
        ]
      },
      {
        heading: "Creative That Carries the Message",
        paragraphs: [
          "Your visuals, copy, and landing experience should work together. We align campaign assets with the brand so every touchpoint feels consistent and conversion-focused.",
          "Paid, organic, and social efforts are planned as one system rather than disconnected posts and ads."
        ]
      },
      {
        heading: "Measure, Learn, Improve",
        paragraphs: [
          "We track performance signals, identify what is working, and refine campaigns with clear reporting.",
          "That feedback loop helps reduce wasted effort and gives your team more confidence in where to invest next."
        ]
      }
    ]
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    summary: "Technical SEO, content structure, and search visibility improvements for businesses that want qualified organic traffic.",
    image: "assets/seo-services.jpg",
    imageWidth: 1600,
    imageHeight: 1200,
    cta: "Improve Search Visibility",
    sections: [
      {
        heading: "A Search Foundation That Can Be Crawled",
        paragraphs: [
          "Search performance depends on more than keywords. Site architecture, page speed, metadata, internal links, and clean markup all influence how clearly your site can be understood.",
          "We audit the technical foundation first so improvements have something solid to build on."
        ]
      },
      {
        heading: "Content With a Clear Job",
        paragraphs: [
          "We map search intent to useful pages, service copy, and supporting content that answers real questions.",
          "The goal is not traffic for its own sake. It is attracting people who are already looking for what your business offers."
        ]
      },
      {
        heading: "Practical Optimization Over Guesswork",
        paragraphs: [
          "SEO is an ongoing discipline. We prioritize fixes, track movement, and refine the site based on visibility, engagement, and conversion signals.",
          "You get a clearer path from audit findings to real organic growth."
        ]
      }
    ]
  },
  {
    slug: "truck-dispatching",
    title: "Truck Dispatching",
    summary: "Professional dispatch support for U.S. carriers, focused on load planning, broker communication, paperwork, and driver momentum.",
    image: "assets/truck-dispatching-services.jpg",
    imageWidth: 1600,
    imageHeight: 1067,
    cta: "Get Dispatch Support",
    sections: [
      {
        heading: "Smarter Load and Route Planning",
        paragraphs: [
          "Finding a load is only one part of successful dispatching. A good dispatcher looks at the bigger picture, from pickup and delivery locations to route planning and backhaul opportunities.",
          "Strategic planning can help reduce empty miles, improve utilization, and create a more consistent workflow for drivers and fleet owners."
        ]
      },
      {
        heading: "Handling Broker Communication",
        paragraphs: [
          "Running a trucking business involves constant communication with brokers and shippers. Rate inquiries, load details, appointment times, confirmations, paperwork, and updates can quickly become overwhelming when handled alone.",
          "A professional dispatching team can manage these daily communications, allowing drivers to focus on the road while owners focus on the business."
        ]
      },
      {
        heading: "Built Around U.S. Carriers",
        paragraphs: [
          "We focus on equipment type, preferred lanes, availability, and individual business goals when searching for freight and planning loads.",
          "Our goal is to take the stress out of dispatching so carriers can spend more time driving, delivering, and growing their business."
        ]
      }
    ]
  },
  {
    slug: "real-estate",
    title: "Real Estate Services",
    summary: "Digital presence, listing presentation, and lead-generation support for agents, developers, and property teams.",
    image: "assets/real-estate-services.jpg",
    imageWidth: 1600,
    imageHeight: 1067,
    cta: "Build Real Estate Presence",
    sections: [
      {
        heading: "Present Properties With Confidence",
        paragraphs: [
          "Real estate decisions are visual, practical, and time-sensitive. Your digital presence should make listings easy to understand and easy to act on.",
          "We create polished property pages, visual assets, and conversion paths that help buyers, renters, and investors move from interest to inquiry."
        ]
      },
      {
        heading: "Lead Funnels That Respect the Buyer Journey",
        paragraphs: [
          "From landing pages and forms to campaign assets and follow-up flows, we design around the questions prospects ask before they are ready to talk.",
          "That structure gives agents and teams a clearer way to capture intent and prioritize serious opportunities."
        ]
      },
      {
        heading: "A More Professional Market Presence",
        paragraphs: [
          "We help real estate brands show up consistently across listings, social campaigns, market reports, and digital collateral.",
          "The result is a stronger impression at every step, from first click to scheduled showing."
        ]
      }
    ]
  }
];

/* =========================================================
   TESTIMONIALS DATA (Feature 3)

   --- Add a new testimonial by copying this block ---
   {
     quote: "Your quote text here.",
     name: "First Last",
     role: "Job Title",
     company: "Company Name"
   },
   ========================================================= */
const TESTIMONIALS = [
  {
    quote: "Codemine Solutions transformed our digital presence entirely. The attention to detail and the craftsmanship of every micro-interaction exceeded every expectation we had.",
    name: "Sarah Chen",
    role: "Chief Marketing Officer",
    company: "Aesop"
  },
  {
    quote: "Working with Codemine was unlike any agency experience we've had. They understood our aesthetic language immediately and elevated it beyond what we imagined possible.",
    name: "Marcus Holt",
    role: "Head of Brand",
    company: "Herman Miller"
  },
  {
    quote: "The site they built for us is the best performing asset in our marketing stack. Clean, fast, beautiful — and our conversion rates speak for themselves.",
    name: "Lena Vogt",
    role: "Digital Director",
    company: "Leica Camera"
  },
  {
    quote: "Precision and artistry in perfect balance. Codemine delivered a product that feels timeless yet forward-thinking — exactly what our brand demands.",
    name: "James Eriksen",
    role: "Creative Director",
    company: "Bang & Olufsen"
  },
  {
    quote: "They don't just build websites. They architect experiences. The spatial thinking Codemine brought to our pavilion site was extraordinary.",
    name: "Aria Nakamura",
    role: "Design Lead",
    company: "Vitra"
  },
  {
    quote: "From brief to launch, the team was responsive, visionary, and technically flawless. Our new platform has redefined how customers perceive the brand.",
    name: "Thomas Adler",
    role: "Founder",
    company: "Studio Ceramic"
  }
];

/* =========================================================
   UTILITY HELPERS
   ========================================================= */

/** Schedule an IntersectionObserver reveal for all `.reveal` / `.reveal-x` / `.reveal-scale` elements */
function initRevealObserver(root = null) {
  const elements = document.querySelectorAll('.reveal, .reveal-x, .reveal-scale');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // keep observing so Work-page filter can re-trigger (see work page logic)
      }
    });
  }, { rootMargin: '-100px 0px', threshold: 0 });

  elements.forEach(el => observer.observe(el));
  return observer;
}

/** Re-run reveal for a subset of elements (Work page filter).
 *  BUG FIX: the card element itself carries `.reveal`, so we must check the
 *  element itself in addition to querying its children.
 */
function reReveal(elements) {
  if (!elements.length) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.gsap && !reducedMotion) {
    gsap.killTweensOf(elements);
    gsap.fromTo(elements,
      { autoAlpha: 0, y: 56, scale: .965 },
      { autoAlpha: 1, y: 0, scale: 1, duration: .72, stagger: .11, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }
    );
    return;
  }
  elements.forEach(element => element.classList.add('in-view'));
}

/* =========================================================
   PRELOADER (/, /work, /project)
   ========================================================= */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    preloader.classList.add('is-hidden');
    return;
  }
  const brand = preloader.querySelector('.preloader-brand');
  const mark = preloader.querySelector('.preloader-mark');
  const wordmark = preloader.querySelector('.preloader-wordmark');
  const line = preloader.querySelector('.preloader-line');
  if (window.gsap && brand) {
    const loaderTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    loaderTimeline
      .fromTo(mark, { opacity: 0, x: -22, scale: .72 }, { opacity: 1, x: 0, scale: 1, duration: .48 })
      .fromTo(wordmark, { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: .52 }, '-=.4')
      .fromTo(line, { scaleX: 0, opacity: .2 }, { scaleX: 1, opacity: 1, duration: .7, ease: 'power2.inOut' }, '-=.2');
  }
  let loaded = document.readyState === 'complete';
  let minimumElapsed = false;
  let exitStarted = false;
  const hide = (force = false) => {
    if (exitStarted || (!force && (!loaded || !minimumElapsed))) return;
    exitStarted = true;
    if (window.gsap) {
      const exitTimeline = gsap.timeline({ onComplete: () => preloader.classList.add('is-hidden') });
      exitTimeline
        .to(brand, { y: -12, opacity: 0, duration: .32, ease: 'power2.in' })
        .to(preloader, { opacity: 0, duration: .42, ease: 'power2.inOut' }, '-=.12');
    } else {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.classList.add('is-hidden'), 450);
    }
  };
  window.addEventListener('load', () => { loaded = true; hide(); }, { once: true });
  setTimeout(() => { minimumElapsed = true; hide(); }, 1350);
  setTimeout(() => hide(true), 1580);
  setTimeout(() => preloader.classList.add('is-hidden'), 2150);
}

function initHeroMedia() {
  const video = document.getElementById('hero-video');
  if (!video || window.innerWidth < 600 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const loadVideo = () => {
    video.querySelectorAll('source[data-src]').forEach(source => {
      source.src = source.dataset.src;
      source.removeAttribute('data-src');
    });
    video.load();
    video.play().catch(() => {});
  };
  if ('requestIdleCallback' in window) requestIdleCallback(loadVideo, { timeout: 1000 });
  else setTimeout(loadVideo, 250);
}

function initGsapAnimations() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !window.gsap || !window.ScrollTrigger) return false;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('gsap-active');
  document.documentElement.dataset.gsapVersion = gsap.version || 'active';
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  let scrollProgress = document.querySelector('.gsap-scroll-progress');
  if (!scrollProgress) {
    scrollProgress = document.createElement('div');
    scrollProgress.className = 'gsap-scroll-progress';
    scrollProgress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(scrollProgress);
  }
  gsap.to(scrollProgress, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: .25 }
  });

  const agencyStory = document.getElementById('agency-story');
  if (agencyStory) {
    const storyMedia = gsap.utils.toArray('.agency-story__media', agencyStory);
    const storyCopies = gsap.utils.toArray('.agency-story__copy', agencyStory);
    const scrollIndicator = agencyStory.querySelector('.hero-scroll-indicator');

    gsap.set(storyMedia, { zIndex: index => index + 1 });
    gsap.set(storyMedia.slice(1), { clipPath: 'inset(100% 0 0 0)' });
    gsap.set(storyCopies.slice(1), { autoAlpha: 0, y: 70 });
    gsap.fromTo(storyCopies[0].children, { y: 64, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: .9,
      stagger: .14,
      ease: 'power3.out',
      delay: 1.82
    });

    const storyTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: agencyStory,
        start: 'top top',
        end: () => '+=' + Math.max(1, storyMedia.length - 1) * window.innerHeight,
        pin: true,
        // Keep pinned scene transitions responsive when the user reverses scroll direction.
        scrub: .35,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    storyMedia.slice(1).forEach((media, index) => {
      const nextIndex = index + 1;
      const mediaElement = media.querySelector('img, video');
      const previousElement = storyMedia[index].querySelector('img, video');
      storyTimeline
        .to(storyCopies[index], { autoAlpha: 0, y: -64, duration: .34, ease: 'power2.in' })
        .to(media, { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'none' }, '<')
        .fromTo(mediaElement, { scale: 1.16, yPercent: 7 }, { scale: 1, yPercent: 0, duration: 1, ease: 'none' }, '<')
        .fromTo(storyCopies[nextIndex], { autoAlpha: 0, y: 82 }, { autoAlpha: 1, y: 0, duration: .62, ease: 'power3.out' }, '<.24')
        .to(previousElement, { scale: 1.09, duration: 1, ease: 'none' }, '<');
    });

    if (scrollIndicator) {
      storyTimeline.to(scrollIndicator, { autoAlpha: 0, duration: .2 }, 0);
    }
  }

  const cinematicReel = document.getElementById('project-reel');
  if (cinematicReel) {
    const panels = gsap.utils.toArray('.cinematic-panel', cinematicReel);
    const counter = cinematicReel.querySelector('.cinematic-reel__counter b');
    gsap.set(panels, { zIndex: index => index + 1 });
    gsap.set(panels.slice(1), { clipPath: 'inset(100% 0 0 0)' });
    panels.forEach((panel, index) => {
      panel.style.pointerEvents = index === 0 ? 'auto' : 'none';
    });
    const firstPanelContent = panels[0].querySelectorAll('.cinematic-panel__eyebrow, h2, .cinematic-panel__description');
    gsap.fromTo(firstPanelContent, { y: 72, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: .9,
      stagger: .12,
      ease: 'power3.out',
      scrollTrigger: { trigger: cinematicReel, start: 'top 72%', once: true }
    });

    const reelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: cinematicReel,
        start: 'top top',
        end: () => '+=' + Math.max(1, panels.length - 1) * window.innerHeight,
        pin: true,
        // Keep the project reel in sync with rapid reverse scrolling as well.
        scrub: .35,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: self => {
          const activeIndex = Math.min(panels.length - 1, Math.round(self.progress * (panels.length - 1)));
          if (counter) counter.textContent = String(activeIndex + 1).padStart(2, '0');
          panels.forEach((panel, index) => {
            panel.style.pointerEvents = index === activeIndex ? 'auto' : 'none';
          });
        }
      }
    });

    panels.slice(1).forEach((panel, index) => {
      const previousPanel = panels[index];
      reelTimeline
        .to(panel, { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'none' })
        .fromTo(panel.querySelector('.cinematic-panel__image'), { scale: 1.18, yPercent: 7 }, { scale: 1, yPercent: 0, duration: 1, ease: 'none' }, '<')
        .fromTo(panel.querySelector('h2'), { yPercent: 120 }, { yPercent: 0, duration: .55, ease: 'power3.out' }, '<.18')
        .fromTo(panel.querySelector('.cinematic-panel__eyebrow'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .4 }, '<')
        .fromTo(panel.querySelector('.cinematic-panel__description'), { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: .45 }, '<.08')
        .to(previousPanel.querySelector('.cinematic-panel__image'), { scale: 1.1, duration: 1, ease: 'none' }, '<');
    });
  }
  gsap.fromTo('#main-nav', { y: -34, opacity: 0 }, { y: 0, opacity: 1, duration: .85, ease: 'power3.out', delay: 1.82 });
  const heroContent = document.getElementById('hero-content');
  if (heroContent && !agencyStory) {
    gsap.fromTo(heroContent.children, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: .16, ease: 'power3.out', delay: 1.82 });
    const heroSection = heroContent.closest('section');
    const heroBackground = document.getElementById('hero-bg');
    if (heroSection && heroBackground) {
      gsap.to(heroBackground, {
        scale: 1.14,
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: 1 }
      });
      gsap.to(heroContent, {
        yPercent: -28,
        opacity: .08,
        ease: 'none',
        scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom 20%', scrub: .8 }
      });
    }
  } else {
    const pageIntro = document.querySelectorAll('main h1, main h1 + p, #category-chip-bar');
    if (pageIntro.length) {
      gsap.fromTo(pageIntro, { y: 64, opacity: 0 }, { y: 0, opacity: 1, duration: .9, stagger: .14, ease: 'power3.out', delay: 1.82 });
    }
  }
  const aboutImage = document.getElementById('about-image-wrapper');
  if (aboutImage) {
    gsap.fromTo(aboutImage, { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: .95, ease: 'power3.out',
      scrollTrigger: { trigger: aboutImage, start: 'top 88%', once: true }
    });
  }
  gsap.utils.toArray('.reveal, .reveal-x, .reveal-scale').forEach(element => {
    if (element.matches('.service-card, .web-project-card, .project-work-card')) return;
    gsap.fromTo(element, { y: 56, opacity: 0 }, {
      y: 0, opacity: 1, duration: .9, ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true }
    });
  });
  const groups = ['#services-grid .service-card', '.web-projects__grid .web-project-card', '#work-projects-grid .project-work-card', '#testimonials-track .testimonial-card'];
  groups.forEach(selector => {
    const items = gsap.utils.toArray(selector);
    if (!items.length) return;
    gsap.fromTo(items, { y: 70, opacity: 0, scale: .965 }, {
      y: 0, opacity: 1, scale: 1, duration: .82, stagger: .12, ease: 'power3.out',
      scrollTrigger: { trigger: items[0].parentElement, start: 'top 90%', once: true }
    });
  });
  gsap.utils.toArray('main img:not(.preloader-mark)').forEach(image => {
    // Archive cards already enter as a group. Do not give their images a second
    // clip-path animation: that can leave lazy-loaded thumbnails masked on load.
    if (image.closest('.agency-story__media, .cinematic-panel, .project-work-card, .web-project-card')) return;
    gsap.fromTo(image, { clipPath: 'inset(0 0 100% 0)', scale: 1.06 }, {
      clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.05, ease: 'power3.inOut',
      scrollTrigger: { trigger: image, start: 'top 90%', once: true }
    });
  });
  gsap.utils.toArray('.project-work-card, .web-project-card, .service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -10, scale: 1.012, duration: .32, ease: 'power3.out', overwrite: 'auto' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, scale: 1, duration: .42, ease: 'power3.out', overwrite: 'auto' });
    });
  });
  gsap.utils.toArray('[data-page="home"] section').forEach(section => {
    if (section.classList.contains('cinematic-reel')) return;
    const heading = section.querySelector('h2');
    if (!heading) return;
    gsap.fromTo(heading, { x: -44 }, {
      x: 0,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'top 35%', scrub: .6 }
    });
  });
  document.querySelectorAll('.service-card').forEach(card => {
    const motif = card.querySelector('.service-motif');
    if (!motif) return;
    card.addEventListener('mouseenter', () => gsap.to(motif, { scale: 1.07, x: -5, y: -4, duration: .24, ease: 'power2.out', overwrite: true }));
    card.addEventListener('mouseleave', () => gsap.to(motif, { scale: 1, x: 0, y: 0, duration: .24, ease: 'power2.out', overwrite: true }));
  });
  document.querySelectorAll('a, button').forEach(control => {
    const arrow = control.querySelector('svg');
    if (!arrow) return;
    control.addEventListener('mouseenter', () => gsap.to(arrow, { x: 3, duration: .2, ease: 'power2.out', overwrite: true }));
    control.addEventListener('mouseleave', () => gsap.to(arrow, { x: 0, duration: .2, ease: 'power2.out', overwrite: true }));
  });
  if (!document.body.dataset.pageTransitionsBound) {
    document.body.dataset.pageTransitionsBound = 'true';
    const wipe = document.createElement('div');
    wipe.className = 'page-transition-wipe';
    wipe.setAttribute('aria-hidden', 'true');
    document.body.appendChild(wipe);
    document.addEventListener('click', event => {
      const link = event.target.closest('a[href]');
      if (!link || link.target === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href, window.location.href);
      const samePageHash = url.pathname === window.location.pathname && url.hash;
      if (url.origin !== window.location.origin || samePageHash || url.protocol === 'mailto:' || url.protocol === 'tel:') return;
      event.preventDefault();
      gsap.set(wipe, { yPercent: 100, pointerEvents: 'auto' });
      gsap.to(wipe, {
        yPercent: 0,
        duration: .72,
        ease: 'power4.inOut',
        onComplete: () => { window.location.href = url.href; }
      });
    });
  }
  requestAnimationFrame(() => ScrollTrigger.refresh());
  return true;
}

function ensureGsapAnimations() {
  if (initGsapAnimations()) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    initRevealObserver();
    return;
  }

  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  const gsapReady = window.gsap
    ? Promise.resolve()
    : loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js');

  gsapReady
    .then(() => window.ScrollTrigger
      ? undefined
      : loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js'))
    .then(() => {
      if (!initGsapAnimations()) initRevealObserver();
    })
    .catch(() => initRevealObserver());
}

/* =========================================================
   NAVBAR
   ========================================================= */
function initNavbar() {
  const nav = document.getElementById('main-nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!nav) return;

  // Scroll-aware background.
  const updateNavOnScroll = () => {
    const hasScrolled = window.scrollY > 50;
    if (hasScrolled) {
      nav.classList.add('bg-neutral-950/80', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/5');
      nav.classList.remove('py-8', 'bg-transparent');
    } else {
      nav.classList.remove('bg-neutral-950/80', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/5');
      nav.classList.add('py-8', 'bg-transparent');
    }
  };
  window.addEventListener('scroll', updateNavOnScroll, { passive: true });
  updateNavOnScroll();

  // Mobile menu toggle
  function openMobileMenu() {
    mobileMenu.inert = false;
    mobileMenu.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
    mobileMenu.classList.add('translate-x-0', 'opacity-100', 'pointer-events-auto');
    mobileMenu.setAttribute('aria-hidden', 'false');
    if (menuIcon) menuIcon.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
  }
  function closeMobileMenu() {
    mobileMenu.inert = true;
    mobileMenu.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
    mobileMenu.classList.remove('translate-x-0', 'opacity-100', 'pointer-events-auto');
    mobileMenu.setAttribute('aria-hidden', 'true');
    if (menuIcon) menuIcon.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);

  // Close mobile menu on link click
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a, button').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // Smooth scroll for hash links on same page
  document.querySelectorAll('a[href^="#"], a[href*="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      const hash = href.slice(hashIndex);
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        closeMobileMenu();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* =========================================================
   FOOTER SCROLL-TO-TOP
   ========================================================= */
function initFooterTopButton() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const footerContent = footer.querySelector('.container, [class*="max-w-7xl"]') || footer;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'footer-top-btn';
  button.setAttribute('aria-label', 'Scroll to top');
  button.innerHTML = '<span>Back to top</span><span aria-hidden="true">↑</span>';
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  footerContent.append(button);
}

/* =========================================================
   HERO PARALLAX (rAF-throttled scroll listener)
   Matches source useTransform magnitudes:
     yText: [0,500] → [0,200]  (translateY)
     opacityText: [0,300] → [1,0]
     yBg: [0,500] → [0,100]
   ========================================================= */
function initHeroParallax() {
  if (window.gsap && window.ScrollTrigger) return;
  const heroContent = document.getElementById('hero-content');
  const heroBg = document.getElementById('hero-bg');
  if (!heroContent && !heroBg) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;

    if (heroContent) {
      // translateY: 0→200 over 500px scroll
      const yText = Math.min(scrollY * (200 / 500), 200);
      // opacity: 1→0 over 300px scroll
      const opacityText = Math.max(1 - scrollY / 300, 0);
      heroContent.style.transform = `translateY(${yText}px)`;
      heroContent.style.opacity = opacityText;
    }

    if (heroBg) {
      // translateY: 0→100 over 500px scroll
      const yBg = Math.min(scrollY * (100 / 500), 100);
      heroBg.style.transform = `translateY(${yBg}px)`;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}

/* =========================================================
   PROJECT CARD PARALLAX (odd cards only)
   Matches source: y: useTransform(scrollYProgress, [0,1], [0,-50])
   ========================================================= */
function initProjectParallax() {
  const cards = document.querySelectorAll('.project-card-odd');
  if (!cards.length) return;

  let ticking = false;

  function updateCards() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const windowH = window.innerHeight;
      // scrollYProgress: 0 when card enters bottom, 1 when it exits top
      const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
      const y = progress * -50;
      card.style.transform = `translateY(${y}px)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateCards);
      ticking = true;
    }
  }, { passive: true });
}

/* =========================================================
   SERVICES RENDERER (Feature 1 — renders from SERVICES array)
   Each card links to /work?category=SERVICE_TITLE so clicking
   a service deep-links directly to the filtered portfolio.
   ========================================================= */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = SERVICES.map((service, index) => {
    const delay = index * 0.1;
    const href = service.slug
      ? `/service.html?slug=${encodeURIComponent(service.slug)}`
      : `/work.html?category=${encodeURIComponent(service.category || service.title)}`;
    const ctaLabel = service.slug ? "Learn more" : "View work";
    return `
      <a
        href="${href}"
        class="service-card reveal group block relative overflow-hidden rounded-xl bg-white/5 border border-white/10 aspect-[4/5] p-6 no-underline flex flex-col justify-between"
        style="--reveal-delay: ${delay}s"
      >
        <div class="service-card__top relative z-10">
          <span class="service-card__number">${String(index + 1).padStart(2, '0')}</span>
          <span class="service-card__icon" aria-hidden="true">${service.icon}</span>
        </div>
        <div class="relative z-10">
          <h3 class="text-2xl font-bold tracking-tight text-white mb-2 leading-tight">${service.title}</h3>
          <p class="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
            ${service.description}
          </p>
        </div>

        <div class="relative z-10 flex items-center justify-between mt-auto">
          <div class="service-link text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
            <span>${ctaLabel}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
        </div>

        <!-- Large decorative watermark icon -->
        <div class="service-motif absolute -bottom-8 -right-8 w-48 h-48 pointer-events-none [&>svg]:w-full [&>svg]:h-full">
          ${service.icon}
        </div>
      </a>
    `;
  }).join('');

}

/* =========================================================
   TESTIMONIALS MARQUEE RENDERER (Feature 3)
   ========================================================= */
function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  if (!track) return;

  const cardHTML = (t) => `
    <div class="testimonial-card flex-shrink-0 w-[380px] mx-4 p-8 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-6">
      <p class="font-serif italic text-xl text-neutral-300 leading-relaxed">"${t.quote}"</p>
      <div class="mt-auto">
        <span class="font-medium text-white block">${t.name}</span>
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-500">${t.role} — ${t.company}</span>
      </div>
    </div>
  `;

  // Duplicate for seamless loop
  const allHTML = [...TESTIMONIALS, ...TESTIMONIALS].map(cardHTML).join('');
  track.innerHTML = allHTML;
}

function renderCinematicProjectReel(mountNode = null) {
  const servicesSection = document.getElementById('services');
  const target = mountNode || servicesSection;
  if (!target || document.getElementById('project-reel')) return;

  const reelProjects = WEB_PROJECTS.filter(project => /\.webp$/i.test(project.image)).slice(0, 5);
  const reel = document.createElement('section');
  reel.id = 'project-reel';
  reel.className = 'cinematic-reel';
  reel.setAttribute('aria-label', 'Selected digital projects');
  reel.innerHTML = `
    <div class="cinematic-reel__stage">
      ${reelProjects.map((project, index) => {
        const href = project.url || '/work.html?category=Web%20Development';
        const external = project.url ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `
          <a class="cinematic-panel${index === 0 ? ' is-first' : ''}" href="${href}"${external} data-panel-index="${index}">
            <img class="cinematic-panel__image" src="${project.image}" alt="${project.title} website project" width="1600" height="1000" loading="${index === 0 ? 'eager' : 'lazy'}" />
            <span class="cinematic-panel__shade" aria-hidden="true"></span>
            <div class="cinematic-panel__content">
              <p class="cinematic-panel__eyebrow">Selected work · ${project.tag}</p>
              <div class="cinematic-panel__title-mask"><h2>${project.title}</h2></div>
              <p class="cinematic-panel__description">${project.description}</p>
            </div>
          </a>`;
      }).join('')}
      <div class="cinematic-reel__chrome" aria-hidden="true">
        <span>Codemine — selected work</span>
        <span class="cinematic-reel__counter"><b>01</b> / ${String(reelProjects.length).padStart(2, '0')}</span>
        <span>Scroll to explore ↓</span>
      </div>
    </div>`;
  if (mountNode) mountNode.replaceWith(reel);
  else servicesSection.before(reel);
}


/* =========================================================
   WORK PAGE — all projects + category filter chips (Feature 2)
   Reads ?category= URL param to pre-select a chip on load
   (used by service cards deep-linking from the home page).
   ========================================================= */
function renderWorkPage() {
  const chipBar = document.getElementById('category-chip-bar');
  const grid = document.getElementById('work-projects-grid');
  if (!chipBar || !grid) return;

  // --- Read URL param for deep-link pre-selection ---
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get('category') || 'All';

  // --- Derive unique categories from SERVICES order first, then any extra from PROJECTS ---
  // This ensures chips appear in the same order as services on the home page.
  const serviceCategories = SERVICES.map(s => s.title);
  const categories = ['All', ...serviceCategories];
  PROJECTS.forEach(p => {
    if (!categories.includes(p.category)) categories.push(p.category);
  });

  // Determine initial active category (URL param or 'All')
  const initialCategory = categories.includes(urlCategory) ? urlCategory : 'All';

  // --- Render chips ---
  chipBar.innerHTML = categories.map(cat => {
    const isActive = cat === initialCategory;
    return `
      <button
        class="category-chip px-5 py-2 rounded-full border text-sm font-mono uppercase tracking-widest transition-all duration-200 ${isActive ? 'bg-white text-black border-white chip-active' : 'border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'}"
        data-category="${cat}"
      >${cat}</button>
    `;
  }).join('');

  // --- Render all project cards ---
  let currentSubcategory = null;
  
  grid.innerHTML = PROJECTS.map((project, index) => {
    const hidden = initialCategory !== 'All' && project.category !== initialCategory;
    const imageSize = IMAGE_DIMENSIONS[project.image] || {};
    const projectHref = project.previewOnly ? '' : (project.url || `/project.html?slug=${project.slug}`);
    const externalAttrs = project.url ? ' target="_blank" rel="noopener noreferrer"' : '';
    
    let subcategoryHtml = '';
    if (project.id === 'gdpt-vtuber') {
      subcategoryHtml = `
        <div class="project-subcategory mt-16 mb-8 w-full ${hidden ? 'filter-hidden' : ''}" style="grid-column: 1 / -1;" data-category="Graphic Designing">
          <div class="border-t border-white/10 pt-16">
            <h3 class="text-4xl md:text-5xl font-medium tracking-tight mb-2">2D/3D VTubers:</h3>
          </div>
        </div>
      `;
    }

    return `
      ${subcategoryHtml}
      <div
        class="project-work-card group${projectHref ? ' cursor-pointer' : ''}${hidden ? ' filter-hidden' : ''}"
        data-category="${project.category}"
        data-index="${index}"
      >
        ${projectHref ? `<a href="${projectHref}"${externalAttrs}>` : '<div>'}
          <div class="relative overflow-hidden aspect-[3/4] mb-6 bg-neutral-900 rounded-sm">
            ${project.image.endsWith('.mp4') ? `
              <video 
                src="${project.image}" 
                autoplay loop muted playsinline
                class="${project.category === 'Graphic Designing' ? 'object-contain p-3' : 'object-cover'} w-full h-full opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              ></video>
            ` : `
              <img
                src="${project.image}"
                alt="${project.title}"
                width="${imageSize.width || 1200}"
                height="${imageSize.height || 1200}"
                loading="lazy"
                class="${project.category === 'Graphic Designing' ? 'object-contain p-3' : 'object-cover'} w-full h-full opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
            `}
            <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            <div class="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              ${ICONS.arrowUpRightSm}
            </div>
          </div>
          <div class="flex justify-between items-baseline border-t border-white/10 pt-4">
            <div>
              <h3 class="text-xl font-medium tracking-tight mb-1">${project.title}</h3>
              <p class="text-xs font-mono uppercase tracking-widest text-neutral-500">${project.category}</p>
            </div>
            <span class="text-xs font-mono text-neutral-600">${project.year}</span>
          </div>
        ${projectHref ? '</a>' : '</div>'}
      </div>
    `;
  }).join('');

  // Add reveal classes to each visible card with staggered delays
  let visibleIdx = 0;
  grid.querySelectorAll('.project-work-card').forEach((card) => {
    card.classList.add('reveal');
    if (!card.classList.contains('filter-hidden')) {
      card.style.setProperty('--reveal-delay', `${visibleIdx * 0.08}s`);
      visibleIdx++;
    }
  });

  // --- Shared filter apply function ---
  function applyFilter(cat) {
    // Update chip styles
    chipBar.querySelectorAll('.category-chip').forEach(c => {
      if (c.dataset.category === cat) {
        c.classList.add('bg-white', 'text-black', 'border-white', 'chip-active');
        c.classList.remove('border-white/10', 'text-neutral-400');
      } else {
        c.classList.remove('bg-white', 'text-black', 'border-white', 'chip-active');
        c.classList.add('border-white/10', 'text-neutral-400');
      }
    });

    // Show / hide cards
    const allCards = grid.querySelectorAll('.project-work-card');
    const nowVisible = [];
    grid.querySelectorAll('.project-subcategory').forEach(heading => {
      const match = cat === 'All' || heading.dataset.category === cat;
      heading.classList.toggle('filter-hidden', !match);
    });
    allCards.forEach(card => {
      const match = cat === 'All' || card.dataset.category === cat;
      if (match) {
        card.classList.remove('filter-hidden');
        nowVisible.push(card);
      } else {
        card.classList.add('filter-hidden');
        card.classList.remove('in-view');
      }
    });

    // Re-stagger delays and replay reveal animations
    nowVisible.forEach((card, i) => {
      card.classList.remove('in-view');
      card.style.setProperty('--reveal-delay', `${i * 0.08}s`);
    });
    requestAnimationFrame(() => reReveal(nowVisible));
  }

  // --- Chip click handler ---
  let activeCategory = initialCategory;
  chipBar.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.dataset.category;
      if (cat === activeCategory) return;
      activeCategory = cat;
      applyFilter(cat);
    });
  });

  // --- Apply initial filter if URL param set a non-All category ---
  // (cards already hidden in HTML; just need to ensure reveal runs correctly)
  if (initialCategory !== 'All') {
    // Scroll to grid top for UX
    requestAnimationFrame(() => {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

/* =========================================================
   PROJECT DETAIL RENDERER
   ========================================================= */
function renderProjectDetail() {
  const container = document.getElementById('project-detail-container');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    container.innerHTML = `
      <div class="min-h-[60vh] flex items-center justify-center text-center">
        <div>
          <h1 class="text-4xl font-medium mb-4">Project not found</h1>
          <a href="/work.html" class="text-neutral-500 hover:text-white underline font-mono text-sm uppercase tracking-widest">← Back to Archive</a>
        </div>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${project.title} — Codemine Solutions`;
  const projectUrl = `/project.html?slug=${encodeURIComponent(project.slug)}`;
  const projectDescription = project.description || `${project.title} project by Codemine Solutions.`;
  setPageMeta({
    title: `${project.title} - Codemine Solutions`,
    description: projectDescription,
    url: projectUrl,
    image: project.image,
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": projectDescription,
      "image": absoluteUrl(project.image),
      "url": absoluteUrl(projectUrl),
      "creator": {
        "@type": "Organization",
        "name": "Codemine Solutions",
        "url": SITE_ORIGIN + "/"
      }
    }
  });
  const heroImageClass = project.category === 'Graphic Designing'
    ? 'w-full h-full object-contain p-4 bg-neutral-900 detail-hero-img'
    : 'w-full h-full object-cover detail-hero-img';
  const imageSize = IMAGE_DIMENSIONS[project.image] || {};

  container.innerHTML = `
    <!-- Back link -->
    <a href="/work.html" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-12">
      ${ICONS.arrowLeft} Back to Archive
    </a>

    <!-- Hero block -->
    <div class="reveal mb-24">
      <div class="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <h1 class="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.9]">${project.title}</h1>
        <span class="font-mono text-sm text-neutral-400 mb-2">${project.category} — ${project.year}</span>
      </div>
      <div class="aspect-[16/9] w-full bg-neutral-900 overflow-hidden rounded-sm">
        ${project.image.endsWith('.mp4') ? `
          <video 
            src="${project.image}" 
            autoplay loop muted playsinline
            class="${heroImageClass}"
          ></video>
        ` : `
          <img
            src="${project.image}"
            alt="${project.title}"
            width="${imageSize.width || 1200}"
            height="${imageSize.height || 1200}"
            class="${heroImageClass}"
          />
        `}
      </div>
    </div>

    <!-- Content -->
    <div class="grid md:grid-cols-[1fr_2fr] gap-24 mb-32">
      <div class="space-y-12 reveal" style="--reveal-delay: 0.1s">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-2">Client</span>
          <p class="text-xl font-light">${project.client}</p>
        </div>
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-2">Role</span>
          <p class="text-xl font-light">${project.role}</p>
        </div>
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-2">Year</span>
          <p class="text-xl font-light">${project.year}</p>
        </div>
      </div>
      <div class="reveal" style="--reveal-delay: 0.2s">
        <p class="text-2xl md:text-4xl font-light leading-relaxed text-neutral-300">
          ${project.description}
        </p>
      </div>
    </div>

    <!-- Next project link -->
    <div class="border-t border-white/10 py-24 text-center">
      <a href="/work.html" class="group inline-flex flex-col items-center gap-4">
        <span class="text-xs font-mono uppercase tracking-widest text-neutral-500">Next Project</span>
        <span class="text-6xl md:text-8xl font-medium tracking-tighter group-hover:text-neutral-400 transition-colors">
          View Archive
        </span>
      </a>
    </div>
  `;
}

/* =========================================================
   SERVICE LANDING RENDERER
   ========================================================= */
function renderServiceLanding() {
  const container = document.getElementById('service-detail-container');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || SERVICE_LANDINGS[0].slug;
  const service = SERVICE_LANDINGS.find(item => item.slug === slug);

  if (!service) {
    container.innerHTML = `
      <div class="min-h-[60vh] flex items-center justify-center text-center">
        <div>
          <h1 class="text-4xl font-medium mb-4">Service not found</h1>
          <a href="/#services" class="text-neutral-500 hover:text-white underline font-mono text-sm uppercase tracking-widest">Back to Services</a>
        </div>
      </div>
    `;
    return;
  }

  const serviceUrl = `/service.html?slug=${encodeURIComponent(service.slug)}`;
  const serviceDescription = `${service.summary} CodeMine Solutions provides ${service.title.toLowerCase()} services for businesses in the United States.`;
  setPageMeta({
    title: `${service.title} Services - Codemine Solutions`,
    description: serviceDescription,
    url: serviceUrl,
    image: service.image,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service.title} Services`,
        "description": service.summary,
        "url": absoluteUrl(serviceUrl),
        "image": absoluteUrl(service.image),
        "provider": {
          "@type": "Organization",
          "name": "Codemine Solutions",
          "url": SITE_ORIGIN + "/"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_ORIGIN + "/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": service.title,
            "item": absoluteUrl(serviceUrl)
          }
        ]
      }
    ]
  });

  const sectionHTML = service.sections.map((section, index) => `
    <section class="reveal py-16 border-t border-white/10 text-center max-w-4xl mx-auto" style="--reveal-delay: ${index * 0.08}s">
      <div class="mb-6">
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-600">0${index + 1}</span>
      </div>
      <div class="space-y-6">
        <h2 class="text-3xl md:text-5xl font-medium tracking-tighter leading-tight">${section.heading}</h2>
        ${section.paragraphs.map(paragraph => `
          <p class="text-lg md:text-xl font-light leading-relaxed text-neutral-400 mx-auto">${paragraph}</p>
        `).join('')}
      </div>
    </section>
  `).join('');

  const serviceProjects = service.slug === 'web-development'
    ? WEB_PROJECTS
    : service.slug === 'seo'
      ? SEO_PROJECTS
      : [];
  const projectHTML = serviceProjects.length ? `
    <div id="service-project-reel-mount"></div>
    <section class="web-projects" aria-labelledby="web-projects-title">
      <div class="web-projects__head">
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-neutral-600">Selected Work</span>
          <h2 id="web-projects-title" class="text-4xl md:text-6xl font-medium tracking-tighter mt-3">${service.slug === 'seo' ? 'SEO projects' : 'Web projects'}</h2>
        </div>
      </div>
      <div class="web-projects__grid">
        ${serviceProjects.map(project => {
          const content = `
            <div class="web-project-card__media">
              <img src="${project.image}" alt="Project cover for ${project.title}" width="1200" height="750" loading="lazy" decoding="async" />
            </div>
            <div class="web-project-card__body">
              <div class="web-project-card__meta"><span>${project.tag}</span><span>${project.date}</span></div>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              ${project.url ? `<span class="web-project-card__link">Visit project ${ICONS.arrowUpRightSm}</span>` : ''}
            </div>`;
          return project.url
            ? `<a class="web-project-card" href="${project.url}" target="_blank" rel="noopener noreferrer">${content}</a>`
            : `<article class="web-project-card">${content}</article>`;
        }).join('')}
      </div>
    </section>
  ` : '';

  container.innerHTML = `
    <a href="/#services" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-12">
      ${ICONS.arrowLeft} Back to Services
    </a>

    <section class="reveal mb-24">
      <div class="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center mb-16">
        <div>
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-none pr-4 md:pr-8">${service.title}</h1>
        </div>
        <div class="space-y-8">
          <p class="text-xl md:text-2xl font-light leading-relaxed text-neutral-400">${service.summary}</p>
          <button type="button" data-open-modal class="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform">
            ${service.cta}
            ${ICONS.arrowUpRightSm}
          </button>
        </div>
      </div>
      ${service.image ? `
      <div class="w-full flex justify-center bg-neutral-900 rounded-sm">
        <img
          src="${service.image}"
          alt="${service.title}"
          width="${service.imageWidth || 1600}"
          height="${service.imageHeight || 900}"
          class="max-w-full h-auto object-contain opacity-85 block"
          loading="eager"
        />
      </div>
    ` : ''}
    </section>

    <div class="mb-24">
      ${sectionHTML}
    </div>

    ${projectHTML}

    <section class="reveal border-y border-white/10 py-20 text-center">
      <h2 class="text-4xl md:text-6xl font-medium tracking-tighter mb-6">Ready to move this forward?</h2>
      <p class="text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10">Tell us what you are building, improving, or launching. We will help shape the next practical step.</p>
      <button type="button" data-open-modal class="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform">
        Start a Project
        ${ICONS.arrowUpRightSm}
      </button>
    </section>
  `;

  if (service.slug === 'web-development') {
    renderCinematicProjectReel(document.getElementById('service-project-reel-mount'));
  }
}

/* =========================================================
   CONTACT MODAL (shared across all pages)
   ========================================================= */
function prepareContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  if (!document.getElementById('google_bridge_iframe')) {
    const iframe = document.createElement('iframe');
    iframe.id = 'google_bridge_iframe';
    iframe.name = 'google_bridge_iframe';
    iframe.hidden = true;
    iframe.addEventListener('load', () => window.handleFormSuccess?.());
    form.before(iframe);
  }
  if (!form.action || form.action === window.location.href) {
    form.action = 'https://script.google.com/macros/s/AKfycbwYToeOWdD6PeKziJQfJF5Tz_s3lFn2u1DoVOwspn4i4fw1FzKl14rMRDJUNkGqmT9d/exec';
  }
  form.method = 'POST';
  form.target = 'google_bridge_iframe';
  form.noValidate = true;
  form.innerHTML = `
    <div class="contact-grid">
      <div class="contact-field">
        <label for="field-name">Name</label>
        <input id="field-name" name="name" type="text" autocomplete="name" required aria-describedby="field-name-error" />
        <span id="field-name-error" class="field-error" aria-live="polite"></span>
      </div>
      <div class="contact-field">
        <label for="field-email">Email</label>
        <input id="field-email" name="email" type="email" autocomplete="email" required aria-describedby="field-email-error" />
        <span id="field-email-error" class="field-error" aria-live="polite"></span>
      </div>
      <div class="contact-field contact-field--full">
        <label for="field-message">Message</label>
        <textarea id="field-message" name="message" rows="5" maxlength="1200" required aria-describedby="field-message-error"></textarea>
        <span id="field-message-error" class="field-error" aria-live="polite"></span>
      </div>
    </div>
    <button id="modal-submit-btn" class="contact-submit w-full" type="submit">Send Message</button>
    <p id="contact-form-message" class="contact-message" role="status" aria-live="polite"></p>`;
}

function initContactModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const panel = document.getElementById('modal-panel');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('contact-form');
  const formContent = document.getElementById('modal-form-content');
  const successContent = document.getElementById('modal-success-content');
  const submitBtn = document.getElementById('modal-submit-btn');

  if (!backdrop || !panel) return;

  function openModal() {
    backdrop.classList.add('open');
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('open');
    panel.classList.remove('open');
    document.body.style.overflow = '';
    // Reset form state after animation
    setTimeout(() => {
      if (formContent) formContent.style.display = '';
      if (successContent) successContent.style.display = 'none';
      if (submitBtn) { submitBtn.textContent = 'Send Message'; submitBtn.disabled = false; }
    }, 500);
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-modal]');
    if (!trigger) return;
    e.preventDefault();
    openModal();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  // ─── Google Sheets via hidden iframe POST ────────────────────────────────
  // The form POSTs natively to the Apps Script URL using target="google_bridge_iframe".
  // The iframe's onload fires handleFormSuccess() when Google's response arrives.
  // No fetch, no CORS, no e.preventDefault() needed on the form.
  window.formSubmitted = false;

  window.handleFormSuccess = function () {
    // Guard: onload fires once on page load with blank src — ignore that one
    if (!window.formSubmitted) return;

    if (formContent) formContent.style.display = 'none';
    if (successContent) successContent.style.display = 'flex';

    setTimeout(() => {
      closeModal();
      // Reset everything for next submission
      window.formSubmitted = false;
      if (form) form.reset();
      if (submitBtn) { submitBtn.textContent = 'Send Message'; submitBtn.disabled = false; }
    }, 2500);
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      const fields = [
        { id: 'field-name', message: 'Please enter your name.' },
        { id: 'field-email', message: 'Please enter a valid email address.' },
        { id: 'field-message', message: 'Please enter a message.' }
      ];
      let valid = true;
      fields.forEach(({ id, message }) => {
        const input = document.getElementById(id);
        const error = document.getElementById(`${id}-error`);
        const fieldValid = Boolean(input?.value.trim()) && (input.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()));
        input?.setAttribute('aria-invalid', String(!fieldValid));
        if (error) error.textContent = fieldValid ? '' : message;
        if (!fieldValid) valid = false;
      });
      const status = document.getElementById('contact-form-message');
      if (!valid) {
        e.preventDefault();
        if (status) { status.textContent = 'Please correct the fields above.'; status.dataset.state = 'error'; }
        form.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }

      // Set flag BEFORE the form POSTs so handleFormSuccess knows it's real
      window.formSubmitted = true;
      if (submitBtn) { submitBtn.textContent = 'Sending...'; submitBtn.disabled = true; }
      if (status) { status.textContent = 'Sending your message…'; status.dataset.state = ''; }
      // Do NOT call e.preventDefault() — let the form POST into the iframe naturally
    });
    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.removeAttribute('aria-invalid');
        const error = document.getElementById(`${input.id}-error`);
        if (error) error.textContent = '';
      });
    });
  }

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* =========================================================
   ABOUT IMAGE OPACITY (scroll-driven)
   Matches source: opacity = useTransform(scrollYProgress, [0,0.3], [0,1])
   ========================================================= */
function initAboutImageOpacity() {
  const img = document.getElementById('about-image-wrapper');
  if (!img) return;

  let ticking = false;
  function update() {
    const rect = img.getBoundingClientRect();
    const windowH = window.innerHeight;
    // scrollYProgress: 0 when section top hits viewport, progress toward 0.3 of section scroll
    const sectionScrolled = windowH - rect.top;
    const sectionHeight = rect.height;
    const progress = Math.max(0, Math.min(1, sectionScrolled / (sectionHeight * 0.3 + windowH * 0.3)));
    img.style.opacity = progress;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update();
}

/* =========================================================
   PAGE INIT — called on DOMContentLoaded
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  // Universal
  initPreloader();
  initNavbar();
  initFooterTopButton();
  initHeroMedia();

  if (page === 'home') {
    initHeroParallax();
    renderServices();
    renderTestimonials();
    initProjectParallax();
  }

  if (page === 'work') {
    renderWorkPage();
  }

  if (page === 'project') {
    renderProjectDetail();
  }

  if (page === 'service') {
    renderServiceLanding();
  }

  prepareContactForm();
  initContactModal();

  // Start the local GSAP experience, with a CDN fallback if needed.
  requestAnimationFrame(() => {
    ensureGsapAnimations();
  });
});
