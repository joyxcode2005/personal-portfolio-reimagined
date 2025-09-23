import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const underlineVariants = {
  initial: { x: -20, opacity: 0 },
  hover: { x: 0, opacity: 1 },
};

const Contact = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className="mt-16 md:px-12 lg:px-5">
      {/* Heading */}
      <motion.h2
        initial="initial"
        whileHover="hover"
        className={`text-4xl md:text-5xl font-bold uppercase font-space-grotesk relative cursor-pointer text-center w-full mb-5 ${
          isDark ? "text-white" : "text-gray-900"
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
            className={`text-2xl font-semibold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            I'd love to hear from you
          </h3>
          <p
            className={`mb-32 leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            If you have any inquiries, opportunities, or just want to say hi,
            feel free to reach out!
          </p>
          <p
            className={`mb-6 ${
              isDark ? "text-gray-200" : "text-gray-700"
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
            <Link target="_blank" to={"https://www.instagram.com/sen.joy.2525/"}>
              <FaInstagram
                size={28}
                className="cursor-pointer dark:text-white hover:scale-110 transition-transform"
              />
            </Link>
            <Link target="_blank" to={"https://www.facebook.com/joy.sengupta.754/"}>
              <FaFacebook
                size={28}
                className="cursor-pointer dark:text-white hover:scale-110 transition-transform"
              />
            </Link>
            <Link target="_blank" to={"https://www.linkedin.com/in/joy-sengupta-b71055286/"}>
              <FaLinkedin
                size={28}
                className="cursor-pointer dark:text-white hover:scale-110 transition-transform"
              />
            </Link>
            <Link target="_blank" to={"https://x.com/JoySengupt2005"}>
              <FaXTwitter
                size={28}
                className="cursor-pointer text-black dark:text-white hover:scale-110 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="col-span-3">
          <form className="flex flex-col p-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border text-white border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border text-white border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              className="p-3 border text-white border-gray-300 dark:border-gray-600 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
