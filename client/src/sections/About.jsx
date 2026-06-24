import avatar from "../assets/avatar/avatar.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";

const techStack = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "JavaScript",
  "Tailwind",
  "Python",
  "Git",
];

const About = () => {
  const [portfolio, setPortfolio] = useState(null);

  const fetchPortfolio = async () => {
    try {
      const { data } = await getPortfolio();
      setPortfolio(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <section
      id="about"
      className="px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          About Me
        </p>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-80 w-80 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />

            <img
              src={
                portfolio?.about?.image
                  ? portfolio.about.image
                  : avatar
              }
              alt="Shiv"
              className="relative z-10 w-full max-w-md object-contain"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-font mb-8 text-4xl font-bold leading-tight text-white md:text-6xl">
              {portfolio?.about?.title ||
                "Turning ideas into scalable web applications."}
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#C9C3D4]">
              <p>{portfolio?.about?.paragraph1}</p>

              <p>{portfolio?.about?.paragraph2}</p>

              <p>{portfolio?.about?.paragraph3}</p>
            </div>

            {/* Tech Chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#8B5CF6]/30 bg-[#241537] px-4 py-2 text-sm text-[#C9C3D4]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;