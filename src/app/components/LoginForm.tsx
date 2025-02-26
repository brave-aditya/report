"use client";
import Image from "next/image";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center p-4 lg:p-8 lg:px-[15%]">
     <div className="h-full lg:h-auto flex bg-purple-100 lg:bg-white opacity-95 lg:opacity-100 rounded-[35px]">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col w-1/2 bg-black text-white relative rounded-[35px] border-white border-[5.5px]">
        <Image
          src="/left.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className=" opacity-40 rounded-3xl"
        />
        <div className=" flex  flex-col z-10 p-6 h-[100%] justify-between">
          <p className="underline text-xl text-center">A wise man once said.</p>
          <div>
          <h1 className="text-xl mb-4">Education is our passport to the future, for tomorrow belongs only to the people who prepare for it today.</h1>
          <p className="text-4xl text-right">
            -Malcolm X
          </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-purple-100 lg:bg-white p-8 rounded-[35px]">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
          <p className="text-gray-600 mb-8">
            Enter your email and password to access your account.
          </p>

          <form className="space-y-4">
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
                  type={
                    showPassword ? "text" : "password"
                }
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-800"
                  placeholder="Enter your password"
                />
                <span onClick={() =>
                        setShowPassword((prev) => !prev)} className="absolute inset-y-0 right-3 top-1 cursor-pointer text-xl flex items-center text-gray-500">
                  👁️
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-black border-gray-300 rounded"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white hover:bg-gray-800 rounded-full"
            >
              Sign In
            </button>
          </form>
           <p className="ml-[43%]">---OR---</p>
          <div className="flex w-full p">
            
            <button className="w-full mr-2 py-2 bg-black text-white hover:bg-gray-800 text-2xl rounded-full"><FaApple className="m-auto"/></button>
            <button className="w-full py-2 bg-black text-white hover:bg-gray-800 text-2xl rounded-full"><FcGoogle className="m-auto"/></button>
            <button className="w-full ml-2 py-2 bg-black text-white hover:bg-gray-800 text-2xl rounded-full"><FaFacebookF className="m-auto"/>  </button>
          </div>



          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
