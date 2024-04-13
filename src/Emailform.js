import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../src/config";
import { toast } from "react-toastify";

const Emailform = () => {
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

  const desktopStyles = isDesktop
    ? {
      background: "rgba(255, 255, 255, 0.50)",
      backdropFilter: "blur(11.399999618530273px)",
    }
    : {};
  return (
    <>
      <div className=" hidden lg:flex bg-[#1E79C2] lg:mt-[4rem] mt-[4rem]">
        <div className="flex flex-row items-center space-y-8 2xl:space-x-16">
          <div>
            <img className="w-[9rem] h-[7rem] mt-[-11rem] xl:mr-3 2xl:ml-[12.3rem] " src="7.svg" alt="i" />
          </div>
          <div></div>
          <div
            className="lg:px-10 lg:py-6 lg:border lg:border-white rounded-xl lg:mt-[6rem] lg:h-[29rem] z-0 lg:mb-[2rem]"
            style={desktopStyles}
          >
            <p
              className="text-sm  text-white lg:hidden font-medium lg:mt-0 mt-[2rem]"
              style={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: "2.4px",
              }}
            >
              {" "}
              WE LOVE TO SEE YOU GROW
            </p>
            <p
              className="hidden lg:flex lg:text-[#3A3F6E] text-white  font-bold lg:text-base text-2xl lg:mt-0 mt-[1rem] "
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Enquire Now
            </p>
            <div className="flex space-x-2 lg:hidden mt-[1rem]">
              <img className="w-[4rem] h-[4rem]" src="contact2.svg" alt="in" />
              <p
                className="text-lg font-bold text-center text-white mt-[2rem]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Enquire Now
              </p>
              <img
                className="w-[4rem] h-[4rem] mt-[2rem]"
                src="contact1.svg"
                alt="in"
              />
            </div>
            <h1
              className="lg:text-[#293395] text-white font-normal lg:font-bold lg:text-2xl lg:mt-[0.6rem] mt-[1rem]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Accessible and Trustworthy <br />
              Theatrical Education Simplified
            </h1>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:mt-[2.5rem] mt-[1rem]">
              <div className="flex flex-col space-y-6 lg:space-y-4">
                <input
                  type="text"
                  id="childName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="childName"
                  placeholder="Child Name"
                  className="px-4 py-2 text-black border border-white rounded-lg lg:bg-white"
                  style={{
                    background:
                      window.innerWidth < 1024
                        ? "rgba(255, 255, 255, 0.50)"
                        : "white",
                  }}
                />
                <input
                  type="text"
                  id="parentName"
                  value={parentname}
                  onChange={(e) => setparentName(e.target.value)}
                  name="parentName"
                  placeholder="Parent Name"
                  className="px-4 py-2 text-black border border-white rounded-lg lg:bg-white"
                  style={{
                    background:
                      window.innerWidth < 1024
                        ? "rgba(255, 255, 255, 0.50)"
                        : "white",
                  }}
                />
              </div>
              <div className="flex flex-col space-y-6 lg:space-y-4 lg:mt-0 mt-[1rem]">
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
                  id="name"
                  name="name"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Phone"
                  className="px-4 py-2 text-black border border-white rounded-lg "
                  style={{
                    background:
                      window.innerWidth < 1024
                        ? "rgba(255, 255, 255, 0.50)"
                        : "white",
                  }}
                />
              </div>
            </div>
            <input
              type="text"
              id="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="name"
              placeholder="Email"
              className="w-full py-2 text-black border border-white rounded-lg lg:mt-[2rem] px-4  mt-[1rem]"
              style={{
                background:
                  window.innerWidth < 1024
                    ? "rgba(255, 255, 255, 0.50)"
                    : "white",
              }}
            />
            <button
              onClick={saveUserData}
              className="w-full py-3 text-white text-center border bg-[#FC0101] border-white rounded-lg lg:mt-[2rem] px-4"
            >
              Submit
            </button>
          </div>
          <div>
            <img className=" hidden lg:flex h-[38rem] z-50" src="8.svg" alt="i" />
          </div>
        </div>
      </div>
      <div className="lg:hidden w-screen bg-[#1E79C2] mt-[3rem] lg:mt-[4rem] flex flex-col items-center">
        <div
          className="text-white text-center text-lg font-medium mt-[2rem]  lg:font-medium"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "2.4px" }}
        >
          WE LOVE TO SEE YOU GROW
        </div>
        <div className="flex flex-col w-full md:w-[45rem] px-4 py-6 rounded-md h-full lg:w-[40rem] lg:px-10 lg:py-6 lg:border lg:mt-[2rem] lg:h-[29rem]">
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

export default Emailform;
