export const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      alert("No data to export");
      return;
    }
  
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((row) =>
      Object.values(row)
        .map((value) => `"${value}"`) // Handle commas in values
        .join(",")
    );
  
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}.csv`);
    link.style.visibility = "hidden";
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };