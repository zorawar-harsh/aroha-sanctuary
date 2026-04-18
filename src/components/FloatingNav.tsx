import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import arohaLogo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Book & connect", path: "/connect" },
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
        <div className="mx-auto flex max-w-[2000px] items-center justify-between pl-1 pr-3 py-2 sm:px-6 sm:py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-9">
            <img src={arohaLogo} alt="Aroha" className="h-20 w-72 sm:h-20 sm:w-80 object-contain" />
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Desktop Contact Button - Hidden on small screens, shown on md+ */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="rounded-full bg-[#f8d3c1] text-[#511820] px-5 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:bg-[#f4b79d]"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Toggle Button - Hidden on md+ */}
          <div className="flex items-center gap-2 md:hidden">
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-24 z-40 rounded-3xl bg-[#521920]/95 border border-[#1f1d1c]/30 shadow-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {/* Contact Button inside Mobile Menu */}
              <Link
                to="/contact"
                className="rounded-2xl px-4 py-3 text-base font-bold bg-[#f8d3c1] text-[#511820] transition-all duration-300 shadow-sm hover:bg-[#f4b79d] mb-2 text-center"
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

      <div className="h-20" />
    </>
  );
};

export default FloatingNav;