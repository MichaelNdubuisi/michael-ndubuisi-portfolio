
import {
  FaArrowRight,
  FaBullseye,
  FaVideo,
  FaLightbulb,
} from "react-icons/fa";

import { motion as Motion } from "framer-motion";
import profileImg from "../assets/images/Bad.jpg";

const values = [
  "Creative storytelling",
  "Visual excellence",
  "Attention to detail",
  "Purpose-driven creativity",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#080b12] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

        {/* LEFT: Founder Portrait */}
        <Motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[420px] lg:mx-0"
        >
          {/* Decorative Frame */}
          <div className="absolute -right-3 -top-4 h-full w-[88%] rounded-[2rem] border border-cyan-400/60 sm:-right-5 sm:-top-6" />

          {/* Accent Block */}
          <div className="absolute -bottom-5 -left-3 h-[65%] w-[72%] rounded-[2rem] bg-cyan-400/90 sm:-left-5" />

          {/* Portrait */}
          <div className="relative z-10 h-[430px] overflow-hidden rounded-[1.8rem] border border-cyan-300/40 bg-[#101722] shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:h-[500px]">
            <img
              src={profileImg}
              alt="Michael Ndubuisi, founder of Mikos Digital"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080b12]/80 to-transparent" />

            <div className="absolute bottom-5 left-5 z-10">
              <p className="text-xl font-bold text-white">
                Michael Ndubuisi
              </p>
              <p className="mt-1 text-sm text-cyan-300">
                Founder, Mikos Digital
              </p>
            </div>
          </div>

          {/* Floating Brand Badge */}
          <div className="absolute -bottom-8 -left-2 z-20 flex max-w-[250px] items-center gap-3 rounded-2xl border border-cyan-400/30 bg-[#101722]/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400">
              <FaVideo />
            </span>

            <div>
              <p className="text-sm font-bold text-white">
                Creative Production
              </p>
              <p className="text-xs text-gray-400">
                Ideas brought to life
              </p>
            </div>
          </div>
        </Motion.div>

        {/* RIGHT: About Content */}
        <Motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 pt-5 lg:pt-0"
        >
          {/* Section Heading */}
          <div>
            <div className="mb-5 flex items-center gap-5">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
                About Mikos Digital
              </span>
              <span className="h-px w-14 bg-cyan-400" />
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Creativity With
              <br />
              <span className="text-cyan-400">A Clear Purpose.</span>
            </h2>

            <h3 className="mt-4 text-xl font-semibold text-white/80 sm:text-2xl">
              A Creative Studio Built Around Ideas and Storytelling.
            </h3>
          </div>

          {/* Introduction */}
          <div className="max-w-3xl space-y-4 text-sm leading-8 text-gray-300 sm:text-base">
            <p>
              Mikos Digital is a creative studio founded by Michael Ndubuisi,
              focused on helping businesses transform ideas into compelling
              visual content. We bring together creative direction,
              storytelling and professional production to create content
              that captures attention and gives brands a stronger visual
              identity.
            </p>

            <p>
              From cinematic advertisements and UGC-style videos to
              professional video editing, every project is approached with
              a focus on quality, originality and the message a brand wants
              to communicate.
            </p>
          </div>

          {/* Creative Philosophy */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111b29] to-[#0a101b] p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl"
            />

            <div className="relative">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
                Our Creative Philosophy
              </span>

              <h3 className="max-w-xl text-2xl font-bold leading-snug sm:text-3xl">
                Every brand has a story. We make it worth watching.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                We believe effective advertising should do more than look
                beautiful. It should connect with people, communicate a
                message and leave a lasting impression. That's the thinking
                behind every creative project we produce.
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

          {/* Approach and Vision */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <article className="group rounded-2xl border border-white/10 bg-[#101722] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 sm:p-6">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400">
                  <FaLightbulb />
                </span>

                <h3 className="text-lg font-bold sm:text-xl">
                  Our Approach
                </h3>
              </div>

              <span className="mb-3 block h-0.5 w-14 bg-cyan-400" />

              <p className="text-sm leading-7 text-gray-300">
                We start with an idea, develop a creative direction and
                turn it into polished visual content designed around
                the brand and its audience.
              </p>
            </article>

            <article className="group rounded-2xl border border-white/10 bg-[#101722] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 sm:p-6">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400">
                  <FaBullseye />
                </span>

                <h3 className="text-lg font-bold sm:text-xl">
                  Our Vision
                </h3>
              </div>

              <span className="mb-3 block h-0.5 w-14 bg-cyan-400" />

              <p className="text-sm leading-7 text-gray-300">
                To build a recognised creative brand known for original
                ideas, outstanding visual storytelling and meaningful
                work for businesses around the world.
              </p>
            </article>
          </div>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/50 px-6 py-3.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-[#080b12]"
          >
            Let's Create Something
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Motion.div>
      </div>
    </section>
  );
}
