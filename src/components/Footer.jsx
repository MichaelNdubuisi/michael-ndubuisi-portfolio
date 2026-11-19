
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-scroll";

const navigation = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/2349167354451",
    icon: <FaWhatsapp />,
    hover: "hover:text-green-400 hover:border-green-400/40",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ndubuisi-michael-4b460537a",
    icon: <FaLinkedin />,
    hover: "hover:text-sky-400 hover:border-sky-400/40",
  },
  {
    label: "Email",
    href: "mailto:mr.michaelndubuisi@gmail.com",
    icon: <FaEnvelope />,
    hover: "hover:text-cyan-300 hover:border-cyan-400/40",
  },
  {
    label: "GitHub",
    href: "https://github.com/MichaelNdubuisi",
    icon: <FaGithub />,
    hover: "hover:text-white hover:border-white/30",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080b12] px-4 pb-7 pt-16 text-white sm:px-6 lg:px-8">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              aria-label="Mikos Digital home"
              className="group inline-flex items-center transition-opacity duration-300 hover:opacity-80"
            >
              <img
                src="/mikos-logo-transparent.png"
                alt="Mikos Digital — Turning Ideas Into Digital Reality"
                className="h-24 w-24 object-contain"
              />
            </a>

            <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-white/55 md:mx-0">
              We turn ideas into digital reality through cinematic
              advertising, engaging video content and creative
              storytelling that helps brands stand out.
            </p>

            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/35">
                Founded by
              </p>
              <p className="mt-1 text-sm font-semibold text-white/80">
                Michael Ndubuisi
              </p>
            </div>

            <a
              href="mailto:mr.michaelndubuisi@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Start a Conversation
              <FaArrowRight className="text-xs" />
            </a>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-white">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-center gap-4 md:items-start"
            >
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-sm text-white/50 transition-colors duration-300 hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="text-center md:text-left">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-white">
              Connect With Us
            </h3>

            <div className="flex justify-center gap-3 md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={
                    social.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  title={social.label}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-white/60 transition-all duration-300 hover:-translate-y-1 ${social.hover}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="mx-auto mt-5 max-w-[250px] text-xs leading-6 text-white/40 md:mx-0">
              Open to business enquiries, creative projects and
              collaborations across Nigeria and internationally.
            </p>
          </div>
        </div>

        {/* Brand statement */}
        <div className="flex flex-col items-center justify-between gap-5 border-b border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold text-white">
              Turning Ideas Into Digital Reality.
            </p>
            <p className="mt-1 text-xs text-white/40">
              Creative thinking. Powerful execution.
            </p>
          </div>

          <a
            href="https://michael-ndubuisi-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Visit Our Portfolio
            <FaArrowRight className="text-[10px]" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Mikos Digital. All rights reserved.
          </p>

          <p className="text-xs text-white/35">
            Designed with creativity. Built with purpose.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-[#080b12]"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
