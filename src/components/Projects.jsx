import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project2 from "../assets/images/project2.webp";
import project3 from "../assets/images/project3.webp";
import project4 from "../assets/images/project4.webp";
import theresaHairline from "../assets/images/theresa-hairline.webp";

const projects = [
  {
    title: "Edusity",
    description:
      "A modern education website with a responsive design, smooth navigation, and compelling CTAs.",
    tech: ["React", "CSS3"],
    github: "https://github.com/MichaelNdubuisi/landing-page",
    demo: "https://edusity-bice.vercel.app/",
    image: project2,
  },

  {
    title: "LuxeClean",
    description:
      "A premium cleaning service landing page with luxury-themed design and client testimonials.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/MichaelNdubuisi/landing-page",
    demo: "https://luxe-clean.vercel.app/",
    image: project3,
  },

  {
    title: "NGM Collections",
    description:
      "An elegant e-commerce platform offering timeless fashion collections with premium quality.",
    tech: ["React", "Tailwind CSS", "E-commerce"],
    github: "https://github.com/MichaelNdubuisi/landing-page",
    demo: "https://ngm-adaeze-shop.vercel.app/",
    image: project4,
  },

  {
    title: "Theresa Hairline",
    description:
      "A beauty commercial featuring a polished brand identity and engaging social-first storytelling.",
    tech: ["Branding", "Commercial", "Instagram Reel"],
    demo: "https://www.instagram.com/reel/DeSDQN-SHWw/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    image: theresaHairline,
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-primary text-text px-4 sm:px-6 lg:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Projects
          </h2>

          <p className="text-gray-400 mt-2">
            Concept Projects and Commercials I've Worked On
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-[#101e3b] rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition"
            >

              {/* Project Media */}
              <div className="w-full h-64 bg-black overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={project.image || project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Project Information */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Skills / Technologies */}
                {project.tech?.length > 0 && (
                  <ul className="flex flex-wrap text-sm text-accent gap-2">
                    {project.tech.map((tech, i) => (
                      <li
                        key={i}
                        className="px-2 py-1 bg-[#0f1b34] rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Links */}
                {(project.github || project.demo) && (
                  <div className="flex gap-4 text-accent pt-2">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} GitHub`}
                      >
                        <FaGithub size={20} />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}

                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
