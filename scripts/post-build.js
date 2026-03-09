const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const pages = {
  'ai-consulting': {
    title: 'AI Consulting & Implementation Services | Jenga Agency',
    description: 'Jenga Agency helps businesses diagnose where AI creates real value, then implements the right solutions. From strategy to deployment — based in Nairobi, working globally.',
    canonical: 'https://jenga-agency.com/ai-consulting',
    ogTitle: 'AI Consulting & Implementation Services | Jenga Agency',
    ogDescription: 'Jenga Agency helps businesses diagnose where AI creates real value, then implements the right solutions. From strategy to deployment — based in Nairobi, working globally.',
    ogUrl: 'https://jenga-agency.com/ai-consulting'
  },
  'about': {
    title: 'About Jenga Agency | AI Consulting from Nairobi to the World',
    description: 'Jenga Agency is a Nairobi-based AI consulting firm helping businesses across Europe, the US, and Africa turn AI into real results. Learn about our story and approach.',
    canonical: 'https://jenga-agency.com/about',
    ogTitle: 'About Jenga Agency | AI Consulting from Nairobi to the World',
    ogDescription: 'Jenga Agency is a Nairobi-based AI consulting firm helping businesses across Europe, the US, and Africa turn AI into real results. Learn about our story and approach.',
    ogUrl: 'https://jenga-agency.com/about'
  },
  'contact': {
    title: 'Contact Jenga Agency | Book an AI Discovery Call',
    description: 'Get in touch with Jenga Agency for AI consulting, implementation, or software engineering. Book a discovery call or send us a message.',
    canonical: 'https://jenga-agency.com/contact',
    ogTitle: 'Contact Jenga Agency | Book an AI Discovery Call',
    ogDescription: 'Get in touch with Jenga Agency for AI consulting, implementation, or software engineering. Book a discovery call or send us a message.',
    ogUrl: 'https://jenga-agency.com/contact'
  }
};

for (const [route, meta] of Object.entries(pages)) {
  let html = baseHtml;
  
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${meta.description}"`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${meta.canonical}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${meta.ogTitle}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${meta.ogDescription}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${meta.ogUrl}"`);
  
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`Created ${route}/index.html`);
}

console.log('Post-build: all page meta tags generated.');
