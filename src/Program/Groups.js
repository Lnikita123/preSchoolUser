import React, { useEffect, useState } from "react";
import { useActingStore } from "../store/useActingStore";

const Groups = () => {
  const filteredData = useActingStore((s) => s.filteredData);
  const [slideData, setSlideData] = useState({});
  useEffect(() => {
    setSlideData(filteredData);
  }, [filteredData]);
  return (
    <>
      <div className="items-center justify-center text-center lg:flex lg:flex-col">
        <div
          className="mx-6 lg:w-[63rem] text-justify lg:mt-[4rem] lg:space-y-2 space-y-6 mt-[2rem] lg:text-[#000] lg:text-base text-lg text-[#62677F] font-normal"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {slideData?.Published && slideData?.Description ? (
            `${slideData?.Description}`
          ) : (
            <>
              <p>
                Play Group is an early childhood program that provides an
                opportunity for young children to socialise and learn in a safe
                and supportive environment.
                <p className="lg:mt-0 mt-[2rem]">
                  Typically, playgroups are designed for children between the
                  ages of 2.5 Years and above years old and are often attended
                  by a parent or caregiver.
                </p>
              </p>
              <p className="lg:mt-0 mt-[2rem]">
                In our playgroup setting, children engage in a variety of
                activities that promote socialisation, creativity, and early
                learning. These activities might include singing, dancing,
                playing with toys, making art projects, participating in group
                games and activities.
              </p>
              <p className="lg:mt-0 mt-[2rem]">
                In addition to providing a fun and engaging environment for
                young children, playgroups can also help promote important
                developmental skills, such as language development, fine motor
                skills, and social-emotional development.
              </p>
              <p className="lg:mt-0 mt-[2rem] ">
                By providing opportunities for children to interact with their
                peers and learn through play, playgroups can help set a strong
                foundation for success in later stages of childhood and beyond.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Groups;
