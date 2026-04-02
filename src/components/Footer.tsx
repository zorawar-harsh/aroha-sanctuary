import { Link } from "react-router-dom";
import arohaLogo from "@/assets/aroha-logo.jpeg";

const Footer = () => (
  <footer className="section-padding bg-fog/50 border-t border-border/30 relative overflow-hidden">
{/*  */}    {/* Dark brown decorative elements */}
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-amber-950/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-amber-900/20 blur-3xl translate-x-1/4 translate-y-1/4" />

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={arohaLogo} alt="Aroha" className="h-16 w-auto rounded mb-4" />
          <p className="text-base font-semibold text-amber-900/90 leading-relaxed">
            Inner Balance & Life Transitions
          </p>
          <p className="text-base font-medium text-amber-900/80 mt-2 leading-relaxed">
            A calm space for reflection, clarity, and emotional grounding.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-lg font-bold text-amber-950 mb-4 uppercase tracking-wider">Navigate</h4>
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
                className="text-base font-semibold text-amber-900/80 hover:text-earthy-rust hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans text-lg font-bold text-amber-950 mb-4 uppercase tracking-wider">Connect</h4>
          <Link
            to="/contact"
            className="text-base font-semibold text-amber-900/80 hover:text-earthy-rust hover:translate-x-1 transition-all duration-300 w-fit"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border/30 text-center">
        <p className="text-sm font-bold text-amber-900/70">
          © {new Date().getFullYear()} Aroha. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
