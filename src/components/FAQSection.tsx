import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Where are you based and who do you work with?",
    a: "We're based in Nairobi, Kenya, and work with clients across Europe, the US, and Africa. We believe the best results come from being on the ground — understanding your teams, their workflows, and where they stand. We travel to our clients as much as possible, and complement on-site work with remote collaboration across time zones.",
  },
  {
    q: "Do you always build custom solutions?",
    a: "No. In most cases, the best approach is implementing a proven third-party AI tool — properly configured and connected to your data. We only build custom solutions when there's a genuine need that existing tools can't meet.",
  },
  {
    q: "How do you ensure AI projects align with our business goals?",
    a: "Every engagement starts with an in-depth diagnostic where we map AI opportunities to your specific strategic objectives and KPIs. We don't recommend technology for its own sake — every recommendation is tied to a measurable business outcome.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across a range of industries including financial services, logistics, retail, healthcare, and professional services. Our methodology is industry-agnostic — we focus on understanding your business context and applying AI where it creates the most value.",
  },
  {
    q: "How long does a typical AI engagement take?",
    a: "It depends on scope. An AI Opportunity Diagnostic typically takes 2–4 weeks. A full strategy-to-implementation engagement can range from 2 to 6 months. We'll give you a clear timeline after the initial assessment.",
  },
  {
    q: "Do you provide ongoing support after implementation?",
    a: "Yes. We offer ongoing support and optimisation packages to ensure your AI solutions continue to deliver results as your business evolves. This includes monitoring, retraining models, and scaling solutions as needed.",
  },
  {
    q: "Can you help with AI tool selection and vendor evaluation?",
    a: "Absolutely. Vendor evaluation and tool selection is a core part of our AI Strategy & Roadmap service. We assess the market, compare options against your requirements, and recommend the best fit — with no vendor bias.",
  },
  {
    q: "What if we need custom software development alongside AI implementation?",
    a: "Our in-house engineering team can handle custom development when it's genuinely needed. We also offer staff augmentation services, providing experienced developers who integrate seamlessly with your existing team.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
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
);

export default FAQSection;
