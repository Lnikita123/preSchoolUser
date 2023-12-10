import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [navState, setNavState] = useState({
    activeNav: "Home",
    showImage: false,
  });

  // Function to handle nav item click
  const handleNavClick = (navItem) => {
    if (navState.activeNav !== navItem) {
      setNavState({ activeNav: navItem, showImage: true });
    }
  };
  return (
    <>
      <div
        className="md:h-[8.75rem] items-center space-x-24 flex flex-row text-[#000] text-center text-xl font-normal justify-center"
        style={{ fontFamily: "Englebert, cursive" }}
      >
        <Link to="/" onClick={() => handleNavClick("Home")}>
          <img src="/prelogo.svg" alt="logo" />
        </Link>
        <div className="hidden space-x-12 lg:flex">
          <Link
            to="/"
            onClick={() => handleNavClick("Home")}
            className={navState.activeNav === "Home" ? "text-[#FC0101]" : ""}
          >
            Home
          </Link>

          <Link
            to="/About"
            onClick={() => handleNavClick("About")}
            className={navState.activeNav === "About" ? "text-[#FC0101]" : ""}
          >
            About us
          </Link>

          <Link
            to="/Admissions"
            onClick={() => handleNavClick("Admissions")}
            className={
              navState.activeNav === "Admissions" ? "text-[#FC0101]" : ""
            }
          >
            Admissions
          </Link>

          <Link
            to="/Program"
            onClick={() => handleNavClick("Program")}
            className={navState.activeNav === "Program" ? "text-[#FC0101]" : ""}
          >
            Programs
          </Link>

          <Link
            to="/Curriculumpage"
            onClick={() => handleNavClick("Curriculumpage")}
            className={
              navState.activeNav === "Curriculumpage" ? "text-[#FC0101]" : ""
            }
          >
            Curriculum
          </Link>
        </div>
        <Link to="/Contact" onClick={() => handleNavClick("Contact")}>
          <button
            className="rounded-full px-6 py-2 text-white bg-[#FD0101] text-center text-base font-bold"
            style={{ boxShadow: "0px 8px 27.7px 0px rgba(253, 1, 1, 0.56)" }}
          >
            Contact us
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
