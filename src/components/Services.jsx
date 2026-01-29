import { motion } from "framer-motion";

const services = [
  {
    title: "Starter Website",
    price: "₦150,000",
    bestFor: "Small businesses, startups",
    includes: [
      "3–5 pages (Home, About, Services, Contact)",
      "Mobile responsive",
      "WhatsApp integration",
      "Contact form",
      "Basic SEO",
      "3–5 days delivery"
    ],
    highlights: [],
    color: "green",
    icon: "🟢"
  },
  {
    title: "Business Website",
    price: "₦300,000",
    bestFor: "Growing businesses",
    includes: [
      "6–10 pages",
      "Custom UI design",
      "Mobile & tablet optimization",
      "WhatsApp + Email integration",
      "Basic SEO",
      "Google Maps",
      "Hosting & domain setup assistance",
      "5–7 days delivery"
    ],
    highlights: [],
    color: "blue",
    icon: "🔵",
    recommended: true
  },
  {
    title: "Premium Website",
    price: "₦500,000+",
    bestFor: "Brands, agencies, startups",
    includes: [
      "Fully custom design",
      "Animations",
      "Admin dashboard",
      "Payment integration",
      "SEO optimization",
      "Speed optimization",
      "7–14 days delivery"
    ],
    highlights: [],
    color: "red",
    icon: "🔴"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Services() {
  return (
    <section id="services" className="bg-primary text-text px-4 sm:px-6 lg:px-12 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">What We Offer</h2>
          <p className="text-gray-400 mt-2">Choose the perfect package for your business needs</p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`bg-[#101e3b] rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 ${
                service.recommended ? 'ring-2 ring-accent' : ''
              }`}
            >
              {/* Header */}
              <div className={`p-6 text-center ${
                service.color === 'green' ? 'bg-green-600' :
                service.color === 'blue' ? 'bg-blue-600' : 'bg-red-600'
              }`}>
                <div className="text-2xl mb-2">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-2xl font-bold text-white mt-2">{service.price}</p>
                {service.recommended && (
                  <div className="mt-2 text-xs text-yellow-300 font-medium">⭐ Most Recommended</div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-gray-400 mb-4">
                  {service.bestFor}
                </p>

                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2">Includes:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.highlights.length > 0 && (
                    <div>
                      <ul className="text-sm text-green-400 space-y-1">
                        {service.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">✅</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
