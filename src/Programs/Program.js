import React, { useEffect, useState } from "react";

import axios from "axios";

import { API_BASE_URL } from "../config";
import Enquire from "../Enquire";

const Program = () => {
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
          backgroundImage: published ? `url(${image})` : `url('program.svg')`,
        }}
        className="lg:flex flex-col bg-cover lg:w-full w-full h-[14rem] lg:h-[500px] lg:mt-[8rem] mt-[8rem]"
      >
        <div className="lg:mt-[16rem] lg:flex flex-col">
          <p
            className="lg:ml-[18rem] text-2xl text-white font- normal"
            style={{ fontFamily: "Englebert, cursive" }}
          >
            Our programs
          </p>
        </div>
      </div>

      <div className="grid justify-center grid-cols-2 lg:flex lg:grid-cols-3 lg:mt-[4rem]">
        <div className="relative">
          <img className="h-[20rem]" src="/play1.svg" alt="play" />
          <p className="absolute p-4 text-white left-8 bottom-10">
            <span
              className="border-b border-[#fff]"
              style={{ fontFamily: "Englebert, cursive" }}
            >
              play group
            </span>
          </p>
        </div>
        <div className="relative">
          <img className="h-[20rem]" src="/play2.svg" alt="play" />
          <p className="absolute p-4 text-white left-8 bottom-10">
            <span
              className="border-b border-[#fff]"
              style={{ fontFamily: "Englebert, cursive" }}
            >
              Nursery
            </span>
          </p>
        </div>

        <div className="relative">
          <img className="h-[20rem]" src="/play3.svg" alt="play" />
          <p className="absolute p-4 text-white left-8 bottom-10">
            <span
              className="border-b border-[#fff]"
              style={{ fontFamily: "Englebert, cursive" }}
            >
              LKG
            </span>
          </p>
        </div>
        <div className="relative">
          <img className="h-[20rem]" src="/play4.svg" alt="play" />
          <p className="absolute p-4 text-white left-8 bottom-10">
            <span
              className="border-b border-[#fff]"
              style={{ fontFamily: "Englebert, cursive" }}
            >
              UKG
            </span>
          </p>
        </div>
      </div>
      <div>
        {" "}
        <Enquire />
      </div>
    </div>
  );
};

export default Program;
