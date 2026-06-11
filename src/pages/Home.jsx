import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import TechSection from "../components/common/TechSection";
import InsightsSection from "../components/common/InsightsSection";

const Home = () => {

  return (

    <>

      {/* =========================
          HERO SECTION
      ========================= */}

      <section
        className="relative min-h-screen overflow-hidden
        bg-[#0f172a] flex items-center"
      >

        {/* BACKGROUND GLOWS */}

        <div
          className="absolute top-20 left-10
          w-72 h-72 bg-blue-500/20
          rounded-full blur-3xl"
        />

        <div
          className="absolute bottom-20 right-10
          w-72 h-72 bg-purple-500/20
          rounded-full blur-3xl"
        />

        {/* HERO CONTENT */}

        <div
          className="container-custom
          pt-32 pb-20
          relative z-10
          grid lg:grid-cols-2
          gap-16 items-center"
        >

          {/* =========================
              LEFT SIDE
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1
            }}
          >

            {/* BADGE */}

            <div
              className="inline-block
              px-5 py-2 rounded-full
              border border-blue-500/40
              bg-blue-500/10
              text-blue-400 text-sm mb-6"
            >

              🚀 Next Generation Digital Innovation

            </div>

            {/* HEADING */}

            <h1
              className="max-w-xl
              text-5xl md:text-6xl lg:text-7xl
              font-extrabold leading-tight text-white"
            >

              Engineering

              <span className="text-blue-500">

                {" "}Intelligent{" "}

              </span>

              <span
                className="bg-gradient-to-r
                from-blue-400 to-cyan-300
                bg-clip-text text-transparent"
              >

                Digital Ecosystems

              </span>

            </h1>

            {/* PARAGRAPH */}

            <p
              className="mt-8 text-gray-300
              text-lg leading-8 max-w-lg"
            >

              Pioneering the next generation of secure,
              scalable, and AI-driven digital experiences.
              Empowering businesses through innovation,
              automation, and modern technology solutions.

            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-5">

              {/* SERVICES BUTTON */}

              <Link
                to="/services"
                className="bg-blue-600 hover:bg-blue-700
                hover:scale-105 transition duration-300
                px-8 py-4 rounded-full
                text-white font-medium shadow-xl"
              >

                Explore Services

              </Link>

              {/* CONTACT BUTTON */}

              <Link
                to="/contact"
                className="border border-gray-600
                hover:border-blue-500
                hover:text-blue-400
                transition duration-300
                px-8 py-4 rounded-full
                text-white font-medium"
              >

                Contact Us

              </Link>

            </div>

          </motion.div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 1.2,
              y: {
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }
            }}
            className="relative flex justify-center"
          >

            {/* MAIN CIRCLE */}

            <div
              className="relative
              w-[350px] h-[350px]
              md:w-[450px] md:h-[450px]
              rounded-full
              bg-gradient-to-r
              from-blue-500 to-purple-600
              flex items-center justify-center
              shadow-[0_0_80px_rgba(59,130,246,0.5)]"
            >

              {/* INNER CIRCLE */}

              <div
                className="absolute
                w-[300px] h-[300px]
                md:w-[380px] md:h-[380px]
                rounded-full
                border border-white/10
                backdrop-blur-xl
                bg-white/5
                flex items-center justify-center"
              >

                {/* DASHBOARD CONTENT */}

                <div className="text-center">

                  <div
                    className="text-6xl
                    font-extrabold text-white"
                  >

                    98%

                  </div>

                  <p
                    className="text-cyan-300
                    mt-3 text-lg"
                  >

                    AI Automation Efficiency

                  </p>

                  {/* TAGS */}

                  <div
                    className="mt-6 flex
                    justify-center gap-3 flex-wrap"
                  >

                    <span
                      className="px-3 py-1 rounded-full
                      bg-blue-500/20
                      text-blue-300 text-sm"
                    >

                      Cloud

                    </span>

                    <span
                      className="px-3 py-1 rounded-full
                      bg-purple-500/20
                      text-purple-300 text-sm"
                    >

                      AI

                    </span>

                    <span
                      className="px-3 py-1 rounded-full
                      bg-cyan-500/20
                      text-cyan-300 text-sm"
                    >

                      Security

                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* =========================
                FLOATING CARD 1
            ========================= */}

            <motion.div
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4
              }}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0px 0px 25px rgba(59,130,246,0.5)"
              }}
              className="absolute top-10 left-0
              bg-[#111827]
              border border-gray-700
              px-5 py-4 rounded-2xl
              shadow-xl cursor-pointer"
            >

              <h3 className="text-white font-semibold">

                ☁️ Cloud Solutions

              </h3>

            </motion.div>

            {/* =========================
                FLOATING CARD 2
            ========================= */}

            <motion.div
              animate={{
                y: [0, 20, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 5
              }}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0px 0px 25px rgba(168,85,247,0.5)"
              }}
              className="absolute bottom-10 right-0
              bg-[#111827]
              border border-gray-700
              px-5 py-4 rounded-2xl
              shadow-xl cursor-pointer"
            >

              <h3 className="text-white font-semibold">

                🤖 AI Automation

              </h3>

            </motion.div>

            {/* =========================
                FLOATING CARD 3
            ========================= */}

            <motion.div
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 6
              }}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0px 0px 25px rgba(34,197,94,0.5)"
              }}
              className="absolute top-1/2 -left-8
              bg-[#111827]
              border border-gray-700
              px-5 py-4 rounded-2xl
              shadow-xl cursor-pointer"
            >

              <h3 className="text-white font-semibold">

                🌐 Web Development

              </h3>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* =========================
          TECH SECTION
      ========================= */}

      <TechSection />

      {/* =========================
          INSIGHTS SECTION
      ========================= */}

      <InsightsSection />

    </>

  );

};

export default Home;
