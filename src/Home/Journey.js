import React from "react";

const Journey = () => {
  return (
    <>
      <div className="flex justify-center space-x-10 lg:space-x-24 lg:mt-[4rem]  ">
        <div>
          <div className="hidden lg:flex">
            <img
              className="lg:w-[32rem] lg:h-[30rem]"
              src="image1.svg"
              alt="i"
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-[36rem] lg:mt-8 mt-[2rem] space-y-2">
          <p
            className="text-[#FC0101] lg:text-base text-lg font-bold mt-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            What we offer
          </p>
          <h1
            className="text-[#2177C0] lg:text-3xl text-2xl font-extrabold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A Journey from Playful <br />
            Playgroup to UKG Wonder
          </h1>
          <div className="lg:hidden">
            <img className="w-full lg:h-[19rem]" src="image1.svg" alt="i" />
          </div>
          <p
            className="text-[#828282] lg:text-base  text-lg  font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Embark on a whimsical journey from our vibrant Playgroup to the
            enchanting world of UKG. Where discovery meets joy, and learning
            becomes an adventure!
          </p>
          <div className="flex flex-col items-start">
            <div className="flex flex-row space-x-8 lg:flex-col lg:space-x-0">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="text-red-500 rounded form-checkbox"
                />
                <span className="ml-2 text-lg text-black lg:text-base">
                  Play Group
                </span>
              </label>

              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="text-red-500 rounded form-checkbox"
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
                  className="text-red-500 rounded form-checkbox"
                />
                <span className="ml-2 text-lg text-black lg:text-base">
                  LKG
                </span>
              </label>

              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="text-red-500 rounded form-checkbox"
                />
                <span className="ml-2 text-lg text-black lg:text-base">
                  UKG
                </span>
              </label>
            </div>
          </div>
          <div>
            <button className="hidden lg:flex rounded-full px-6 py-2 mt-[2rem] text-white bg-[#FD0101] text-center lg:text-base  text-lg font-bold">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
