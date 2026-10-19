import {
  FaArrowRight,
  FaBullseye,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";

import profileImg from "../assets/images/Bad.jpg";

const values = [
  "Creativity",
  "Problem-solving",
  "Continuous learning",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#020d1b] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* LEFT: Profile image */}
        <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:mt-6">
          {/* Decorative frame */}
          <div className="absolute -right-3 -top-4 h-full w-[88%] rounded-[2rem] border border-cyan-400 sm:-right-5 sm:-top-6" />

          {/* Cyan accent */}
          <div className="absolute -bottom-5 -left-3 h-[65%] w-[72%] rounded-[2rem] bg-cyan-400/90 sm:-left-5" />

          {/* Portrait */}
          <div className="relative z-10 h-[430px] overflow-hidden rounded-[1.8rem] border border-cyan-300/50 bg-[#0b1b30] shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:h-[500px]">
            <img
              src={profileImg}
              alt="Michael Ndubuisi, web developer and digital creative"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020d1b]/60 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-8 -left-2 z-20 flex max-w-[235px] items-center gap-3 rounded-2xl border border-cyan-400/40 bg-[#071a2b]/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-3xl text-cyan-400">
              <FaCode />
            </span>

            <div>
              <p className="text-sm font-semibold text-white">
                Building digital
              </p>
              <p className="text-sm text-blue-100">
                experiences that matter
              </p>
            </div>
          </div>

          {/* Decorative text */}
          <div className="absolute -right-5 top-6 hidden -rotate-6 font-serif text-xl italic leading-8 text-cyan-300/80 xl:block">
            Ideas
            <br />
            Design
            <br />
            Code
            <br />
            Impact
            <span className="ml-3 mt-2 block h-px w-16 rotate-[-15deg] bg-cyan-400" />
          </div>
        </div>

        {/* RIGHT: About content */}
        <div className="space-y-8 pt-3 lg:pt-0">
          {/* Heading */}
          <div>
            <div className="mb-4 flex items-center gap-5">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
                About Me
              </span>
              <span className="h-px w-14 bg-cyan-400" />
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I’m{" "}
              <span className="text-cyan-400">Michael</span>
            </h2>

            <h3 className="mt-3 text-xl font-semibold text-blue-100 sm:text-2xl">
              Web Developer & Digital Creative
            </h3>
          </div>

          {/* Introduction */}
          <div className="max-w-3xl space-y-4 text-sm leading-7 text-blue-100/85 sm:text-base">
            <p>
              I’m a passionate web developer and digital creative who loves
              turning ideas into engaging, functional digital experiences.
              I build responsive websites and web applications while
              combining design, content, and technology to help businesses
              strengthen their online presence.
            </p>

            <p>
              I enjoy solving problems through creativity and technology.
              I’m continually learning, refining my skills, and finding
              better ways to turn ideas into practical digital solutions.
            </p>
          </div>

          {/* What Drives Me — replaces the repeated services section */}
          <div className="relative overflow-hidden rounded-2xl border border-[#153a59] bg-gradient-to-br from-[#0a2038] to-[#041326] p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/[0.07] blur-3xl"
            />

            <div className="relative">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
                What Drives Me
              </span>

              <h3 className="max-w-xl text-2xl font-bold leading-snug sm:text-3xl">
                Turning ideas into digital experiences that make a difference.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/85 sm:text-base">
                I believe great digital products combine thoughtful design,
                reliable functionality, and a clear understanding of
                people’s needs. My focus is on continuous improvement,
                creative problem-solving, and building useful solutions
                that deliver real value.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-200 sm:text-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Approach and goal cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <article className="group rounded-2xl border border-[#153a59] bg-gradient-to-br from-[#0a2038] to-[#041326] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 sm:p-6">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400">
                  <FaLightbulb />
                </span>

                <h3 className="text-lg font-bold sm:text-xl">
                  My Approach
                </h3>
              </div>

              <span className="mb-3 block h-0.5 w-14 bg-cyan-400" />

              <p className="text-sm leading-6 text-blue-100/85">
                I combine creativity, technology, and clear communication
                to create digital experiences that are visually engaging,
                user-friendly, and purposeful.
              </p>
            </article>

            <article className="group rounded-2xl border border-[#153a59] bg-gradient-to-br from-[#0a2038] to-[#041326] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 sm:p-6">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400">
                  <FaBullseye />
                </span>

                <h3 className="text-lg font-bold sm:text-xl">
                  My Goal
                </h3>
              </div>

              <span className="mb-3 block h-0.5 w-14 bg-cyan-400" />

              <p className="text-sm leading-6 text-blue-100/85">
                To keep learning, build meaningful digital products,
                and help businesses grow through innovative web solutions
                and creative digital experiences.
              </p>
            </article>
          </div>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/50 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-[#020d1b]"
          >
            Let’s Work Together
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}