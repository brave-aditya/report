"use client";
import React from "react";
import Link from "next/link";
import HeroImage from "./components/HeroImage";
import FallingCircles from "./components/FallingCircles";

const HomePage = () => {
  return (
    <div className="h-screen min-h-screen pt-4 lg:pt-10 px-4 lg:px-12 relative">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center border-4 border-yellow-400 h-full w-full rounded-[50px] rounded-b-none border-b-0 bg-gray-800/90 relative overflow-hidden pb-8 lg:pb-0 ">
        
        {/* Falling Circles Animation */}
        <div className="absolute inset-0">
          <FallingCircles />
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full order-1 lg:order-2 relative">
          {/* Circular Shadow/Ring */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-white/10 backdrop-blur-sm shadow-[0_0_60px_15px_rgba(255,255,255,0.25)] animate-pulse-slow" />
          </div>
          {/* Hero Image Container */}
          <div className="relative z-10 w-full h-full flex justify-center items-center">
            <HeroImage />
          </div>
        </div>

        {/* Text and Buttons Section */}
        <div className="flex flex-col justify-center items-center text-center w-full lg:w-1/2 h-1/2 lg:h-full order-2 lg:order-1 text-white p-6 lg:p-12 space-y-6 relative mt-4 lg:mt-0">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Empowering <span className="bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text text-transparent">Education,</span> One Report at a Time
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl">
            Track progress, celebrate achievements, and stay connected with your academic journey. Seamlessly access your report cards and insights with just a click!
          </p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <Link href="/student" className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 transition-all duration-300 hover:scale-105 border-2 border-white rounded-full shadow-lg text-center">
              Continue to Dashboard →
            </Link>
            <Link href="/" className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 border-2 border-black shadow-lg text-center">
              View Portfolio →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
