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
    description:
      "Jenga Agency is a Nairobi-based AI consulting and implementation firm that helps companies across Europe, the US, and Africa turn AI into measurable business results.",
    canonical: "https://jenga-agency.com",
    ogTitle: "Jenga Agency — AI Consulting & Implementation",
    ogDescription:
      "We help companies cut through the AI noise. From diagnosis to implementation, we make AI deliver real, measurable results.",
    ogUrl: "https://jenga-agency.com",
  },
  "/ai-consulting": {
    title: "AI Consulting & Implementation Services | Jenga Agency",
    description:
      "Jenga Agency helps businesses diagnose where AI creates real value, then implements the right solutions. From strategy to deployment — based in Nairobi, working globally.",
    canonical: "https://jenga-agency.com/ai-consulting",
    ogTitle: "AI Consulting & Implementation Services | Jenga Agency",
    ogDescription:
      "Jenga Agency helps businesses diagnose where AI creates real value, then implements the right solutions. From strategy to deployment — based in Nairobi, working globally.",
    ogUrl: "https://jenga-agency.com/ai-consulting",
  },
  "/about": {
    title: "About Jenga Agency | AI Consulting from Nairobi to the World",
    description:
      "Jenga Agency is a Nairobi-based AI consulting firm helping businesses across Europe, the US, and Africa turn AI into real results. Learn about our story and approach.",
    canonical: "https://jenga-agency.com/about",
    ogTitle: "About Jenga Agency | AI Consulting from Nairobi to the World",
    ogDescription:
      "Jenga Agency is a Nairobi-based AI consulting firm helping businesses across Europe, the US, and Africa turn AI into real results. Learn about our story and approach.",
    ogUrl: "https://jenga-agency.com/about",
  },
  "/contact": {
    title: "Contact Jenga Agency | Book an AI Discovery Call",
    description:
      "Get in touch with Jenga Agency for AI consulting, implementation, or software engineering. Book a discovery call or send us a message.",
    canonical: "https://jenga-agency.com/contact",
    ogTitle: "Contact Jenga Agency | Book an AI Discovery Call",
    ogDescription:
      "Get in touch with Jenga Agency for AI consulting, implementation, or software engineering. Book a discovery call or send us a message.",
    ogUrl: "https://jenga-agency.com/contact",
  },
};

function buildMetaTags(meta: RouteMeta): string {
  return [
    `<title>${meta.title}</title>`,
    `<meta name="description" content="${meta.description}" />`,
    `<link rel="canonical" href="${meta.canonical}" />`,
    `<meta property="og:title" content="${meta.ogTitle}" />`,
    `<meta property="og:description" content="${meta.ogDescription}" />`,
    `<meta property="og:url" content="${meta.ogUrl}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Jenga Agency" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join("\n    ");
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

      for (const [route, meta] of Object.entries(routes)) {
        // Replace the generic <title> with route-specific meta tags
        const metaTags = buildMetaTags(meta);
        const routeHtml = html.replace(
          /<title>.*?<\/title>/,
          metaTags
        );

        if (route === "/") {
          // Overwrite index.html for the root route
          fs.writeFileSync(indexPath, routeHtml);
        } else {
          // Create directory and index.html for sub-routes
          const routeDir = path.join(outDir, route.slice(1));
          fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.join(routeDir, "index.html"), routeHtml);
        }
      }

      console.log("[seo-prerender] Generated HTML files with unique meta tags for all routes.");
    },
  };
}
