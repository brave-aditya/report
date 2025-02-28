"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineEdit } from "react-icons/md";
import { FiAward, FiBook, FiClock, FiPercent } from "react-icons/fi";

// ✅ Define the types properly
interface HeaderProps {
  name: string;
}

interface StudentData {
  overallPercentage: number;
  attendance: number | string;
  achievements: string[];
  subjects: { name: string; marks: number }[];
}

interface StatsProps {
  student: StudentData;
}

interface StatItemProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

interface AchievementsProps {
  achievements: string[];
}

// ✅ Header Component
export const Header: React.FC<HeaderProps> = ({ name }) => (
  <div className="w-full text-white bg-white/5 backdrop-blur-md border-2 border-yellow-400 rounded-3xl aspect-[5/4] relative p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
    <div className="flex flex-col justify-between items-start h-full z-10 relative">
      <div className="relative w-full group">
        <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 transition-all duration-300 hover:scale-105 border-2 border-yellow-400 rounded-full shadow-lg text-center pr-24">
          Welcome back
        </button>

        <Link href="/edit" passHref>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black hover:bg-yellow-300 text-white font-semibold py-1.5 px-3 transition-all duration-300 hover:scale-105 border-2 border-yellow-400 rounded-full shadow-lg text-center flex items-center gap-2 text-sm group-hover:bg-yellow-300">
          <MdOutlineEdit className="text-white text-lg"/>
            <span className="hidden sm:inline">Edit</span>
          </button>
        </Link>
      </div>

      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent drop-shadow-sm max-w-[65%]">
          {name}
        </h1>
        <p className="text-sm text-white/70 mt-1">Student ID: 123456789</p>
      </div>
    </div>

    <div className="absolute bottom-0 right-0 sm:w-[40%] w-[35%]">
      <Image
        src="/pfp.png"
        alt="Student"
        width={500}
        height={300}
        className="shadow-lg rounded-tl-3xl border-2 border-b-0 border-r-0 border-yellow-400 z-10"
      />
    </div>
  </div>
);

// ✅ Stats Component
export const Stats: React.FC<StatsProps> = ({ student }) => (
  <div className="w-full text-white bg-white/5 backdrop-blur-md border-2 border-yellow-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-center p-4 relative overflow-hidden">
    <h2 className="text-2xl font-semibold text-white/90 relative z-10 text-center">
      Statistics
    </h2>

    <ul className="space-y-1 relative z-10">
      <StatItem
        icon={<FiPercent className="text-yellow-300" />}
        title="Overall Percentage"
        value={`${student.overallPercentage}%`}
      />
      <StatItem
        icon={<FiBook className="text-green-400" />}
        title="Average Marks"
        value={
          student.subjects.length > 0
            ? Math.round(
                student.subjects.reduce(
                  (sum, subject) => sum + subject.marks,
                  0
                ) / student.subjects.length
              )
            : "N/A"
        }
      />
      <StatItem
        icon={<FiClock className="text-blue-400" />}
        title="Attendance"
        value={student.attendance}
      />
      <StatItem
        icon={<FiAward className="text-pink-400" />}
        title="Achievements"
        value={student.achievements.length}
      />
    </ul>
  </div>
);

// ✅ StatItem Component
const StatItem: React.FC<StatItemProps> = ({ icon, title, value }) => (
  <li className="flex items-center p-2 rounded-xl hover:bg-white/5 transition-all duration-300">
    <div className="mr-3 p-2 bg-white/10 rounded-lg border-2 border-yellow-400">
      {icon}
    </div>
    <span className="text-white/80">{title}</span>
    <span className="ml-auto font-semibold text-white bg-white/10 py-1 px-3 rounded-full border-2 border-yellow-400">
      {value}
    </span>
  </li>
);

// ✅ Achievements Component
export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => (
  <div className="w-full text-white bg-white/5 backdrop-blur-md border-2 border-yellow-400 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
    <h2 className="text-xl font-semibold mb-6 text-white/90 relative z-10 text-center">
      Recent Achievements
    </h2>

    <div className="space-y-4 relative z-10">
      {achievements.map((ach, index) => (
        <div
          key={index}
          className="bg-white/5 rounded-xl p-4 border-2 border-yellow-400 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex items-center">
            <div className="bg-yellow-400 p-2 rounded-lg mr-3">
              <FiAward className="text-black" />
            </div>
            <p className="text-white/90">{ach}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const MotivationalQuote: React.FC = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotes = [
      "Believe in yourself and all that you are.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Don't watch the clock; do what it does. Keep going.",
      "The harder you work for something, the greater you'll feel when you achieve it.",
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="backdrop-blur-md bg-white/5 border-2 border-yellow-400 rounded-3xl shadow-xl overflow-hidden p-4 text-center">
      <h2 className="text-xl font-semibold text-white/90 mb-3">
        Motivational Quote
      </h2>
      <p className="text-white italic">&quot;{quote}&quot;</p>
    </div>
  );
};
