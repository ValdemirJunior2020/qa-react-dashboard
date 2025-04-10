import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useState } from "react";
import YearFilter from "./YearFilter";

const allData = [
  { month: "Jul 2023", score: 64.75 },
  { month: "Aug 2023", score: 60.75 },
  { month: "Sep 2023", score: 68.5 },
  { month: "Oct 2023", score: 66 },
  { month: "Nov 2023", score: 70.25 },
  { month: "Dec 2023", score: 70 },
  { month: "Jan 2024", score: 65.5 },
  { month: "Feb 2024", score: 65.25 },
  { month: "Mar 2024", score: 66.5 },
  { month: "May 2024", score: 67 },
  { month: "Jun 2024", score: 66 },
  { month: "Jul 2024", score: 63.75 },
  { month: "Aug 2024", score: 63.25 },
  { month: "Sep 2024", score: 63.75 },
  { month: "Oct 2024", score: 67.5 },
  { month: "Nov 2024", score: 49 },
  { month: "Dec 2024", score: 66 },
  { month: "Jan 2025", score: 65.75 },
  { month: "Feb 2025", score: 65 },
  { month: "Mar 2025", score: 67 },
];

const ScoreChart = () => {
  const [filteredYear, setFilteredYear] = useState("All");

  const filteredData =
    filteredYear === "All"
      ? allData
      : allData.filter((d) => d.month.includes(filteredYear));

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold mb-4">QA Score Trend</h2>
      <YearFilter onChange={setFilteredYear} />

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[40, 100]} />
          <Tooltip />
          <Bar dataKey="score">
            {filteredData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.score >= 65 ? "#22c55e" : "#ef4444"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;
