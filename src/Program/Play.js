import React, { useEffect, useState } from "react";

import { useActStore } from "../store/useActStore";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";

import Groups from "./Groups";
import { useActingStore } from "../store/useActingStore";
const Play = () => {
  const navigate = useNavigate();
  const showActing = useActStore((s) => s.showActing);
  const setShowActing = useActStore((s) => s.setShowActing);
  const [activities, setActivities] = useState([
    {
      id: "Play1",
      Heading: "Play Group",

      Photos: "/play1.svg",
    },
    {
      id: "Play2",
      Heading: "Nursery ",

      Photos: "/play2.svg",
    },

    {
      id: "Play3",
      Heading: "LkG",

      Photos: "/play3.svg",
    },
  ]);
  let testData = [
    {
      id: 1,
      Heading: "",
      Description: "",
      Photos: "",
      Published: false,
    },
  ];
  const [slidesData, setSlidesData] = useState(testData);
  const setNavState = useActingStore((s) => s.setNavState);

  const getFeePrograms = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getaddProgramData`);
      setSlidesData(response.data.data);
      const data = response.data.data;
      console.log("da", data);
      if (Array.isArray(data) && data.length > 0) {
        setActivities(data);
        setSlidesData(data);
      } else {
        setSlidesData(testData);
        setActivities(activities);
      }
    } catch (e) {
      console.log("err", e);
    }
  };
  const [showData, setShowData] = useState("");
  useEffect(() => {
    getFeePrograms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setFilteredData = useActingStore((s) => s.setFilteredData);
  useEffect(() => {
    if (showActing) {
      const filteredData = slidesData.find((slide) => slide?.id === showData);
      console.log(filteredData);
      if (filteredData) {
        setFilteredData(filteredData);
        console.log(filteredData);
      }
      setNavState({ activeNav: "Program", showImage: true });
      navigate("/Program");
      // window.scroll({ top: 0, behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showActing, slidesData]);
  const handleClick = (id) => {
    setShowActing((prevShowActing) => !prevShowActing);
    setShowData(id);
  };

  return (
    <>
      {showActing ? (
        <Groups />
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-2 lg:justify-center lg:flex-wrap lg:flex lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                onClick={() => handleClick(activity?.id)}
                key={activity.id}
                className="lg:w-[16rem] hover:scale-110 hover:transition-all cursor-pointer lg:h-[18rem] rounded-lg m-4 "
              >
                <img
                  src={activity.Photos}
                  alt={activity.Heading}
                  className="relative lg:w-full lg:h-auto lg:max-h-full"
                />
                <div className="p-3">
                  <h1 className="absolute mx-[2rem] text-lg  font-open-sans font- normal">
                    {activity.Heading}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Play;
