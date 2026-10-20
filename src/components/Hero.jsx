import { motion as Motion } from "framer-motion";
import heroImage from "../assets/images/Hero.jpeg";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative isolate flex w-full min-h-[100svh] items-center justify-center bg-primary px-6 pt-36 pb-20 text-text sm:min-h-screen sm:px-6 sm:pt-24 sm:pb-8 md:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-primary bg-opacity-70"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center  max-w-6xl w-full space-y-8 md:space-y-0 md:space-x-12">

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-2xl space-y-6 text-center sm:-top-3 sm:space-y-6 sm:text-left"
        >
          <Motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-[18ch] text-3xl font-bold leading-[1.25] tracking-tight sm:mx-0 sm:max-w-none sm:text-4xl sm:leading-tight sm:tracking-normal md:text-5xl lg:text-6xl"
          >
            Creative Digital{" "}
            <span className="block sm:inline">Professional</span>{" "}
            <span className="block sm:inline">&amp; Web Developer</span>
          </Motion.h1>

          <Motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-[38ch] text-base leading-7 text-gray-300 sm:mx-0 sm:max-w-xl sm:text-lg sm:leading-relaxed"
          >
            I bring ideas to life through engaging content, thoughtful design,
            video, and modern web experiences.
          </Motion.p>

          <Motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-accent text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            View My Projects
          </Motion.a>
        </Motion.div>
      </div>
    </section>
  );
}