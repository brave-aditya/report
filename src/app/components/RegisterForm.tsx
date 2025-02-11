"use client";
import Image from "next/image";
import { useState } from "react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"student" | "parent" | "teacher" | "admin">("student");

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Create a payload based on the selected role
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      role,
      ...(role === "student" && {
        parentName: formData.get("parentName"),
        parentEmail: formData.get("parentEmail"),
        class: formData.get("class"),
        dateOfBirth: formData.get("dateOfBirth"),
        address: formData.get("address"),
      }),
      ...(role === "teacher" && {
        qualification: formData.get("qualification"),
        joiningDate: formData.get("joiningDate"),
      }),
      ...(role === "parent" && {
        childStudentId: formData.get("childStudentId"),
      }),
    };

    // Send payload to your backend API
    console.log("Registration Payload:", payload);
    // await fetch('/api/register', { method: 'POST', body: JSON.stringify(payload) });
  };

  // Reusable Input Component
  const InputField = ({
    id,
    name,
    type,
    placeholder,
    label,
    required = true,
  }: {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    label: string;
    required?: boolean;
  }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-800"
        required={required}
      />
    </div>
  );

  // Reusable Password Input Component
  const PasswordField = ({
    id,
    name,
    placeholder,
    label,
  }: {
    id: string;
    name: string;
    placeholder: string;
    label: string;
  }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-800"
          required
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 right-3 top-1 cursor-pointer text-xl flex items-center text-gray-500"
        >
          👁️
        </span>
      </div>
    </div>
  );

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
            className="opacity-40 rounded-3xl"
          />
          <div className="flex flex-col z-10 p-6 h-[100%] justify-between">
            <p className="underline text-xl text-center">A wise man once said.</p>
            <div>
              <h1 className="text-xl mb-4">
                “Education is what remains after one has forgotten what one has
                learned in school”
              </h1>
              <p className="text-4xl text-right">-Albert Einstein</p>
            </div>
          </div>
        </div>

        {/* Left Section */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-purple-100 lg:bg-white p-8 rounded-[35px]">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Register Here</h2>
            <p className="text-gray-600 mb-8">
              Fill in all your details then click on sign up to proceed.
            </p>

            <form onSubmit={handleSubmit} >
              {/* Common Fields */}
              <div className="space-y-4 overflow-scroll h-[60vh] lg:h-[45vh] no-scrollbar">
              <InputField
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your full name"
                label="Name"
              />
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                label="Email"
              />
              <PasswordField
                id="password"
                name="password"
                placeholder="Enter your password"
                label="Password"
              />
              <PasswordField
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                label="Confirm Password"
              />

              {/* Role Selection */}
              <label className="block text-sm font-medium text-gray-700">
                Select Your Role
              </label>
              <div className="flex justify-between">
                {["student", "teacher", "parent", "admin"].map((r) => (
                  <label
                    key={r}
                    className="flex text-sm items-center flex-col text-gray-700"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={r}
                      checked={role === r}
                      onChange={() => setRole(r as typeof role)}
                      className="mb-2"
                    />
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </label>
                ))}
              </div>

              {/* Dynamic Fields Based on Role */}
              {role === "student" && (
                <>
                  <InputField
                    id="class"
                    name="class"
                    type="text"
                    placeholder="Enter your class"
                    label="Class"
                  />
                  <InputField
                    id="parentEmail"
                    name="parentEmail"
                    type="email"
                    placeholder="Enter your parent's email"
                    label="Parent's Email"
                  />
                  <InputField
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    placeholder="Date of Birth"
                    label="Date of Birth"
                  />
                  <InputField
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    label="Address"
                  />
                </>
              )}

              {role === "teacher" && (
                <>
                  <InputField
                    id="qualification"
                    name="qualification"
                    type="text"
                    placeholder="Enter your qualification"
                    label="Qualification"
                  />
                  <InputField
                    id="joiningDate"
                    name="joiningDate"
                    type="date"
                    placeholder="Joining Date"
                    label="Joining Date"
                  />
                </>
              )}

              {role === "parent" && (
                <InputField
                  id="childStudentId"
                  name="childStudentId"
                  type="text"
                  placeholder="Enter your child's student ID"
                  label="Child's Student ID"
                />
              )}
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-2 bg-black text-white hover:bg-gray-800 rounded-full"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
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