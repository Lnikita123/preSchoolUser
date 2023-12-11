import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const [activities] = useState([
    {
      id: "dance",
      Heading: "Savanaah",
      Edu: "(M.Ed.)",
      Image1: "/T1.png",
    },
    {
      id: "rhythm",
      Heading: "Savanaah",
      Edu: "(M.Ed.)",
      Image1: "/T2.png",
    },

    {
      id: "improv",
      Heading: "Savanaah",
      Edu: "Neurologist",
      Image1: "/T3.png",
    },
  ]);
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#267EC4] lg:mt-[4rem] lg:h-[35rem] mt-[2rem]">
        <div className="flex flex-col items-center space-y-2">
          <p
            className=" hidden lg:flex lg:text-base text-xl font-bold lg:font-medium text-white lg:pt-[4rem] pt-[2rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Team members
          </p>
          <h1
            className=" hidden lg:flex text-base text-center text-white lg:text-xl lg:font-bold lg:mt-0 mt-[2rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Guiding the way to vibrant creativity and <br />
            personal growth at ActKidz
          </h1>
        </div>
        {/* for mobile */}

        <div className="hidden lg:flex  flex-wrap justify-center lg:space-x-16 lg:mt-[2rem] mt-[2rem]">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="m-4 bg-white rounded-lg shadow-lg "
            >
              <img
                src={activity.Image1}
                alt={activity.Heading}
                className="w-[14rem] rounded-t-lg h-[10rem] "
              />
              <div className="p-3">
                <h1 className="text-xl text-[#000] font-open-sans font-semibold">
                  {activity.Heading}
                </h1>
                <p className="text-sm text-[#838383] font-open-sans font-bold lg:mt-[0.6rem]">
                  {activity.Edu}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="lg:hidden mt-[2rem] bg-[#267EC4] "
        // style={{
        //   background:
        //     " linear-gradient(180deg, #0568EC 39.4%, rgba(5, 104, 236, 0.00) 85.96%)",
        // }}
      >
        <div className="flex flex-col items-center space-y-2">
          <p
            className="lg:text-base text-2xl font-bold lg:font-medium text-white lg:pt-[4rem] pt-[2rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Team members
          </p>
          <h1
            className="text-lg text-center text-white lg:text-xl lg:font-bold lg:mt-0 mt-[2rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Guiding the way to vibrant creativity and personal growth at ActKidz
          </h1>
        </div>
        <Slider {...sliderSettings}>
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="m-4 h-[17rem] w-[16rem] bg-white rounded-lg shadow-lg "
            >
              <img
                src={activity.Image1}
                alt={activity.Heading}
                className="w-[16rem]  rounded-lg h-[12rem] "
              />
              <div className="px-4 py-2">
                <h1 className="text-xl text-[#000] font-open-sans font-semibold">
                  {activity.Heading}
                </h1>
                <p className="text-sm text-[#838383] font-open-sans font-bold lg:mt-[0.6rem] pb-[2rem]">
                  {activity.Edu}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Team;
