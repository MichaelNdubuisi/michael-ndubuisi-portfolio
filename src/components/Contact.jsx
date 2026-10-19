import {
  BsChatDots,
  BsTelephone,
  BsEnvelope,
  BsArrowUpRight,
} from "react-icons/bs";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#020d1b] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/[0.09] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Contact panel */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#153a59] bg-gradient-to-br from-[#0a2038] via-[#06172a] to-[#020d1b] px-6 py-14 shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-cyan-400/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-cyan-400/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
                Get In Touch
              </span>
              <span className="h-px w-10 bg-cyan-400" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let’s Build Something{" "}
              <span className="text-cyan-400">Amazing.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base sm:leading-8">
              Have an idea, a project, or an opportunity in mind? I’d love
              to hear from you. Let’s discuss your vision and explore how
              we can turn it into something meaningful.
            </p>

            {/* Contact actions */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/2347046999780"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-[#020d1b] shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                <BsChatDots className="text-xl" />
                Send Me a Message
                <BsArrowUpRight className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="tel:+2347046999780"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-cyan-400/40 bg-white/[0.02] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10"
              >
                <BsTelephone className="text-lg text-cyan-400" />
                Schedule a Call
                <BsArrowUpRight className="ml-1 text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Email contact */}
            <div className="mt-9 border-t border-white/10 pt-7">
              <p className="text-sm text-blue-100/60">
                Prefer email? You can reach me at
              </p>

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200 sm:text-base"
              >
                <BsEnvelope />
                YOUR_EMAIL@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-7 text-center text-xs tracking-wide text-blue-100/40 sm:text-sm">
          Have a good idea? Let’s make it happen.
        </p>
      </div>
    </section>
  );
}