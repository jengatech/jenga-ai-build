export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jenga Agency",
  url: "https://jenga-agency.com",
  description:
    "Jenga Agency is a Nairobi-based AI consulting and implementation firm that works on the ground with companies across Europe, the US, and Africa to turn AI into measurable business results.",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Yoann Copreaux",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: ["Europe", "United States", "Africa", "Kenya"],
  knowsAbout: [
    "AI Consulting",
    "AI Implementation",
    "AI Strategy",
    "AI Training",
    "Software Engineering",
  ],
};
