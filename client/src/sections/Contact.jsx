import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          Contact
        </p>

        <h2 className="heading-font mb-16 text-4xl font-bold md:text-6xl">
          Let's Build Something Impactful
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-[#C9C3D4]">
              Open to internships, collaborations, freelance opportunities,
              and exciting projects. Feel free to reach out and let's create
              something meaningful together.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#8B5CF6]" />
                <span className="text-[#C9C3D4]">
                  your-email@example.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-[#8B5CF6]" />
                <span className="text-[#C9C3D4]">
                  github.com/yourusername
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedinIn className="text-[#8B5CF6]" />
                <span className="text-[#C9C3D4]">
                  linkedin.com/in/yourprofile
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-8"
          >
            <div className="mb-6">
              <label className="mb-2 block text-sm text-[#C9C3D4]">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[#8B5CF6]/20 bg-[#241537] px-4 py-3 outline-none focus:border-[#8B5CF6]"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm text-[#C9C3D4]">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-[#8B5CF6]/20 bg-[#241537] px-4 py-3 outline-none focus:border-[#8B5CF6]"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm text-[#C9C3D4]">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-[#8B5CF6]/20 bg-[#241537] px-4 py-3 outline-none focus:border-[#8B5CF6]"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] px-8 py-3 font-medium transition hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;