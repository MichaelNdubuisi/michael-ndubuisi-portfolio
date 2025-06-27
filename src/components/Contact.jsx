import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../utils/emailConfig";
import { FaWhatsapp, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-primary text-text px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        {/* Heading */}
        <div className="fade-in-down">
          <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
          <p className="text-gray-400 mt-2">
            Have a project or idea in mind? I'd love to hear from you. Use the
            form below or{" "}
            <a
              href="https://wa.me/2347046999780"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              message me on WhatsApp
            </a>{" "}
            or{" "}
            <a
              href="https://t.me/+2347046999780"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Telegram
            </a>
            .
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#101e3b] rounded-xl max-w-2xl mx-auto p-8 space-y-6 text-left fade-in-up"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-[#0f1b34] text-text border border-gray-700 focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-[#0f1b34] text-text border border-gray-700 focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded bg-[#0f1b34] text-text border border-gray-700 focus:outline-none focus:ring-1 focus:ring-accent resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent hover:bg-cyan-500 transition px-6 py-2 rounded text-primary font-semibold"
          >
            {sent ? "Message Sent ✅" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
