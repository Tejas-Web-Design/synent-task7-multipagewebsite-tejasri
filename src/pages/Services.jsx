import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaCode,
  FaCloud,
  FaRobot,
  FaShieldAlt,
  FaArrowRight
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "We design and develop modern, responsive, and scalable websites and web applications tailored to business needs."
  },
  {
    icon: <FaCloud />,
    title: "Software Development",
    desc: "Custom software solutions built using modern technologies to automate processes and improve business productivity."
  },
  {
    icon: <FaShieldAlt />,
    title: "E-commerce Solutions",
    desc: "Scalable e-commerce platforms with secure payment integration and optimized shopping experiences."
  },
  {
    icon: <FaRobot />,
    title: "Consulting Services",
    desc: "Expert technology consulting to help startups choose the right tech stack and accelerate growth."
  },
  {
    icon: <FaCloud />,
    title: "Data & Analytics",
    desc: "Transform raw data into actionable insights using dashboards, analytics, and data-driven strategies."
  }
];

const Services = () => {
  return (
    <div className="relative bg-[#0f172a] text-white overflow-hidden">

      {/* =========================
          IMPROVED BACKGROUND SYSTEM
      ========================= */}

      {/* GRID BACKGROUND (SOFTER + CLEANER) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px"
        }}
      />

      {/* GLOWS (SOFTER BLENDING LIKE HOME PAGE STYLE) */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="relative pt-40 pb-24">

        <div className="container-custom relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-block px-5 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm mb-6">
              ✨ Core Services
            </div>

            <h1 className="max-w-4xl mx-auto text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Modern{" "}
              <span className="text-blue-500">Technology</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="mt-8 text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
              We provide modern technology solutions designed
              to help startups and businesses build scalable,
              secure, and high-performance digital products.
            </p>

          </motion.div>

        </div>
      </section>

      {/* =========================
          SERVICES GRID (UNCHANGED STRUCTURE)
      ========================= */}
      <section className="pb-24 relative z-10">

        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 overflow-hidden shadow-xl hover:border-blue-500/40 transition duration-500"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl text-blue-400 mb-6 group-hover:rotate-6 transition duration-500">
                  {service.icon}
                </div>

                <h2 className="relative z-10 text-2xl font-bold mb-4">
                  {service.title}
                </h2>

                <p className="relative z-10 text-gray-400 leading-7">
                  {service.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================
          STATS
      ========================= */}
      <section className="pb-24 relative z-10">

        <div className="container-custom">

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { number: "50+", title: "Projects Delivered", color: "blue" },
              { number: "20+", title: "Startup Clients", color: "purple" },
              { number: "10+", title: "Technologies Used", color: "green" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-blue-500/40 transition duration-300"
              >

                <h2 className={`text-5xl font-extrabold mb-4 ${
                  item.color === "blue"
                    ? "text-blue-400"
                    : item.color === "purple"
                    ? "text-purple-400"
                    : "text-green-400"
                }`}>
                  {item.number}
                </h2>

                <p className="text-gray-400 text-lg">
                  {item.title}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================
          PROCESS
      ========================= */}
      <section className="pb-24 relative z-10">

        <div className="container-custom">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our Process</h2>
            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
              From strategy to deployment, we build scalable solutions with modern engineering practices.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {["Research", "Planning", "Development", "Deployment"].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-blue-500/40 transition duration-300"
              >

                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold">{step}</h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================
          CTA
      ========================= */}
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
                Ready to Build the Future?
              </h2>

              <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto leading-8">
                Let’s transform your ideas into scalable digital experiences powered by innovation.
              </p>

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-3 bg-white text-black hover:scale-105 transition duration-300 px-8 py-4 rounded-full font-semibold"
              >
                Start Your Project
                <FaArrowRight />
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default Services;