import React from "react";

const Enquire = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col bg-[#1E79C2] lg:mt-[4rem] mt-[3rem] lg:h-[42rem]  items-center">
        <p
          className="text-[#fff] text-center text-base font-medium lg:mt-[2rem]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Enquire Now
        </p>
        <div
          className="flex flex-col  lg:w-[40rem]  lg:px-10 lg:py-6 lg:border lg:border-white rounded-md lg:mt-[2rem] lg:h-[29rem]"
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
            <div className="flex flex-col space-y-4">
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
            className="w-full py-2 text-black border border-white rounded-lg lg:mt-[2rem] px-4"
            style={{ Background: "rgba(255, 255, 255, 0.50)" }}
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Submit"
            className="w-full py-2 text-white border bg-[#FC0101] border-white rounded-lg lg:mt-[2rem] px-4"
            style={{ Background: "rgba(255, 255, 255, 0.50)" }}
          />
        </div>
      </div>
      <div className="lg:hidden bg-[#1E79C2] mt-[3rem] lg:mt-[4rem] flex flex-col items-center">
        <div
          className="text-white text-center text-lg font-medium mt-[2rem]  lg:font-medium"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "2.4px" }}
        >
          WE LOVE TO SEE YOU GROW
        </div>
        <div className="flex flex-col w-full px-4 py-6  rounded-md  h-full lg:w-[40rem] lg:px-10 lg:py-6 lg:border lg:mt-[2rem] lg:h-[29rem]">
          <div className="flex justify-center space-x-8">
            <img className="w-[3rem] h-[4rem]" src="contact2.svg" alt="in" />
            <p
              className="text-xl font-bold text-center text-white mt-[2rem] "
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Enquire Now
            </p>
            <img
              className="w-[3rem] h-[4rem] mt-[1rem]"
              src="contact1.svg"
              alt="in"
            />
          </div>

          <h1
            className="text-center text-white font-medium text-xl mt-[0.6rem] lg:text-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Accessible and Trustworthy Theatrical Education Simplified
          </h1>
          <div className="flex flex-col space-y-6 mt-[2.5rem]">
            <input
              type="text"
              id="childName"
              name="childName"
              placeholder="Child Name"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            />
            <input
              type="text"
              id="childAge"
              name="childAge"
              placeholder="Child Age"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            />
            <input
              type="text"
              id="parentName"
              name="parentName"
              placeholder="Parent Name"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            />
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone number"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            />
            <button
              type="submit"
              className="w-full py-2 text-white bg-[#FC0101] border border-white rounded-lg mt-[2rem]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquire;
