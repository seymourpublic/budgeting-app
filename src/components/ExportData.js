import React from "react";
import { exportToCSV } from "../utils/exportToCSV";
import { exportToPDF } from "../utils/exportToPDF";

const ExportData = ({ data, type }) => {
  const columns = Object.keys(data[0] || {}); // Get keys from the first data object

  const handleExportCSV = () => {
    exportToCSV(data, `${type}-data`);
  };

  const handleExportPDF = () => {
    exportToPDF(data, columns, `${type}-data`);
  };

  return (
    <div className="my-4 flex space-x-4">
      <button
        onClick={handleExportCSV}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Export {type} as CSV
      </button>
      <button
        onClick={handleExportPDF}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Export {type} as PDF
      </button>
    </div>
  );
};

export default ExportData;