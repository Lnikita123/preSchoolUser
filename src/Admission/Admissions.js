import React, { useEffect, useState } from "react";

import axios from "axios";

import { API_BASE_URL } from "../config";
import Enquire from "../Enquire";
const Admissions = () => {
  const [slidesData, setSlidesData] = useState({
    id: 1,
    Description: "",
    Photo: "",
    Published: false,
  });
  const getAdmissionData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getadmissionData`);
      setSlidesData(response.data.data);
    } catch (e) {
      console.log("err", e);
    }
  };
  useEffect(() => {
    getAdmissionData();
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: slidesData?.Published
            ? `url(${slidesData?.Photo})`
            : `url('admission.svg')`,
        }}
        className="lg:flex flex-col  bg-cover lg:w-full w-full h-[14rem] lg:h-[500px] lg:mt-[8rem] mt-[8rem]"
      >
        <div className="lg:mt-[16rem] lg:flex flex-col ">
          <p
            className="mx-6 lg:ml-[18rem] xl:ml-[9.7rem] 2xl:ml-[29.8rem] text-2xl text-white font- normal lg:pt-0 pt-[10rem]"
            style={{ fontFamily: "Englebert, cursive" }}
          >
            Admissions
          </p>
        </div>
      </div>
      <div className="items-center justify-center text-center lg:flex lg:flex-col">
        <div
          className="mx-[3rem] lg:w-[63rem] xl:w-[65rem] xl:ml-[7rem] text-justify lg:mt-[4rem] lg:space-y-2 space-y-6 mt-[2rem] mb-[4rem] lg:text-[#000] lg:text-base text-lg text-[#62677F] font-normal"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p>
            {slidesData?.Published && slidesData?.Description
              ? `${slidesData?.Description}`
              : "Admission is based on a student’s academic promise and personal qualities The School is committed to maintaining racial, ethnic,religious, socio-economic and geographic diversity in its student body"}
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
