// src/components/ui/charts.jsx

"use client";
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const BarChart = ({ data, width = "100%", height = 300 }) => {
    console.log(data); // Check the data
    return (
      <ResponsiveContainer width={width} height={height}>
        <ReBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4F46E5" radius={[5, 5, 0, 0]} />
        </ReBarChart>
      </ResponsiveContainer>
    );
  };
  

export default BarChart;
