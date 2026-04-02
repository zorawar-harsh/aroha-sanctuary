import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import arohaLogo from "@/assets/aroha-logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "How I Work", path: "/approach" },
  { label: "Services", path: "/services" },
  { label: "Reflections", path: "/reflections" },
  { label: "Contact", path: "/contact" },
];

const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        animate={{
          paddingInline: scrolled ? "1.5rem" : "2rem",
          paddingBlock: scrolled ? "0.5rem" : "0.75rem",
          opacity: scrolled ? 0.85 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="bg-amber-950/95 backdrop-blur-md border border-amber-900/50 shadow-lg flex items-center gap-1 px-2 py-1 rounded-full">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-full text-base font-sans font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                location.pathname === item.path
                  ? "bg-amber-900/60 text-white font-medium"
                  : "text-amber-100/70 hover:text-white hover:bg-amber-900/40"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Website Logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-8 z-50">
        <Link to="/">
          <img src={arohaLogo} alt="Aroha" className="h-12 md:h-16 w-auto rounded-xl bg-amber-950/95 backdrop-blur-md border border-amber-900/50 p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" />
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="bg-amber-950/95 text-amber-50 backdrop-blur-md border border-amber-900/50 shadow-lg p-3 rounded-full"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-16 z-50 bg-amber-950/95 backdrop-blur-xl border border-amber-900/50 shadow-2xl p-6 rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-4 rounded-xl text-lg font-sans font-bold transition-all hover:pl-7 ${
                    location.pathname === item.path
                      ? "bg-amber-900/60 text-white font-medium"
                      : "text-amber-100/70 hover:text-white hover:bg-amber-900/40"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
