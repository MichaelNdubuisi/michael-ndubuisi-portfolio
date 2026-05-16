import profileImg from "../assets/images/Bad.jpg";

export default function About() {
return (
<section id="about" className="min-h-screen bg-primary text-text px-4 sm:px-6 lg:px-12 py-20 flex items-center justify-center" >
<div className="max-w-6xl w-full space-y-12">
{/* Heading */}
<div className="text-center fade-in-down">
<h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
</div>
    {/* Content: Image + Text */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      {/* Image */}
      <div className="flex justify-center fade-in-left">
        <img
          src={profileImg}
          alt="Profile"
          className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-accent shadow-xl"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-6 text-center md:text-left fade-in-right">
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 fade-in-up">
          I am a results-driven full-stack developer with a proven track record of building high-impact, scalable web solutions for businesses and individuals. My expertise spans modern JavaScript frameworks (React, Node.js), UI/UX design, and backend development, enabling me to deliver seamless, responsive, and visually compelling digital experiences.
          <br /><br />
          <span className="font-semibold text-accent">A Bit About Me:</span>
          <ul className="list-disc list-inside text-sm mt-2 mb-2">
            <li>I have delivered a range of web projects for individuals, small businesses, and startups each experience contributing to my growth as a developer.</li>
            <li>I specialize in building MVPs and prototypes that enable clients to validate ideas and gather real user feedback efficiently.</li>
            <li>Clients and collaborators value my clear communication, reliability, and commitment to delivering practical solutions.</li>
          </ul>
          I am dedicated to continuous learning and welcome new challenges. If you are seeking a developer who is professional, detail-oriented, and genuinely invested in project success, I would be glad to connect.
        </p>

        {/* Two-column Info Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-[#101e3b] fade-in-left">
            <h3 className="text-xl font-semibold mb-2">What I Offer</h3>
            <p className="text-sm text-gray-400">
              I build modern, full-stack web applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB. My solutions are deployed on leading cloud platforms (Vercel, Render) and feature custom animations, advanced interactivity, and fully responsive layouts tailored to your goals.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#101e3b] fade-in-right">
            <h3 className="text-xl font-semibold mb-2">Who I Work With</h3>
            <p className="text-sm text-gray-400">
              I partner with startups, entrepreneurs, and established businesses who want to elevate their digital presence, drive engagement, and achieve measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}