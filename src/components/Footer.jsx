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
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Tech Stack", to: "stack" },
  { label: "Contact", to: "contact" },
];

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/2347046999780",
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
    <footer className="relative overflow-hidden border-t border-[#153550] bg-[#020d1b] px-5 pb-6 pt-14 text-white sm:px-8 lg:px-12">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.7fr] lg:gap-16">
          {/* Branding */}
          <div className="text-center md:text-left">
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-xl font-extrabold text-cyan-400 transition-colors group-hover:bg-cyan-400/20">
                M
              </span>

              <span className="text-left">
                <span className="block text-lg font-bold tracking-tight text-white sm:text-xl">
                  Michael Ndubuisi
                </span>
                <span className="mt-1 block text-xs tracking-wide text-blue-200/60">
                  Web Developer & Digital Creative
                </span>
              </span>
            </a>

            <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-blue-100/60 md:mx-0">
              Turning ideas into engaging digital experiences through
              creativity, technology, and thoughtful design.
            </p>

            <a
              href="mailto:mr.michaelndubuisi@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Let's build something together
              <FaArrowRight className="text-xs" />
            </a>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-2"
            >
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-sm text-blue-100/60 transition-colors hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="text-center md:text-left">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Connect With Me
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
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-[#153550] bg-[#071629] text-lg text-blue-100/70 transition-all duration-300 hover:-translate-y-1 ${social.hover}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-blue-100/50">
              Available for opportunities and creative collaborations.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-5 text-blue-100/40">
            © {new Date().getFullYear()} Michael Ndubuisi. All rights reserved.
          </p>

          <p className="text-xs text-blue-100/40">
            Designed with creativity. Built with purpose.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-[#020d1b]"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}