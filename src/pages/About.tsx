import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { orgSchema } from "@/lib/schemas";
import founderPhoto from "@/assets/founder-portrait.jpg";

const metaDesc =
  "Jenga Agency is a Nairobi-based AI consulting firm helping businesses across Europe, the US, and Africa turn AI into real results. Learn about our story and approach.";

const About = () => (
  <>
    <Helmet>
      <title>About Jenga Agency | AI Consulting from Nairobi to the World</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href="https://jenga-agency.com/about" />
      <meta property="og:title" content="About Jenga Agency | AI Consulting from Nairobi to the World" />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content="https://jenga-agency.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jenga Agency" />
      <meta name="twitter:card" content="summary_large_image" />
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
              About <span className="text-gradient">Jenga Agency</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <p>
                Jenga Agency was founded in Nairobi in 2018 with a straightforward belief: <strong className="text-foreground">technology should solve real business problems.</strong>
              </p>
              <p>
                We started by doing exactly that — placing world-class Kenyan software engineers with companies across Europe and the US. Over the years, we built ERP systems, custom platforms, and digital products for businesses across multiple industries. We learned how companies actually operate from the inside: <strong className="text-foreground">how teams work, where processes break, and what technology can realistically fix.</strong>
              </p>
              <p>
                That experience is why we're now focused on the highest-impact thing we can do: <strong className="text-foreground">helping businesses navigate the AI revolution with clarity, speed, and honesty.</strong>
              </p>
              <p>
                We don't sell AI for its own sake. We diagnose what your business actually needs, implement the right solutions, and make sure your teams can sustain it. Sometimes the answer is "you don't need AI here" — and we'll tell you that too.
              </p>
              <p>
                Our engineering roots mean we don't just advise. When implementation requires custom development, <strong className="text-foreground">our in-house team delivers.</strong> When a third-party tool is the smarter choice, we'll configure it and connect it to your data. We're vendor-agnostic and outcome-focused.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">How We Work</h2>
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <p>
                We go on-site as much as possible. The best insights come from sitting with your teams, watching how work actually gets done, and understanding the real blockers — not from a remote slideshow. We travel to clients across Europe, the US, and Africa. Distance is never the obstacle.
              </p>
              <p>
                Our approach is fast and practical. A diagnostic takes up to 5 working days. A pilot delivers quick wins within a month. We move at the speed your business needs — not at consulting-industry pace.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who We Work With</h2>
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <p>
                We work with businesses across industries and geographies — from farms in Kenya to tech companies in Europe. What our clients share is a desire to use AI practically, not just talk about it.
              </p>
              <p>
                Our sweet spot is companies that know AI matters but need a clear-eyed partner to figure out where to focus and how to execute. If that sounds like you,{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  we should talk
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── The Founder ── */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">The Founder</h2>

            <div className="flex flex-col md:flex-row gap-10 items-start">
              <img
                src={founderPhoto}
                alt="Yoann Copreaux — Founder & CEO of Jenga Agency"
                className="shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover border border-border"
              />

              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold mb-1">Yoann Copreaux</h3>
                <p className="text-sm text-primary/60 font-medium mb-4">Founder &amp; CEO</p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Based in Nairobi, Yoann has spent years building and placing software engineering teams across borders, shipping products, and helping businesses adopt technology that actually works. He now leads Jenga's AI consulting, working directly with clients on diagnosis, strategy, and implementation.
                </p>
                <a
                  href="https://www.linkedin.com/in/yoanncopreaux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to see if we're the right fit?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a discovery call. 15 minutes, no commitment, no hard sell. We'll help you figure out whether AI makes sense for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity text-base"
            >
              Book a Discovery Call
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default About;
