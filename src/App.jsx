import DownloadCSV from "./components/DownloadCSV";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCards from "./components/StatCards";
import ScoreChart from "./components/ScoreChart";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <main className="p-6">
          <StatCards />
          <ScoreChart />
        </main>
      </div>
    </div>
  );
}

export default App;
