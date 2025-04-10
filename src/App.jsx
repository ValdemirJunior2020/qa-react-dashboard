import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DownloadCSV from "./components/DownloadCSV";
import DownloadPDF from "./components/DownloadPDF";
import ScoreChart from "./components/ScoreChart";
import DashboardCards from "./components/DashboardCards";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <main className="p-6 space-y-6">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <DownloadCSV />
            <DownloadPDF />
          </div>

          {/* Chart Section */}
          <ScoreChart />

          {/* Centered Stat + KPI Cards */}
          <DashboardCards />
        </main>
      </div>
    </div>
  );
}

export default App;
