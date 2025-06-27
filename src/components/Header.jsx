import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import devlyticLogo from "../assets/images/devlytic-logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp, FaTelegramPlane, FaGithub } from "react-icons/fa";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-primary/90 backdrop-blur-md text-text border-b border-white/10 shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={devlyticLogo} alt="Devlytic logo" className="w-10 h-10" />
          <span className="text-2xl font-semibold tracking-wide text-white">
            Devlytic
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-white">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-accent transition duration-300"
            >
              {item}
            </a>
          ))}

          {/* Social Icons */}
          <a
            href="https://wa.me/2347046999780"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
            title="WhatsApp"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="https://t.me/+2347046999780"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400"
            title="Telegram"
          >
            <FaTelegramPlane size={18} />
          </a>
          <a
            href="https://github.com/MichaelNdubuisi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-primary/95 px-6 pt-4 pb-6 space-y-4 text-sm font-medium text-white"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block hover:text-accent transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Social Icons in mobile menu */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/2347046999780"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://t.me/+2347046999780"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400"
              >
                <FaTelegramPlane size={20} />
              </a>
              <a
                href="https://github.com/MichaelNdubuisi"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
