"use client";
import Image from "next/image";

import { useState } from "react";


const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center p-4 lg:p-8 lg:px-[15%]">
      <div className="h-full lg:h-auto flex flex-row-reverse bg-purple-100 lg:bg-white opacity-95 lg:opacity-100 rounded-[35px]">
        {/* Right Section */}
        <div className="hidden lg:flex flex-col w-1/2 bg-black text-white relative rounded-[35px] border-white border-[5.5px]">
          <Image
            src="/right.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className=" opacity-40 rounded-3xl"
          />
          <div className=" flex  flex-col z-10 p-6 h-[100%] justify-between">
            <p className="underline text-xl text-center">
              A wise man once said.
            </p>
            <div>
              <h1 className="text-xl mb-4">
                “Education is what remains after one has forgotten what one has
                learned in school”
              </h1>
              <p className="text-4xl text-right">-Albert Einstein</p>
            </div>
          </div>
        </div>

        {/* left Section */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-purple-100 lg:bg-white p-8 rounded-[35px]">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Register Here
            </h2>
            <p className="text-gray-600 mb-8">
              Fill in all your details then click on sign up to proceed.
            </p>

            <form className="space-y-4 overflow-scroll h-[60vh] lg:h-[45vh] no-scrollbar">
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="email"
                  type="text"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-800"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-800"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-800"
                    placeholder="Enter your password"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 top-1 cursor-pointer text-xl flex items-center text-gray-500"
                  >
                    👁️
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-800"
                    placeholder="Enter your password"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 top-1 cursor-pointer text-xl flex items-center text-gray-500"
                  >
                    👁️
                  </span>
                </div>
              </div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Select Yor Role
              </label>
              <div className="flex justify-between">
                <div className="flex-col text-center">
                  <input
                    type="radio"
                    id="student"
                    name="role"
                    value="student"
                  />
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Student
                  </label>
                </div>
                <div className="flex-col text-center">
                  <input
                    type="radio"
                    id="student"
                    name="role"
                    value="teacher"
                  />
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teacher
                  </label>
                </div>
                <div className="flex-col text-center">
                  <input type="radio" id="student" name="role" value="parent" />
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Parent
                  </label>
                </div>
                <div className="flex-col text-center">
                  <input type="radio" id="student" name="role" value="admin" />
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Admin
                  </label>
                </div>
              </div>
              </form>
              <button
                className="w-full mt-6 py-2 bg-black text-white  hover:bg-gray-800 rounded-full"
              >
                Sign Up
              </button>
            

            <p className="mt-6 text-center text-sm text-gray-500">
              Alrady have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
