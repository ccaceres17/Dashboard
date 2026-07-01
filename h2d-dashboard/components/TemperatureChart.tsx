"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", temp: 210 },
  { time: "10:10", temp: 215 },
  { time: "10:20", temp: 220 },
  { time: "10:30", temp: 223 },
  { time: "10:40", temp: 220 },
];

export default function TemperatureChart() {
  return (
    <div className="h-56">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#22c55e"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}