import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/images/project1.webp";
import project2 from "../assets/images/project2.webp";
import project3 from "../assets/images/project3.webp";

const projects = [
{
title: "CryptoInvest",
description: "A crypto investment dashboard with charts, plans, and calculator.",
tech: ["React", "Tailwind CSS"],
github: "https://github.com/yourusername/portfolio",
demo: "https://crypto-psi-dusky.vercel.app/",
image: project1,
},
{
title: "Edusity",
description: "A modern education website with a responsive design, smooth navigation, and compelling CTAs.",
tech: ["React", "CSS3"],
github: "https://github.com/yourusername/landing-page",
demo: "https://edusity-bice.vercel.app/",
image: project2,
},
{
title: "LuxeClean",
description: "A premium cleaning service landing page with luxury-themed design and client testimonials.",
tech: ["React", "Tailwind CSS"],
github: "https://github.com/yourusername/landing-page",
demo: "https://luxe-clean.vercel.app/",
image: project3,
},
];

export default function Projects() {
return (
<section id="projects" className="bg-primary text-text px-4 sm:px-6 lg:px-12 py-20">
<div className="max-w-6xl mx-auto space-y-16">
{/* Section Heading */}
<motion.div
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="text-center"
>
<h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
<p className="text-gray-400 mt-2">Selected works I've built recently</p>
</motion.div>
    {/* Project Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="bg-[#101e3b] rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-48 sm:h-40 w-full object-cover"
          />
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
            </div>
            <ul className="flex flex-wrap text-sm text-accent gap-2">
              {project.tech.map((tech, i) => (
                <li key={i} className="px-2 py-1 bg-[#0f1b34] rounded">{tech}</li>
              ))}
            </ul>
            <div className="flex gap-4 text-accent pt-2">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub size={20} />
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
);
}