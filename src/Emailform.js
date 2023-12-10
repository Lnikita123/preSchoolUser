import React from "react";

const Emailform = () => {
  return (
    <div className="bg-[#1E79C2] lg:mt-[4rem] mt-[4rem] ">
      <div className="flex flex-row space-x-16 space-y-8">
        <div>
          <img
            className="w-[9rem] h-[7rem] mt-[9rem] lg:justify-center"
            src="7.svg"
            alt="i"
          />
        </div>
        <div
          className="lg:px-10 lg:py-6 lg:border lg:border-white rounded-md lg:mt-[6rem] lg:h-[29rem] lg:mb-[2rem]"
          style={{
            background: "rgba(255, 255, 255, 0.50)",

            backdropFilter: "blur(11.399999618530273px)",
          }}
        >
          <p
            className="lg:text-[#3A3F6E] text-white  font-medium lg:text-base text-2xl "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Enquire Now
          </p>
          <h1
            className="text-[#293395] font-bold text-2xl lg:mt-[0.6rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Accessible and Trustworthy <br />
            Theatrical Education Simplified
          </h1>
          <div className="flex flex-col lg:flex-row space-x-4 lg:mt-[2.5rem]">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Child Name"
                className="px-4 py-2 text-black border border-white rounded-lg "
                style={{ Background: "rgba(255, 255, 255, 0.50)" }}
              />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Parent Name"
                className="px-4 py-2 text-black border border-white rounded-lg "
                style={{ Background: "rgba(255, 255, 255, 0.50)" }}
              />
            </div>
            <div className="flex flex-col space-y-4 lg:mt-0 mt-[1rem]">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Child Age"
                className="px-4 py-2 text-black border border-white rounded-lg "
                style={{ Background: "rgba(255, 255, 255, 0.50)" }}
              />
              <input
                type="number"
                id="name"
                name="name"
                placeholder="Phone"
                className="px-4 py-2 text-black border border-white rounded-lg "
                style={{ Background: "rgba(255, 255, 255, 0.50)" }}
              />
            </div>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Email"
            className="w-full py-2 text-black border border-white rounded-lg lg:mt-[2rem] px-4  mt-[1rem]"
            style={{ Background: "rgba(255, 255, 255, 0.50)" }}
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Submit"
            className="w-full py-2 text-white border bg-[#FC0101] border-white rounded-lg lg:mt-[4rem] px-4"
            style={{ Background: "rgba(255, 255, 255, 0.50)" }}
          />
        </div>

        <div>
          <img className="h-[38rem] -ml-16" src="8.svg" alt="i" />
        </div>
      </div>
    </div>
  );
};

export default Emailform;
