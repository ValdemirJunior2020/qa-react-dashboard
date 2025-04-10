const Sidebar = () => {
  return (
    <div className=\"bg-blue-900 text-white w-64 min-h-screen p-6\">
      <h2 className=\"text-2xl font-bold mb-8\">QA Dashboard</h2>
      <ul className=\"space-y-4\">
        <li className=\"hover:text-blue-300 cursor-pointer\">Overview</li>
        <li className=\"hover:text-blue-300 cursor-pointer\">Scores</li>
        <li className=\"hover:text-blue-300 cursor-pointer\">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
