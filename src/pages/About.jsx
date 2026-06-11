
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaRocket,
  FaBullseye,
  FaUsers,
  FaLightbulb,
  FaArrowRight
} from "react-icons/fa";

const About = () => {

  return (

    <div className="relative bg-[#0f172a] text-white overflow-hidden">

      {/* GRID BACKGROUND */}

      <div
        className="absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:80px_80px]"
      />

      {/* HERO SECTION */}

      <section className="relative pt-40 pb-20">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="container-custom relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            {/* BADGE */}

            <div className="inline-block px-5 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm mb-6">

              ✨ About Synent Technologies

            </div>

            {/* HEADING */}

            <h1 className="max-w-5xl mx-auto text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

              Pioneering

              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}Secure{" "}
              </span>

              & Scalable Digital Solutions

            </h1>

            {/* PARAGRAPH */}

            <p className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto leading-8">

              Building intelligent, high-performance, and secure
              digital ecosystems engineered for startups,
              enterprises, and future-ready businesses.

            </p>

          </motion.div>

        </div>

      </section>

      {/* STATS SECTION */}

      <section className="pb-20">

        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-blue-500/40 transition duration-300"
          >

            <h3 className="text-4xl font-extrabold text-blue-400">

              98%

            </h3>

            <p className="text-gray-400 mt-3">

              AI Efficiency

            </p>

          </motion.div>

          {/* CARD 2 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-purple-500/40 transition duration-300"
          >

            <h3 className="text-4xl font-extrabold text-purple-400">

              50+

            </h3>

            <p className="text-gray-400 mt-3">

              Projects Delivered

            </p>

          </motion.div>

          {/* CARD 3 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-500/40 transition duration-300"
          >

            <h3 className="text-4xl font-extrabold text-cyan-400">

              24/7

            </h3>

            <p className="text-gray-400 mt-3">

              Cloud Infrastructure

            </p>

          </motion.div>

          {/* CARD 4 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-green-500/40 transition duration-300"
          >

            <h3 className="text-4xl font-extrabold text-green-400">

              100+

            </h3>

            <p className="text-gray-400 mt-3">

              Tech Learners Empowered

            </p>

          </motion.div>

        </div>

      </section>

      {/* COMPANY STORY */}

      <section className="pb-20">

        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 rounded-[40px]"></div>

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-12 hover:border-blue-500/30 transition duration-500">

                <h2 className="text-4xl font-bold mb-8">

                  Our Story

                </h2>

                <p className="text-gray-300 leading-8 mb-6">

                  Synent Technologies was founded on the principle
                  of bridging the gap between complex engineering
                  and seamless user experiences.

                </p>

                <p className="text-gray-400 leading-8">

                  We specialize in building robust, AI-driven platforms
                  designed to scale alongside modern businesses.
                  Our engineers focus on high-performance web applications,
                  cloud infrastructure, and secure digital ecosystems.

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-8"
          >

            {/* MISSION */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl text-blue-400 mb-6">

                <FaRocket />

              </div>

              <h3 className="text-2xl font-bold mb-4">

                Our Mission

              </h3>

              <p className="text-gray-400 leading-7">

                To build intelligent and scalable digital products
                that help businesses innovate faster and grow securely.

              </p>

            </div>

            {/* VISION */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-3xl text-purple-400 mb-6">

                <FaBullseye />

              </div>

              <h3 className="text-2xl font-bold mb-4">

                Our Vision

              </h3>

              <p className="text-gray-400 leading-7">

                To become a globally trusted technology partner
                delivering secure, AI-driven, and future-ready ecosystems.

              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="pb-20">

        <div className="container-custom">

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold">

              What Our Clients Say

            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">

              Trusted by startups and businesses worldwide
              for building secure and scalable digital ecosystems.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* CARD 1 */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/40 transition duration-300"
            >

              <div className="flex gap-1 text-yellow-400 mb-5">

                ⭐ ⭐ ⭐ ⭐ ⭐

              </div>

              <p className="text-gray-300 leading-8 mb-8">

                "Synent Technologies didn't just build our platform;
                they architected a secure environment that passed our
                first security audit with flying colors."

              </p>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">

                  FC

                </div>

                <div>

                  <h3 className="font-semibold text-lg">

                    FinTech Founder

                  </h3>

                  <p className="text-gray-400 text-sm">

                    FinTech Startup

                  </p>

                </div>

              </div>

            </motion.div>

            {/* CARD 2 */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-500/40 transition duration-300"
            >

              <div className="flex gap-1 text-yellow-400 mb-5">

                ⭐ ⭐ ⭐ ⭐ ⭐

              </div>

              <p className="text-gray-300 leading-8 mb-8">

                "We needed a scalable solution that could handle
                10k+ concurrent users. Synent delivered a
                high-performance ecosystem that doubled our load speeds."

              </p>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xl">

                  ED

                </div>

                <div>

                  <h3 className="font-semibold text-lg">

                    E-commerce Director

                  </h3>

                  <p className="text-gray-400 text-sm">

                    E-commerce Platform

                  </p>

                </div>

              </div>

            </motion.div>

            {/* CARD 3 */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/40 transition duration-300"
            >

              <div className="flex gap-1 text-yellow-400 mb-5">

                ⭐ ⭐ ⭐ ⭐ ⭐

              </div>

              <p className="text-gray-300 leading-8 mb-8">

                "Working with Synent felt like having a dedicated CTO.
                Their expertise in cloud infrastructure saved us months
                of development time."

              </p>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xl">

                  TL

                </div>

                <div>

                  <h3 className="font-semibold text-lg">

                    Tech Lead, SaaS

                  </h3>

                  <p className="text-gray-400 text-sm">

                    SaaS Company

                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="pb-20">

        <div className="container-custom">

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold">

              Why Choose Us

            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">

              We combine innovation, engineering, and
              performance-focused architecture to deliver
              future-ready digital ecosystems.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <FaUsers />,
                title: "Client Focused",
                desc: "We prioritize business goals and user experience in every solution we create."
              },

              {
                icon: <FaLightbulb />,
                title: "Innovative Thinking",
                desc: "We engineer future-ready systems powered by modern technologies and AI."
              },

              {
                icon: <FaRocket />,
                title: "Scalable Infrastructure",
                desc: "Our platforms are designed for performance, scalability, and long-term growth."
              }

            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}
                whileHover={{
                  y: -10
                }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-blue-500/40 transition duration-300"
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl text-blue-400 mb-6">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-7">

                  {item.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="pb-28">

        <div className="container-custom">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[40px]
            border border-white/10
            bg-gradient-to-r from-blue-600 to-purple-600
            p-14 text-center
            shadow-[0_0_80px_rgba(59,130,246,0.35)]"
          >

            <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>

            <div className="relative z-10">

              <h2 className="text-4xl md:text-5xl font-extrabold">

                Let’s Build Something Amazing

              </h2>

              <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto leading-8">

                Partner with Synent Technologies to transform
                your ideas into scalable digital ecosystems.

              </p>

              <Link
                to="/contact"
                className="mt-10 bg-white text-black hover:scale-105 transition duration-300 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3"
              >

                Get Started

                <FaArrowRight />

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </div>

  );

};

export default About;

