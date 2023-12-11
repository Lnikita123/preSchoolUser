import React, { useEffect, useState } from "react";

import axios from "axios";

import { API_BASE_URL } from "../config";
import Team from "../Home/Team";
const About = () => {
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(false);
  const getAboutData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getaboutData`);
      setImage(response.data.data?.Photo);
      setPublished(response.data.data?.Published);
    } catch (e) {
      console.log("err", e);
    }
  };
  useEffect(() => {
    getAboutData();
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: published ? `url(${image})` : `url('about.svg')`,
        }}
        className="lg:flex flex-col  bg-cover lg:w-full w-full h-[14rem] lg:h-[500px] lg:mt-[8rem] mt-[8rem] "
      >
        <div className="lg:mt-[16rem] lg:flex flex-col">
          <p
            className="flex flex-col items-start lg:mx-[20rem]  text-white justify-center text-2xl font- normal"
            style={{ fontFamily: "Englebert, cursive" }}
          >
            About Us
          </p>
        </div>
      </div>
      <div className="items-center justify-center text-center lg:flex lg:flex-col">
        <div
          className="mx-6 lg:w-[63rem] text-justify lg:mt-[4rem] lg:space-y-2 space-y-6 mt-[2rem] lg:text-[#000] lg:text-base text-lg text-[#62677F] font-normal"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p>
            Our Preschool is an educational program designed for young children,
            typically between the ages of 2.5 Years to 6.5 Years old.
            <p className="lg:mt-0 mt-[2rem]">
              The primary goal of preschool is to provide a foundation for
              children to develop socially, emotionally, intellectually, and
              physically in a safe and nurturing environment.
            </p>
          </p>
          <p className="lg:mt-0 mt-[2rem]">
            Our Preschools vary in structure and curriculum, but most programs
            focus on teaching basic academic and social skills through
            play-based activities, such as singing, storytelling, art, and
            physical play.{" "}
          </p>
          <p className="lg:mt-0 mt-[2rem]">
            These activities help children learn to follow instructions,
            communicate with others, share and take turns, problem-solve, and
            develop early literacy and numeracy skills. Preschool education is
            not mandatory, but it is widely recognized as an important
            foundation for future academic and social success.{" "}
          </p>
          <p className="lg:mt-0 mt-[2rem] ">
            By providing children with a positive and engaging learning
            environment, preschool can help to prepare them for a successful
            transition to kindergarten and beyond.
          </p>
        </div>
      </div>
      <div>
        <Team />
      </div>
    </div>
  );
};

export default About;
