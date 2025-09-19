import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a36] text-gray-400 px-6 py-10 fade-in-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-text">Michael Ndubuisi</h3>
          <p className="text-sm text-gray-500 mt-1">Creative Freelance Web Developer</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer transition"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer transition"
          >
            Projects
          </Link>
          <Link
            to="stack"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer transition"
          >
            Tech Stack
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer transition"
          >
            Contact
          </Link>
        </div>

        {/* Contact Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://wa.me/2347046999780"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/ndubuisi-michael-4b460537a"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mr.michaelndubuisi@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/MichaelNdubuisi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Michael Ndubuisi. All rights reserved.
      </div>
    </footer>
  );
}
