import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const underlineVariants = {
  initial: { x: -20, opacity: 0 },
  hover: { x: 0, opacity: 1 },
};

const Contact = ({ isDark }: { isDark: boolean }) => {
  // Replace this with your actual Formspree hash
  const [state, handleSubmit] = useForm("xyeyrdak");

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="mt-16 md:px-12 lg:px-5">
      {/* Heading */}
      <motion.h2
        initial="initial"
        whileHover="hover"
        className={`text-4xl md:text-5xl font-bold uppercase font-space-grotesk relative cursor-pointer text-center w-full mb-5 ${isDark ? "text-white" : "text-gray-900"
          }`}
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Get In Touch
        </motion.span>

        <motion.span
          variants={underlineVariants}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 rounded-xl h-[5px] bg-green-500 dark:bg-green-400"
        />
      </motion.h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Left Side */}
        <div className="col-span-2 flex flex-col justify-start mt-5">
          <h3
            className={`text-2xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-800"
              }`}
          >
            I'd love to hear from you
          </h3>

          <p
            className={`mb-32 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"
              }`}
          >
            If you have any inquiries, opportunities, or just want to say hi,
            feel free to reach out!
          </p>

          <p
            className={`mb-6 ${isDark ? "text-gray-200" : "text-gray-700"
              } font-medium`}
          >
            Email:{" "}
            <a
              href="mailto:joysengupta252005@gmail.com"
              className="text-green-500 hover:underline"
            >
              joysengupta252005@gmail.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/sen.joy.2525/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={28}
                className="cursor-pointer dark:text-white hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://www.facebook.com/joy.sengupta.754/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                size={28}
                className="cursor-pointer dark:text-white hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/joy-sengupta-b71055286/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin
                size={28}
                className="cursor-pointer dark:text-white hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://x.com/JoySengupt2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter
                size={28}
                className="cursor-pointer text-black dark:text-white hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="col-span-3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col p-6 space-y-4"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${isDark
                ? "bg-transparent text-white border-gray-600 placeholder:text-gray-500"
                : "bg-white text-gray-900 border-gray-300 placeholder:text-gray-400"
                }`}
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${isDark
                ? "bg-transparent text-white border-gray-600 placeholder:text-gray-500"
                : "bg-white text-gray-900 border-gray-300 placeholder:text-gray-400"
                }`}
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${isDark
                ? "bg-transparent text-white border-gray-600 placeholder:text-gray-500"
                : "bg-white text-gray-900 border-gray-300 placeholder:text-gray-400"
                }`}
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              required
              minLength={10}
              className={`p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 ${isDark
                ? "bg-transparent text-white border-gray-600 placeholder:text-gray-500"
                : "bg-white text-gray-900 border-gray-300 placeholder:text-gray-400"
                }`}
            />

            {/* Error */}
            {state.errors && state.errors.length > 0 && (
              <p className="text-red-500 text-sm">
                Something went wrong. Please try again.
              </p>
            )}

            {/* Success */}
            {state.succeeded && (
              <p className="text-green-500 text-sm font-medium">
                Thanks! Your message has been sent successfully.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={state.submitting}
              className={`font-semibold py-3 rounded-lg transition shadow-md ${state.submitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
                }`}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;