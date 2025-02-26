"use client";

import React from "react";
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

// Custom Gradients
const createGradientId = (id: string) => `color${id}`;

// Common Tooltip Style
const tooltipStyle = {
  background: "rgba(15, 15, 30, 0.9)",
  border: "2px solid #00FFFF",
  borderRadius: "12px",
  boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.3)",
};

// Performance Bar Chart
export const Performance: React.FC<PerformanceProps> = ({ subjects }) => (
  <div className="w-full h-full text-white bg-white/5 backdrop-blur-md border-2 border-yellow-400 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col">
    <h2 className="text-xl font-semibold mb-4 text-white/90">Subject Performance</h2>
    <div className="flex-grow w-full min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={subjects}>
          <defs>
            <linearGradient id={createGradientId("Subject")} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FFFF" stopOpacity={1} />
              <stop offset="100%" stopColor="#0066FF" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
          <XAxis dataKey="name" tick={{ fill: "#ffffff90" }} />
          <YAxis tick={{ fill: "#ffffff90" }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar 
            dataKey="marks" 
            fill={`url(#${createGradientId("Subject")})`} 
            radius={[6, 6, 0, 0]} 
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// Comparison Line Chart
export const ComparisonLineChart: React.FC<ComparisonLineChartProps> = ({ data }) => (
  <div className="w-full h-full text-white bg-white/5 backdrop-blur-md border-2 border-yellow-400 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col">
    <h2 className="text-xl font-semibold mb-4 text-white/90">Marks Comparison</h2>
    <div className="flex-grow w-full min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id={createGradientId("Student")} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00FFFF" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#00FFFF" stopOpacity={1} />
            </linearGradient>
            <linearGradient id={createGradientId("ClassAvg")} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF00FF" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#FF00FF" stopOpacity={1} />
            </linearGradient>
            <linearGradient id={createGradientId("ClassTopper")} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00FF00" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#00FF00" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
          <XAxis dataKey="name" tick={{ fill: "#ffffff90" }} />
          <YAxis tick={{ fill: "#ffffff90" }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend formatter={(value) => <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>{value}</span>} />
          <Line 
            type="monotone" 
            dataKey="student" 
            stroke={`url(#${createGradientId("Student")})`} 
            strokeWidth={3} 
            dot={{ strokeWidth: 2, r: 6, fill: "#0F0F1E", stroke: "#00FFFF" }} 
            activeDot={{ r: 8, strokeWidth: 2, stroke: "#00FFFF" }} 
            animationDuration={1500}
          />
          <Line 
            type="monotone" 
            dataKey="classAverage" 
            stroke={`url(#${createGradientId("ClassAvg")})`} 
            strokeWidth={3} 
            dot={{ strokeWidth: 2, r: 6, fill: "#0F0F1E", stroke: "#FF00FF" }} 
            activeDot={{ r: 8, strokeWidth: 2, stroke: "#FF00FF" }} 
            animationDuration={1800}
          />
          <Line 
            type="monotone" 
            dataKey="classTopper" 
            stroke={`url(#${createGradientId("ClassTopper")})`} 
            strokeWidth={3} 
            dot={{ strokeWidth: 2, r: 6, fill: "#0F0F1E", stroke: "#00FF00" }} 
            activeDot={{ r: 8, strokeWidth: 2, stroke: "#00FF00" }} 
            animationDuration={2100}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// Monthly Progress Bar Chart
export const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => (
  <div className="w-full h-full text-white bg-white/5 backdrop-blur-md border-2 border-yellow-400 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col">
    <h2 className="text-xl font-semibold mb-4 text-white/90">Monthly Progress</h2>
    <div className="flex-grow w-full min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <defs>
            <linearGradient id={createGradientId("Progress")} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF00FF" stopOpacity={1} />
              <stop offset="100%" stopColor="#0066FF" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
          <XAxis dataKey="month" tick={{ fill: "#ffffff90" }} />
          <YAxis tick={{ fill: "#ffffff90" }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar 
            dataKey="value" 
            fill={`url(#${createGradientId("Progress")})`} 
            radius={[6, 6, 0, 0]} 
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);