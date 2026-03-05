import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where are you based and who do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're based in Nairobi, Kenya, and work with clients across Europe, the US, and Africa. We believe the best results come from being on the ground — understanding your teams, their workflows, and where they stand. We travel to our clients as much as possible, and complement on-site work with remote collaboration across time zones.",
      },
    },
    {
      "@type": "Question",
      name: "Do you always build custom solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. In most cases, the best approach is implementing a proven third-party AI tool — properly configured and connected to your data. We only build custom solutions when there's a genuine need that existing tools can't meet.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical AI engagement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Faster than you'd expect. An AI Opportunity Diagnostic takes up to 5 working days depending on the size of your business. A pilot phase — where we implement quick wins for key teams and train them — takes about a month. Full implementation varies based on scope and ambition. We give you a clear timeline after the diagnostic.",
      },
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jenga Agency",
  description:
    "Jenga Agency is a Nairobi-based AI consulting and implementation firm that helps companies across Europe, the US, and Africa turn AI into measurable business results.",
  url: "https://jenga-agency.com",
  areaServed: ["Europe", "United States", "Africa"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  serviceType: [
    "AI Consulting",
    "AI Strategy",
    "AI Implementation",
    "AI Training",
    "Software Engineering",
    "Staff Augmentation",
  ],
};

const Index = () => (
  <>
    <Helmet>
      <title>Jenga Agency — AI Consulting & Implementation</title>
      <meta
        name="description"
        content="Jenga Agency is a Nairobi-based AI consulting and implementation firm that helps companies across Europe, the US, and Africa turn AI into measurable business results."
      />
      <link rel="canonical" href="https://jenga-agency.com" />
      <meta property="og:title" content="Jenga Agency — AI Consulting & Implementation" />
      <meta
        property="og:description"
        content="We help companies cut through the AI noise. From diagnosis to implementation, we make AI deliver real, measurable results."
      />
      <meta property="og:url" content="https://jenga-agency.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <MethodologySection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
