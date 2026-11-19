
import { useRef, useState } from "react";
import {
  BsChatDots,
  BsTelephone,
  BsEnvelope,
  BsArrowUpRight,
  BsX,
} from "react-icons/bs";

export default function Contact() {
  const [activeContact, setActiveContact] = useState(null);
  const contactTriggerRefs = useRef({});

  const contactActions = [
    {
      label: "WhatsApp",
      detail: "+234 916 735 4451",
      href: "https://wa.me/2349167354451?text=Hello%20Mikos%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20project.",
      action: "Message us",
      icon: <BsChatDots />,
      external: true,
    },
    {
      label: "Call Us",
      detail: "+234 916 735 4451",
      href: "tel:+2349167354451",
      action: "Call now",
      icon: <BsTelephone />,
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#080b12] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[130px]"
      />

      <div className="mx-auto max-w-[1200px]">
        {/* Contact panel */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101722] px-6 py-14 shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">

          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-cyan-400/[0.12]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-cyan-400/[0.10]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[100px]"
          />

          <div className="relative mx-auto max-w-3xl text-center">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-cyan-400/70" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Let's Work Together
              </span>
              <span className="h-px w-10 bg-cyan-400/70" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              <span className="text-cyan-400">
                Let's make it happen.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
              Whether you need a cinematic advertisement, engaging
              UGC-style content or professional video editing, Mikos
              Digital is ready to bring your vision to life.
              Tell us about your next project.
            </p>

            {/* Primary contact actions */}
            <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3 sm:gap-4">
              {contactActions.map((contact) => {
                const isActive = activeContact === contact.label;

                return (
                  <div
                    key={contact.label}
                    className="group relative"
                  >
                    <button
                      ref={(element) => {
                        contactTriggerRefs.current[contact.label] = element;
                      }}
                      type="button"
                      aria-expanded={isActive}
                      onClick={() =>
                        setActiveContact(isActive ? null : contact.label)
                      }
                      className="flex min-h-[108px] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.07] hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:min-h-[120px] sm:flex-row sm:gap-3 sm:px-5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-300">
                        {contact.icon}
                      </span>
                      <span className="text-sm font-semibold">{contact.label}</span>
                      <BsArrowUpRight className="absolute right-3 top-3 text-xs text-white/40 sm:static sm:ml-auto" />
                    </button>

                    <div
                      className={`invisible pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#101722]/95 px-3 text-center opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 ${
                        isActive
                          ? "visible pointer-events-auto opacity-100"
                          : ""
                      }`}
                    >
                      <button
                        type="button"
                        aria-label={`Close ${contact.label} details`}
                        onClick={() => {
                          setActiveContact(null);
                          contactTriggerRefs.current[contact.label]?.focus();
                        }}
                        className="absolute right-2 top-2 rounded-full p-1 text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <BsX />
                      </button>
                      <span className="text-[11px] text-white/60 sm:text-xs">
                        {contact.detail}
                      </span>
                      <a
                        href={contact.href}
                        target={contact.external ? "_blank" : undefined}
                        rel={
                          contact.external ? "noopener noreferrer" : undefined
                        }
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 transition-colors hover:text-cyan-200"
                      >
                        {contact.action}
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Email */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                Prefer email?
              </p>

              <a
                href="mailto:mr.michaelndubuisi@gmail.com"
                className="mt-3 inline-flex items-center gap-3 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200 sm:text-base"
              >
                <BsEnvelope className="text-lg" />
                mikosdigital1@gmail.com
                <BsArrowUpRight className="text-xs" />
              </a>
            </div>

            {/* Availability note */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-white/60">
                Open to projects and creative collaborations
              </span>
            </div>
          </div>
        </div>

        {/* Brand signature */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs tracking-wide text-white/35">
            Have a vision? Let's bring it to life.
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            MIKOS DIGITAL — TURNING IDEAS INTO DIGITAL REALITY.
          </p>
        </div>
      </div>
    </section>
  );
}
