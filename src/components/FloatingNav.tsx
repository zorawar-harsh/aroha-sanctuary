import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import arohaLogo from "@/assets/aroha-logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  // { label: "Working", path: "/approach" },
  { label: "Services", path: "/services" },
  // { label: "Reflections", path: "/reflections" },
  { label: "Book & Contact", path: "/connect" },
  { label: "Testimonial", path: "/testimonial" },
  { label: "Blog", path: "/blog" },
];

const FloatingNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <motion.nav
        className="fixed inset-x-0 top-0 z-50 bg-[#4a0e15]/95 backdrop-blur-xl border-b border-[#1f1d1c]/30 shadow-lg"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-[2000px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-9">
            <img src={arohaLogo} alt="Aroha" className="h-14 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-3 flex-wrap">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-[#1f1d1c]/80 text-white"
                    : "text-white/90 hover:text-white hover:bg-[#1f1d1c]/40"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="rounded-full bg-[#f8d3c1] text-[#511820] px-5 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:bg-[#f4b79d]"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-[#f8d3c1] text-[#511820] px-3 py-2 text-xs font-semibold transition-all duration-300 shadow-lg hover:bg-[#f4b79d]"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1f1d1c]/80 text-white transition hover:bg-[#1f1d1c]"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl bg-[#521920]/95 border border-[#1f1d1c]/30 shadow-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              <Link
                to="/contact"
                className="rounded-2xl px-4 py-3 text-base font-semibold bg-[#f8d3c1] text-[#511820] transition-all duration-300 shadow-sm hover:bg-[#f4b79d]"
              >
                Contact Me
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-[#1f1d1c]/70 text-white"
                      : "text-gray-200/90 hover:text-white hover:bg-[#1f1d1c]/40"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20 md:hidden" />
      <div className="hidden md:block h-20" />
    </>
  );
};

export default FloatingNav;
