import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Radar, Map, Cog, GraduationCap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { orgSchema } from "@/lib/schemas";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const services = [
  {
    icon: Radar,
    title: "AI Opportunity Diagnostic",
    subtitle: "Up to 5 working days",
    body: "We come to you. We sit with your teams, map your workflows, and identify exactly where AI can drive value in your business. No generic frameworks — just honest assessment tied to your specific operations and goals.",
    bullets: [
      "On-site assessment with key stakeholders and department leads",
      "Mapping of workflows, pain points, and automation opportunities",
      "Prioritised AI roadmap with clear business cases for each opportunity",
      "Honest recommendation on what's worth pursuing — and what isn't",
    ],
    footer: "This is where most engagements start. It gives you clarity before committing budget.",
  },
  {
    icon: Map,
    title: "AI Strategy & Roadmap",
    body: "Once we know where AI creates value, we help you plan the smartest path forward. That means choosing the right tools, defining build-vs-buy decisions, and creating a realistic implementation timeline your teams can actually execute.",
    bullets: [
      "Custom AI strategy aligned with your business objectives",
      "Technology and tool recommendations (we're vendor-agnostic)",
      "Build-vs-buy analysis for each use case",
      "Implementation roadmap with timelines, resource needs, and milestones",
      "Vendor evaluation and procurement guidance where needed",
    ],
  },
  {
    icon: Cog,
    title: "AI Implementation",
    subtitle: "Pilot phase: approximately 1 month",
    body: "We don't just hand you a strategy deck and walk away. We implement. Most of the time, the best solution is a proven third-party AI tool — properly configured and connected to your data. We select it, set it up, and get your teams using it. When custom development is genuinely needed, our in-house software engineering team builds it.",
    bullets: [
      "Tool selection, configuration, and integration with your existing systems",
      "Quick wins implemented for key managers and departments during pilot",
      "Custom development only when off-the-shelf tools can't solve the problem",
      "Workflow automation, internal tools, and customer-facing AI features",
      "Full technical handover and documentation",
    ],
  },
  {
    icon: GraduationCap,
    title: "AI Training & Workshops",
    body: "AI tools are only as good as the people using them. We train your teams — from executives who need to understand the strategic landscape to operators who need to use AI tools daily.",
    bullets: [
      "Executive AI literacy sessions — what AI can and can't do for your business",
      "Hands-on team workshops — practical, tool-specific training",
      "Department-specific programmes tailored to actual workflows",
      "Train-the-trainer options for long-term internal capability building",
    ],
  },
];

const methodologySteps = [
  {
    num: "01",
    title: "Diagnose",
    subtitle: "up to 5 days",
    desc: "We go on-site, understand your teams, workflows, and goals. We identify exactly where AI creates value — and where it doesn't.",
  },
  {
    num: "02",
    title: "Pilot",
    subtitle: "~1 month",
    desc: "We implement quick wins for key managers and departments, train your people, and prove impact fast. This is where you see results, not just slides.",
  },
  {
    num: "03",
    title: "Scale",
    desc: "We roll out across the business, integrating the right tools and building custom solutions only when needed. Each phase is scoped and budgeted independently.",
  },
  {
    num: "04",
    title: "Support",
    desc: "Ongoing optimisation, training, and support as your AI maturity grows. We stay involved as long as you need us — and step back when you don't.",
  },
];

const industries = [
  "Agriculture",
  "Energy",
  "Finance",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Technology",
];

const faqs = [
  {
    q: "Who is this for?",
    a: "We work with established businesses — typically companies with meaningful revenue and operations complex enough that AI can drive real impact. If you have teams, workflows, and data, there's likely something we can help with.",
  },
  {
    q: "Do you always recommend AI?",
    a: "No. If the best solution to your problem is a simple process change or a non-AI tool, we'll tell you. We'd rather give you honest advice than sell you something you don't need.",
  },
  {
    q: "What does an AI diagnostic cost?",
    a: "Pricing depends on the size and complexity of your business. Get in touch for a conversation — there's no commitment and no hard sell.",
  },
  {
    q: "Can you work with our existing IT team?",
    a: "Absolutely. We integrate with your internal teams, not replace them. Our role is to bring AI expertise and accelerate execution, while building your team's capability to sustain it.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const metaDesc =
  "Jenga Agency helps businesses diagnose where AI creates real value, then implements the right solutions. From strategy to deployment — based in Nairobi, working globally.";

const AIConsulting = () => (
  <>
    <Helmet>
      <title>AI Consulting & Implementation Services | Jenga Agency</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href="https://jenga-agency.com/ai-consulting" />
      <meta property="og:title" content="AI Consulting & Implementation Services | Jenga Agency" />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content="https://jenga-agency.com/ai-consulting" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jenga Agency" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <Navbar />

    <main>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
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
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              AI Consulting &{" "}
              <span className="text-gradient">Implementation</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-4 font-bold">
              Cut through the AI noise. Get results.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Every business knows AI matters. Few know where to start, what to prioritise, or how to avoid wasting budget on hype. We go on-site, understand your teams and workflows, and build a clear path from diagnosis to measurable impact.
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

      {/* ── What We Do ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              We offer four core services that take you from "we should probably do something with AI" to a fully operational, team-adopted AI capability. Most engagements start with a diagnostic — because the right strategy depends on understanding where you actually are.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-colors"
              >
                <s.icon className="text-primary mb-4" size={28} />
                <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                {s.subtitle && (
                  <span className="text-xs text-primary/60 font-medium">{s.subtitle}</span>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-5">
                  {s.body}
                </p>
                <p className="text-sm font-semibold text-foreground mb-3">What you get:</p>
                <ul className="space-y-2.5 mb-4">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                {s.footer && (
                  <p className="text-sm text-muted-foreground/80 italic">{s.footer}</p>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Methodology</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We follow a clear four-step process. Every engagement is structured to deliver value fast — not stretch into months of analysis.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative"
              >
                <span className="text-5xl font-bold text-primary/10">{s.num}</span>
                <h3 className="text-xl font-semibold mt-2 mb-1">{s.title}</h3>
                {s.subtitle && (
                  <span className="text-xs text-primary/60 font-medium">{s.subtitle}</span>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{s.desc}</p>
                {i < methodologySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 border-t border-dashed border-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Work With</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              AI opportunities exist in every sector. We adapt our approach to your specific industry context, regulations, and operational realities.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-8">
            {industries.map((ind) => (
              <span
                key={ind}
                className="text-sm text-muted-foreground border border-border rounded-full px-5 py-2 hover:border-primary/30 transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Working in a different industry? The diagnostic process works across all sectors.{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Get in touch
            </Link>{" "}
            and we'll tell you what's possible.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
              Not sure where to start with AI?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              That's exactly what the diagnostic is for. Book a 15-minute discovery call and we'll help you figure out whether AI is the right move for your business — and where to focus first.
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

export default AIConsulting;
