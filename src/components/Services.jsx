import {
  FaArrowRight,
  FaBullhorn,
  FaCode,
  FaPaintBrush,
  FaPenNib,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

import contentDevelopmentImage from "../assets/images/Content Development.png";
import graphicDesignImage from "../assets/images/Graphic Design.png";
import brandingCommunicationsImage from "../assets/images/Branding & Communications.png";
import videoEditingImage from "../assets/images/Video Editing.png";
import websiteDesignImage from "../assets/images/Website Design.png";

const services = [
  {
    number: "01",
    name: "Website Design",
    description:
      "Modern, responsive and user-friendly websites that look great and perform seamlessly across all devices.",
    icon: <FaCode />,
    image: websiteDesignImage,
    link: "View Projects",
    featured: true,
  },
  {
    number: "02",
    name: "Graphic Design",
    description:
      "Eye-catching visuals, clean layouts and creative designs that bring ideas to life.",
    icon: <FaPaintBrush />,
    image: graphicDesignImage,
    link: "View Designs",
  },
  {
    number: "03",
    name: "Video Editing",
    description:
      "Engaging videos that tell your story, grab attention and leave a lasting impression.",
    icon: <FaVideo />,
    image: videoEditingImage,
    link: "View Videos",
  },
  {
    number: "04",
    name: "Content Creation",
    description:
      "Scroll-stopping content, from social media posts to reels and brand storytelling.",
    icon: <FaPenNib />,
    image: contentDevelopmentImage,
    link: "View Content",
  },
  {
    number: "05",
    name: "Branding & Communications",
    description:
      "Strong brand identity and clear messaging that builds trust and loyalty.",
    icon: <FaBullhorn />,
    image: brandingCommunicationsImage,
    link: "View Branding",
  },
];

function ServiceIcon({ children }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400 bg-cyan-400/10 text-2xl text-cyan-400 shadow-[inset_0_0_15px_rgba(34,211,238,0.12)]">
      {children}
    </span>
  );
}

function ServiceLink({ children }) {
  return (
    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-3 group-hover:text-cyan-300">
      {children}
      <FaArrowRight className="text-xs" aria-hidden="true" />
    </span>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#020d1b] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1060px]">
        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-6 sm:mb-8 sm:flex-row sm:items-center">
          <div className="max-w-[580px]">
            <div className="mb-3 flex items-center gap-5">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-base">
                What I Do
              </span>
              <span className="h-px w-16 bg-cyan-400" />
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
              Skills &amp;{" "}
              <span className="text-cyan-400">Expertise</span>
            </h2>

            <p className="mt-4 max-w-[510px] text-sm leading-7 text-blue-100/85 sm:text-base">
              I create digital experiences that help brands communicate,
              connect and grow. Here’s what I bring to the table.
            </p>
          </div>

          <div className="hidden items-center gap-8 sm:flex">
            <p className="max-w-[150px] -rotate-6 font-serif text-lg italic leading-6 text-blue-300/80">
              Turning ideas
              <br />
              into real results.
              <span className="ml-10 mt-2 block h-px w-16 rotate-[-12deg] bg-blue-300/80" />
            </p>

            <a
              href="#service-collaboration"
              aria-label="Explore collaboration services"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400 text-lg text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#020d1b]"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
          {/* Featured website design card */}
          <article className="group relative isolate min-h-[310px] overflow-hidden rounded-2xl border border-[#123451] bg-[#031225] sm:col-span-2 sm:min-h-[290px]">
            <img
              src={websiteDesignImage}
              alt="Website design project preview"
              className="absolute inset-y-0 right-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] sm:w-[72%]"
            />

            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#020d1b] via-[#020d1b]/95 to-[#020d1b]/15 sm:via-[#020d1b]/90" />

            <div className="relative z-10 flex min-h-[310px] max-w-[360px] flex-col items-start justify-center p-6 sm:min-h-[290px] sm:p-7">
              <div className="mb-3 flex items-center gap-5">
                <ServiceIcon>
                  <FaCode />
                </ServiceIcon>
                <span className="text-base font-semibold text-cyan-400">
                  01
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight sm:text-[27px]">
                Website Design
              </h3>

              <p className="mt-3 max-w-[320px] text-sm leading-[1.8] text-blue-100/85 sm:text-base">
                Modern, responsive and user-friendly websites that look great
                and perform seamlessly across all devices.
              </p>

              <a
                href="#projects"
                className="group/link mt-5 inline-flex items-center gap-2 text-base font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                View Projects
                <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </article>

          {/* Four service cards */}
          {services
            .filter((service) => !service.featured)
            .map((service) => (
              <article
                key={service.number}
                className="group flex min-h-[230px] overflow-hidden rounded-2xl border border-[#123451] bg-[#031225] transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#04172a] sm:min-h-[240px]"
              >
                <div className="relative min-h-full w-[42%] shrink-0 overflow-hidden sm:w-[44%]">
                  <img
                    src={service.image}
                    alt={`${service.name} example`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#031225]/20" />
                </div>

                <div className="flex min-w-0 flex-1 flex-col items-start justify-center p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/70 bg-cyan-400/10 text-lg text-cyan-400">
                      {service.icon}
                    </span>
                    <span className="text-sm font-semibold text-cyan-400">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug tracking-tight sm:text-xl">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs leading-[1.7] text-blue-100/85 sm:text-sm">
                    {service.description}
                  </p>

                  <a
                    href="#projects"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300 sm:text-sm"
                  >
                    {service.link}
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </article>
            ))}

          {/* Digital collaboration card */}
          <article
            id="service-collaboration"
            className="group overflow-hidden rounded-2xl border border-[#123451] bg-[#031225] transition-all duration-300 hover:border-cyan-400/40 sm:col-span-2"
          >
            <div className="grid min-h-[190px] grid-cols-1 sm:grid-cols-[34%_1fr]">
              <div className="relative min-h-[190px] overflow-hidden sm:min-h-[190px]">
                <img
                  src={contentDevelopmentImage}
                  alt="Digital tools and creative collaboration workspace"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031225]/30 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#031225]/30" />
              </div>

              <div className="flex items-center justify-between gap-5 p-5 sm:px-7 sm:py-6">
                <div className="max-w-[340px]">
                  <div className="mb-2 flex items-center gap-5">
                    <span className="text-2xl text-cyan-400">
                      <FaUsers />
                    </span>
                    <span className="text-sm font-semibold text-cyan-400">
                      06
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                    Digital Collaboration
                  </h3>

                  <p className="mt-2 text-sm leading-[1.7] text-blue-100/85">
                    Using the right digital tools and teamwork to bring ideas
                    to life — faster and smarter.
                  </p>

                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    Let’s Work Together
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>

                <div className="hidden shrink-0 -rotate-6 pr-3 font-serif text-lg italic leading-6 text-blue-300/80 lg:block">
                  Great ideas
                  <br />
                  work better
                  <br />
                  together.
                  <span className="ml-4 mt-3 block h-px w-16 rotate-[-12deg] bg-blue-300/80" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}