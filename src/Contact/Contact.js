import { MdEmail } from "react-icons/md";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { API_BASE_URL } from "../config";
import Enquire from "../Enquire";
const Contact = () => {
  const [slidesData, setSlidesData] = useState({
    id: 1,
    Address: "",
    Email: "",
    Phone: "",
    Photo: "",
    Published: false,
  });
  const getContactData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getcontactpageData`);
      setSlidesData(response.data.data);
    } catch (e) {
      console.log("err", e);
    }
  };
  useEffect(() => {
    getContactData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-[8rem] justify-center space-x-14 lg:space-x-24 ">
        <div className="relative">
          <img
            className="h-[350px] w-full"
            src={
              slidesData?.Photo && slidesData.Published
                ? slidesData?.Photo
                : "/contact.svg"
            }
            alt="Preschool contact"
          />
          <p
            className="absolute left-0 w-full text-xl font-bold text-center text-black top-10 lg:hidden"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Welcome to Actkidz preschool
          </p>
        </div>

        <div className="flex flex-col lg:w-[36rem] w-auto lg:mt-8 mt-[2rem] space-y-4 lg:space-y-6">
          <p
            className="text-[#000]  text-xl font-bold hidden lg:flex "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Welcome to Actkidz preschool{" "}
          </p>
          <div className="flex flex-row space-x-4 ">
            <div className=" text-[#FC0101]">
              <MdEmail className="w-[2rem] h-[1.7rem]  " />
            </div>
            <div
              className="font-normal text-black"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {slidesData?.Published && slidesData?.Email
                ? `${slidesData?.Email}`
                : "info@actkidzpreschool.com"}
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <div className=" text-[#FC0101]">
              <LiaPhoneSolid className="w-[2rem] h-[1.7rem]  " />
            </div>
            <div
              className="font-normal text-black"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {slidesData?.Published && slidesData?.Phone
                ? `${slidesData?.Phone}`
                : "+91 86869 83890"}
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <div className=" text-[#FC0101]">
              <IoLocationOutline className="w-[2rem] h-[1.7rem]  " />
            </div>

            <div
              className="font-normal text-black"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {slidesData?.Published && slidesData?.Address
                ? `${slidesData?.Address}`
                : "1-30-22, G R Reddy Nagar, Kapra, ECIL, Hyderabad, Telangana 500062"}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[18rem]   overflow-hidden lg:mt-[4rem] mt-[4rem]">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7618468630934!2d78.56658171529582!3d17.488966970494495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d8239e394ed%3A0xa89127946c40606b!2sACTKIDZ+PRESCHOOL!5e0!3m2!1sen!2sin!4v1657187470651!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, borderRadius: "0.5rem" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      <div>
        <Enquire />
      </div>
    </>
  );
};

export default Contact;
