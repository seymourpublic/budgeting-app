import jsPDF from "jspdf";
import "jspdf-autotable";

export const exportToPDF = (data, columns, filename) => {
  const doc = new jsPDF();

  // Add a title
  doc.text("Budget Data", 20, 10);

  // Add the table
  doc.autoTable({
    head: [columns],
    body: data.map((item) => columns.map((col) => item[col])),
  });

  // Save the PDF
  doc.save(`${filename}.pdf`);
};