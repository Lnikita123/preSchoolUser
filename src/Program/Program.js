import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import Enquire from "../Enquire";
import Play from "./Play";
// import { useActStore } from "../store/useActStore";
// import { useActingStore } from "../store/useActingStore";

const Program = () => {
  // const showActing = useActingStore((s) => s.showActing);
  // const filteredData = useActingStore((s) => s.filteredData);
  // const selected = useActStore((s) => s.selected);
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
      <div>
        <Play slidesData={slidesData} />
      </div>
      <div>
        <Enquire />
      </div>
    </>
  );
};

export default Program;
