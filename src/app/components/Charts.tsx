"use client";

import React, { useEffect, useState, useMemo, memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

// Type Definitions
interface Subject {
  name: string;
  marks: number;
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

interface PerformanceProps {
  subjects: Subject[];
}

interface ComparisonLineChartProps {
  data: ComparisonData[];
}

interface ProgressChartProps {
  data: MonthlyData[];
}

// Common Constants
const TOOLTIP_STYLE = {
  background: "rgba(15, 15, 30, 0.9)",
  border: "2px solid #00FFFF",
  borderRadius: "12px",
  boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.3)",
};

const COMMON_CONTAINER_CLASSES =
  "w-full h-[350px] text-white bg-white/5 backdrop-blur-md border-2 border-yellow-400 rounded-3xl p-2 pt-6 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col";

const MONTHS = [
  { full: "April", short: "Apr" },
  { full: "May", short: "May" },
  { full: "June", short: "Jun" },
  { full: "July", short: "Jul" },
  { full: "August", short: "Aug" },
  { full: "September", short: "Sep" },
  { full: "October", short: "Oct" },
  { full: "November", short: "Nov" },
  { full: "December", short: "Dec" },
  { full: "January", short: "Jan" },
  { full: "February", short: "Feb" },
  { full: "March", short: "Mar" },
];

// Color themes - Enhanced with better matching colors
const COLORS = {
  student: {
    main: "#36CFFF",
    gradient: {
      start: "#36CFFF",
      end: "#2B9AFF",
    },
  },
  classAverage: {
    main: "#FF36D0",
    gradient: {
      start: "#FF36D0",
      end: "#B636FF",
    },
  },
  classTopper: {
    main: "#36FF72",
    gradient: {
      start: "#36FF72",
      end: "#36FFC0",
    },
  },
};

// Utility Functions
const createGradientId = (id: string): string => `color${id}`;

// Custom Hooks
const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

// Custom Components
interface CustomTickProps {
  x: number;
  y: number;
  payload: { value: string };
  maxLineLength?: number;
}

const CustomTick = memo(({ x, y, payload, maxLineLength = 12 }: CustomTickProps) => {
  const name = payload.value || "";

  // Split the name into lines for better display
  const lines = useMemo(() => {
    const words = name.split(" ");
    const result: string[] = [];
    let currentLine = "";

    words.forEach((word: string) => {
      if ((currentLine + word).length <= maxLineLength) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        result.push(currentLine);
        currentLine = word;
      }
    });

    if (currentLine) {
      result.push(currentLine);
    }

    return result;
  }, [name, maxLineLength]);

  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line, index) => (
        <text
          x={0}
          y={index * 12}
          dy={16}
          textAnchor="middle"
          fill="#ffffff90"
          fontSize={12}
          key={index}
        >
          {line}
        </text>
      ))}
    </g>
  );
});

CustomTick.displayName = "CustomTick";

// Performance Bar Chart
export const Performance = memo(({ subjects }: PerformanceProps) => {
  if (!subjects || subjects.length === 0) {
    return (
      <div className={COMMON_CONTAINER_CLASSES}>No subject data available</div>
    );
  }

  return (
    <div className={COMMON_CONTAINER_CLASSES}>
      <h2 className="text-xl font-semibold text-white/90 text-center">
        Subject Performance
      </h2>
      <div className="flex-grow w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={subjects}
            margin={{ top: 10, right: 0, left: 0, bottom: -25 }}
            barSize={40}
            layout="horizontal"
          >
            <defs>
              <linearGradient id="subjectGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00FFFF" stopOpacity={1} />
                <stop offset="100%" stopColor="#0066FF" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "#ffffff30" }}
              tickLine={{ stroke: "#ffffff30" }}
              height={70}
              interval={0}
              tick={(props) => <CustomTick {...props} maxLineLength={10} />}
            />
            <YAxis
              tick={{ fill: "#ffffff90" }}
              axisLine={{ stroke: "#ffffff30" }}
              tickLine={{ stroke: "#ffffff30" }}
              width={30}
            />
            <Tooltip
              contentStyle={TOOLTIP_STYLE}
              cursor={{ fill: "rgba(0, 255, 255, 0.2)" }}
            />
            <Bar
              dataKey="marks"
              fill="url(#subjectGradient)"
              radius={[10, 10, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});

Performance.displayName = "Performance";

// Comparison Line Chart Gradients
const ComparisonGradients = memo(() => (
  <defs>
    <linearGradient
      id={createGradientId("Student")}
      x1="0"
      y1="0"
      x2="1"
      y2="0"
    >
      <stop
        offset="0%"
        stopColor={COLORS.student.gradient.start}
        stopOpacity={0.9}
      />
      <stop
        offset="100%"
        stopColor={COLORS.student.gradient.end}
        stopOpacity={1}
      />
    </linearGradient>
    <linearGradient
      id={createGradientId("ClassAvg")}
      x1="0"
      y1="0"
      x2="1"
      y2="0"
    >
      <stop
        offset="0%"
        stopColor={COLORS.classAverage.gradient.start}
        stopOpacity={0.9}
      />
      <stop
        offset="100%"
        stopColor={COLORS.classAverage.gradient.end}
        stopOpacity={1}
      />
    </linearGradient>
    <linearGradient
      id={createGradientId("ClassTopper")}
      x1="0"
      y1="0"
      x2="1"
      y2="0"
    >
      <stop
        offset="0%"
        stopColor={COLORS.classTopper.gradient.start}
        stopOpacity={0.9}
      />
      <stop
        offset="100%"
        stopColor={COLORS.classTopper.gradient.end}
        stopOpacity={1}
      />
    </linearGradient>
  </defs>
));

ComparisonGradients.displayName = "ComparisonGradients";

// Comparison Line Chart
export const ComparisonLineChart = memo(
  ({ data }: ComparisonLineChartProps) => {
    if (!data || data.length === 0) {
      return (
        <div className={COMMON_CONTAINER_CLASSES}>
          No comparison data available
        </div>
      );
    }

    return (
      <div className={COMMON_CONTAINER_CLASSES}>
        <h2 className="text-xl font-semibold text-white/90 text-center">
          Marks Comparison
        </h2>
        <div className="flex-grow w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 10, bottom: -25 }} // Increased right and bottom margins
            >
              <ComparisonGradients />
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis
                dataKey="name"
                axisLine={{ stroke: "#ffffff30" }}
                tickLine={{ stroke: "#ffffff30" }}
                height={70}
                interval={0}
                tick={(props) => <CustomTick {...props} maxLineLength={10} />}
              />
              <YAxis
                tick={{ fill: "#ffffff90" }}
                axisLine={{ stroke: "#ffffff30" }}
                tickLine={{ stroke: "#ffffff30" }}
                width={30}
              />
              <Tooltip
                contentStyle={TOOLTIP_STYLE}
                cursor={{ stroke: "rgba(255, 255, 255, 0.2)" }}
              />
              <Legend
                verticalAlign="top"
                height={36}
                formatter={(value) => (
                  <span style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                    {value}
                  </span>
                )}
              />
              <Line
                type="monotone"
                dataKey="student"
                name="Student"
                stroke={COLORS.student.main}
                strokeWidth={3}
                connectNulls={true}
                dot={{
                  strokeWidth: 2,
                  r: 5,
                  fill: "#0F0F1E",
                  stroke: COLORS.student.main,
                }}
                activeDot={{
                  r: 7,
                  strokeWidth: 2,
                  stroke: COLORS.student.main,
                }}
                animationDuration={1500}
              />
              <Line
                type="monotone"
                dataKey="classAverage"
                name="Class Average"
                stroke={COLORS.classAverage.main}
                strokeWidth={3}
                connectNulls={true}
                dot={{
                  strokeWidth: 2,
                  r: 5,
                  fill: "#0F0F1E",
                  stroke: COLORS.classAverage.main,
                }}
                activeDot={{
                  r: 7,
                  strokeWidth: 2,
                  stroke: COLORS.classAverage.main,
                }}
                animationDuration={1800}
              />
              <Line
                type="monotone"
                dataKey="classTopper"
                name="Class Topper"
                stroke={COLORS.classTopper.main}
                strokeWidth={3}
                connectNulls={true}
                dot={{
                  strokeWidth: 2,
                  r: 5,
                  fill: "#0F0F1E",
                  stroke: COLORS.classTopper.main,
                }}
                activeDot={{
                  r: 7,
                  strokeWidth: 2,
                  stroke: COLORS.classTopper.main,
                }}
                animationDuration={2100}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
);

ComparisonLineChart.displayName = "ComparisonLineChart";

// Monthly Progress Bar Chart
export const ProgressChart = memo(({ data }: ProgressChartProps) => {
  const windowWidth = useWindowResize();

  const formattedMonths = useMemo(() => {
    return MONTHS.map((month) => ({
      ...month,
      displayName: windowWidth < 768 ? month.short : month.full,
    }));
  }, [windowWidth]);

  const formattedData = useMemo(() => {
    if (!data || data.length === 0) return [];

    return data.map((item, index) => ({
      ...item,
      month:
        index < formattedMonths.length
          ? formattedMonths[index].displayName
          : item.month,
    }));
  }, [data, formattedMonths]);

  if (!data || data.length === 0) {
    return (
      <div className={COMMON_CONTAINER_CLASSES}>No progress data available</div>
    );
  }

  return (
    <div className="w-full h-[350px] text-white bg-white/5 backdrop-blur-md border-2 border-yellow-400 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-white/90 text-center">
        Monthly Progress
      </h2>
      <div className="flex-grow w-full min-h-[250px] overflow-x-auto no-scrollbar">
        <div className="w-[650px] sm:w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={formattedData}
              margin={{ top: 10, right: 0, left: 0, bottom: -5 }}
            >
              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#FF00FF" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis
                dataKey="month"
                axisLine={{ stroke: "#ffffff30" }}
                tickLine={{ stroke: "#ffffff30" }}
                tick={{ fill: "#ffffff90", fontSize: 12 }}
              />
              <YAxis
                tick={{ fill: "#ffffff90" }}
                axisLine={{ stroke: "#ffffff30" }}
                tickLine={{ stroke: "#ffffff30" }}
                width={30}
              />
              <Tooltip
                contentStyle={TOOLTIP_STYLE}
                cursor={{ fill: "rgba(255, 0, 255, 0.2)" }}
              />
              <Bar
                dataKey="value"
                fill="url(#progressGradient)"
                radius={[6, 6, 0, 0]}
                animationDuration={1500}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
});

ProgressChart.displayName = "ProgressChart";