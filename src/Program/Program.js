import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import Enquire from "../Enquire";
import Play from "./Play";
import { useActingStore } from "../store/useActingStore";

const Program = () => {
  const showActing = useActingStore((s) => s.showActing);
  const filteredData = useActingStore((s) => s.filteredData);
  const [slidesData, setSlidesData] = useState({
    id: 1,
    Photo: "",
    Published: false,
  });
  const getAboutData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getprogramData`);
      setSlidesData(response.data.data);
      console.log(response?.data?.data);
    } catch (e) {
      console.log("err", e);
    }
  };
  useEffect(() => {
    getAboutData();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: !showActing
            ? `url(/program.svg)`
            : `url(${filteredData?.Photos})`,
        }}
        className="lg:relative lg:flex flex-col bg-cover lg:w-full w-full h-[14rem] lg:h-[500px] lg:mt-[8rem] mt-[8rem]"
      >
        <div className="lg:absolute lg:top-1/2 flex-col lg:flex">
          <p
            className="lg:ml-[18rem] text-2xl text-white font-normal"
            style={{ fontFamily: "Englebert, cursive" }}
          >
            {slidesData && slidesData?.Published
              ? slidesData?.Heading
              : "Our programs"}
          </p>
        </div>
      </div>
      <div>
        <Play />
      </div>
      <div>
        <Enquire />
      </div>
    </>
  );
};

export default Program;
