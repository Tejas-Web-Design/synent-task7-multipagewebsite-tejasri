import { motion } from "framer-motion";
import { FaLaptopCode, FaPython, FaDatabase, FaPaintBrush } from "react-icons/fa";

const APPLY_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdlpmt8WH-BKi3m7S3FUv2E-R9HBRWSgmxtQpZSZtdG4uu-5w/viewform";

const programs = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Develop responsive and interactive websites using HTML, CSS, and JavaScript. Learn modern web development practices, UI design principles, and deployment workflows."
  },
  {
    icon: <FaPython />,
    title: "Python Programming",
    desc: "Learn core Python concepts, automation, APIs, and backend development with real-world scripting and applications."
  },
  {
    icon: <FaDatabase />,
    title: "Data Science",
    desc: "Work with real datasets using Pandas, NumPy, and Matplotlib to analyze, visualize, and extract meaningful insights."
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    desc: "Master UI/UX principles, visual communication, and design tools to create impactful digital assets and branding."
  }
];

const Careers = () => {
  return (
    <div className="relative bg-[#0f172a] text-white overflow-hidden">

      {/* ================= GLOBAL BACKGROUND ================= */}

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px"
        }}
      />

      {/* GLOWS */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

      {/* ================= HERO ================= */}

      <section className="relative pt-40 pb-24">
        <div className="container-custom relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-block px-5 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm mb-6">
              🚀 Internship Program 2026
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Build Real{" "}
              <span className="text-blue-500">Industry</span>{" "}
              Experience
            </h1>

            <p className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto leading-8">
              Get hands-on experience working on real-world tech stacks.
              Learn, build, and grow with guided mentorship programs.
            </p>

          </motion.div>

        </div>
      </section>

      {/* ================= PROGRAM CARDS ================= */}

      <section className="pb-24 relative z-10">
        <div className="container-custom">

          <div className="grid md:grid-cols-2 gap-8">

            {programs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl overflow-hidden hover:border-blue-500/40 transition duration-300 shadow-xl"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                {/* ICON */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl text-blue-400 mb-6 group-hover:rotate-6 transition duration-500">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h2 className="relative z-10 text-2xl font-bold mb-4">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="relative z-10 text-gray-400 leading-7 mb-6">
                  {item.desc}
                </p>

                {/* META */}
                <div className="relative z-10 flex flex-wrap gap-3 text-sm text-gray-300 mb-6">
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                    Duration: 4-6 Weeks
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                    Mode: Remote
                  </span>
                </div>

                {/* BUTTON */}
                <a
                  href={APPLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 rounded-full text-white font-medium"
                >
                  Apply Now
                </a>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= WHY JOIN ================= */}

      <section className="pb-24 relative z-10">
        <div className="container-custom text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Join Synent Internship?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-8 mb-12">
            Gain real-world experience, build strong projects,
            and learn industry-level development practices with expert guidance.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Real-world Projects",
              "Mentorship Guidance",
              "Portfolio Building"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-400">
                  {item}
                </h3>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="pb-28 relative z-10">
        <div className="container-custom">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-600 to-purple-600 p-14 text-center shadow-2xl"
          >

            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10">

              <h2 className="text-4xl md:text-5xl font-extrabold">
                Start Your Tech Journey Today
              </h2>

              <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto leading-8">
                Join our internship program and build industry-ready skills
                with real project experience.
              </p>

              <a
                href={APPLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition duration-300"
              >
                Apply Now
              </a>

            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Careers;