import profileImg from "../assets/images/Bad.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-primary text-text px-4 sm:px-6 lg:px-12 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full space-y-12">

        {/* Heading */}
        <div className="text-center fade-in-down">
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center fade-in-left">
            <img
              src={profileImg}
              alt="Michael Ndubuisi"
              className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-accent shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left fade-in-right">

            <p className="text-base sm:text-lg leading-relaxed text-gray-300 fade-in-up">
              I am a creative digital professional with a passion for
              transforming ideas into engaging digital experiences. My work
              combines content creation, storytelling, video editing,
              branding, graphic design, and web development.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300 fade-in-up">
              I enjoy working on projects that require both creativity and
              technology from developing websites and visual content to
              creating compelling brand stories for businesses.
            </p>

            <div>
              <h3 className="font-semibold text-accent mb-3">
                What I Do
              </h3>

              <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                <li>Content Development & Storytelling</li>
                <li>Video Editing & Creative Production</li>
                <li>Branding & Graphic Design</li>
                <li>Website Design & Development</li>
              </ul>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="p-5 rounded-xl bg-[#101e3b] fade-in-left">
                <h3 className="text-xl font-semibold mb-2">
                  My Approach
                </h3>
                <p className="text-sm text-gray-400">
                  I combine creativity, technology, and clear communication
                  to create digital work that is both visually engaging and
                  purposeful.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#101e3b] fade-in-right">
                <h3 className="text-xl font-semibold mb-2">
                  My Goal
                </h3>
                <p className="text-sm text-gray-400">
                  To keep learning, create meaningful digital experiences,
                  and contribute to innovative creative projects.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}