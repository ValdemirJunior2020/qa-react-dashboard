import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadPDF = () => {
  const handleDownload = async () => {
    const chartEl = document.getElementById("chart-section");

    if (!chartEl) return alert("Chart section not found!");

    const canvas = await html2canvas(chartEl, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "pt", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 20, 20, width - 40, height);
    pdf.save("qa-score-report.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mb-4 ml-2"
    >
      Download PDF
    </button>
  );
};

export default DownloadPDF;
