import { Plugin } from "vite";
import * as fs from "fs";
import * as path from "path";

interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}

const routes: Record<string, RouteMeta> = {
  "/": {
    title: "Jenga Agency — AI Consulting & Implementation",
    description: "Jenga Agency is a Nairobi-based AI consulting and implementation firm that helps companies across Europe, the US, and Africa turn AI into measurable business results.",
    canonical: "https://jenga-agency.com",
    ogTitle: "Jenga Agency — AI Consulting & Implementation",
    ogDescription: "We help companies cut through the AI noise. From diagnosis to implementation, we make AI deliver real, measurable results.",
    ogUrl: "https://jenga-agency.com",
  },
  "/ai-consulting": {
    title: "AI Consulting & Implementation Services | Jenga Agency",
    description: "Jenga Agency helps businesses diagnose where AI creates real value, then implements the right solutions. From strategy to deployment — based in Nairobi, working globally.",
    canonical: "https://jenga-agency.com/ai-consulting",
    ogTitle: "AI Consulting & Implementation Services | Jenga Agency",
    ogDescription: "Jenga Agency helps businesses diagnose where AI creates real value, then implements the right solutions. From strategy to deployment — based in Nairobi, working globally.",
    ogUrl: "https://jenga-agency.com/ai-consulting",
  },
  "/about": {
    title: "About Jenga Agency | AI Consulting from Nairobi to the World",
    description: "Jenga Agency is a Nairobi-based AI consulting firm helping businesses across Europe, the US, and Africa turn AI into real results. Learn about our story and approach.",
    canonical: "https://jenga-agency.com/about",
    ogTitle: "About Jenga Agency | AI Consulting from Nairobi to the World",
    ogDescription: "Jenga Agency is a Nairobi-based AI consulting firm helping businesses across Europe, the US, and Africa turn AI into real results. Learn about our story and approach.",
    ogUrl: "https://jenga-agency.com/about",
  },
  "/contact": {
    title: "Contact Jenga Agency | Book an AI Discovery Call",
    description: "Get in touch with Jenga Agency for AI consulting, implementation, or software engineering. Book a discovery call or send us a message.",
    canonical: "https://jenga-agency.com/contact",
    ogTitle: "Contact Jenga Agency | Book an AI Discovery Call",
    ogDescription: "Get in touch with Jenga Agency for AI consulting, implementation, or software engineering. Book a discovery call or send us a message.",
    ogUrl: "https://jenga-agency.com/contact",
  },
};

function removeDuplicateTags(html: string): string {
  // Remove duplicate meta/title/link tags by keeping only the first occurrence
  const seen = new Set<string>();
  return html.replace(/<(title|meta|link)[^>]*>/g, (match) => {
    // Create a normalized key for deduplication
    let key = match;
    if (match.startsWith("<title")) key = "title";
    else if (match.includes('name="description"')) key = "meta-description";
    else if (match.includes('rel="canonical"')) key = "link-canonical";
    else if (match.includes('property="og:title"')) key = "og:title";
    else if (match.includes('property="og:description"')) key = "og:description";
    else if (match.includes('property="og:url"')) key = "og:url";
    else if (match.includes('property="og:type"')) key = "og:type";
    else if (match.includes('property="og:site_name"')) key = "og:site_name";
    else if (match.includes('name="twitter:card"')) key = "twitter:card";
    else return match; // keep non-SEO tags as-is

    if (seen.has(key)) return ""; // remove duplicate
    seen.add(key);
    return match;
  });
}

function applyMeta(html: string, meta: RouteMeta): string {
  let result = html;

  // Replace title
  result = result.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

  // Replace meta description
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // Replace canonical
  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // Replace OG tags
  result = result.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );
  result = result.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${meta.ogDescription}" />`
  );
  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${meta.ogUrl}" />`
  );

  // Ensure og:type and og:site_name exist
  if (!result.includes('property="og:type"')) {
    result = result.replace("</head>", `    <meta property="og:type" content="website" />\n  </head>`);
  }
  if (!result.includes('property="og:site_name"')) {
    result = result.replace("</head>", `    <meta property="og:site_name" content="Jenga Agency" />\n  </head>`);
  }

  // Clean up any blank lines left from removed duplicates
  result = result.replace(/\n\s*\n\s*\n/g, "\n\n");

  return result;
}

export default function seoPrerender(): Plugin {
  return {
    name: "seo-prerender",
    enforce: "post",
    closeBundle() {
      const outDir = path.resolve(process.cwd(), "dist");
      const indexPath = path.join(outDir, "index.html");

      if (!fs.existsSync(indexPath)) return;

      const html = fs.readFileSync(indexPath, "utf-8");
      // First remove any duplicate tags from the built HTML
      const cleanHtml = removeDuplicateTags(html);

      for (const [route, meta] of Object.entries(routes)) {
        const routeHtml = applyMeta(cleanHtml, meta);

        if (route === "/") {
          fs.writeFileSync(indexPath, routeHtml);
        } else {
          const routeDir = path.join(outDir, route.slice(1));
          fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.join(routeDir, "index.html"), routeHtml);
        }
      }

      console.log("[seo-prerender] Generated unique HTML files for all routes.");
    },
  };
}
