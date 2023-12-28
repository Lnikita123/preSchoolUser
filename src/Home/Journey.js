import React from "react";

const Journey = () => {
  return (
    <>
      <div className="flex lg:justify-center md:justify-center lg:space-x-1 xl:space-x-14 lg:mt-[7rem] xl:ml-[1rem]">
        <div>
          <div className="hidden lg:flex">
            <img
              className="lg:w-[32rem] lg:h-[30rem] object-contain lg:ml-[3rem]"
              src="image1.svg"
              alt="i"
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-[34rem] w-[30rem] md:w-[48rem] lg:mt-8 mt-[2rem] space-y-2 ">
          <div className="mx-[2.7rem] md:mx-[3rem] lg:mx-0">
            <p
              className="text-[#FC0101] lg:text-base text-lg md:text-center font-bold mt-4 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What we offer
            </p>
            <h1
              className="text-[#2177C0] lg:text-3xl text-2xl md:text-center font-extrabold mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              A Journey from Playful <br />
              Playgroup to UKG Wonder
            </h1>
          </div>

          <div className="flex justify-center lg:hidden">
            <img
              className="lg:w-full lg:h-[19rem] md:w-full w-full"
              src="img.svg"
              alt="i"
            />
          </div>
          <p
            className="text-[#828282] lg:text-base md:text-center text-lg lg:text-justify xl:w-[30rem] lg:w-[29rem]  lg:space-y-4 font-normal mx-[2rem] lg:mx-0"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Embark on a whimsical journey from our vibrant Playgroup to the
            enchanting world of UKG. Where discovery meets joy, and learning
            becomes an adventure!
          </p>
          <div className="flex flex-col items-start mx-[3rem] lg:mx-0 md:mx-[3rem]">
            <div className="flex flex-row space-x-8 lg:flex-col lg:space-x-0">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded form-checkbox accent-[#FC0101]"
                />
                <span className="ml-2 text-lg text-black lg:text-base">
                  Play Group
                </span>
              </label>

              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="rounded form-checkbox accent-[#FC0101]"
                />
                <span className="ml-2 text-lg text-black lg:text-base">
                  Nursery
                </span>
              </label>
            </div>
            <div className="flex flex-row space-x-20 lg:flex-col lg:space-x-0">
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="rounded form-checkbox accent-[#FC0101]"
                />
                <span className="ml-2 text-lg text-black lg:text-base">
                  LKG
                </span>
              </label>

              <label className="inline-flex items-center mt-2 pl-[0.4rem] lg:pl-0">
                <input
                  type="checkbox"
                  className="rounded form-checkbox accent-[#FC0101]"
                />
                <span className="ml-2 text-lg text-black lg:text-base">
                  UKG
                </span>
              </label>
            </div>
          </div>
          <div>
            <button className="hidden lg:flex rounded-full px-6 py-2 mt-[2rem] text-white bg-[#FD0101] text-center lg:text-base  text-lg font-semi-bold">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
