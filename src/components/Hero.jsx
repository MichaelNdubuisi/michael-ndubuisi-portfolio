import { motion as Motion } from "framer-motion";
import heroImage from "../assets/images/Hero.jpeg";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative isolate flex min-h-[100svh] w-full items-center justify-start overflow-hidden bg-primary px-5 pb-16 pt-28 text-left text-text sm:px-8 sm:pt-24 md:px-10 lg:px-12"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#020d1b]/75"
      />

      {/* Left-aligned content */}
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-0 w-full max-w-7xl text-left"
      >
        <div className="w-full max-w-4xl space-y-6 text-left sm:space-y-7">
          <Motion.h1
            variants={textVariants}
            className="m-0 max-w-4xl text-left text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Creative Digital{" "}
            <span className="text-accent">Professional</span>
            <span className="block">
              &amp; Web Developer
            </span>
          </Motion.h1>

          <Motion.p
            variants={textVariants}
            className="m-0 max-w-2xl text-left text-base leading-7 text-gray-300 sm:text-lg sm:leading-8"
          >
            I bring ideas to life through engaging content, thoughtful design,
            video, and modern web experiences.
          </Motion.p>

          <Motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center self-start rounded-xl bg-accent px-6 py-3 text-left text-sm font-semibold text-primary shadow-lg transition-shadow duration-300 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
          >
            View My Projects
          </Motion.a>
        </div>
      </Motion.div>
    </section>
  );
}