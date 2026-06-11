import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

/* =========================
   ICONS
========================= */

import {
  HiMenuAlt3,
  HiX,
  HiHome,
  HiOutlineCog,
  HiOutlineInformationCircle,
  HiOutlineChip,
  HiOutlineAcademicCap,
  HiOutlinePhone
} from "react-icons/hi";

import logo from "../../assets/image.png";

/* =========================
   NAVIGATION LINKS
========================= */

const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: HiHome
  },
  {
    name: "Services",
    path: "/services",
    icon: HiOutlineCog
  },
  {
    name: "About",
    path: "/about",
    icon: HiOutlineInformationCircle
  },
  {
    name: "Tech",
    path: "/tech",
    icon: HiOutlineChip
  },
  {
    name: "Careers",
    path: "/careers",
    icon: HiOutlineAcademicCap
  },
  {
    name: "Contact",
    path: "/contact",
    icon: HiOutlinePhone
  }
];

const Navbar = () => {

  /* =========================
     STATES
  ========================= */

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  /* =========================
     SCROLL EFFECT
  ========================= */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  /* =========================
     CLOSE MOBILE MENU ON RESIZE
  ========================= */

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth >= 768) {

        setIsOpen(false);

      }

    };

    window.addEventListener("resize", handleResize);

    return () => {

      window.removeEventListener("resize", handleResize);

    };

  }, []);

  /* =========================
     LOCK BODY SCROLL
  ========================= */

  useEffect(() => {

    if (isOpen) {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "auto";

    }

    return () => {

      document.body.style.overflow = "auto";

    };

  }, [isOpen]);

  return (

    <>

      {/* =========================
          BACKDROP OVERLAY
      ========================= */}

      {
        isOpen && (

          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

        )
      }

      {/* =========================
          NAVBAR
      ========================= */}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b
        ${
          scrolled
            ? "bg-white/75 dark:bg-[#0f172a]/75 backdrop-blur-2xl shadow-xl border-black/5 dark:border-white/10"
            : "bg-transparent border-transparent"
        }`}
      >

        {/* =========================
            CONTAINER
        ========================= */}

        <div
          className={`max-w-7xl mx-auto px-6
          flex items-center justify-between
          transition-all duration-300
          ${scrolled ? "py-2" : "py-4"}`}
        >

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="flex items-center gap-24">

            {/* =========================
                LOGO
            ========================= */}

            <Link
              to="/"
              className="flex items-center gap-3 group shrink-0"
            >

              {/* LOGO */}

              <div className="relative">

                <div
                  className="absolute inset-0 rounded-full
                  bg-blue-500/30 blur-xl opacity-60
                  group-hover:opacity-100 transition duration-500"
                />

                <div
                  className="relative w-11 h-11 rounded-full overflow-hidden
                  bg-gradient-to-br from-blue-500 to-cyan-500
                  shadow-lg group-hover:rotate-12
                  transition-all duration-500"
                >

                  <img
                    src={logo}
                    alt="Synent Technologies Logo"
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>

              {/* COMPANY NAME */}

              <h1
                className="text-2xl md:text-3xl font-black tracking-wide
                bg-gradient-to-r from-blue-500 to-cyan-400
                bg-clip-text text-transparent"
              >

                SYNENT.

              </h1>

            </Link>

            {/* =========================
                DESKTOP NAVIGATION
            ========================= */}

            <ul className="hidden lg:flex items-center gap-3 xl:gap-4">

              {navLinks.map((link, index) => {

                const Icon = link.icon;

                return (

                  <li key={index}>

                    <NavLink to={link.path}>

                      {({ isActive }) => (

                        <div
                          className={`relative flex items-center gap-2
                          px-5 py-2.5 rounded-full uppercase
                          text-sm tracking-wide font-medium
                          transition-all duration-300 group overflow-hidden
                          ${
                            isActive
                              ? "text-blue-500 bg-blue-500/10"
                              : "text-gray-700 dark:text-white hover:text-blue-500"
                          }`}
                        >

                          {/* ACTIVE BG */}

                          <span
                            className={`absolute inset-0 rounded-full
                            transition-all duration-300
                            ${
                              isActive
                                ? "bg-blue-500/10 opacity-100"
                                : "opacity-0 group-hover:opacity-100 group-hover:bg-white/5"
                            }`}
                          />

                          {/* ICON */}

                          <Icon className="text-lg relative z-10" />

                          {/* TEXT */}

                          <span className="relative z-10">

                            {link.name}

                          </span>

                          {/* UNDERLINE */}

                          <span
                            className={`absolute left-4 right-4 bottom-1
                            h-[2px] bg-blue-500 rounded-full
                            transition-all duration-300 origin-left
                            ${
                              isActive
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          />

                        </div>

                      )}

                    </NavLink>

                  </li>

                );

              })}

            </ul>

          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div className="flex items-center gap-4">

            {/* CTA BUTTON */}

            <Link
              to="/contact"
              className="hidden md:flex items-center justify-center
              whitespace-nowrap
              px-8 py-3 rounded-full
              bg-gradient-to-r from-blue-500 to-cyan-500
              text-white font-semibold tracking-wide
              hover:scale-105 hover:shadow-2xl
              hover:shadow-blue-500/40
              transition-all duration-300"
            >

              Let's Talk

            </Link>

            {/* MOBILE MENU BUTTON */}

            <button
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-3xl
              text-gray-800 dark:text-white
              hover:text-blue-500
              transition duration-300"
            >

              {
                isOpen
                  ? <HiX />
                  : <HiMenuAlt3 />
              }

            </button>

          </div>

        </div>

        {/* =========================
            MOBILE MENU
        ========================= */}

        <div
          className={`md:hidden overflow-hidden transition-all duration-500
          bg-white/90 dark:bg-[#111827]/95
          backdrop-blur-2xl border-t border-black/5 dark:border-white/10
          ${
            isOpen
              ? "opacity-100 translate-y-0 py-6"
              : "opacity-0 -translate-y-3 pointer-events-none py-0"
          }`}
        >

          <ul className="flex flex-col items-center gap-5">

            {navLinks.map((link, index) => {

              const Icon = link.icon;

              return (

                <li
                  key={index}
                  className="w-full flex justify-center"
                >

                  <NavLink to={link.path}>

                    {({ isActive }) => (

                      <div
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3
                        px-6 py-3 rounded-full
                        uppercase tracking-wide text-base font-medium
                        transition-all duration-300
                        ${
                          isActive
                            ? "text-blue-500 bg-blue-500/10"
                            : "text-gray-700 dark:text-white hover:text-blue-500"
                        }`}
                      >

                        <Icon className="text-xl" />

                        {link.name}

                      </div>

                    )}

                  </NavLink>

                </li>

              );

            })}

            {/* MOBILE CTA */}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 whitespace-nowrap
              px-8 py-3 rounded-full
              bg-gradient-to-r from-blue-500 to-cyan-500
              text-white font-semibold tracking-wide
              hover:shadow-xl hover:shadow-blue-500/30
              transition-all duration-300"
            >

              Let's Talk

            </Link>

          </ul>

        </div>

      </nav>

    </>

  );

};

export default Navbar;