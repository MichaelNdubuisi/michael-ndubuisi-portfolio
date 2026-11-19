
import { useState } from "react";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
} from "react-icons/fa";

import luxeCleanImage from "../assets/images/project3.webp";
import ngmImage from "../assets/images/project4.webp";
import theresaHairlineImage from "../assets/images/theresa-hairline.webp";
import canFruitJuiceImage from "../assets/images/Graphic Design (2).png";
import adsOneImage from "../assets/images/Ads 1.jpeg";
import ugcImage from "../assets/images/UGC.jpeg";

const projects = [
  {
    name: "Theresa Hairline",
    category: "Social Media Campaign",
    description:
      "A promotional Instagram Reel created to showcase the brand through engaging visuals, product presentation and social-first storytelling.",
    image: theresaHairlineImage,
    services: ["Video Production", "Social Media", "Advertising"],
    liveUrl:
      "https://www.instagram.com/reel/DeSDQN-SHWw/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    liveLinkLabel: "Watch Campaign",
    number: "01",
    type: "Video",
  },
  {
    name: "LuxeClean",
    category: "Website Design",
    description:
      "A premium digital experience for a cleaning service business, combining elegant presentation, clear service information and responsive web design.",
    image: luxeCleanImage,
    services: ["Web Design", "React", "Tailwind CSS"],
    liveUrl: "",
    number: "02",
    type: "Website",
  },
  {
    name: "NGM Collections",
    category: "E-commerce Website",
    description:
      "A modern online fashion storefront designed to present clothing and accessories in a clean, accessible and engaging shopping experience.",
    image: ngmImage,
    services: ["Web Development", "E-commerce", "UI Design"],
    liveUrl: "https://ngm-adaeze-shop.vercel.app/",
    liveLinkLabel: "Visit Website",
    number: "03",
    type: "Website",
  },
  {
    name: "CAN Fruit Juice",
    category: "Graphic Design",
    description:
      "A vibrant promotional design concept built around fresh fruit, bold colours and appetising product presentation.",
    image: canFruitJuiceImage,
    services: ["Graphic Design", "Advertising", "Visual Direction"],
    liveUrl: canFruitJuiceImage,
    liveLinkLabel: "View Design",
    number: "04",
    type: "Design",
  },
  {
    name: "Ads 1",
    category: "Promotional Advertising",
    description:
      "A short-form promotional video created to capture attention, communicate a message and make an impression through visual storytelling.",
    image: adsOneImage,
    services: ["Video Editing", "Advertising", "Short-form Video"],
    liveUrl: "https://vm.tiktok.com/ZN8DDCvFm/",
    liveLinkLabel: "Watch Advertisement",
    number: "05",
    type: "Video",
  },
  {
    name: "UGC",
    category: "UGC-Style Video",
    description:
      "A lifestyle-driven video combining product storytelling and engaging visuals in a format designed for social media audiences.",
    image: ugcImage,
    services: ["UGC Production", "Video Editing", "Social Media"],
    liveUrl:
      "https://www.instagram.com/reel/DetZcPtt4xq/?exln=MWRqd3NsNmZkNXhyNw==",
    liveLinkLabel: "Watch Video",
    number: "06",
    type: "Video",
  },
];

function ProjectCard({ project }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <article className="group relative">
      <div className="project-mobile-card relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#10151f] transition-all duration-300 hover:border-cyan-400/40 md:hidden">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/95 via-[#080b12]/10 to-black/20" />

        <span className="absolute left-2.5 top-2.5 rounded-full border border-white/15 bg-[#080b12]/70 px-2 py-1 text-[9px] font-semibold tracking-wider text-white/85 backdrop-blur-md">
          {project.number}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-3">
          <p className="truncate text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-300">
            {project.category}
          </p>
          <h3 className="mt-1 truncate text-sm font-bold text-white">
            {project.name}
          </h3>
        </div>

        <button
          type="button"
          aria-expanded={isDetailsOpen}
          aria-label={`${isDetailsOpen ? "Hide" : "Show"} details for ${project.name}`}
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="absolute right-2.5 top-2.5 rounded-full border border-white/20 bg-[#080b12]/75 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md transition-colors hover:border-cyan-400/50 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Details
        </button>

        <div
          className={`project-mobile-details invisible pointer-events-none absolute inset-0 z-10 flex flex-col justify-center rounded-xl bg-[#0b111c]/95 p-3 opacity-0 backdrop-blur-md transition-all duration-200 ${
            isDetailsOpen
              ? "visible pointer-events-auto opacity-100"
              : ""
          }`}
        >
          <button
            type="button"
            aria-label={`Close ${project.name} details`}
            onClick={() => setIsDetailsOpen(false)}
            className="absolute right-2 top-2 rounded-full p-1.5 text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <FaTimes />
          </button>
          <p className="pr-6 text-[9px] font-bold uppercase tracking-wider text-cyan-300">
            {project.category}
          </p>
          <h3 className="mt-1 text-sm font-bold text-white">{project.name}</h3>
          <p className="mt-2 line-clamp-3 text-[10px] leading-4 text-white/65">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {project.services.slice(0, 2).map((service) => (
              <span
                key={service}
                className="rounded border border-white/10 bg-white/[0.05] px-1.5 py-1 text-[8px] text-white/65"
              >
                {service}
              </span>
            ))}
          </div>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.liveLinkLabel || "View project"}: ${project.name}`}
              className="mt-3 inline-flex w-fit items-center gap-1.5 text-[10px] font-bold text-cyan-300 transition-colors hover:text-cyan-200"
            >
              {project.liveLinkLabel || "View Project"}
              <FaExternalLinkAlt className="text-[8px]" />
            </a>
          ) : (
            <span className="mt-3 text-[9px] text-white/40">
              Preview coming soon
            </span>
          )}
        </div>
      </div>

      <div className="hidden overflow-hidden rounded-2xl border border-white/[0.09] bg-[#10151f] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_25px_65px_rgba(0,0,0,0.35)] md:block">
        {/* Project preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#111923]">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/65 via-transparent to-black/10" />

          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#080b12]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {project.category}
          </span>

          <span className="absolute bottom-4 right-4 text-sm font-bold tracking-widest text-white/70">
            {project.number}
          </span>
        </div>

        {/* Project information */}
        <div className="p-6 sm:p-7">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              {project.type} / Selected Work
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
            {project.name}
          </h3>

          <p className="mt-3 min-h-[84px] text-sm leading-7 text-white/55">
            {project.description}
          </p>

          {/* Services and skills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] text-white/65"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Project links */}
          <div className="mt-7 flex min-h-[42px] items-center justify-between border-t border-white/10 pt-5">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.liveLinkLabel || "View project"}: ${project.name}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:gap-3 hover:text-cyan-300"
              >
                {project.liveLinkLabel || "View Project"}
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            ) : (
              <span className="text-xs text-white/35">
                Preview coming soon
              </span>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.name}`}
                className="text-white/50 transition-colors hover:text-white"
              >
                <FaGithub className="text-lg" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080b12] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-7 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-[720px]">
            <div className="mb-5 flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                The Portfolio
              </span>
              <span className="h-px w-14 bg-cyan-400/70" />
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Ideas brought
              <br />
              <span className="text-cyan-400">to life.</span>
            </h2>

            <p className="mt-6 max-w-[570px] text-sm leading-8 text-white/55 sm:text-base">
              A collection of creative projects, digital experiences and
              visual campaigns. Every project reflects our belief that
              thoughtful storytelling and strong execution can make a brand
              stand out.
            </p>
          </div>

          <div className="flex items-center gap-4 border-l border-white/15 pl-5">
            <span className="text-5xl font-bold tracking-tight text-white">
              06
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                Projects
              </p>
              <p className="mt-1 text-xs text-white/45">
                Selected creative work
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        {/* Closing call to action */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#111923] p-7 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[90px]"
          />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-[560px]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Have Something in Mind?
              </span>

              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Let's make your next idea
                <span className="text-cyan-400"> impossible to ignore.</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Tell us what you're building. We'll help turn your idea into
                creative work worth watching.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-[#080b12] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
            >
              Start a Project
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Brand signature */}
        <p className="mt-10 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
          MIKOS DIGITAL — TURNING IDEAS INTO DIGITAL REALITY.
        </p>
      </div>
    </section>
  );
}
