import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-primary text-text flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 relative pt-24"
      style={{
        backgroundImage: `url('/src/assets/images/Background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl w-full space-y-8 md:space-y-0 md:space-x-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left space-y-6 max-w-2xl"
        >
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-accent font-medium"
          >
            Hello, I'm Michael Ndubuisi
          </motion.h2>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Full-Stack Developer & Digital Innovator
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
          >
            Passionate about crafting innovative web solutions, from responsive front-end designs to robust back-end systems. Let's build something amazing together.
          </motion.p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-8 py-4 bg-accent text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            View My Projects
          </motion.a>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex-shrink-0"
        >
          <img
            src="/src/assets/images/michael-ndubuisi-logo.jpeg"
            alt="Michael Ndubuisi"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-accent"
          />
        </motion.div>
      </div>
    </section>
  );
}
