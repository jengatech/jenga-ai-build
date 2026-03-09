import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, MapPin, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { orgSchema } from "@/lib/schemas";

const metaDesc =
  "Get in touch with Jenga Agency for AI consulting, implementation, or software engineering. Book a discovery call or send us a message.";

const inputClasses =
  "w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Jenga Agency | Book an AI Discovery Call</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href="https://jenga-agency.com/contact" />
        <meta property="og:title" content="Contact Jenga Agency | Book an AI Discovery Call" />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content="https://jenga-agency.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jenga Agency" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(hsl(210 100% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 55%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Get in <span className="text-gradient">Touch</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ── Book a Discovery Call ── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a Discovery Call</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                Not sure where to start with AI? That's what this call is for. In 15 minutes, we'll understand your business, discuss where AI might create value, and figure out whether we're the right fit. No commitment, no hard sell.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl"
            >
              {/* Calendly embed */}
              <div className="w-full rounded-lg border border-border overflow-hidden bg-card">
                <iframe
                  src="https://calendly.com/yoanncopreaux/ai-discovery-call-15-min"
                  title="Book a 15-minute AI Discovery Call"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Send Us a Message ── */}
        <section className="py-24 md:py-32 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prefer to write?</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                Tell us a bit about your business and what you're exploring. We'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-lg"
            >
              {submitted ? (
                <div className="bg-card border border-primary/30 rounded-lg p-8">
                  <p className="text-lg font-semibold mb-2">Thanks!</p>
                  <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your business and what you're exploring..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        Sending...
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── Other Ways to Reach Us ── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-10">Other Ways to Reach Us</h2>

              <div className="grid sm:grid-cols-3 gap-8 max-w-3xl">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Email</p>
                    <a
                      href="mailto:info@jenga-agency.com"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      info@jenga-agency.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Linkedin className="text-primary shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/jenga-agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Jenga Agency
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Nairobi, Kenya — working with clients across Europe, the US, and Africa
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
