import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../src/config";
import { toast } from "react-toastify";

const Enquire = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [parentname, setparentName] = useState("");
  async function saveUserData(e) {
    if (!name.trim() || !number.trim() || !email.trim() || !age.trim() || !parentname.trim()) {
      return toast.error("All fields are required");
    }
    if (!/^\d{10}$/.test(number)) {
      return toast.error("Phone number must be numeric and exactly 10 digits");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address");
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name) || !nameRegex.test(name)) {
      return toast.error("Name  must contain only letters");
    }

    try {
      const payload = {
        Name: name,
        Mobile: number,
        parentName: parentname,
        Email: email,
        Age: age,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${API_BASE_URL}/usercontactHomeData`,
        payload,
        config
      );
      if (response.data.status) {
        toast.success("Email sent successfully");
      }
    } catch (e) {
      console.log("Error:", e);
    }
  }
  return (
    <>
      <div className="hidden lg:flex flex-col bg-[#1E79C2] lg:h-[47rem] items-center">
        <p
          className="text-[#fff] text-center text-base font-medium lg:mt-[2rem]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Enquire Now
        </p>
        <div
          className="flex flex-col  lg:w-[40rem]  lg:px-10 lg:py-6 lg:border lg:border-white rounded-xl lg:mt-[2rem] lg:h-[29rem]"
          style={{
            background: "rgba(255, 255, 255, 0.50)",

            backdropFilter: "blur(11.399999618530273px)",
          }}
        >
          <p
            className="lg:text-[#3A3F6E] text-white  font-medium lg:text-base text-2xl "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Enquire Now
          </p>
          <h1
            className="text-[#293395] font-bold text-2xl lg:mt-[0.6rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Accessible and Trustworthy <br />
            Theatrical Education Simplified
          </h1>
          <div className="flex flex-col lg:flex-row space-x-4 lg:mt-[2.5rem]">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder="Child Name"
                className="px-10 py-3 text-black border border-white rounded-lg"
                style={{ Background: "rgba(255, 255, 255, 0.50)" }}
              />
              <input
                type="text"
                id="name"
                value={parentname}
                onChange={(e) => setparentName(e.target.value)}
                name="name"
                placeholder="Parent Name"
                className="px-12 py-3 text-black border border-white rounded-lg "
                style={{ Background: "rgba(255, 255, 255, 0.50)" }}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <select
                type="text"
                id="name"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                name="name"
                placeholder="Child Age"
                className="px-4 py-3 text-black border border-white rounded-lg lg:bg-white"
                style={{
                  background:
                    window.innerWidth < 1024
                      ? "rgba(255, 255, 255, 0.50)"
                      : "white",
                }}
              >
                <option className="text-black">Child Age</option>
                <option>0-5 yr</option>
                <option>5-10 yr</option>
                <option>10-15 yr</option>
                <option>15-20 yr</option>
              </select>
              <input
                type="text"
                id="phone"
                name="phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone"
                className="px-10 py-3 text-black border border-white rounded-lg "
                style={{ Background: "rgba(255, 255, 255, 0.50)" }}
              />
            </div>
          </div>
          <input
            type="text"
            id="Email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full py-3 text-black border border-white rounded-lg lg:mt-[2rem] px-4"
            style={{ Background: "rgba(255, 255, 255, 0.50)" }}
          />
          <button
            onClick={saveUserData}
            className="w-full py-3 text-white text-center border bg-[#FC0101] border-white rounded-lg lg:mt-[2rem] px-4"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="lg:hidden bg-[#1E79C2] mt-[3rem] lg:mt-[4rem] flex flex-col items-center">
        <div
          className="text-white text-center text-lg font-medium mt-[2rem]  lg:font-medium"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "2.4px" }}
        >
          WE LOVE TO SEE YOU GROW
        </div>
        <div className="flex flex-col md:w-[40rem] px-4 py-6  rounded-md  h-full lg:w-[40rem] lg:px-10 lg:py-6 lg:border lg:mt-[2rem] lg:h-[29rem]">
          <div className="flex justify-center space-x-8">
            <img className="w-[3rem] h-[4rem]" src="contact2.svg" alt="in" />
            <p
              className="text-xl font-bold text-center text-white mt-[2rem] "
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Enquire Now
            </p>
            <img
              className="w-[3rem] h-[4rem] mt-[1rem]"
              src="contact1.svg"
              alt="in"
            />
          </div>

          <h1
            className="text-center text-white font-medium text-xl mt-[0.6rem] lg:text-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Accessible and Trustworthy Theatrical Education Simplified
          </h1>
          <div className="flex flex-col space-y-6 mt-[2.5rem]">
            <input
              type="text"
              id="childName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="childName"
              placeholder="Child Name"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            />
            <select
              type="text"
              id="name"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              name="name"
              placeholder="Child Age"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            >
              <option className="text-black">Child Age</option>
              <option>0-5 yr</option>
              <option>5-10 yr</option>
              <option>10-15 yr</option>
              <option>15-20 yr</option>
            </select>

            <input
              type="text"
              id="parentName"
              value={parentname}
              onChange={(e) => setparentName(e.target.value)}
              name="parentName"
              placeholder="Parent Name"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            />
            <input
              type="text"
              id="phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              name="phone"
              placeholder="Phone number"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              className="px-4 py-2 text-black bg-white border border-white rounded-lg"
              style={{ background: " rgba(255, 255, 255, 0.50)" }}
            />
            <button
              onClick={saveUserData}
              className="w-full py-2 text-white bg-[#FC0101] border border-white rounded-lg mt-[2rem]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquire;
