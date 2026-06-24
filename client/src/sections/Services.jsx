import { motion } from "framer-motion";
import { Code2, Palette, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Code2 size={32} />,
    title: "Full Stack Development",
    description:
      "Building scalable web applications using React, Node.js, Express, MongoDB, and modern development practices.",
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX Development",
    description:
      "Creating responsive, user-friendly, and visually appealing interfaces focused on great user experience.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Freelance Solutions",
    description:
      "Developing custom websites, business solutions, and web applications tailored to client requirements.",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          Services
        </p>

        <h2 className="heading-font mb-16 text-4xl font-bold md:text-6xl">
          What I Do
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-[#241537] p-4 text-[#8B5CF6]">
                {service.icon}
              </div>

              <h3 className="heading-font mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="leading-relaxed text-[#C9C3D4]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;