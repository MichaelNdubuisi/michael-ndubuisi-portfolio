import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Replace these paths with your actual project screenshots if needed.
import luxeCleanImage from "../assets/images/project3.webp";
import ngmImage from "../assets/images/project4.webp";
import theresaHairlineImage from "../assets/images/theresa-hairline.webp";
import canFruitJuiceImage from "../assets/images/Graphic Design (2).png";
import adsOneImage from "../assets/images/Ads 1.jpeg";
import ugcImage from "../assets/images/UGC.jpeg";

const projects = [
  {
    name: "Theresa Hairline",
    category: "Social Media Content",
    description:
      "A promotional Instagram Reel showcasing Theresa Hairline, created as social media content.",
    image: theresaHairlineImage,
    technologies: ["Content Creation", "Instagram", "Video"],
    liveUrl: "https://www.instagram.com/reel/DeSDQN-SHWw/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    liveLinkLabel: "Watch Reel",
    githubUrl: "",
    number: "01",
  },
  {
    name: "LuxeClean",
    category: "Service Business Website",
    description:
      "A premium cleaning service website with elegant visuals, service information, and a polished user experience.",
    image: luxeCleanImage,
    technologies: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "",
    githubUrl: "",
    number: "02",
  },
  {
    name: "NGM Collections",
    category: "E-commerce",
    description:
      "A fashion shopping experience showcasing clothing and accessories in a clean, modern storefront.",
    image: ngmImage,
    technologies: ["React", "Tailwind CSS", "E-commerce"],
    liveUrl: "https://ngm-adaeze-shop.vercel.app/",
    githubUrl: "",
    number: "03",
  },
  {
    name: "CAN Fruit Juice",
    category: "Graphic Design",
    description:
      "A vibrant promotional campaign and packaging concept for CAN Fruit Juice, built around fresh fruit, bold color, and natural ingredients.",
    image: canFruitJuiceImage,
    technologies: ["Brand Identity", "Packaging Design", "Advertising"],
    liveUrl: canFruitJuiceImage,
    liveLinkLabel: "View Design",
    githubUrl: "",
    number: "04",
  },
  {
    name: "Ads 1",
    category: "Social Media Ad",
    description:
      "A short-form promotional video designed to capture attention quickly with strong visual storytelling and direct brand messaging.",
    image: adsOneImage,
    technologies: ["TikTok", "Short-form Video", "Advertising"],
    liveUrl: "https://vm.tiktok.com/ZN8DDCvFm/",
    liveLinkLabel: "Watch Ad",
    githubUrl: "",
    number: "05",
  },
  {
    name: "UGC",
    category: "User Generated Content",
    description:
      "A lifestyle-driven short-form video that blends authentic product storytelling with engaging motion and social-first creative direction.",
    image: ugcImage,
    technologies: ["UGC", "Instagram", "Short-form Video"],
    liveUrl: "https://www.instagram.com/reel/DetZcPtt4xq/?exln=MWRqd3NsNmZkNXhyNw==",
    liveLinkLabel: "Watch Reel",
    githubUrl: "",
    number: "06",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020d1b] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Selected Work
              </span>
              <span className="h-px w-14 bg-cyan-400" />
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/75 sm:text-base">
              A selection of digital experiences, graphic design, and social
              media content I've created, combining thoughtful design and
              engaging storytelling.
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <span className="text-4xl font-bold text-white/10">06</span>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200/60">
              Featured projects
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-[#153550] bg-gradient-to-b from-[#0a1d32] to-[#041326] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(0,190,220,0.08)]"
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#071629]">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020d1b]/65 via-transparent to-[#020d1b]/10" />

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#020d1b]/80 px-3 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-md">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/50 bg-[#020d1b]/80 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-[#020d1b]">
                  <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                </span>
              </div>

              {/* Project details */}
              <div className="p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                    {project.number}
                  </span>
                  <span className="h-px flex-1 bg-[#153550]" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-cyan-300">
                  {project.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-blue-100/75">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-xs text-cyan-200/90"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-white/[0.08] pt-5">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-200"
                    >
                      {project.liveLinkLabel || "Live Preview"}
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  ) : (
                    <span className="text-sm text-blue-200/50">
                      Live link coming soon
                    </span>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-100/80 transition-colors hover:text-white"
                    >
                      <FaGithub className="text-base" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#153550] bg-[#06172a]/80 p-6 sm:mt-16 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm leading-6 text-blue-100/70">
              Let's turn your idea into something meaningful.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-[#020d1b] transition-all hover:bg-cyan-300"
          >
            Let's Talk
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}