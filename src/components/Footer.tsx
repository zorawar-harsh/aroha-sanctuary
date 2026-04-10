import { Link } from "react-router-dom";
import arohaLogo from "@/assets/aroha-logo.jpeg";

const Footer = () => (
  <footer className="section-padding bg-[#d4d2d2]/30 border-t border-[#1f1d1c]/10 relative overflow-hidden">
{/*  */}    {/* Dark brown decorative elements */}
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#d1b2bc]/40 blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#c4b3ab]/40 blur-3xl translate-x-1/4 translate-y-1/4" />

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={arohaLogo} alt="Aroha" className="h-32 w-auto mix-blend-multiply mb-4" />
          <p className="text-lg font-semibold text-[#1f1d1c]/90 leading-relaxed">
            Inner Balance & Life Transitions
          </p>
          <p className="text-lg font-medium text-[#1f1d1c]/80 mt-2 leading-relaxed">
            A calm space for reflection, clarity, and emotional grounding.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-lg font-bold text-[#1f1d1c] mb-4 uppercase tracking-wider">Navigate</h4>
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
                className="text-lg font-semibold text-[#1f1d1c]/80 hover:text-[#94294d] hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans text-lg font-bold text-[#1f1d1c] mb-4 uppercase tracking-wider">Connect</h4>
          <div className="flex flex-col gap-2">
            <Link
              to="/contact"
              className="text-lg font-semibold text-[#1f1d1c]/80 hover:text-[#94294d] hover:translate-x-1 transition-all duration-300 w-fit"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:poonam.diwan@outlook.com"
              className="text-lg font-semibold text-[#1f1d1c]/80 hover:text-[#94294d] hover:translate-x-1 transition-all duration-300 w-fit"
            >
              poonam.diwan@outlook.com
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-[#1f1d1c]/10 text-center">
        <p className="text-base font-bold text-[#1f1d1c]/70">
          © {new Date().getFullYear()} Aroha. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
