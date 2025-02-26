"use client";

import React, { useState } from "react";
import { FiAward, FiSend } from "react-icons/fi";
import { Header, Stats, Achievements } from "@/app/components/PersonalDetails";
import {
  ProgressChart,
  ComparisonLineChart,
  Performance,
} from "@/app/components/Charts";
import CalendarComponent from "@/app/components/Calendar";

// Define TypeScript interfaces
interface Subject {
  name: string;
  marks: number;
}

interface Exam {
  name: string;
  date: string;
}

interface StudentData {
  name: string;
  overallPercentage: number;
  attendance: string;
  subjects: Subject[];
  upcomingExams: Exam[];
  achievements: string[];
}

interface ComparisonData {
  name: string;
  student: number;
  classAverage: number;
  classTopper: number;
}

interface MonthlyData {
  month: string;
  value: number;
}

// Complaint/Request Component

const ComplaintRequest: React.FC = () => {
  const [teacherId, setTeacherId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log({ teacherId, message });
    setIsSent(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setTeacherId("");
      setMessage("");
      setIsSent(false);
    }, 3000);
  };

  return (
    <div className="backdrop-blur-lg bg-white/10 border-2 border-yellow-400 rounded-3xl shadow-xl overflow-hidden">
      <div className="pb-2">
        <h2 className="text-xl font-semibold text-white/90 px-4 pt-4">
          Complaint/Request
        </h2>
      </div>
      <div className="px-4 pb-4">
        {isSent ? (
          <div className="py-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 mb-3">
              <FiSend className="text-green-400 text-xl" />
            </div>
            <p className="text-white font-medium">
              Your message has been sent!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="teacherId"
                className="block text-sm text-white/70 mb-1"
              >
                Teacher ID
              </label>
              <input
                type="text"
                id="teacherId"
                value={teacherId}
                onChange={(e) => setTeacherId(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-yellow-400/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/70"
                placeholder="Enter teacher ID"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-white/70 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-yellow-400/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/70 min-h-24"
                placeholder="Describe your complaint or request"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500/60 hover:bg-yellow-500/80 border-2 border-yellow-400 rounded-lg text-white font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FiSend className="text-lg" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const generateRandomData = (): MonthlyData[] => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: `Month ${i + 1}`,
    value: Math.floor(Math.random() * 100) + 10,
  }));
};

const StudentDashboard: React.FC = () => {
  const [student] = useState<StudentData>({
    name: "John Doe",
    overallPercentage: 85,
    attendance: "95%",
    subjects: [
      { name: "Mathematics", marks: 92 },
      { name: "Science", marks: 88 },
      { name: "English", marks: 78 },
      { name: "History", marks: 85 },
      { name: "Computer Science", marks: 95 },
    ],
    upcomingExams: [
      { name: "Mathematics Midterm", date: "2025-02-28" },
      { name: "Science Practical", date: "2025-03-05" },
    ],
    achievements: ["Top Performer in Math", "100% Attendance"],
  });

  const [monthlyData] = useState<MonthlyData[]>(generateRandomData());
  const [examDates] = useState<string[]>(["2025-02-28", "2025-03-05"]);

  const comparisonData: ComparisonData[] = [
    { name: "Mathematics", student: 92, classAverage: 68, classTopper: 98 },
    { name: "Science", student: 88, classAverage: 72, classTopper: 95 },
    { name: "English", student: 78, classAverage: 68, classTopper: 90 },
    { name: "History", student: 85, classAverage: 70, classTopper: 92 },
    {
      name: "Computer Science",
      student: 95,
      classAverage: 80,
      classTopper: 100,
    },
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8 flex flex-col sm:flex-row gap-6 items-stretch">
      {/* Main Content */}
      <div className="flex flex-col w-full gap-6 items-center z-10">
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-2/3">
          <Header name={student.name} />
          <Stats student={student} />
        </div>
        <div className="flex flex-col gap-6 w-full ">
          <div className="flex flex-col sm:flex-row w-full gap-6">
            <Performance subjects={student.subjects} />
            <ComparisonLineChart data={comparisonData} />
          </div>
          <ProgressChart data={monthlyData} />
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col z-10 gap-6 w-full sm:w-[33%] sm:max-w-[300px]">
        <CalendarComponent
          examDates={examDates}
          upcomingExams={student.upcomingExams}
        />
        <Achievements achievements={student.achievements} />
        <ComplaintRequest />
      </div>
    </div>
  );
};

export default StudentDashboard;
