import React, { useEffect, useState } from "react";

import axios from "axios";

import { API_BASE_URL } from "../config";
import Team from "../Home/Team";
const Play = () => {
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
          backgroundImage: published ? `url(${image})` : `url('play.svg')`,
        }}
        className="lg:flex flex-col  bg-cover lg:w-full w-full h-[14rem] lg:h-[500px] lg:mt-[8rem] mt-[8rem]"
      >
        <div className="lg:mt-[16rem] lg:flex flex-col">
          <p
            className="flex flex-col items-start lg:mx-[20rem] text-white justify-center text-2xl font- normal"
            style={{ fontFamily: "Englebert, cursive" }}
          >
            Play group
          </p>
        </div>
      </div>
      <div className="items-center justify-center text-center lg:flex lg:flex-col">
        <div
          className="mx-6 lg:w-[63rem] text-justify lg:mt-[4rem] lg:space-y-2 space-y-6 mt-[2rem] lg:text-[#000] lg:text-base text-lg text-[#62677F] font-normal"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p>
            Play Group is an early childhood program that provides an
            opportunity for young children to socialise and learn in a safe and
            supportive environment.
            <p className="lg:mt-0 mt-[2rem]">
              Typically, playgroups are designed for children between the ages
              of 2.5 Years and above years old and are often attended by a
              parent or caregiver.
            </p>
          </p>
          <p className="lg:mt-0 mt-[2rem]">
            In our playgroup setting, children engage in a variety of activities
            that promote socialisation, creativity, and early learning. These
            activities might include singing, dancing, playing with toys, making
            art projects, participating in group games and activities.
          </p>
          <p className="lg:mt-0 mt-[2rem]">
            In addition to providing a fun and engaging environment for young
            children, playgroups can also help promote important developmental
            skills, such as language development, fine motor skills, and
            social-emotional development.
          </p>
          <p className="lg:mt-0 mt-[2rem] ">
            By providing opportunities for children to interact with their peers
            and learn through play, playgroups can help set a strong foundation
            for success in later stages of childhood and beyond.
          </p>
        </div>
      </div>
      <div>
        <Team />
      </div>
    </div>
  );
};

export default Play;
