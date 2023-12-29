import React from "react";
import { Link } from "react-router-dom";

const Creative = () => {
  return (
    <>
      <div className="lg:mb-[6rem] lg:w-[65rem] xl:w-[74rem] 2xl:w-[85rem] 2xl:ml-[15.7rem] 2xl:mt-[5rem]">
        <div className="lg:flex flex-row  lg:justify-center mt-[2rem] xl:space-x-3 xl:ml-[10rem] lg:space-y-4 mx-[1rem] lg:ml-[6rem] ">
          <div className="flex flex-col lg:w-[24rem] space-y-6 lg:mx-0 mx-[2rem]">
            <p
              className="text-[#1BBF68] font-medium lg:text-base text-lg mt-[2rem] lg:mt-0"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Artistic Excellence in Care
            </p>
            <h1
              className="text-[#1E79C2] lg:text-2xl text-2xl font-bold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Kids Well-being through Creative Expression!
            </h1>
            <p className="text-[#828282] lg:text-base text-lg font-normal ">
              When attending ActKidz, bring your ID, health card, and a list of
              medications for a safe and enjoyable experience.
            </p>
          </div>
          <div className="flex flex-row lg:flex-col lg:w-[20rem] lg:space-y-4 space-x-4 mt-[3rem] lg:mx-0 mx-[1rem] lg:mt-0">
            <div className="lg:bg-white bg-[#FFF4E4] rounded-xl flex lg:w-16 lg:h-10 w-32 h-16 md:w-16 md:h-14  ">
              <img
                className="w-16 h-10 mt-2 lg:mt-0 lg:w-12 lg:h-12 object-contain"
                src="/bulb.png"
                alt="i"
              />
            </div>
            <div className="flex flex-col">
              <p
                className="text-[#1E79C2] lg:text-base text-xl font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Your Ally in Creative Wellness
              </p>
              <p
                className="lg:text-base text-lg text-[#828282] font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Your well-being ally at ActKidz, fostering creativity and
                imagination
              </p>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col lg:w-[20rem] lg:space-y-4 space-x-4 mt-[2rem] lg:mt-0 lg:mx-0 mx-[1rem]">
            <div className="lg:bg-white bg-[#FFF4E4] rounded-xl  flex lg:w-16 lg:h-10 w-32 h-16 md:w-16 md:h-14  ">
              <img
                className="w-16 h-10 mt-2 lg:mt-0 lg:w-12 lg:h-12 object-contain"
                src="/draw.svg"
                alt="i"
              />
            </div>
            <div className="flex flex-col">
              <p
                className="text-[#1E79C2] lg:text-base text-lg font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Where Creativity Meets Joyful Growth
              </p>
              <p
                className="lg:text-base text-lg text-[#828282] font-normal lg:w-[15rem]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Where health meets happiness – ActKidz, a joyful space for
                creative growth
              </p>
            </div>
          </div>
        </div>
        <div className="mx-[1rem] lg:mx-0 xl:ml-[10rem] lg:ml-[5rem] lg:flex flex-row lg:justify-center mt-[2rem] lg:mt-[4rem] xl:space-x-4 lg:space-x-0 lg:space-y-4">
          <div className="hidden lg:flex relative lg:w-[24rem] lg:h-[11rem] bg-[#EDFEF6] mt-[4rem] ">
            <div className="flex flex-col pl-8 pt-[2rem] z-10 ">
              <h1 className="font-bold text-black lg:text-xl">
                Seeking More
                <br /> Guidance? Schedule a<br /> Consultation!
              </h1>
              <p className="mt-[1.4rem] font-bold text-lg text-[#1BBF68]">
                <span className="border-b border-[#1BBF68]">Contact Us</span>
              </p>
            </div>
            <div className="absolute top-[-8rem] right-0 z-0 ">
              <img className="h-[18rem]" src="/cartoon.svg" alt="Cartoon" />
            </div>
          </div>

          <div className="flex flex-row lg:flex-col lg:w-[20rem] lg:space-y-4 space-x-4  lg:mt-0 lg:mx-0 mx-[1rem]">
            <div className="lg:bg-white bg-[#FFF4E4] rounded-xl  flex lg:w-16 lg:h-10 w-32 h-16 md:w-16 md:h-14  ">
              <img
                className="w-16 h-10 mt-2 lg:mt-0 lg:w-12 lg:h-12 object-contain"
                src="/digital.svg"
                alt="i"
              />
            </div>
            <div className="flex flex-col">
              <p
                className="text-[#1E79C2] lg:text-base text-lg font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Nurturing Well-Being
              </p>
              <p
                className="lg:text-base text-lg text-[#828282] font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                At ActKidz, we prioritize your child's health in a supportive,
                imaginative environment
              </p>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col  lg:w-[17rem] xl:w-[20rem] lg:space-y-4 space-x-4 mt-[2rem] lg:mt-0 lg:mx-0 mx-[1rem]">
            <div className="lg:bg-white bg-[#FFF4E4] rounded-xl  flex lg:w-16 lg:h-10 w-32 h-16  md:w-16 md:h-14 ">
              <img
                className="w-16 h-10 mt-2 lg:mt-0 lg:w-12 lg:h-12 object-contain"
                src="/cognition.svg"
                alt="i"
              />
            </div>
            <div className="flex flex-col">
              <p
                className="text-[#1E79C2] lg:text-base text-lg font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Empowering Imaginative Lives
              </p>
              <p
                className="lg:text-base text-lg text-[#828282] lg:w-[15rem] font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Empowering lives creatively – ActKidz builds a foundation for a
                vibrant future
              </p>
            </div>
          </div>
          <div className="lg:hidden relative lg:w-[28rem] lg:h-[11rem] h-[6rem] w-[21rem]  bg-[#EDFEF6] mt-[7rem] text-center md:ml-[12.5rem] ml-[1.5rem] ">
            <div className="absolute top-[-4rem] left-0 z-10">
              <img
                className="lg:h-[18rem] h-[10rem]"
                src="/cartoon.svg"
                alt="Cartoon"
              />
            </div>

            <div className="flex flex-col pl-[6rem] pt-[1rem] z-20">
              <h1 className="font-bold text-black lg:text-xl">
                Seeking More Guidance?
                <br /> Schedule a Consultation!
              </h1>
            </div>
          </div>
          <div className="flex justify-center lg:hidden">
            <Link to="/Contact">
              <button
                className="rounded-md w-[21rem] h-[3rem] text-white bg-[#FD0101] text-center text-base font-bold mt-[2rem]"
                style={{
                  boxShadow: "0px 8px 27.7px 0px rgba(253, 1, 1, 0.56)",
                }}
              >
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creative;
