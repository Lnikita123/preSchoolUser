import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const Team = () => {
  const [activities, setActivities] = useState([
    {
      id: "dance",
      Name: "Savanaah",
      Education: "(M.Ed.)",
      Photos: "/T1.png",
    },
    {
      id: "rhythm",
      Name: "Savanaah",
      Education: "(M.Ed.)",
      Photos: "/T2.png",
    },

    {
      id: "improv",
      Name: "Savanaah",
      Education: "Neurologist",
      Photos: "/T3.png",
    },
  ]);
  // let testData = [
  //   {
  //     id: 1,
  //     Name: "",
  //     Education: "",
  //     Photos: "",
  //     Published: false,
  //   },
  // ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [slidesData, setSlidesData] = useState(testData);
  const getFeePrograms = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getteacherData`);
      // setSlidesData(response.data.data);
      const data = response.data.data;
      if (Array.isArray(data) && data.length > 0) {
        setActivities(data);
        // setSlidesData(data);
      } else {
        // setSlidesData(testData);
        setActivities(activities);
      }
    } catch (e) {
      console.log("err", e);
    }
  };
  useEffect(() => {
    getFeePrograms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % activities.length);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval);
  }, [activities.length, currentIndex]);

  return (
    <>
      <div className="bg-[#267EC4] lg:mt-[4rem] lg:h-[45rem] mt-[2rem]">
        <div className="flex flex-col items-center space-y-2">
          <p
            className=" hidden lg:flex lg:text-base text-xl font-bold lg:font-medium text-white lg:pt-[4rem] pt-[2rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Team members
          </p>
          <h1
            className=" hidden lg:flex text-base text-center text-white lg:text-4xl lg:font-bold lg:mt-0 mt-[2rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Guiding the way to vibrant creativity and <br />
            personal growth at ActKidz
          </h1>
        </div>
        {/* for mobile */}

        <div className="hidden lg:flex flex-wrap justify-center xl:mt-[3rem] xl:ml-[3.8rem] 2xl:ml-[4rem] mt-[2rem]">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="m-4 bg-white rounded-lg shadow-lg "
            >
              <img
                src={activity.Photos}
                alt={activity.Name}
                className="w-[20rem] rounded-t-lg h-[14rem]"
              />
              <div className="p-3">
                <h1 className="text-xl text-[#000] font-open-sans font-semibold">
                  {activity.Name}
                </h1>
                <p className="text-sm text-[#838383] font-open-sans font-bold lg:mt-[0.6rem]">
                  {activity.Education}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-[1.4rem] block lg:hidden overflow-hidden relative"
        style={{
          background:
            "linear-gradient(180deg, #0568EC 0.02%, rgba(5, 104, 236, 0.00) 90.83%)",
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <p
            className="lg:text-base text-2xl font-bold lg:font-medium text-white lg:pt-[4rem] pt-[2rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Team members
          </p>
          <h1
            className="text-lg text-center text-white lg:text-xl lg:font-bold lg:mt-0 mt-[3rem] "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Guiding the way to vibrant creativity and personal growth at ActKidz
          </h1>
        </div>
        <div
          className="transition-transform duration-300 whitespace-nowrap"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="inline-block w-full h-full space-x-4"
            >
              <div className="mx-auto w-[255px] bg-white rounded-lg overflow-hidden shadow-lg mt-[2rem]">
                <img
                  src={activity.Photos}
                  alt={activity.Name}
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-3">
                  <h1 className="text-xl text-[#000] font-open-sans font-semibold">
                    {activity.Name}
                  </h1>
                  <p className="text-sm text-[#838383] font-open-sans font-bold lg:mt-[0.6rem] pb-[2rem]">
                    {activity.Education}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
