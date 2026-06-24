import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025 - Present",
    role: "Open to Internship Opportunities",
    description:
      "Actively building full-stack applications, strengthening problem-solving skills, and preparing for professional software development roles.",
  },
  {
    year: "2024 - 2025",
    role: "Full Stack Development Journey",
    description:
      "Focused on MERN stack development, modern frontend technologies, backend architecture, and real-world project development.",
  },
  {
    year: "2023 - 2024",
    role: "Programming Foundations",
    description:
      "Built strong fundamentals in Java, Python, C/C++, data structures, algorithms, and software development concepts.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          Experience
        </p>

        <h2 className="heading-font mb-16 text-4xl font-bold md:text-6xl">
          My Journey
        </h2>

        <div className="relative border-l border-[#8B5CF6]/30 pl-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-12"
            >
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-[#8B5CF6]" />

              <p className="mb-2 text-sm text-[#8D859A]">
                {exp.year}
              </p>

              <h3 className="heading-font mb-3 text-2xl font-semibold text-white">
                {exp.role}
              </h3>

              <p className="max-w-3xl leading-relaxed text-[#C9C3D4]">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;