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
          I am Michael Ndubuisi, a passionate full-stack developer focused on building fast, animated, and user-friendly websites.
          From landing pages to full business sites, I deliver clean code and sleek
          interfaces using modern technologies like React, Node.js, and MongoDB.
        </p>

        {/* Two-column Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-[#101e3b] fade-in-left">
            <h3 className="text-xl font-semibold mb-2">What I Do</h3>
            <p className="text-sm text-gray-400">
              I build modern full-stack websites using HTML, CSS, JavaScript, React, Node.js, MongoDB, and deploy on Vercel and Render
              with unique animations and responsive layouts.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#101e3b] fade-in-right">
            <h3 className="text-xl font-semibold mb-2">Who I Work With</h3>
            <p className="text-sm text-gray-400">
              I work with small businesses, individuals, startups, and anyone who wants
              a professional, engaging online presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}