import { motion } from "framer-motion";
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
      className="relative isolate flex w-full min-h-[80svh] items-center justify-center bg-primary px-4 pt-8 text-text sm:min-h-screen sm:px-6 sm:pt-24 md:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "95%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-primary bg-opacity-70"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center  max-w-6xl w-full space-y-8 md:space-y-0 md:space-x-12">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative -top-3 w-full max-w-2xl space-y-6 text-left"
        >
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Creative Digital
            <br className="sm:hidden" /> Professional
            <br className="sm:hidden" /> &amp; Web Developer
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-sm leading-relaxed text-gray-300 sm:text-lg"
          >
            I bring ideas to life through engaging content, thoughtful design,
            video, and modern web experiences.
          </motion.p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-accent text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}