import { motion } from "framer-motion";
import logo from "../../assets/image.png";

const Loader = () => {

  return (

    <div
      className="fixed inset-0 z-[999]
      flex flex-col items-center justify-center
      overflow-hidden
      bg-[#020617]
      select-none"
    >

      {/* =========================
          ANIMATED BACKGROUND
      ========================= */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25]
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut"
        }}
        className="absolute w-[500px] h-[500px]
        bg-blue-500/20 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
        className="absolute w-[400px] h-[400px]
        bg-cyan-500/10 rounded-full blur-[120px]"
      />

      {/* =========================
          OUTER RING
      ========================= */}

      <motion.div
        className="absolute w-44 h-44
        rounded-full border border-blue-500/20"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear"
        }}
      />

      {/* =========================
          MIDDLE RING
      ========================= */}

      <motion.div
        className="absolute w-32 h-32
        rounded-full border-2 border-cyan-400/30 border-dashed"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear"
        }}
      />

      {/* =========================
          LOGO AREA
      ========================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.05, 1],
          y: [0, -6, 0]
        }}
        transition={{
          opacity: {
            duration: 0.8
          },
          scale: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          },
          y: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }
        }}
        className="relative z-10"
      >

        {/* GLOW */}

        <div
          className="absolute inset-0 rounded-full
          bg-blue-500/40 blur-2xl"
        />

        {/* LOGO CONTAINER */}

        <div
          className="relative w-28 h-28
          rounded-full overflow-hidden
          bg-[#111827]
          border border-blue-500/30
          shadow-[0_0_45px_rgba(59,130,246,0.45)]
          flex items-center justify-center"
        >

          <img
            src={logo}
            alt="Synent Logo"
            className="w-16 h-16 object-contain"
          />

        </div>

      </motion.div>

      {/* =========================
          BRAND NAME
      ========================= */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, -2, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5
        }}
        className="mt-10
        text-lg md:text-xl
        font-bold tracking-[0.4em]
        uppercase
        bg-gradient-to-r from-blue-400 to-cyan-300
        bg-clip-text text-transparent"
      >

        SYNENT

      </motion.h1>

      {/* =========================
          SUBTEXT
      ========================= */}

      <motion.p
        animate={{
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="mt-2 text-sm tracking-[0.3em]
        text-slate-400 uppercase"
      >

        Initializing Experience

      </motion.p>

      {/* =========================
          LOADING DOTS
      ========================= */}

      <div className="flex gap-3 mt-8">

        {[0, 1, 2].map((dot) => (

          <motion.span
            key={dot}
            className="w-2.5 h-2.5 rounded-full bg-blue-400"
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: dot * 0.2
            }}
          />

        ))}

      </div>

    </div>

  );

};

export default Loader;