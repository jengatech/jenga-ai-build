import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Methodology", href: "#methodology" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Jenga<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://calendly.com/yoanncopreaux/ai-discovery-call-15-min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md text-center hover:opacity-90 transition-opacity"
                onClick={() => setOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
