import { useState } from "react";

const YearFilter = ({ onChange }) => {
  const [selected, setSelected] = useState("All");

  const handleChange = (e) => {
    const year = e.target.value;
    setSelected(year);
    onChange(year);
  };

  return (
    <div className="mb-4">
      <label className="mr-2 font-medium">Filter by year:</label>
      <select
        value={selected}
        onChange={handleChange}
        className="border px-3 py-1 rounded"
      >
        <option value="All">All</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
};

export default YearFilter;
