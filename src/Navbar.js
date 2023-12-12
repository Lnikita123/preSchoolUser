import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useActingStore } from "./store/useActingStore.js";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const isMobileMenuOpen = useActingStore((s) => s.isMobileMenuOpen);
  const setIsMobileMenuOpen = useActingStore((s) => s.setIsMobileMenuOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [navState, setNavState] = useState({
    activeNav: "Home",
    showImage: false,
  });

  // Function to handle nav item click
  const handleNavClick = (navItem) => {
    if (navState.activeNav !== navItem) {
      setNavState({ activeNav: navItem, showImage: true });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`lg:font-englebert font-opensans w-full fixed z-50 px-6 items-center text-center font-medium  py-4 top-0 space-x-32  flex flex-wrap justify-center`}
        style={{
          background: "#FFF",
          //boxShadow: "0px 3.84141px 20.35947px 0px rgba(5, 104, 236, 0.13)",
        }}
      >
        <Link to="/" onClick={() => handleNavClick("Home")}>
          {!isMobileMenuOpen && (
            <img className="" src="/prelogo.svg" alt="logo" />
          )}
        </Link>
        {/* Desktop Menu */}
        <div className="hidden lg:flex  lg:items-center justify-center text-[#000]  font-normal text-center text-lg space-x-16">
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
          <Link to="/Contact" onClick={() => handleNavClick("Contact")}>
            <button
              className="rounded-full px-6 py-2 text-white  bg-[#FD0101] text-center text-base font-bold"
              style={{ boxShadow: "0px 8px 27.7px 0px rgba(253, 1, 1, 0.56)" }}
            >
              Contact us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 px-3 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <GiHamburgerMenu className="stroke-2" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-[5rem] w-64 bg-gray-50 shadow-lg transition-transform transform ${
            isMobileMenuOpen ? "right-0 rounded-xl" : "translate-x-full"
          }`}
        >
          {isMobileMenuOpen && (
            <ul className="z-50 flex w-full p-4 bg-white rounded-xl">
              <div>
                {/* <div>
                  <img src="/prelogo.svg" alt="im" />
                </div> */}
              </div>
              <div className="flex flex-col justify-end text-2xl font-bold text-end ">
                <li className="flex self-end py-2 pl-3 text-[#2A2A2A] rounded">
                  <RxCross2 size={24} onClick={toggleMobileMenu} />
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 text-[#2A2A2A] rounded"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/About"
                    className="block py-2 pl-3 text-[#2A2A2A] rounded"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/Admissions"
                    className="block py-2 pl-3 text-[#2A2A2A] rounded"
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="/Program"
                    className="block py-2 pl-3 text-[#2A2A2A] rounded"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/Curriculumpage"
                    className="block py-2 pl-3 text-[#2A2A2A] rounded"
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                  <a
                    href="/Contact"
                    className="block py-2 pl-3 text-[#2A2A2A] rounded"
                  >
                    Contact Us
                  </a>
                </li>
              </div>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
