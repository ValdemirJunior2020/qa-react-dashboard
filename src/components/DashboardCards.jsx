const stats = [
    { label: "Best Score", value: "70.25" },
    { label: "Lowest Score", value: "49" },
    { label: "Average Score", value: "65.08" },
  ];
  
  const callCenters = [
    { name: "Buwelo", type: "Customer Service", score: 92 },
    { name: "WNS", type: "Customer Service", score: 88 },
    { name: "Concentrix", type: "Groups", score: 86 },
    { name: "Tep", type: "Groups", score: 81 },
  ];
  
  const getTarget = (type) => (type === "Customer Service" ? 90 : 85);
  
  const DashboardCards = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-4 text-center border">
            <h3 className="text-sm text-gray-500">{stat.label}</h3>
            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
          </div>
        ))}
  
        {callCenters.map((center, i) => {
          const passed = center.score >= getTarget(center.type);
          return (
            <div
              key={i}
              className={`rounded-lg p-4 shadow-md text-white ${
                passed ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <h3 className="text-xl font-bold">{center.name}</h3>
              <p className="text-sm">{center.type}</p>
              <p className="text-3xl font-semibold">{center.score}%</p>
              <p className="text-sm">
                {passed ? "✅ Passed" : "❌ Did not meet target"}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default DashboardCards;
  