import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => (
  <>
    <Helmet>
      <title>Contact — Jenga Agency</title>
      <meta
        name="description"
        content="Get in touch with Jenga Agency. Book a discovery call or send us a message about your AI consulting needs."
      />
      <link rel="canonical" href="https://jenga-agency.com/contact" />
    </Helmet>

    <Navbar />
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Contact
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Placeholder — contact form and details coming soon.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default Contact;
