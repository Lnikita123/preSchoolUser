import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Curriculum = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      id: "environment",
      bgColor: "bg-[#1BBF68]",
      imgSrc: "/1.svg",
      heading: "THE ENVIRONMENT",
      description:
        "For a child below 6, curriculum comprises the environment which in turn means that we offer the child to learn. It is essential that a young child gets daily experience with learning aids which have specific usage, derived from the curriculum.",

      photo: "/4.svg",
    },
    {
      id: "success",
      bgColor: "bg-[#16A2C4]",
      imgSrc: "/2.svg",
      heading: "THE SUCCESS",
      description:
        "Everything done at atckidz has been intrinsically designed to set a child up for success. Children are given Lessons with materials from choosing activities they would like to work with. They can repeat and explore them as they desire.At the same time they are closely observed by teachers who gently encourage children to master the activity.",
      photo: "/5.svg",
    },
    {
      id: "classrooms",
      bgColor: "bg-[#02073E]",
      imgSrc: "/3.svg",
      heading: "THE CLASSROOMS",
      description:
        "Our classrooms is organized into following areas of learning ",
      photo: "/6.svg",
      points:
        "1) Language Area ,2) Art Corner ,3) Cognitive Corner,4) Senso motor skills,5) EPL (Exercises of Practical life),6) Outdoor Learning environment",
    },
  ];

  const CardComponent = ({ item }) => {
    const pointsArray = item?.points?.split(",").map((point) => point.trim());
    return (
      <div
        className={`lg:flex lg:mx-4 flex-col lg:justify-between xl:w-[20rem] lg:w-[19rem] lg:ml-[2rem] w-full ${item.bgColor} rounded-lg shadow-md text-white `}
      >
        <div>
          <img
            src={item.imgSrc}
            alt={item.heading}
            className="w-12 h-12 mt-[1rem] ml-2 "
          />
          <h3
            className="ml-2 text-3xl font-normal "
            style={{ fontFamily: "Englebert, cursive" }}
          >
            {item.heading}
          </h3>
          <p
            className="text-sm text-[#fff] font-normal ml-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {item.description}
          </p>
          {pointsArray && (
            <ol className="ml-4">
              {pointsArray.map((point, index) => (
                <li key={index} className="text-sm font-normal">
                  {point}
                </li>
              ))}
            </ol>
          )}
        </div>
        <div>
          <img src={item.photo} alt="P" className="w-full mt-[2rem]" />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex-col lg:flex xl:items-center md:items-center xl:ml-[8rem]">
        <h1
          className="lg:text-xl  text-xl font-bold text-black lg:text-center text-center mt-[4rem] mx-[1rem] lg:mx-0"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Curriculum is a plan for learning
        </h1>
        <div className="">
          <p
            className="lg:text-sm mx-[2rem] text-base font-medium text-justify lg:text-black text-[#62677F] mt-[0.8rem] xl:w-[69rem] lg:w-[60rem] md:w-[34rem] md:mx-[4rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our curriculum is a comprehensive child-centric curriculum that
            comes with set objectives in all major areas of development.
            <p className="justify-center mt-4 lg:mt-0">
              It is related to the child's developmental readiness, interests,
              questions, style of learning and the cultural context in which the
              child finds themselves.
            </p>
          </p>
        </div>
      </div>
      <div className="hidden sm:grid sm:grid-cols-3 sm:gap-0 mt-[4rem] lg:flex xl:justify-center xl:ml-0 lg:ml-[2rem]">
        {data.map((item) => (
          <CardComponent key={item.id} item={item} />
        ))}
      </div>

      <div className="px-10 sm:hidden">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <CardComponent item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Curriculum;
