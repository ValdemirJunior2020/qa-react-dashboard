import { useState } from "react";

const allMonths = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const MonthRangeFilter = ({ onChange }) => {
  const [start, setStart] = useState("Jan");
  const [end, setEnd] = useState("Dec");

  const handleFilter = () => {
    onChange({ start, end });
  };

  return (
    <div className="mb-4 flex flex-wrap gap-3 items-center">
      <label className="font-medium">Filter by month range:</label>
      <select value={start} onChange={(e) => setStart(e.target.value)} className="border px-2 py-1 rounded">
        {allMonths.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <span>to</span>
      <select value={end} onChange={(e) => setEnd(e.target.value)} className="border px-2 py-1 rounded">
        {allMonths.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <button onClick={handleFilter} className="ml-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
        Apply
      </button>
    </div>
  );
};

export default MonthRangeFilter;
