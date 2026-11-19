
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const navItems = ["Home", "About", "Services", "Projects", "Contact"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const socialLinks = [
    {
      href: "https://wa.me/2349167354451",
      label: "WhatsApp",
      icon: FaWhatsapp,
      hover: "hover:text-green-400",
    },
    {
      href: "https://www.linkedin.com/in/ndubuisi-michael-4b460537a",
      label: "LinkedIn",
      icon: FaLinkedin,
      hover: "hover:text-sky-400",
    },
    {
      href: "https://github.com/MichaelNdubuisi",
      label: "GitHub",
      icon: FaGithub,
      hover: "hover:text-white",
    },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#080b12]/90 text-white shadow-lg shadow-black/10 backdrop-blur-2xl"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">

        {/* Actual Mikos Digital Logo */}
        <a
          href="#home"
          aria-label="Mikos Digital Home"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
        >
          <img
            src="/mikos-logo-transparent.png"
            alt="Mikos Digital - Turning Ideas Into Digital Reality"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative py-2 text-sm font-medium text-white/65 transition-colors duration-300 hover:text-cyan-400"
            >
              {item}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-5 border-l border-white/10 pl-6 lg:flex">
          {socialLinks.map(({ href, label, icon: Icon, hover }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`text-white/55 transition-colors duration-300 ${hover}`}
            >
              <Icon size={19} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-all hover:border-cyan-400/50 hover:text-cyan-400 lg:hidden"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/[0.08] bg-[#080b12] lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 px-5 py-5 sm:px-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-all hover:bg-cyan-400/[0.08] hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-6 border-t border-white/[0.08] px-9 py-5">
              {socialLinks.map(({ href, label, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-white/60 transition-colors duration-300 ${hover}`}
                >
                  <Icon size={21} />
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
