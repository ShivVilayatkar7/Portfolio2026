import { motion } from "framer-motion";
import { FaEye, FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          Resume
        </p>

        <h2 className="heading-font mb-16 text-4xl font-bold md:text-6xl">
          Professional Resume
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-8 md:p-12"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h3 className="heading-font mb-4 text-3xl font-bold">
                Download My Resume
              </h3>

              <p className="mb-8 leading-relaxed text-[#C9C3D4]">
                Explore my education, internships, technical skills,
                certifications, projects, and achievements in a detailed
                professional resume.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] px-6 py-3 font-medium">
                  <FaEye />
                  View Resume
                </button>

                <button className="flex items-center gap-2 rounded-full border border-[#8B5CF6]/40 px-6 py-3 font-medium">
                  <FaDownload />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <div className="h-[420px] w-[300px] rounded-2xl border border-[#8B5CF6]/20 bg-[#241537] p-6">
                <div className="mb-4 h-6 w-24 rounded bg-[#8B5CF6]/20"></div>

                <div className="space-y-3">
                  <div className="h-3 rounded bg-[#8B5CF6]/10"></div>
                  <div className="h-3 rounded bg-[#8B5CF6]/10"></div>
                  <div className="h-3 w-4/5 rounded bg-[#8B5CF6]/10"></div>

                  <div className="pt-4">
                    <div className="h-3 rounded bg-[#8B5CF6]/10"></div>
                    <div className="mt-3 h-3 rounded bg-[#8B5CF6]/10"></div>
                    <div className="mt-3 h-3 w-3/4 rounded bg-[#8B5CF6]/10"></div>
                  </div>

                  <div className="pt-4">
                    <div className="h-3 rounded bg-[#8B5CF6]/10"></div>
                    <div className="mt-3 h-3 rounded bg-[#8B5CF6]/10"></div>
                    <div className="mt-3 h-3 rounded bg-[#8B5CF6]/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;