import { Link } from "react-router-dom";

import {
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaCloud,
  FaRobot,
  FaShieldAlt,
  FaCode,
  FaCheckCircle
} from "react-icons/fa";

import { useState } from "react";

import logo from "../../assets/image.png";

const Footer = () => {

  /* =========================
     STATES
  ========================= */

  const [email, setEmail] = useState("");

  const [subscribed, setSubscribed] = useState(false);

  /* =========================
     SUBSCRIBE HANDLER
  ========================= */

  const handleSubscribe = (e) => {

    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);

    setTimeout(() => {

      setSubscribed(false);

      setEmail("");

    }, 2500);

  };

  return (

    <footer
      className="relative overflow-hidden
      bg-[#0b1120]
      border-t border-white/10"
    >

      {/* =========================
          BACKGROUND GLOW
      ========================= */}

      <div
        className="absolute top-0 left-0
        w-72 h-72
        bg-blue-500/10
        rounded-full blur-3xl"
      />

      <div
        className="absolute bottom-0 right-0
        w-72 h-72
        bg-cyan-500/10
        rounded-full blur-3xl"
      />

      {/* TOP GRADIENT LINE */}

      <div
        className="w-full h-[1px]
        bg-gradient-to-r
        from-transparent
        via-blue-500
        to-transparent"
      />

      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <div
        className="relative z-10
        max-w-7xl mx-auto
        px-6 md:px-10 lg:px-12
        py-16"
      >

        {/* =========================
            GRID
        ========================= */}

        <div
          className="grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10 lg:gap-8"
        >

          {/* =========================
              BRAND SECTION
          ========================= */}

          <div>

            {/* LOGO */}

            <Link
              to="/"
              className="flex items-center gap-4 w-fit group"
            >

              {/* LOGO IMAGE */}

              <div className="relative">

                {/* GLOW */}

                <div
                  className="absolute inset-0
                  bg-blue-500 blur-xl
                  opacity-40 rounded-full"
                />

                {/* IMAGE CONTAINER */}

                <div
                  className="relative
                  w-14 h-14
                  rounded-full
                  overflow-hidden
                  bg-blue-600
                  shadow-[0_0_25px_rgba(59,130,246,0.5)]
                  flex items-center justify-center
                  group-hover:rotate-12
                  transition duration-500"
                >

                  <img
                    src={logo}
                    alt="Synent Logo"
                    className="w-full h-full object-contain"
                  />

                </div>

              </div>

              {/* COMPANY NAME */}

              <h1
                className="text-3xl md:text-4xl
                font-black tracking-wider
                text-white
                group-hover:text-blue-400
                transition duration-300"
              >

                SYNENT
                <span className="text-blue-500">.</span>

              </h1>

            </Link>

            {/* DESCRIPTION */}

            <p
              className="mt-6
              text-gray-400
              leading-8"
            >

              Building scalable digital ecosystems powered
              by AI, cloud engineering, and next-generation
              innovation.

            </p>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-4 mt-8">

              {/* LINKEDIN */}

              <a
                href="https://in.linkedin.com/company/talentforge-services"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >

                <div
                  className="w-11 h-11
                  rounded-full
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-white
                  hover:bg-blue-600
                  hover:scale-110
                  transition duration-300"
                >

                  <FaLinkedinIn />

                </div>

              </a>

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/synenttech"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >

                <div
                  className="w-11 h-11
                  rounded-full
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-white
                  hover:bg-pink-500
                  hover:scale-110
                  transition duration-300"
                >

                  <FaInstagram />

                </div>

              </a>

            </div>

          </div>

          {/* =========================
              SOLUTIONS
          ========================= */}

          <div>

            <h2
              className="text-xl font-semibold
              text-white mb-7"
            >

              Solutions

            </h2>

            <ul className="space-y-4">

              {[
                {
                  icon: <FaRobot />,
                  name: "AI Platforms"
                },
                {
                  icon: <FaCloud />,
                  name: "Cloud Engineering"
                },
                {
                  icon: <FaCode />,
                  name: "Web Experiences"
                },
                {
                  icon: <FaShieldAlt />,
                  name: "Security Systems"
                }
              ].map((item, index) => (

                <li
                  key={index}
                  className="flex items-center gap-3
                  text-gray-400
                  hover:text-blue-400
                  hover:translate-x-1
                  transition duration-300
                  cursor-pointer"
                >

                  <span className="text-blue-400">

                    {item.icon}

                  </span>

                  {item.name}

                </li>

              ))}

            </ul>

          </div>

          {/* =========================
              COMPANY
          ========================= */}

          <div>

            <h2
              className="text-xl font-semibold
              text-white mb-7"
            >

              Company

            </h2>

            <ul className="space-y-4 text-gray-400">

              {[
                {
                  name: "About Us",
                  path: "/about"
                },
                {
                  name: "Careers",
                  path: "/careers"
                },
                {
                  name: "Internship Program",
                  path: "/careers"
                },
                {
                  name: "Contact",
                  path: "/contact"
                }
              ].map((item, index) => (

                <li key={index}>

                  <Link
                    to={item.path}
                    className="hover:text-blue-400
                    hover:translate-x-1
                    inline-block
                    transition duration-300"
                  >

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =========================
              STAY CONNECTED
          ========================= */}

          <div>

            <h2
              className="text-xl font-semibold
              text-white mb-7"
            >

              Stay Connected

            </h2>

            <p
              className="text-gray-400
              leading-7 mb-6"
            >

              Get updates about internship opportunities,
              new technologies, and digital innovation.

            </p>

            {/* EMAIL FORM */}

            <form
              onSubmit={handleSubscribe}
              className="flex items-center
              bg-white/5
              border border-white/10
              rounded-full
              overflow-hidden
              hover:border-blue-500/40
              focus-within:border-blue-500
              transition duration-300"
            >

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full
                bg-transparent
                px-5 py-4
                outline-none
                text-white
                placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="w-14 h-14
                flex items-center justify-center
                bg-blue-600
                hover:bg-blue-700
                transition duration-300
                text-white"
              >

                <FaArrowRight />

              </button>

            </form>

            {/* SUCCESS MESSAGE */}

            {subscribed && (

              <div
                className="flex items-center gap-2
                mt-4 text-green-400 text-sm"
              >

                <FaCheckCircle />

                Subscription Successful

              </div>

            )}

            {/* SMALL TEXT */}

            <p
              className="text-gray-500
              text-sm mt-4 leading-6"
            >

              We respect your privacy.
              No spam emails.

            </p>

          </div>

        </div>

        {/* =========================
            BOTTOM FOOTER
        ========================= */}

        <div
          className="mt-12 pt-6
          border-t border-white/10
          flex flex-col lg:flex-row
          items-center justify-between
          gap-5"
        >

          {/* COPYRIGHT */}

          <p
            className="text-gray-500 text-sm
            text-center lg:text-left"
          >

            © 2026 Synent Technologies.
            All rights reserved.

          </p>

          {/* POLICY LINKS */}

          <div
            className="flex flex-wrap
            items-center justify-center
            gap-6
            text-sm text-gray-500"
          >

            <a
              href="https://docs.google.com/document/d/1cVhfaCbEW15zqb8QkCf5_4_6Eu15CKzvZ1A6VnpU2F4/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >

              Privacy Policy

            </a>

            <a
              href="https://docs.google.com/document/d/1cVhfaCbEW15zqb8QkCf5_4_6Eu15CKzvZ1A6VnpU2F4/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >

              Terms of Service

            </a>

            <Link
              to="/"
              className="hover:text-blue-400 transition duration-300"
            >

              Cookie Policy

            </Link>

          </div>

          {/* TAGLINE */}

          <div
            className="flex items-center gap-2
            text-sm text-gray-500"
          >

            <span className="hover:text-white transition duration-300">

              Engineered for the Future

            </span>

            <span className="text-blue-400 animate-pulse">

              ✦

            </span>

          </div>

        </div>

      </div>

    </footer>

  );

};

export default Footer;