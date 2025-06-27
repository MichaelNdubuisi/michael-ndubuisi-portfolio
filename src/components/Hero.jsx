import { motion } from "framer-motion";

const containerVariants = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
return (
<section id="home" className="min-h-screen bg-primary text-text flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12" >
<motion.div
variants={containerVariants}
initial="hidden"
animate="visible"
className="text-center space-y-6 max-w-3xl"
>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
I Build Stunning, Fast & Animated Websites
</h1>
<p className="text-base sm:text-lg text-gray-300">
Devlytic delivers clean, responsive, and modern web experiences for freelancers, businesses, and creators.
</p>
<motion.a
href="#projects"
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="inline-block mt-4 px-6 py-3 bg-accent text-primary font-semibold rounded-xl transition duration-300"
>
View Projects
</motion.a>
</motion.div>
</section>
);
}