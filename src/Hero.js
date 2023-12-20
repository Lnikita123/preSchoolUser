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
      <div className="hidden lg:flex lg:mt-[0rem] mt-[6rem] lg:space-y-0 space-y-6">
        <div
          style={{
            backgroundImage: slidesData?.Published
              ? `url(${slidesData?.Photos})`
              : `url("./hero.png")`,
          }}
          className="lg:flex flex-col bg-cover xl:w-full lg:min-w-screen w-full h-[14rem] lg:h-[500px]  lg:mt-[8rem] mt-[10rem] "
        >
          <div className="lg:absolute xl:left-64 lg:left-4 lg:top-1/3 lg:space-y-6">
            <div>
              <img src="c5.png" alt="i" />
            </div>
            <h1
              className="text-xl lg:text-[3rem] font-normal text-white"
              style={{ fontFamily: "Englebert, cursive" }}
            >
              {slidesData?.Published && slidesData?.Heading
                ? `${slidesData?.Heading}`
                : "Welcome to ActKidz Preschool"}
            </h1>
            <p
              className="lg:w-[40rem] text-base font-normal text-white lg:mt-[1rem]"
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
                className="rounded-full px-6 py-4 text-white  bg-[#FD0101] text-center text-xl font-semibold"
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
              : `url("./heromob.png")`,
          }}
          className="lg:flex flex-col  bg-cover lg:w-full w-full h-[16rem] md:[18rem]  mt-[10rem] "
        >
          <h1
            className="flex flex-col items-center text-4xl font-normal text-center text-white pt-[3rem] "
            style={{ fontFamily: "Englebert, cursive" }}
          >
            {slidesData?.Published && slidesData?.Heading
              ? `${slidesData?.Heading}`
              : "Welcome to ActKidz Preschool"}
          </h1>
        </div>
        <div>
          <Link to="/Admissions" onClick={() => handleNavClick("Admissions")}>
            <button
              className="rounded-md w-full py-4 lg:flex-col justify-center  mt-[2rem] text-white  bg-[#FD0101] text-center text-xl font-semibold"
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

      <div className="flex flex-col space-y-4 lg:space-x-4 lg:justify-center lg:mt-[4rem] lg:flex-row lg:space-y-0 mx-[2rem] xl:ml-0  ">
        <div className="flex flex-row space-x-6 lg:space-x-4 lg:mt-0 mt-[2rem]">
          <div className="lg:flex justify-center xl:items-center w-[6rem] h-[5rem] lg:w-[5rem] lg:h-[5rem] mx-auto bg-[#FFF4E4] rounded-full ">
            <div>
              <img src="/img1.png" alt="i" className="w-[3rem] h-[3rem]" />
            </div>
          </div>
          <div className="flex flex-col xl:w-72 lg:w-64 ">
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
