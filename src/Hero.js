import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "./config";
import { Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [slidesData, setSlidesData] = useState({
    id: 1,
    Heading: "",
    Link: "",
    Description: "",
    Photos: "",
    Published: false,
  });
  const getHomeData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getHomeData`);
      console.log("res", response?.data.data);
      setSlidesData(response.data.data);
    } catch (e) {
      console.log("err", e);
    }
  };
  useEffect(() => {
    getHomeData();
  }, []);
  const [navState, setNavState] = useState({
    activeNav: "Home",
    showImage: false,
  });
  const handleNavClick = (navItem) => {
    navigate("/Admissions");
    if (navState.activeNav !== navItem) {
      setNavState({ activeNav: navItem, showImage: true });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="hidden lg:flex lg:justify-center lg:mt-[0rem] mt-[6rem] lg:space-y-0 space-y-6">
        <div
          style={{
            backgroundImage: slidesData?.Published
              ? `url(${slidesData?.Photos})`
              : `url("./hero.png")`,
          }}
          className="lg:flex flex-col bg-cover xl:w-screen lg:w-screen w-screen h-[14rem] xl:h-[500px] 2xl:h-[30.8rem] lg:h-[360px] xl:mt-[8rem]  mt-[10rem] "
        >
          <div className="lg:absolute xl:left-64 lg:left-6 xl:top-44 lg:pt-[2rem] lg:h-[23rem]">
            <div>
              <img src="c5.png" alt="i" />
            </div>
            <h1
              className="text-xl lg:text-[3rem] font-normal text-white lg:mt-[2rem]"
              style={{ fontFamily: "Englebert, cursive" }}
            >
              {slidesData?.Published && slidesData?.Heading
                ? `${slidesData?.Heading}`
                : "Welcome to ActKidz Preschool"}
            </h1>
            <p
              className="lg:w-[30rem] text-base font-normal text-white  lg:mt-[2rem] lg:mb-[3rem]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {slidesData?.Published && slidesData?.Description
                ? `${slidesData?.Description}`
                : "Its essential yo bring your identification, health card, a list of medications, g your identification, health.EnglebertEnglebert"}
            </p>
            <div>
              <a
                href={"https://www.google.com"}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-4 text-white bg-[#FD0101] text-center text-xl font-semibold  lg:mt-[2rem]"
                style={{
                  boxShadow: "0px 8px 27.7px 0px rgba(253, 1, 1, 0.56)",
                }}
                //onClick={() => handleNavClick("Admissions")}
              >
                Admissions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div
          style={{
            backgroundImage: slidesData?.Published
              ? `url(${slidesData?.Photos})`
              : `url("./heromob1.svg")`,
          }}
          className="flex flex-col w-[26rem] bg-contain h-[16rem] md:bg-contain md:w-[47.8rem] mt-[5rem] "
        >
          <h1
            className="flex flex-col items-center text-4xl font-normal whitespace-wrap text-center text-white pt-[3rem] mx-[5rem] "
            style={{ fontFamily: "Englebert, cursive" }}
          >
            {slidesData?.Published && slidesData?.Heading
              ? `${slidesData?.Heading}`
              : "Welcome to ActKidz Preschool"}
          </h1>
        </div>
        <div>
          <p
            className="text-black text-center text-base mt-[2rem] mx-[1.7rem] lg:mx-0 md:mx-[2.5rem] "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Its essential to bring your identification, health card, a list of
            medications, your identification, health.
          </p>
          <Link to="/Admissions" onClick={() => handleNavClick("Admissions")}>
            <button
              className="rounded-lg px-28 flex justify-center mx-[2rem] md:mx-[13rem] py-4 lg:flex-col items-center mt-[2rem] md:mb-[2rem] text-white  bg-[#FD0101] text-center text-xl font-semibold"
              style={{
                boxShadow: "0px 8px 27.7px 0px rgba(253, 1, 1, 0.56)",
              }}
            >
              {slidesData?.Published && slidesData?.Link
                ? slidesData?.Link
                : "Admissions"}
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-8 md:space-x-0 mx-[2rem] lg:mx-0 lg:space-x-0 lg:justify-center md:items-start lg:mt-[8rem] lg:pl-[5rem] lg:mb-[4rem] lg:flex-row lg:space-y-0 xl:ml-[2rem] md:flex-row md:mx-0 md:ml-[6rem] md:gap-2 ">
        <div className="flex flex-row space-x-6 lg:space-x-2 md:space-x-4 lg:mt-0 mt-[2rem] md:mt-8">
          <div className="flex justify-center items-center w-[8rem] h-[3.5rem] lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] bg-[#FFF4E4] rounded-full ">
            <div>
              <img
                src="/img1.png"
                alt="i"
                className="w-[2.4rem] h-[2.4rem] md:w-[1.5rem] md:h-[1.5rem]"
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap xl:w-64 lg:w-64 md:w-[7.5rem]">
            <h1 className="text-[#03093C]  text-lg md:text-sm font-bold">
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
          <div className="hidden lg:flex lg:mt-[1rem] w-[2px] h-[2.5rem] bg-gray-300"></div>
        </div>
        <div className="flex flex-row lg:space-x-2">
          <div className="flex justify-center items-center w-[6rem] h-[3.5rem] lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] md:mr-4 bg-[#D9FFE5] rounded-full">
            <div>
              <img
                src="/img2.png"
                alt="i"
                className="w-[2.4rem] h-[2.4rem] md:w-[1.5rem] md:h-[1.5rem] "
              />
            </div>
          </div>
          <div className="flex flex-col lg:ml-0 md:ml-0 ml-6 xl:w-56 lg:w-64 md:w-[8rem] md:h-[2.3rem]">
            <h1 className="text-[#03093C]  text-lg md:text-sm font-bold">
              Admissions
            </h1>
            <p
              className="text-[#03093C] text-sm font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Sign your child for the upcoming school year today
            </p>
          </div>
          <div className="hidden lg:flex lg:mt-[1rem] w-[2px] h-[2.5rem] bg-gray-300"></div>
        </div>
        <div className="flex flex-row space-x-6 lg:space-x-2 md:space-x-1">
          <div className="flex justify-center items-center w-[8rem] h-[3.5rem] lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] md:mr-4 mx-auto bg-[#FFCFCD] rounded-full">
            <div>
              <img
                src="/img3.png"
                alt="i"
                className="w-[2.4rem] h-[2.4rem] md:w-[1.5rem] md:h-[1.5rem]"
              />
            </div>
          </div>
          <div className="flex flex-col xl:w-64 lg:w-64 md:w-[8rem]">
            <h1 className="text-[#03093C]  text-lg md:text-sm font-bold">
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
