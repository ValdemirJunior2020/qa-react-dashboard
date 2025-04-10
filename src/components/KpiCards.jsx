const callCenters = [
    { name: "Buwelo", type: "Customer Service", score: 92 },
    { name: "WNS", type: "Customer Service", score: 88 },
    { name: "Concentrix", type: "Groups", score: 86 },
    { name: "Tep", type: "Groups", score: 81 },
  ];
  
  const KpiCards = () => {
    const getTarget = (type) => (type === "Customer Service" ? 90 : 85);
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
  
  export default KpiCards;
  