import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiVite,
  SiMongodb,
  SiVercel,
  SiRender,
} from "react-icons/si";

const developmentTools = [
  {
    name: "HTML5",
    icon: <FaHtml5 size={32} className="text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={32} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={32} className="text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact size={32} className="text-cyan-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={32} className="text-sky-400" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={32} className="text-pink-400" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={32} className="text-red-500" />,
  },
  {
    name: "Vite",
    icon: <SiVite size={32} className="text-purple-400" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={32} className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={32} className="text-green-600" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel size={32} className="text-gray-200" />,
  },
  {
    name: "Render",
    icon: <SiRender size={32} className="text-blue-500" />,
  },
];

const creativeTools = [
  {
    name: "ChatGPT",
    icon: "💬",
  },
  {
    name: "Gemini",
    icon: "✦",
  },
  {
    name: "Google Flow",
    icon: "◈",
  },
  {
    name: "Canva",
    icon: "🎨",
  },
  {
    name: "InShot",
    icon: "🎬",
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="bg-primary text-text px-4 sm:px-6 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Heading */}
        <div className="text-center fade-in-down">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Tools & Technologies
          </h2>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Technologies and creative tools I use to create digital experiences
          </p>
        </div>

        {/* Development */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-6">
            Development
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 fade-in-up">
            {developmentTools.map((item) => (
              <div
                key={item.name}
                className="bg-[#101e3b] p-5 rounded-xl flex flex-col items-center justify-center space-y-3 min-h-[100px] transition-transform transform hover:scale-105 hover:bg-[#14294c]"
              >
                {item.icon}

                <p className="text-sm text-gray-300">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Creative & Content */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-6">
            Creative & Content
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 fade-in-up">
            {creativeTools.map((item) => (
              <div
                key={item.name}
                className="bg-[#101e3b] p-5 rounded-xl flex flex-col items-center justify-center space-y-3 min-h-[100px] transition-transform transform hover:scale-105 hover:bg-[#14294c]"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.icon}
                </span>

                <p className="text-sm text-gray-300">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}