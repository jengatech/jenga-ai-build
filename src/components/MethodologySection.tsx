import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Assess", desc: "We diagnose your current state, goals, and AI readiness." },
  { num: "02", title: "Design", desc: "We create a strategy and pilot plan tailored to your business." },
  { num: "03", title: "Build & Deploy", desc: "We implement, test, and launch AI solutions." },
  { num: "04", title: "Support & Scale", desc: "Ongoing optimisation, training, and scaling support." },
];

const MethodologySection = () => (
  <section id="methodology" className="py-24 md:py-32">
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
          A clear, repeatable process that de-risks your AI investment.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative"
          >
            <span className="text-5xl font-bold text-primary/10">{s.num}</span>
            <h3 className="text-xl font-semibold mt-2 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 -right-3 w-6 border-t border-dashed border-primary/20" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodologySection;
