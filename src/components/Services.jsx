import {
  FaBullhorn,
  FaLaptop,
  FaLightbulb,
  FaPaintBrush,
  FaPenNib,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

const services = [
  {
    name: "Content Development",
    description:
      "Creating clear, engaging content that communicates ideas and connects with audiences.",
    icon: <FaPenNib />,
  },
  {
    name: "Graphic Design",
    description:
      "Designing visual content that communicates ideas and strengthens brand presentation.",
    icon: <FaPaintBrush />,
  },
  {
    name: "Website Design",
    description:
      "Building modern, responsive websites with a focus on usability, visual appeal, and clear communication.",
    icon: <FaLaptop />,
  },
  {
    name: "Video Editing",
    description:
      "Editing and shaping video content into engaging visual stories that capture attention.",
    icon: <FaVideo />,
  },
  {
    name: "Content Strategy",
    description:
      "Developing content ideas and strategies that support communication, engagement, and brand goals.",
    icon: <FaLightbulb />,
  },
  {
    name: "Branding & Communications",
    description:
      "Creating consistent visual identities and messaging that help brands communicate effectively.",
    icon: <FaBullhorn />,
  },
  {
    name: "Digital Collaboration",
    description:
      "Using digital tools and collaborative workflows to organize ideas, communicate, and deliver creative projects.",
    icon: <FaUsers />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0a1a36] text-text px-4 sm:px-6 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Heading */}
        <div className="text-center fade-in-down">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Skills & Expertise
          </h2>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Creative and digital skills I bring to every project
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {services.map(({ name, description, icon }) => (
            <article
              key={name}
              className="bg-[#101e3b] p-6 rounded-xl border border-white/5 transition duration-300 hover:-translate-y-1 hover:bg-[#14294c] hover:border-accent/30"
            >
              <span
                className="inline-block text-3xl text-accent mb-4"
                aria-hidden="true"
              >
                {icon}
              </span>

              <h3 className="text-lg font-semibold mb-2">
                {name}
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                {description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}