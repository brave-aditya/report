"use client";
import React from "react";

const StudentDashboard = () => {
  const student = {
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
      { name: "Mathematics Midterm", date: "2023-11-15" },
      { name: "Science Practical", date: "2023-11-20" },
    ],
    achievements: ["Top Performer in Math", "100% Attendance"],
  };

  return (
    <div className="h-full max-h-screen overflow-auto p-6 lg:p-12 text-gray-200 bg-gray-800/90 no-scrollbar">
      {/* Greeting Section */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-white bg-gray-900/50 p-4 rounded-lg">
          Welcome back, {student.name}!
        </h1>
        <p className="text-lg text-gray-400 bg-gray-900/40 p-2 rounded-lg">Here&apos;s your academic summary.</p>
      </div>

      {/* Academic Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-lg shadow bg-gray-700/70">
          <h2 className="text-xl font-semibold text-gray-300">Overall Percentage</h2>
          <p className="text-4xl font-bold text-blue-400">{student.overallPercentage}%</p>
        </div>
        <div className="p-6 rounded-lg shadow bg-gray-700/70">
          <h2 className="text-xl font-semibold text-gray-300">Attendance</h2>
          <p className="text-4xl font-bold text-green-400">{student.attendance}</p>
        </div>
        <div className="p-6 rounded-lg shadow bg-gray-700/70">
          <h2 className="text-xl font-semibold text-gray-300">Achievements</h2>
          <ul className="mt-2 space-y-1">
            {student.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-400">🏆 {achievement}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subject-Wise Marks */}
      <div className="p-6 rounded-lg shadow bg-gray-700/70 mb-8">
        <h2 className="text-2xl font-bold text-gray-300 mb-4">Subject-Wise Marks</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {student.subjects.map((subject, index) => (
            <div key={index} className="p-4 border border-gray-600 rounded-lg bg-gray-800/60">
              <h3 className="text-xl font-semibold text-gray-300">{subject.name}</h3>
              <p className="text-lg text-gray-400">Marks: {subject.marks}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Exams */}
      <div className="p-6 rounded-lg shadow bg-gray-700/70 mb-8">
        <h2 className="text-2xl font-bold text-gray-300 mb-4">Upcoming Exams</h2>
        <ul className="space-y-2">
          {student.upcomingExams.map((exam, index) => (
            <li key={index} className="p-4 border border-gray-600 rounded-lg bg-gray-800/60">
              <h3 className="text-xl font-semibold text-gray-300">{exam.name}</h3>
              <p className="text-lg text-gray-400">Date: {exam.date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Motivational Quote */}
      <div className="bg-blue-700/80 p-6 rounded-lg shadow text-white text-center">
        <p className="text-xl italic">&quot;Success is the sum of small efforts, repeated day in and day out.&quot;</p>
        <p className="text-lg mt-2">– Robert Collier</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
