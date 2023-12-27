import React from "react";
import Curriculum from "../Curriculum";
import Hero from "../Hero";
import Journey from "./Journey";
import Emailform from "../Emailform";
import Creative from "../Creative";
import Team from "./Team";

const Body = () => {
  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <Curriculum />
      <Journey />
      <Emailform />
      <Creative />
      <Team />
    </div>
  );
};

export default Body;
