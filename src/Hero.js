import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <img className="" src="/hero.png" alt="img" />
      </div>
      <div className="flex flex-col space-x-4 space-y-4 lg:justify-center lg:flex-row lg:space-y-0">
        <div className="flex flex-row space-x-4">
          <div className="flex justify-center items-center w-[5rem] h-[5rem]  bg-[#FFF4E4] rounded-full ">
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
        <div className="flex flex-row space-x-4">
          <div className="flex justify-center items-center w-[5rem] h-[5rem] mx-auto bg-[#D9FFE5] rounded-full">
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
        <div className="flex flex-row space-x-4">
          <div className="flex justify-center items-center w-[5rem] h-[5rem] mx-auto bg-[#FFCFCD] rounded-full">
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
