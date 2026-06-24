import { motion } from "framer-motion";

const certifications = [
  {
    title: "Python Development",
    issuer: "Professional Certification",
  },
  {
    title: "Java Programming",
    issuer: "Professional Certification",
  },
  {
    title: "Web Development",
    issuer: "Professional Certification",
  },
  {
    title: "MERN Stack",
    issuer: "Technical Certification",
  },
  {
    title: "Internship Certification",
    issuer: "Industry Experience",
  },
  {
    title: "Hackathon Participation",
    issuer: "Technical Events",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8D859A]">
          Certifications
        </p>

        <h2 className="heading-font mb-16 text-4xl font-bold md:text-6xl">
          Learning & Credentials
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-8 transition-all duration-300 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-[#241537]" />

              <h3 className="heading-font mb-3 text-xl font-bold text-white">
                {cert.title}
              </h3>

              <p className="text-[#C9C3D4]">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;