import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Jenga Agency</h2>

        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Jenga Agency was founded in Nairobi with a simple belief: technology should solve real business problems.
          </p>
          <p>
            We started by placing world-class Kenyan software engineers with companies around the globe. Over the years, we've built ERP systems, custom platforms, and digital solutions for businesses across multiple industries.
          </p>
          <p>
            Today, our focus is clear: helping companies navigate the AI revolution with honest advice, practical strategy, and hands-on implementation. Our engineering roots mean we don't just consult — we build.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
