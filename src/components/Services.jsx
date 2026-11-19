
import { useState } from "react";
import {
  FaArrowRight,
  FaBullhorn,
  FaPlay,
  FaTimes,
  FaVideo,
} from "react-icons/fa";

import cinematicImage from "../assets/images/Branding & Communications.png";
import ugcImage from "../assets/images/Content Development.png";
import editingImage from "../assets/images/Video Editing.png";

const services = [
  {
    number: "01",
    name: "Cinematic Advertising",
    description:
      "High-impact visual campaigns built around powerful storytelling, creative direction and cinematic production that make brands memorable.",
    image: cinematicImage,
    icon: <FaBullhorn />,
    label: "MAKE YOUR BRAND UNFORGETTABLE",
    featured: true,
  },
  {
    number: "02",
    name: "UGC-Style Video Production",
    description:
      "Authentic, engaging product and lifestyle videos designed to connect with audiences, build interest and inspire action.",
    image: ugcImage,
    icon: <FaPlay />,
    label: "CONTENT THAT CONNECTS",
  },
  {
    number: "03",
    name: "Professional Video Editing",
    description:
      "Polished, platform-ready videos with thoughtful pacing, sound design, transitions and visual storytelling.",
    image: editingImage,
    icon: <FaVideo />,
    label: "EVERY FRAME HAS A PURPOSE",
  },
];

function ServiceCard({ service }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <article className="group relative">
      <div className="service-mobile-card relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#101722] transition-all duration-300 hover:border-cyan-400/50 md:hidden">
        <img
          src={service.image}
          alt={`${service.name} creative work`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080e]/90 via-[#05080e]/15 to-black/20" />

        <span className="absolute left-2.5 top-2.5 text-[10px] font-semibold tracking-[0.18em] text-white/75">
          {service.number}
        </span>
        <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/35 text-sm text-cyan-300 backdrop-blur-md">
          {service.icon}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-3">
          <p className="truncate text-[9px] font-bold uppercase tracking-[0.13em] text-cyan-300">
            {service.label}
          </p>
          <h3 className="mt-1 text-sm font-bold leading-tight text-white">
            {service.name}
          </h3>
        </div>

        <button
          type="button"
          aria-expanded={isDetailsOpen}
          aria-label={`${isDetailsOpen ? "Hide" : "Show"} details for ${service.name}`}
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="absolute bottom-2.5 right-2.5 rounded-full border border-white/20 bg-[#080b12]/75 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md transition-colors hover:border-cyan-400/50 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Details
        </button>

        <div
          className={`service-mobile-details invisible pointer-events-none absolute inset-0 z-10 flex flex-col justify-center rounded-xl bg-[#0b111c]/95 p-3 opacity-0 backdrop-blur-md transition-all duration-200 ${
            isDetailsOpen
              ? "visible pointer-events-auto opacity-100"
              : ""
          }`}
        >
          <button
            type="button"
            aria-label={`Close ${service.name} details`}
            onClick={() => setIsDetailsOpen(false)}
            className="absolute right-2 top-2 rounded-full p-1.5 text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <FaTimes />
          </button>
          <p className="pr-6 text-[9px] font-bold uppercase tracking-wider text-cyan-300">
            {service.label}
          </p>
          <h3 className="mt-1 text-sm font-bold leading-tight text-white">
            {service.name}
          </h3>
          <p className="mt-2 text-[10px] leading-4 text-white/65">
            {service.description}
          </p>
          <a
            href="#contact"
            onClick={() => setIsDetailsOpen(false)}
            className="mt-3 inline-flex w-fit items-center gap-1.5 text-[10px] font-bold text-cyan-300 transition-colors hover:text-cyan-200"
          >
            Discuss a Project
            <FaArrowRight className="text-[9px]" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative isolate hidden min-h-[390px] overflow-hidden rounded-2xl border border-white/10 bg-[#101722] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/50 md:block">
        <img
          src={service.image}
          alt={`${service.name} creative work`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-[#05080e]/75 to-[#05080e]/10" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
          <span className="text-sm font-semibold tracking-[0.2em] text-white/70">
            {service.number}
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg text-cyan-300 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#05080e]">
            {service.icon}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
            {service.label}
          </span>

          <h3 className="max-w-[340px] text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {service.name}
          </h3>

          <p className="mt-4 max-w-[390px] text-sm leading-7 text-white/75">
            {service.description}
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-cyan-300 transition-all duration-300 group-hover:gap-4"
          >
            Discuss a Project
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080b12] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section introduction */}
        <div className="mb-12 flex flex-col justify-between gap-7 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-[680px]">
            <div className="mb-5 flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                What We Create
              </span>
              <span className="h-px w-14 bg-cyan-400/70" />
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Creative work.
              <br />
              <span className="text-cyan-400">Powerful impact.</span>
            </h2>

            <p className="mt-6 max-w-[570px] text-sm leading-8 text-white/60 sm:text-base">
              We help businesses turn ideas into visual experiences people
              notice, connect with and remember. From cinematic campaigns to
              engaging short-form content, every project starts with a story.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#080b12]"
          >
            Start a Project
            <FaArrowRight className="text-xs" />
          </a>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              Your next idea deserves to be seen.
            </p>
            <p className="mt-2 text-sm text-white/50">
              Let's create something worth watching.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Work with Mikos Digital
            <FaArrowRight className="text-xs" />
          </a>
        </div>

        <p className="mt-10 text-center text-xs font-medium tracking-[0.18em] text-white/35">
          MIKOS DIGITAL — TURNING IDEAS INTO DIGITAL REALITY.
        </p>
      </div>
    </section>
  );
}
