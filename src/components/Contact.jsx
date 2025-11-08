import React from "react";
import { BsChat, BsTelephone } from "react-icons/bs";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-primary text-text rounded-lg shadow-md">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif font-bold text-4xl mb-6 text-white">Let's Work Together</h2>
        <p className="text-xl text-white mb-8 leading-relaxed">
          Ready to bring your digital vision to life? We'd love to hear about your ideas and discuss how we can create
          something amazing together.
        </p>
        <div className="flex flex-row gap-6 justify-center">
          <a href="https://wa.me/2347046999780" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-10 bg-primary hover:bg-[#0a1a36] text-white shadow-md">
            <BsChat className="h-5 w-5 mr-3" />
            Send Message
          </a>
          <a href="tel:+2347046999780" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary bg-transparent text-white hover:bg-[#0a1a36] hover:text-white h-12 px-10 shadow-md">
            <BsTelephone className="h-5 w-5 mr-3" />
            Schedule Call
          </a>
        </div>
      </div>
    </section>
  );
}
