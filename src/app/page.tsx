"use client";
import React from "react";
import HeroImage from "./components/HeroImage";
import FallingCircles from "./components/FallingCircles";

const HomePage = () => {
  return (
    <div className="h-screen min-h-screen pt-4 lg:pt-10 px-4 lg:px-12 relative">
      
      <div className="flex flex-col lg:flex-row justify-center items-center border-[4px] border-yellow-400 h-full w-full rounded-[50px] rounded-b-none border-b-0 bg-purple-200 opacity-90 relative animated-container">
      <div className="absolute inset-0">
        <FallingCircles />
      </div>

        <div className="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full order-1 lg:order-2">
          <HeroImage />
        </div>

        <div className="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full order-2 lg:order-1">
          <div className="text-4xl font-bold">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
