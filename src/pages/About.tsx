import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <>
    <Helmet>
      <title>About — Jenga Agency</title>
      <meta
        name="description"
        content="Learn about Jenga Agency — a Nairobi-based AI consulting firm working on the ground with clients across Europe, the US, and Africa."
      />
      <link rel="canonical" href="https://jenga-agency.com/about" />
    </Helmet>

    <Navbar />
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          About Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Placeholder — detailed about content coming soon.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default About;
