"use client";

import React, { useState, useEffect } from "react";

interface Exam {
  name: string;
  date: string;
}

interface CalendarComponentProps {
  examDates: string[];
  upcomingExams: Exam[];
}

const GlassMorphicContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`backdrop-blur-lg bg-white/10 border-2 border-yellow-400 rounded-3xl shadow-xl p-6 ${className}`}>
    {children}
  </div>
);

interface Day {
  day: number | null;
  isExamDay: boolean;
  isSunday: boolean;
  dateString?: string;
}

const SimpleCalendar: React.FC<{ examDates: string[]; month?: number; year?: number }> = ({
  examDates,
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
}) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(month);
  const [selectedYear, setSelectedYear] = useState<number>(year);
  const [calendarDays, setCalendarDays] = useState<Day[]>([]);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Helper function to format dates consistently
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const days: Day[] = [];
    const firstDay = new Date(selectedYear, selectedMonth, 1);
    const lastDay = new Date(selectedYear, selectedMonth + 1, 0);
    const startingDayOfWeek = firstDay.getDay();

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: null, isExamDay: false, isSunday: false });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(selectedYear, selectedMonth, i);
      const dateString = formatDate(date);
      const isExamDay = examDates.includes(dateString);
      const isSunday = date.getDay() === 0;

      days.push({ day: i, isExamDay, isSunday, dateString });
    }

    setCalendarDays(days);
  }, [selectedMonth, selectedYear, examDates]);

  const changeMonth = (direction: "next" | "prev") => {
    setSelectedMonth((prev) => {
      const newMonth = direction === "next" ? prev + 1 : prev - 1;
      if (newMonth < 0) {
        setSelectedYear((prevYear) => prevYear - 1);
        return 11;
      } else if (newMonth > 11) {
        setSelectedYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 text-white">
        <button onClick={() => changeMonth("prev")} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
          &lt;
        </button>
        <div className="text-lg font-semibold">
          {monthNames[selectedMonth]} {selectedYear}
        </div>
        <button onClick={() => changeMonth("next")} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {daysOfWeek.map((day, index) => (
          <div key={day} className={index === 0 ? "text-red-500" : "text-white/70"}>
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((dayObj, index) => (
          <div
            key={index}
            className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all
              ${dayObj.day === null ? "text-transparent" : dayObj.isSunday ? "text-red-500" : "text-white/80"}
              ${dayObj.isExamDay ? " border-2 border-yellow-300 font-bold" : "hover:bg-white/10"}
              ${dayObj.day === new Date().getDate() && selectedMonth === new Date().getMonth() && selectedYear === new Date().getFullYear() ? "bg-blue-500/40 border border-blue-500/50" : ""}`}
          >
            {dayObj.day}
          </div>
        ))}
      </div>
    </div>
  );
};

const CalendarComponent: React.FC<CalendarComponentProps> = ({ examDates, upcomingExams }) => {
  // Ensure all dates are in the same format for consistent comparison
  const formattedExamDates = examDates.map(date => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  return (
    <GlassMorphicContainer>
      <h2 className="text-xl font-semibold mb-4 text-center text-white/90">Exam Calendar</h2>
      <SimpleCalendar examDates={formattedExamDates} />
      
      <div className="flex justify-between items-center mt-4 mb-2">
        <h3 className="text-md font-medium text-white/70">Upcoming Exams</h3>
        <div className="flex items-center space-x-2 text-xs">
          <div className="w-3 h-3 border border-yellow-300 rounded-sm"></div>
          <span className="text-white/70">Exam Date</span>
        </div>
      </div>
      
      <div className="space-y-2">
        {upcomingExams.length > 0 ? (
          upcomingExams.map((exam, index) => (
            <div key={index} className="p-3 rounded-lg bg-white/10 border-2 border-yellow-400 shadow-md">
              <p className="text-md text-white font-medium">{exam.name}</p>
              <p className="text-sm text-white/70">{new Date(exam.date).toDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-white/70">No upcoming exams</p>
        )}
      </div>
    </GlassMorphicContainer>
  );
};

export default CalendarComponent;