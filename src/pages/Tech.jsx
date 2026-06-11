import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

const technologies = [
  {
    icon: <FaReact />,
    title: "React",
    desc: "Modern frontend development for scalable and high-performance UI.",
    color: "from-cyan-500 to-blue-500",
    link: "https://react.dev/"
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    desc: "Backend development for fast and scalable API systems.",
    color: "from-green-500 to-emerald-500",
    link: "https://nodejs.org/"
  },
  {
    icon: <FaPython />,
    title: "Python",
    desc: "AI, automation, and data-driven backend solutions.",
    color: "from-yellow-400 to-orange-500",
    link: "https://www.python.org/"
  },
  {
    icon: <FaAws />,
    title: "AWS",
    desc: "Cloud infrastructure for scalable and secure deployments.",
    color: "from-orange-400 to-amber-500",
    link: "https://aws.amazon.com/"
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    desc: "Containerized applications for efficient deployment.",
    color: "from-blue-500 to-sky-500",
    link: "https://www.docker.com/"
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    desc: "Version control and collaborative development workflows.",
    color: "from-purple-500 to-pink-500",
    link: "https://github.com/"
  }
];

const Tech = () => {
  return (
    <div className="bg-[#0f172a] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 text-center">

        {/* BACKGROUND GLOW (same system as Home/About) */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom relative z-10"
        >

          <div className="inline-block px-5 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
            ⚡ Modern Engineering Ecosystem
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Engineering the Future{" "}
            <span className="text-cyan-400">with Our Modern Technologies</span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto leading-8">
            We build scalable digital systems using modern frameworks, cloud infrastructure, and production-grade engineering practices.
          </p>

        </motion.div>
      </section>

      {/* ================= GRID SECTION ================= */}
      <section className="pb-24">
        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {technologies.map((tech, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden backdrop-blur-xl transition duration-500"
              >

                {/* HOVER BACKGROUND GLOW */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${tech.color} blur-3xl`}
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-3xl mb-6 shadow-xl group-hover:rotate-6 transition`}
                  >
                    {tech.icon}
                  </div>

                  {/* TITLE */}
                  <h2 className="text-2xl font-bold mb-3">
                    {tech.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 leading-7 mb-6">
                    {tech.desc}
                  </p>

                  {/* LINK */}
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition"
                  >
                    Official Website
                    <FaExternalLinkAlt className="text-sm" />
                  </a>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-28">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container-custom bg-white/5 border border-white/10 rounded-[40px] p-14 text-center"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Built for Modern Engineering
          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            We continuously evolve our tech stack to build faster, scalable, and production-ready digital ecosystems.
          </p>

        </motion.div>

      </section>

    </div>
  );
};

export default Tech;