import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiJavascript, SiVite } from "react-icons/si";

const tech = [
  { name: "HTML5", icon: <FaHtml5 size={32} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={32} className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript size={32} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={32} className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={32} className="text-sky-400" /> },
  { name: "Framer Motion", icon: <SiFramer size={32} className="text-pink-400" /> },
  { name: "Git", icon: <FaGitAlt size={32} className="text-red-500" /> },
  { name: "Vite", icon: <SiVite size={32} className="text-purple-400" /> },
];

export default function TechStack() {
  return (
    <section id="stack" className="bg-primary text-text px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="fade-in-down">
          <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack</h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Tools and technologies I use to build clean, fast websites
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 fade-in-up">
          {tech.map((item, index) => (
            <div
              key={index}
              className="bg-[#101e3b] p-5 rounded-xl flex flex-col items-center justify-center space-y-3 min-h-[100px] transition-transform transform hover:scale-105 hover:bg-[#14294c]"
            >
              {item.icon}
              <p className="text-sm text-gray-300">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
