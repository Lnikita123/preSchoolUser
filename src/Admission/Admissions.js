import React, { useEffect, useState } from "react";

import axios from "axios";

import { API_BASE_URL } from "../config";
import Enquire from "../Enquire";
const Admissions = () => {
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
          backgroundImage: published ? `url(${image})` : `url('admission.svg')`,
        }}
        className="lg:flex flex-col items-center justify-center bg-cover lg:w-full w-auto h-[229px] lg:h-[500px] lg:mt-0 mt-[4rem]"
      >
        <div className="lg:mt-[16rem] lg:flex flex-col">
          <p
            className="mx-6 text-2xl text-white font- normal"
            style={{ fontFamily: "Englebert, cursive" }}
          >
            Admissions
          </p>
        </div>
      </div>
      <div className="items-center justify-center text-center lg:flex lg:flex-col">
        <div
          className="mx-6 lg:w-[63rem] text-justify lg:mt-[4rem] lg:space-y-2 space-y-6 mt-[2rem] lg:text-[#000] lg:text-base text-lg text-[#62677F] font-normal"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p>
            Admission is based on a student’s academic promise and personal
            qualities. The School is committed to maintaining racial, ethnic,
            religious, socio-economic and geographic diversity in its student
            body.
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

export default Admissions;
