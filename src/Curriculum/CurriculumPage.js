import React, { useEffect, useState } from "react";

import axios from "axios";

import { API_BASE_URL } from "../config";
import Enquire from "../Enquire";

const Curriculumpage = () => {
  const [slidesData, setSlidesData] = useState({
    id: 1,
    Description: "",
    Photo: "",
    Published: false,
  });
  const getCurriculumData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getcurriculumData`);
      setSlidesData(response.data.data);
    } catch (e) {
      console.log("err", e);
    }
  };
  useEffect(() => {
    getCurriculumData();
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: slidesData?.Published
            ? `url(${slidesData?.Photo})`
            : `url('curriculum.svg')`,
        }}
        className="lg:flex flex-col  bg-cover lg:w-full w-full h-[16rem] lg:h-[500px] lg:mt-[8rem] mt-[8rem]"
      >
        <div className="lg:mt-[16rem] lg:flex flex-col">
          <p
            className="mx-6 lg:ml-[18rem] xl:ml-[9.7rem] 2xl:ml-[29.8rem] text-2xl text-white font- normal lg:pt-0 pt-[12rem]"
            style={{ fontFamily: "Englebert, cursive" }}
          >
            Curriculum
          </p>
        </div>
      </div>
      <div className="lg:items-center lg:ml-[3rem] lg:justify-center lg:text-center lg:flex lg:flex-col">
        <div className="mx-[2rem] md:mx-[2.5rem] lg:w-[63rem] lg:text-justify lg:mt-[4rem] mt-[2rem] ">
          {slidesData?.Published && slidesData?.Description ? (
            `${slidesData?.Description}`
          ) : (
            <>
              <div className="hidden lg:flex">
                <div className="w-2 bg-[red] rounded-lg mr-4" /> 
                <p
                  className="lg:text-[#000] text-[#62677F] lg:text-base text-lg font-normal"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Curriculum is the set of experiences, activities and events,
                  direct or indirect which occur in an environment specially
                  planned to foster children's learning and development. In
                  simple terms, Curriculum is a plan for learning.
                  <p
                    className="lg:text-[#000] text-[#62677F] lg:text-base text-lg font-normal lg:mt-0 mt-[1rem]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Our curriculum is a comprehensive child-centric curriculum
                    that comes with set objectives in all major areas of
                    development. It is related to the child's developmental
                    readiness, interests, questions, style of learning and the
                    cultural context in which the child finds himself.
                  </p>
                </p>
              </div>
              <div className="flex flex-col lg:mt-[2rem] mt-[2rem]">
                <h1
                  className="lg:text-[#000] text-[#1B1E2B] font-bold text-3xl mb-8 "
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  THE ENVIRONMENT
                </h1>
                <div
                  className="lg:text-[#000] text-[#62677F] lg:text-base text-lg font-normal lg:mt-0 mt-[2rem]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p className="lg:mt-0">
                    For a child below 6, curriculum comprises the environment
                    which in turn means that we offer the child to learn. It is
                    essential that a young child gets daily experience with
                    learning aids which have specific usage, derived from the
                    curriculum.{" "}
                  </p>
                  <p className="lg:mt-0 mt-[1rem]">
                    All areas of work for the child, both internal and external
                    have been planned with extreme care to facilitate self
                    learning, and implement the objectives set in the
                    curriculum.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:mt-[2rem] mt-[2rem]">
                <h1
                  className="lg:text-[#000] text-[#1B1E2B] font-bold text-3xl mb-8"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  WHAT WILL MY CHILD WILL DO?{" "}
                </h1>
                <div
                  className="lg:text-[#000] text-[#62677F] lg:text-base text-lg font-normal lg:mt-0 mt-[2rem]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {" "}
                  <p>
                    Everything done at (fill your school name) has been
                    intrinsically designed to set a child up for success.
                    <p className="lg:mt-0 mt-[1rem]">
                      Children are given Lessons with materials from choosing
                      activities they would like to work with. They can repeat
                      and explore them as they desire.{" "}
                    </p>
                  </p>
                  <p className="lg:mt-0 mt-[1rem]">
                    At the same time they are closely observed by teachers who
                    gently encourage children to master the activity.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:mt-[2rem] mt-[2rem]">
                <h1
                  className="text-[#000] font-bold text-3xl mb-8"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  CLASSROOMS
                </h1>
                <div
                  className="lg:text-[#000] text-[#62677F] lg:text-base text-lg font-normal lg:mt-0 mt-[2rem]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p>
                    Our classrooms is organized into following areas of learning{" "}
                    <br />
                    <p className="lg:mt-0 mt-[1rem] mb-[6rem]">
                      1) Language Area <br /> 2) Art Corner <br /> 3) Cognitive
                      Corner
                      <br /> 4) Senso motor skills <br /> 5) EPL (Exercises of
                      Practical life)
                      <br /> 6) Outdoor Learning environment.{" "}
                    </p>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        {" "}
        <Enquire />
      </div>
    </div>
  );
};

export default Curriculumpage;
