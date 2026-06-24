import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";

const Achievements = () => {
  const [achievements, setAchievements] =
    useState([]);

  const fetchPortfolio = async () => {
    try {
      const { data } =
        await getPortfolio();

      setAchievements(
        data.data?.achievements || []
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);
  return (
    <section id="achievements" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          Achievements
        </p>

        <h2 className="heading-font mb-16 text-4xl font-bold md:text-6xl">
          Milestones & Achievements
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              <h3 className="heading-font mb-3 text-5xl font-black text-[#8B5CF6]">
                {item.number}
              </h3>

              <h4 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="text-sm leading-relaxed text-[#C9C3D4]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;