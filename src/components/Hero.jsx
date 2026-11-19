
import { motion as Motion } from "framer-motion";
import heroImage from "../assets/images/Hero.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080b12] px-6 pb-20 pt-32 sm:px-10 lg:px-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-[#080b12]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080b12] via-[#080b12]/85 to-[#080b12]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-[#080b12]/20" />

      {/* Decorative Lighting */}
      <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Hero Content */}
      <Motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="max-w-4xl">

          {/* Brand Introduction */}
          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              Mikos Digital Creative Studio
            </span>
          </Motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            We Turn Ideas
            <br />
            Into{" "}
            <span className="text-cyan-400">
              Powerful Visual Stories.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            We create cinematic advertisements, engaging UGC-style videos,
            and professional video content that help brands capture attention,
            connect with audiences, and stand out.
          </p>

          {/* Services Highlights */}
          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-wider text-white/65 sm:text-sm">
            <span>Cinematic Advertising</span>
            <span className="text-cyan-400">/</span>
            <span>UGC Video Production</span>
            <span className="text-cyan-400">/</span>
            <span>Video Editing</span>
          </div>

          {/* Call To Action */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-lg bg-cyan-400 px-7 py-4 font-bold text-[#080b12] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              Explore Our Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/[0.04] px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              Start a Project
            </a>
          </div>

          {/* Brand Tagline */}
          <p className="mt-12 text-sm font-medium tracking-wide text-white/40">
            Turning Ideas Into Digital Reality.
          </p>
        </div>
      </Motion.div>

      {/* Scroll Indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scroll to explore
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
      </Motion.div>
    </section>
  );
};

export default Hero;
