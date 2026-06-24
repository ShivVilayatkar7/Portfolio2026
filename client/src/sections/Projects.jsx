import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPortfolioProjects } from "../services/api";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const { data } =
        await getPortfolioProjects();

      setProjects(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);


  return (
    <section
      id="work"
      className="px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          Featured Work
        </p>

        <h2 className="heading-font mb-16 text-4xl font-bold text-white md:text-6xl">
          Selected Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-8 transition-all duration-300 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]
                
                ${
                  project.featured
                    ? "md:col-span-2 min-h-[320px]"
                    : "min-h-[320px]"
                }
              `}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-6 h-40 w-full rounded-2xl object-cover"
                  />

                  <h3 className="heading-font mb-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="leading-relaxed text-[#C9C3D4]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#8B5CF6] transition hover:text-white"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#8B5CF6] transition hover:text-white"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;