import { motion } from "framer-motion";

// TECH STACK DATA
const techStack = [
  {
    name: "Vercel",
    icon: "▲",
    link: "https://vercel.com"
  },
  {
    name: "Google Cloud",
    icon: "☁️",
    link: "https://cloud.google.com"
  },
  {
    name: "Docker",
    icon: "🐳",
    link: "https://www.docker.com"
  },
  {
    name: "GitHub",
    icon: "🐙",
    link: "https://github.com"
  },
  {
    name: "React",
    icon: "⚛️",
    link: "https://react.dev"
  },
  {
    name: "Node.js",
    icon: "🟢",
    link: "https://nodejs.org"
  }
];

const TechSection = () => {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="container-custom text-center relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Powered by Leading Cloud & Developer Platforms
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Our engineers build scalable applications using globally trusted cloud infrastructure and modern development tools.
        </motion.p>

        {/* TECH GRID */}
        <div className="flex flex-wrap justify-center gap-6">

          {techStack.map((tech, index) => (

            <motion.a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 25px rgba(59,130,246,0.4)"
              }}
              className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:border-blue-500 transition duration-300 cursor-pointer backdrop-blur-md"
            >

              {/* ICON */}
              <span className="text-2xl">
                {tech.icon}
              </span>

              {/* NAME */}
              <span className="font-medium">
                {tech.name}
              </span>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TechSection;