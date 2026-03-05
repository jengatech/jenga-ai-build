import { motion } from "framer-motion";
import { Radar, Map, Cog, GraduationCap, Users } from "lucide-react";

const aiServices = [
  {
    icon: Radar,
    title: "AI Opportunity Diagnostic",
    points: [
      "Comprehensive assessment of where AI can drive value in your business.",
      "We map opportunities to your strategic goals and KPIs.",
      "Deliverable: prioritised AI roadmap with business cases.",
    ],
  },
  {
    icon: Map,
    title: "AI Strategy & Roadmap",
    points: [
      "Custom AI strategy aligned with your business objectives.",
      "Technology recommendations, vendor evaluation, build-vs-buy analysis.",
      "Clear implementation timeline and resource planning.",
    ],
  },
  {
    icon: Cog,
    title: "AI Implementation",
    points: [
      "We select, configure, and integrate the right AI tools for your business.",
      "Often the best solution is a best-in-class third-party platform — properly configured and connected to your data.",
      "Workflow automation, internal tools, customer-facing AI features.",
    ],
  },
  {
    icon: GraduationCap,
    title: "AI Training & Workshops",
    points: [
      "Hands-on training for teams at all levels.",
      "From executive AI literacy to technical implementation workshops.",
      "Custom programs tailored to your industry and maturity level.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Consulting & Implementation</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          From diagnostic to deployment — we help you navigate AI with clarity and confidence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {aiServices.map((s, i) => (
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
            <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
            <ul className="space-y-3">
              {s.points.map((p, j) => (
                <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      {/* Secondary: Staff Augmentation */}
      <div className="glow-line mb-16" />

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="bg-secondary/50 border border-border rounded-lg p-8 max-w-2xl"
      >
        <Users className="text-muted-foreground mb-4" size={24} />
        <h3 className="text-lg font-semibold mb-3">Software Engineering & Staff Augmentation</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Need dedicated software engineering talent? Our experienced Kenyan engineers work with companies across Europe and the US, integrating seamlessly with your existing team or delivering standalone projects.
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {["Dedicated Developers", "Team Augmentation", "Full-Stack Engineering", "Remote-First"].map((t) => (
            <span key={t} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
              {t}
            </span>
          ))}
        </div>
        <a href="#contact" className="text-sm font-medium text-primary hover:underline">
          Get in Touch →
        </a>
      </motion.article>
    </div>
  </section>
);

export default ServicesSection;
