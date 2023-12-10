import React from "react";

const Creative = () => {
  return (
    <div className="lg:mb-[6rem]">
      <div className="lg:flex flex-row lg:justify-center mt-[4rem] lg:space-x-16 lg:space-y-4 ">
        <div className="flex flex-col lg:w-[26rem] space-y-4">
          <p
            className="text-[#1BBF68] font-medium lg:text-base text-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Artistic Excellence in Care
          </p>
          <h1
            className="text-[#1E79C2] text-2xl font-bold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Kids Well-being through Creative Expression!
          </h1>
          <p className="text-[#828282] lg:text-base text-lg font-normal">
            When attending ActKidz, bring your ID, health card, and a list of
            medications for a safe and enjoyable experience.
          </p>
          <div></div>
        </div>
        <div className="flex lg:flex-col lg:w-[20rem] lg:space-y-4">
          <img className="w-8 h-8 " src="/bulb.png" alt="i" />

          <p
            className="text-[#1E79C2] lg:text-base text-lg font-bold"
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
        <div className="flex flex-col lg:w-[20rem] space-y-4">
          <img className="w-8 h-8" src="/draw.svg" alt="i" />

          <p
            className="text-[#1E79C2] lg:text-base text-lg font-bold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Where Creativity Meets Joyful Growth
          </p>
          <p
            className="lg:text-base text-lg text-[#828282] font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Where health meets happiness – ActKidz, a joyful space for creative
            growth
          </p>
        </div>
      </div>
      <div className="lg:flex flex-row lg:justify-center mt-[4rem] lg:space-x-16 lg:space-y-4">
        <div className="flex flex-row  lg:w-[28rem] lg:h-[11rem]  bg-[#EDFEF6]">
          <div className="flex flex-col pl-8 pt-[2rem]">
            <h1 className="font-bold text-black lg:text-xl">
              Seeking More Guidance? Schedule a Consultation!
            </h1>
            <p className="mt-[1.4rem] font-bold text-lg text-[#1BBF68]">
              <span className="border-b border-[#1BBF68]">Contact Us</span>
            </p>
          </div>
          <div className="">
            <img className="h-[18rem] " src="/cartoon.svg" alt="img" />
          </div>
        </div>
        <div className="flex flex-col lg:w-[20rem] space-y-4">
          <img className="w-8 h-8" src="/cognition.svg" alt="i" />

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
        <div className="flex flex-col lg:w-[20rem] space-y-4">
          <img className="w-8 h-8" src="/digital.svg" alt="i" />

          <p
            className="text-[#1E79C2] lg:text-base text-lg font-bold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Empowering Imaginative Lives Where Creativity Meets Joyful Growth
          </p>
          <p
            className="lg:text-base text-lg text-[#828282] font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Empowering lives creatively – ActKidz builds a foundation for a
            vibrant future
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creative;
