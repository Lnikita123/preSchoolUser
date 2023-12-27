import React, { useEffect, useState } from "react";
import axios from "axios";
import { useActStore } from "../store/useActStore";
import { API_BASE_URL } from "../config";

const Play = ({ slidesData }) => {
  const { setShowActing } = useActStore((state) => ({
    showActing: state.showActing,
    setShowActing: state.setShowActing,
  }));

  const [activities, setActivities] = useState([]);
  const [selected, setSelected] = useState(null);
  // const { selected, setSelected } = useActStore();
  const [isLoading, setIsLoading] = useState(true);

  const getFeePrograms = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getaddProgramData`);
      setActivities(response.data.data);
      setIsLoading(false);
    } catch (e) {
      console.error("Error fetching programs", e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFeePrograms();
  }, []);

  const handleCardClick = (activity) => {
    setSelected(activity);
    setShowActing(false);
  };

  // const handleBackClick = () => {
  //   setSelected(null);
  //   setShowActing(true);
  // };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {!selected ? (
            <>
              <div
                style={{ backgroundImage: "url(/program.svg)" }}
                className="bg-cover w-full h-[14rem] lg:h-[500px] mt-[8rem] lg:mt-[8rem]"
              >
                <div className="flex-col lg:absolute lg:top-1/2 lg:flex">
                  <p
                    className="mx-6 lg:ml-[18rem] text-2xl text-white font- normal lg:pt-0 pt-[10rem]"
                    style={{ fontFamily: "Englebert, cursive" }}
                  >
                    {slidesData && slidesData?.Published
                      ? slidesData?.Heading
                      : "Our programs"}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 lg:justify-center lg:flex-wrap lg:flex lg:grid-cols-3">
                {activities.map((activity) => (
                  <div
                    onClick={() => handleCardClick(activity)}
                    key={activity.id}
                    className="lg:w-[16rem] hover:scale-110 transition-all cursor-pointer lg:h-[18rem] rounded-lg m-4 relative overflow-hidden"
                  >
                    <img
                      src={activity.Photos}
                      alt={activity.Heading}
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute left-0 w-full p-3 bottom-8">
                      <h1 className="text-lg font-normal text-white font-open-sans">
                        {activity.Heading}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // When a card is selected, only show the selected card's full image and description
            <div
              className="w-full h-[500px] bg-cover bg-no-repeat bg-center mb-[20rem]"
              style={{ backgroundImage: `url(${selected?.Photos})` }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full">
                <h2 className="mb-4 text-2xl text-white">
                  {selected?.Heading}
                </h2>
              </div>
              <div className="items-center justify-center text-center lg:flex lg:flex-col">
                <div
                  className="mx-6 lg:w-[63rem] text-justify lg:mt-[4rem] lg:space-y-2 space-y-6 mt-[2rem]  lg:text-[#000] lg:text-base text-lg text-[#62677F] font-normal"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p className="text-lg text-justify text-black">
                    {selected?.Description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Play;
