const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// JSON-LD schemas
const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jenga Agency",
  "url": "https://jenga-agency.com",
  "description": "Jenga Agency is a Nairobi-based AI consulting and implementation firm that works on the ground with companies across Europe, the US, and Africa to turn AI into measurable business results.",
  "foundingDate": "2018",
  "founder": {
    "@type": "Person",
    "name": "Yoann Copreaux"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "areaServed": ["Europe", "United States", "Africa", "Kenya"],
  "knowsAbout": ["AI Consulting", "AI Implementation", "AI Strategy", "AI Training", "Software Engineering"]
});

const professionalServiceSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Jenga Agency",
  "url": "https://jenga-agency.com/ai-consulting",
  "description": "AI consulting and implementation services including diagnostics, strategy, implementation, and training.",
  "serviceType": ["AI Consulting", "AI Implementation", "AI Strategy", "AI Training"],
  "areaServed": ["Europe", "United States", "Africa", "Kenya"],
  "provider": {
    "@type": "Organization",
    "name": "Jenga Agency"
  }
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Jenga Agency's AI consulting for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with established businesses — typically companies with meaningful revenue and operations complex enough that AI can drive real impact. If you have teams, workflows, and data, there's likely something we can help with."
      }
    },
    {
      "@type": "Question",
      "name": "Does Jenga Agency always recommend AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. If the best solution to your problem is a simple process change or a non-AI tool, we'll tell you. We'd rather give you honest advice than sell you something you don't need."
      }
    },
    {
      "@type": "Question",
      "name": "What does an AI diagnostic cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on the size and complexity of your business. Get in touch for a conversation — there's no commitment and no hard sell."
      }
    },
    {
      "@type": "Question",
      "name": "Can Jenga Agency work with our existing IT team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We integrate with your internal teams, not replace them. Our role is to bring AI expertise and accelerate execution, while building your team's capability to sustain it."
      }
    }
  ]
});

// Helper: inject JSON-LD before </head>
function injectJsonLd(html, schemas) {
  const scripts = schemas.map(s => `<script type="application/ld+json">${s}</script>`).join('\n');
  return html.replace('</head>', `${scripts}\n</head>`);
}

// Page definitions
const pages = {
  'ai-consulting': {
    title: 'AI Consulting & Implementation Services | Jenga Agency',
    description: 'Jenga Agency helps businesses diagnose where AI creates real value, then implements the right solutions. From strategy to deployment — based in Nairobi, working globally.',
    canonical: 'https://jenga-agency.com/ai-consulting',
    ogTitle: 'AI Consulting & Implementation Services | Jenga Agency',
    ogDescription: 'Jenga Agency helps businesses diagnose where AI creates real value, then implements the right solutions. From strategy to deployment — based in Nairobi, working globally.',
    ogUrl: 'https://jenga-agency.com/ai-consulting',
    jsonLd: [organizationSchema, professionalServiceSchema, faqSchema]
  },
  'about': {
    title: 'About Jenga Agency | AI Consulting from Nairobi to the World',
    description: 'Jenga Agency is a Nairobi-based AI consulting firm helping businesses across Europe, the US, and Africa turn AI into real results. Learn about our story and approach.',
    canonical: 'https://jenga-agency.com/about',
    ogTitle: 'About Jenga Agency | AI Consulting from Nairobi to the World',
    ogDescription: 'Jenga Agency is a Nairobi-based AI consulting firm helping businesses across Europe, the US, and Africa turn AI into real results. Learn about our story and approach.',
    ogUrl: 'https://jenga-agency.com/about',
    jsonLd: [organizationSchema]
  },
  'contact': {
    title: 'Contact Jenga Agency | Book an AI Discovery Call',
    description: 'Get in touch with Jenga Agency for AI consulting, implementation, or software engineering. Book a discovery call or send us a message.',
    canonical: 'https://jenga-agency.com/contact',
    ogTitle: 'Contact Jenga Agency | Book an AI Discovery Call',
    ogDescription: 'Get in touch with Jenga Agency for AI consulting, implementation, or software engineering. Book a discovery call or send us a message.',
    ogUrl: 'https://jenga-agency.com/contact',
    jsonLd: [organizationSchema]
  }
};

// Also inject JSON-LD into the root index.html (Organization schema only)
let rootHtml = baseHtml;
rootHtml = injectJsonLd(rootHtml, [organizationSchema]);
fs.writeFileSync(path.join(distDir, 'index.html'), rootHtml);
console.log('Updated root index.html with JSON-LD');

// Generate subpage HTML files
for (const [route, meta] of Object.entries(pages)) {
  let html = rootHtml;
  
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${meta.description}"`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${meta.canonical}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${meta.ogTitle}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${meta.ogDescription}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${meta.ogUrl}"`);
  
  // Replace JSON-LD: remove the Organization-only block and add page-specific schemas
  const orgScriptTag = `<script type="application/ld+json">${organizationSchema}</script>`;
  html = html.replace(orgScriptTag, meta.jsonLd.map(s => `<script type="application/ld+json">${s}</script>`).join('\n'));
  
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`Created ${route}/index.html`);
}

console.log('Post-build: all page meta tags and JSON-LD generated.');
