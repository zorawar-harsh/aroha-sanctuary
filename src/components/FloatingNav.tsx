import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
        <div className="glass-card flex items-center gap-1 px-2 py-1 rounded-full">
          <Link
            to="/"
            className="font-serif text-lg font-medium text-foreground px-3 py-1 tracking-wide"
          >
            Aroha
          </Link>
          <div className="w-px h-5 bg-border/50 mx-1" />
          {navItems.slice(1).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 rounded-full text-sm font-sans transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-sage/15 text-sage-dark font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Mobile nav */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="glass-card p-3 rounded-full"
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
            className="fixed inset-x-4 top-16 z-50 glass-card p-6 rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-xl text-base font-sans transition-all ${
                    location.pathname === item.path
                      ? "bg-sage/15 text-sage-dark font-medium"
                      : "text-muted-foreground hover:text-foreground"
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
