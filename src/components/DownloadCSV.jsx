const data = [
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

const DownloadCSV = () => {
  const handleDownload = () => {
    const header = "Month,Score\n";
    const rows = data.map(row => `${row.month},${row.score}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "qa-scores.csv";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4"
    >
      Download CSV
    </button>
  );
};

export default DownloadCSV;
