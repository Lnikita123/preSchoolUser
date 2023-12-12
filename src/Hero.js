import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [navState, setNavState] = useState({
    activeNav: "Home",
    showImage: false,
  });
  const handleNavClick = (navItem) => {
    if (navState.activeNav !== navItem) {
      setNavState({ activeNav: navItem, showImage: true });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="lg:mt-[1rem] mt-[6rem]">
        <img className="" src="/hero.png" alt="img" />
      </div>
      <div className="lg:hidden">
        <Link to="/Contact" onClick={() => handleNavClick("Contact")}>
          <button
            className="rounded-lg  w-[21rem] py-4 mb-[4rem] mx-[1.2rem]  text-white  bg-[#FD0101] text-center text-base font-bold"
            style={{ boxShadow: "0px 8px 27.7px 0px rgba(253, 1, 1, 0.56)" }}
          >
            Admissions
          </button>
        </Link>
      </div>
      <div className="flex flex-col space-y-4 lg:space-x-4 lg:justify-center lg:flex-row lg:space-y-0 mx-[2rem] lg:mx-0">
        <div className="flex flex-row space-x-6 lg:space-x-4">
          <div className="flex justify-center items-center w-[6rem] h-[5rem] lg:w-[5rem] lg:h-[5rem] mx-auto bg-[#FFF4E4] rounded-full ">
            <div>
              <img src="/img1.png" alt="i" className="w-[3rem] h-[3rem]" />
            </div>
          </div>
          <div className="flex flex-col w-72 ">
            <h1 className="text-[#03093C]  text-lg font-bold">
              Lively classes
            </h1>
            <p
              className="text-[#03093C]  text-sm font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Step foot inside our lively classroom from the comfort of your
              house
            </p>
          </div>
          <div className="hidden lg:flex w-[2px] h-[4rem] bg-gray-500"></div>
        </div>
        <div className="flex flex-row space-x-6 lg:space-x-4">
          <div className="flex justify-center items-center w-[6rem] h-[5rem] lg:w-[5rem] lg:h-[5rem] mx-auto bg-[#D9FFE5] rounded-full">
            <div>
              <img src="/img2.png" alt="i" className="w-[3rem] h-[3rem]" />
            </div>
          </div>
          <div className="flex flex-col w-72">
            <h1 className="text-[#03093C]  text-lg font-bold">Admissions</h1>
            <p
              className="text-[#03093C] text-sm font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Sign your child for the upcoming school year today
            </p>
          </div>
          <div className="hidden lg:flex w-[2px] h-[4rem] bg-gray-500"></div>
        </div>
        <div className="flex flex-row space-x-6 lg:space-x-4">
          <div className="flex justify-center items-center w-[6rem] h-[5rem] lg:w-[5rem] lg:h-[5rem] mx-auto bg-[#FFCFCD] rounded-full">
            <div>
              <img src="/img3.png" alt="i" className="w-[3rem] h-[3rem]" />
            </div>
          </div>
          <div className="flex flex-col w-72">
            <h1 className="text-[#03093C]  text-lg font-bold">
              Enriched program
            </h1>
            <p
              className="text-[#03093C]  text-sm font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Step foot inside our lively classroom from the comfort of your
              house
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
