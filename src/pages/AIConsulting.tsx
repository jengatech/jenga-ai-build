import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AIConsulting = () => (
  <>
    <Helmet>
      <title>AI Consulting — Jenga Agency</title>
      <meta
        name="description"
        content="Expert AI consulting services from Jenga Agency. We help businesses implement AI strategies that deliver measurable results."
      />
      <link rel="canonical" href="https://jenga-agency.com/ai-consulting" />
    </Helmet>

    <Navbar />
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          AI Consulting
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Placeholder — detailed AI consulting content coming soon.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default AIConsulting;
