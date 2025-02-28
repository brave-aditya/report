"use client";

import React, { useState } from "react";
import {
  Header,
  Stats,
  Achievements,
  MotivationalQuote,
} from "@/app/components/PersonalDetails";
import {
  ProgressChart,
  ComparisonLineChart,
  Performance,
} from "@/app/components/Charts";
import { RecentMessages, ComplaintRequest } from "@/app/components/MessageBox";
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
      <div className="flex flex-col w-full gap-6 items-center z-10 justify-between">
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          <Header name={student.name} />
          <Stats student={student} />
          <Achievements achievements={student.achievements} />
        </div>
        <div className="flex flex-col gap-6 w-full h-full justify-between">
          <div className="flex flex-col sm:flex-row w-full gap-6">
            <Performance subjects={student.subjects} />
            <ComparisonLineChart data={comparisonData} />
          </div>
          <ProgressChart data={monthlyData} />
          <MotivationalQuote />
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col z-10 gap-6 w-full sm:w-[33%] sm:max-w-[300px]">
        <CalendarComponent
          examDates={examDates}
          upcomingExams={student.upcomingExams}
        />
        <RecentMessages />
        <ComplaintRequest />
      </div>
    </div>
  );
};

export default StudentDashboard;
