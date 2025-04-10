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
  
  const best = Math.max(...data.map((d) => d.score));
  const worst = Math.min(...data.map((d) => d.score));
  const average = (data.reduce((sum, d) => sum + d.score, 0) / data.length).toFixed(2);
  
  const StatCards = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded-lg text-center">
          <h3 className="text-lg font-medium text-gray-500">Best Score</h3>
          <p className="text-3xl font-bold text-green-600">{best}</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg text-center">
          <h3 className="text-lg font-medium text-gray-500">Lowest Score</h3>
          <p className="text-3xl font-bold text-red-600">{worst}</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg text-center">
          <h3 className="text-lg font-medium text-gray-500">Average Score</h3>
          <p className="text-3xl font-bold text-blue-600">{average}</p>
        </div>
      </div>
    );
  };
  
  export default StatCards;
  