import React, { useEffect, useState } from "react";

import axios from "axios";

import { API_BASE_URL } from "../config";
import Enquire from "../Enquire";
import Play from "./Play";
const Program = () => {
  const [showPlay, setShowPlay] = useState(false);
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
  const handleImageClick = () => {
    setShowPlay(true);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: published ? `url(${image})` : `url('program.svg')`,
        }}
        className="lg:flex flex-col items-center justify-center bg-cover lg:w-full w-auto h-[229px] lg:h-[500px] lg:mt-0 mt-[4rem]"
      >
        <div className="lg:mt-[16rem] lg:flex flex-col">
          <p
            className="mx-6 text-2xl text-white font- normal"
            style={{ fontFamily: "Englebert, cursive" }}
          >
            Our programs
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 ">
        <img
          className="h-[20rem] cursor-pointer"
          src="/play1.png"
          alt="play"
          onClick={handleImageClick} // Set up the click handler here
        />
        <img className=" h-[20rem]" src="/play1.png" alt="play" />
        <img className=" h-[20rem]" src="/play1.png" alt="play" />
        <img className=" h-[20rem]" src="/play1.png" alt="play" />
      </div>
      <div>
        {" "}
        <Enquire />
      </div>
    </div>
  );
};

export default Program;
