import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="section-padding bg-fog/50 border-t border-border/30">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl font-medium text-foreground mb-2">Aroha</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Inner Balance & Life Transitions
          </p>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            A calm space for reflection, clarity, and emotional grounding.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Navigate</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "How I Work", path: "/approach" },
              { label: "Services", path: "/services" },
              { label: "Reflections", path: "/reflections" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Connect</h4>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border/30 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aroha. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
