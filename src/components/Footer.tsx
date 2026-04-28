import { Link } from "react-router-dom";
import arohaLogo from "@/assets/logo.png";
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";



const Footer = () => (
  <footer className="py-12 md:py-20 px-6 bg-[#4a0e15] border-t border-white/10 relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#d1b2bc]/40 blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#c4b3ab]/40 blur-3xl translate-x-1/4 translate-y-1/4" />

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <img src={arohaLogo} alt="Aroha" className="h-20 w-auto mix-blend-multiply mb-3" />
          <p className="text-base font-semibold text-white/90 leading-relaxed">
            Inner Balance &amp; Life Transitions
          </p>
          <p className="text-base font-medium text-white/70 mt-1 leading-relaxed">
            A calm space for reflection, clarity, and emotional grounding.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="font-sans text-base font-bold text-white mb-3 uppercase tracking-wider">Navigate</h4>
          <div className="flex flex-col gap-1.5">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              // { label: "How I Work", path: "/approach" },
              { label: "Services", path: "/services" },
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Disclaimer", path: "/disclaimer" },
              { label: "Terms & Conditions", path: "/terms" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-base font-semibold text-white/80 hover:text-white transition-colors duration-200 w-fit"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-sans text-base font-bold text-white mb-3 uppercase tracking-wider">Connect</h4>
          <div className="flex flex-col gap-1.5">
            <Link
              to="/connect"
              className="text-base font-semibold text-white/80 hover:text-white transition-colors duration-200 w-fit"
            >
              Book &amp; Connect
            </Link>
            <a
              href="mailto:poonam.diwan@outlook.com"
              className="text-base font-semibold text-white/80 hover:text-white transition-colors duration-200 w-fit"
            >
              &#9993; poonam.diwan@outlook.com
            </a>
            <div className="flex gap-1 lg:gap-2 ">
              <a
                href="https://wa.me/919899630959"
                className="text-base flex items-center gap-2 font-semibold text-white/80 hover:text-white transition-colors duration-200 w-fit"
              >
                <FaWhatsapp className="size-7" />
              </a>
              <a href="https://www.instagram.com/mindshift.poonamdiwan/"
                className="text-base flex items-center gap-2 font-semibold text-white/80 hover:text-white transition-colors duration-200 w-fit"
              >
                <AiOutlineInstagram className="size-7" />
              </a>
              <a href="https://www.linkedin.com/company/mindshift-therapy-by-pooonamdiwan/?viewAsMember=true"
                className="text-base flex items-center gap-2 font-semibold text-white/80 hover:text-white transition-colors duration-200 w-fit"
              >
                <CiLinkedin className="size-7" />
              </a>
              <a href=""
                className="text-base flex items-center gap-2 font-semibold text-white/80 hover:text-white transition-colors duration-200 w-fit"
              >
                <AiOutlineYoutube className="size-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-5 border-t border-white/10 text-center">
        <p className="text-sm font-bold text-white/60">
          © {new Date().getFullYear()} | MindShift Therapy by Poonam Diwan • All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
