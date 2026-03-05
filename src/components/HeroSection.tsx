import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(210 100% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 55%) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />

    {/* Glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          AI that works for
          <br />
          <span className="text-gradient">your business.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          We help companies cut through the AI noise. From diagnosis to implementation, we make AI deliver real, measurable results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity text-base"
          >
            Book a Discovery Call
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-md hover:bg-secondary transition-colors text-base"
          >
            See Our Services
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Based in Nairobi. On the ground with clients across Europe, the US, and Africa.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
