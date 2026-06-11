import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCloud,
  FaRobot,
  FaBriefcase
} from "react-icons/fa";

const insights = [
  {
    icon: <FaRobot />,
    badge: "Artificial Intelligence",
    title: "AI-Driven Innovation",
    description:
      "Exploring intelligent automation and AI-powered systems that help businesses improve efficiency, scalability, and digital transformation.",
    glow: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <FaCloud />,
    badge: "Cloud Engineering",
    title: "Scalable Cloud Infrastructure",
    description:
      "Building secure cloud-native applications and modern infrastructure powered by scalable technologies and next-generation platforms.",
    glow: "from-cyan-500/20 to-purple-500/20"
  },
  {
    icon: <FaBriefcase />,
    badge: "Careers",
    title: "Latest Hiring Updates",
    description:
      "Synent Technologies is actively offering internship opportunities across Web Development, Python, AI/ML, and Data Science domains.",
    glow: "from-purple-500/20 to-blue-500/20",
    button: true
  }
];

const InsightsSection = () => {

  return (

    <section className="relative py-20 bg-[#0f172a] overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">

        {/* SECTION HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <div
            className="inline-flex items-center gap-2
            px-5 py-2 rounded-full
            border border-blue-500/20
            bg-blue-500/10
            text-blue-400 text-sm mb-6"
          >

            ✨ Synent Insights

          </div>

          <h2
            className="text-4xl md:text-5xl font-extrabold
            text-white leading-tight"
          >

            Latest Updates &

            <span
              className="bg-gradient-to-r from-blue-400 to-cyan-300
              bg-clip-text text-transparent"
            >

              {" "}Insights

            </span>

          </h2>

          <p className="mt-6 text-gray-400 leading-8 text-lg">

            Innovation, technology trends, and opportunities
            shaping the future at Synent Technologies.

          </p>

        </motion.div>

        {/* INSIGHTS GRID */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {insights.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              className="relative group"
            >

              {/* CARD GLOW */}

              <div
                className={`absolute inset-0 rounded-3xl
                bg-gradient-to-br ${item.glow}
                blur-2xl opacity-0
                group-hover:opacity-100
                transition duration-500`}
              />

              {/* CARD */}

              <div
                className="relative h-full
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-3xl p-8
                overflow-hidden
                hover:border-blue-500/30
                transition-all duration-500"
              >

                {/* TOP ROW */}

                <div className="flex items-center justify-between mb-6">

                  {/* ICON */}

                  <div
                    className="w-14 h-14 rounded-2xl
                    bg-gradient-to-br from-blue-500 to-cyan-500
                    flex items-center justify-center
                    text-white text-xl
                    shadow-lg"
                  >

                    {item.icon}

                  </div>

                  {/* BADGE */}

                  <span
                    className="px-4 py-2 rounded-full
                    bg-white/5 border border-white/10
                    text-xs uppercase tracking-wider
                    text-blue-300"
                  >

                    {item.badge}

                  </span>

                </div>

                {/* TITLE */}

                <h3
                  className="text-2xl font-bold
                  text-white mb-5"
                >

                  {item.title}

                </h3>

                {/* DESCRIPTION */}

                <p
                  className="text-gray-400
                  leading-8 text-[15px]"
                >

                  {item.description}

                </p>

                {/* BUTTON */}

                {item.button && (

                  <Link
                    to="/careers"
                    className="mt-8 inline-flex items-center gap-2
                    text-blue-400 hover:text-cyan-300
                    font-medium transition duration-300"
                  >

                    View Opportunities

                    <FaArrowRight className="text-sm" />

                  </Link>

                )}

                {/* DECORATIVE LIGHT */}

                <div
                  className="absolute -bottom-20 -right-20
                  w-40 h-40 rounded-full
                  bg-blue-500/10 blur-3xl"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default InsightsSection;