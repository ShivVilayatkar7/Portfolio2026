import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState([]);

  const fetchPortfolio = async () => {
    try {
      const { data } = await getPortfolio();

      setSkillCategories(data.data?.skills || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <section id="skills" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          Skills & Technologies
        </p>

        <h2 className="heading-font mb-16 text-4xl font-bold md:text-6xl">
          Technologies I Work With
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-8"
            >
              <h3 className="heading-font mb-6 text-2xl font-bold text-white">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items?.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#8B5CF6]/30 bg-[#241537] px-4 py-2 text-[#C9C3D4]"
                  >
                    {skill}
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

export default Skills;
