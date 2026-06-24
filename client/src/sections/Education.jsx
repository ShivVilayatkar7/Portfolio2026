import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";

const Education = () => {
  const [educationData, setEducationData] =
    useState([]);

  const fetchPortfolio = async () => {
    try {
      const { data } =
        await getPortfolio();

      setEducationData(
        data.data?.education || []
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);
  
  return (
    <section id="education" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          Education
        </p>

        <h2 className="heading-font mb-16 text-4xl font-bold text-white md:text-6xl">
          Academic Journey
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-8 transition-all duration-300 hover:border-[#8B5CF6]/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              <p className="mb-2 text-sm text-[#8D859A]">
                {item.duration}
              </p>

              <h3 className="heading-font mb-3 text-2xl font-bold text-white">
                {item.degree}
              </h3>

              <p className="mb-6 text-[#A855F7]">
                {item.institute}
              </p>

              <div className="flex flex-wrap gap-3">
                {item.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-[#8B5CF6]/30 bg-[#241537] px-4 py-2 text-sm text-[#C9C3D4]"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;