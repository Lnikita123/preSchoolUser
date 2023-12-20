import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { useActingStore } from "../store/useActingStore";
import { RiYoutubeFill, RiInstagramFill } from "react-icons/ri";
import axios from "axios";
import { API_BASE_URL } from "../config";

const Footer = () => {
  const address = useActingStore((s) => s.address);
  const setAddress = useActingStore((s) => s.setAddress);
  const getAboutData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getcontactpageData`);
      setAddress(response.data.data?.Address);
    } catch (e) {
      console.log("err", e);
    }
  };
  useEffect(() => {
    getAboutData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="py-10 lg:py-5  flex flex-col justify-center lg:w-full h-full  lg:h-[350px] bg-gradient-to-r from-[#fff] via-bg-slate-50 to-bg-zinc-200">
      <div className="hidden lg:flex">
        <img className="w-full" src="/Vector.svg" alt="img" />
      </div>
      <div className="flex-row items-start justify-center hidden px-6 space-x-24 lg:flex">
        <div>
          <div className="flex mt-[0.2rem] ">
            <a href="/" className="flex items-center space-x-4">
              {" "}
              <img
                className="w-[114px] h-[59px]  lg:w-[8rem] lg:h-[6rem]"
                src="/prelogo.svg"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="">
          <h4 className="hover:hover:underline text-[#000] font-bold mb-4">
            Links
          </h4>
          <ul className="leading-8 text-[#000] lg:mt-[25px] font-normal text-sm font-Lato">
            <li className="hover:underline ">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline ">
              <a href="/about">About Us</a>
            </li>
            <li className="hover:underline ">
              <a href="/Admissions">Admissions</a>
            </li>
            <li className="hover:underline ">
              <a href="/Program">Programs</a>
            </li>
            <li className="hover:underline ">
              <a href="/Curriculumpage">Curriculum</a>
            </li>

            <li className="hover:underline ">
              <a href="/Contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="hover:underline text-[#000] font-bold mb-4">
            {" "}
            <a href="/">Social Media</a>
          </h4>
          <div className="flex flex-col space-y-4">
            <div>
              <a
                className="flex space-x-4"
                href="https://www.facebook.com/Stmichaelsschoolsuchitra/"
              >
                <FaFacebook
                  color="#000"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
                <p className="hover:underline ">Facebook</p>
              </a>
            </div>
            <div>
              <a
                className="flex space-x-4"
                href="https://www.instagram.com/openai/"
              >
                <RiInstagramFill
                  color="#000"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
                <p className="hover:underline"> Instagram</p>
              </a>
            </div>
            <div>
              <a
                className="flex space-x-4"
                href="https://www.youtube.com/@st.michaelsschoolgodavarih1821"
              >
                <RiYoutubeFill
                  color="#000"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
                <p className="hover:underline"> youtube</p>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="text-[#000] font-bold mb-4 hover:underline">
            <a href="/Contact">Contact Us</a>
          </h4>
          <ul className="leading-8 text-[#000] font-normal text-sm font-Lato">
            <li className="hover:underline">
              <a href="/Contact"> +91 8686983890</a>
            </li>
            <li className="hover:underline">
              <a href="/Contact"> info@actkidz.com</a>
            </li>
            <li className="lg:w-[22rem] hover:underline">
              <a href="/Contact">
                {address
                  ? address
                  : `1-30-22, G R Reddy Nagar, Kapra, ECIL, Hyderabad, Telangana
                500062`}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid-cols-2 gap-8 px-6 lg:hidden">
        <div className="flex space-y-4 ">
          <a href="/" className="flex items-center space-x-20 space-y-8">
            {" "}
            <img
              className="w-[114px] h-[59px] "
              src="/prelogo.svg"
              alt="logo"
            />
            <img src="/c5.png" alt="img" />
          </a>
        </div>
        <div className="flex flex-row space-x-10">
          <div className="">
            <h4 className="text-[#000] font-bold mb-4">Links</h4>
            <ul className="leading-8 text-[#000] lg:mt-[25px] font-normal text-xs font-Lato">
              <li className="hover:underline ">
                <a href="/">Home</a>
              </li>
              <li className="hover:underline ">
                <a href="/about">About Us</a>
              </li>
              <li className="hover:underline ">
                <a href="/Admissions">Admissions</a>
              </li>
              <li className="hover:underline ">
                <a href="/Program">Programs</a>
              </li>
              <li className="hover:underline ">
                <a href="/Curriculumpage">Curriculum</a>
              </li>

              <li className="hover:underline ">
                <a href="/Contact">ContactUs</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[#000] font-bold mb-4">
              <a className="ml-[6rem]" href="/Contact">
                Contact Us
              </a>
            </h4>
            <ul className=" ml-[6rem] leading-8 text-[#000] font-normal text-sm font-Lato">
              <li className="hover:underline "> +91 8686983890</li>
              <li className="hover:underline ">
                <a href="/Contact"> info@actkidz.com</a>
              </li>
              <li className="hover:underline ">
                <a href="/Contact">
                  1-30-22, G R Reddy Nagar, Kapra, ECIL, Hyderabad, Telangana
                  500062
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h4 className="text-[#000] font-bold mb-4 mt-[2rem]">
            {" "}
            <a href="/">Social Media</a>
          </h4>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/Stmichaelsschoolsuchitra/">
                <FaFacebook
                  color="#000"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </a>
              <p>Facebook</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/openai/">
                <RiInstagramFill
                  color="#000"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </a>
              <p className=""> Instagram</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.youtube.com/@st.michaelsschoolgodavarih1821">
                <RiYoutubeFill
                  color="#000"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </a>
              <p> youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
