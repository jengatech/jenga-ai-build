import { motion } from "framer-motion";
import { Search, Target, Wrench, Boxes } from "lucide-react";

const values = [
  {
    icon: Search,
    title: "Honest Assessment",
    desc: "We tell you what you actually need, not what's trendy.",
  },
  {
    icon: Target,
    title: "Business-First Strategy",
    desc: "Every recommendation ties to measurable business outcomes.",
  },
  {
    icon: Wrench,
    title: "End-to-End Implementation",
    desc: "We don't just advise. We select the right tools, plug in your data, and get you running.",
  },
  {
    icon: Boxes,
    title: "Build Only When Needed",
    desc: "Most of the time, the best solution is an existing tool configured properly. When custom development is genuinely needed, our in-house engineering team delivers.",
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

const ProblemSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Everyone's talking about AI.<br />
          <span className="text-muted-foreground">Few know where to start.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Most companies waste time and budget on AI initiatives that don't connect to business goals. We fix that. We start with honest diagnosis — sometimes the answer is "you don't need AI here." When it is the answer, we implement it properly.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
          >
            <v.icon className="text-primary mb-4" size={28} />
            <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
