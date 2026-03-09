import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "AI Consulting", href: "/ai-consulting" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
            Jenga<span className="text-primary">.</span>
          </Link>
          <p className="text-xs text-muted-foreground mt-2">
            AI Consulting · Strategy · Implementation · Training
          </p>
          <p className="text-xs text-muted-foreground mt-1">Nairobi, Kenya</p>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="glow-line mt-8 mb-6" />

      <p className="text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Jenga Agency. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
