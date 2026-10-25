import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const navItems = ["Home", "About", "Services", "Projects", "Contact"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020d1b]/85 text-white shadow-sm backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-8 lg:px-12">
        {/* Logo — aligned to the far left */}
        <a
          href="#home"
          aria-label="Michael Ndubuisi — Home"
          className="mr-auto shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          <span className="flex items-center whitespace-nowrap text-lg font-extrabold tracking-tight sm:text-xl">
            <span className="text-white">Michael</span>
            <span className="ml-1.5 text-accent">Ndubuisi</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative py-2 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-accent"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden items-center gap-4 border-l border-white/10 pl-5 lg:flex">
          <a
            href="https://wa.me/2347046999780"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="text-white/70 transition-colors hover:text-green-400"
          >
            <FaWhatsapp size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/ndubuisi-michael-4b460537a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="text-white/70 transition-colors hover:text-sky-400"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/MichaelNdubuisi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="text-white/70 transition-colors hover:text-white"
          >
            <FaGithub size={18} />
          </a>
        </div>

        {/* Mobile / Tablet Menu Toggle */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-accent/50 hover:text-accent lg:hidden"
        >
          {isMobileMenuOpen ? <HiX size={25} /> : <HiMenu size={25} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#041326]/95 px-5 sm:px-8 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-cyan-400/10 hover:text-accent"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-5 border-t border-white/10 py-4">
              <a
                href="https://wa.me/2347046999780"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white/70 transition-colors hover:text-green-400"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ndubuisi-michael-4b460537a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 transition-colors hover:text-sky-400"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/MichaelNdubuisi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/70 transition-colors hover:text-white"
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