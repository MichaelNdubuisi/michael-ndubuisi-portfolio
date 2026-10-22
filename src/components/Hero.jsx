
import { motion as Motion } from "framer-motion";
import heroImage from "../assets/images/Hero.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#020d1b] px-6 py-24 sm:px-10 lg:px-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#020d1b]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020d1b]/90 via-[#020d1b]/60 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Hero content */}
      <Motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl text-left"
      >
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Creative Digital Professional{" "}
          <span className="text-cyan-400">&amp; Web Developer</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
          I bring ideas to life through engaging content, thoughtful design,
          video, and modern web experiences.
        </p>

        <div className="mt-9 flex flex-wrap justify-start gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-[#020d1b] transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-cyan-400/50 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            Contact Me
          </a>
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;
