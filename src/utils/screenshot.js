import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

/**
 * Takes one or multiple screenshots and exports them as a multi-page PDF
 * @param ids - Array of element IDs to capture
 * @param fileName - Desired filename for the exported PDF
 */
export const takeScreenshotAsPDF = async (
  ids,
  fileName = "screenshot.pdf"
) => {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  // Removed unused pageHeight variable

  const margin = 10; // 10mm margin

  for (let i = 0; i < ids.length; i++) {
    const element = document.getElementById(ids[i]);

    if (!element) {
      console.warn(`Element with ID "${ids[i]}" not found.`);
      continue;
    }

    try {
      const canvas = await html2canvas(element, {
        useCORS: true, // Important for external images
        allowTaint: false,
        scale: 2, // Higher resolution
      });

      const imgData = canvas.toDataURL("image/png");

      const imgWidth = pageWidth - margin * 2;
      const ratio = canvas.height / canvas.width;
      const imgHeight = imgWidth * ratio;

      if (i > 0) pdf.addPage();

      pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);
    } catch (error) {
      console.error(`Error rendering element "${ids[i]}":`, error);
    }
  }

  pdf.save(fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`);
};
