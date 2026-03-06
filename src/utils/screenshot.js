/**
 * Takes one or multiple screenshots and exports them as a multi-page PDF.
 * Libraries are loaded on demand to keep the initial bundle smaller.
 */
export const takeScreenshotAsPDF = async (ids, fileName = "screenshot.pdf") => {
  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import("html2canvas-pro"),
    import("jspdf"),
  ]);

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 10;

  for (let i = 0; i < ids.length; i += 1) {
    const element = document.getElementById(ids[i]);

    if (!element) {
      console.warn(`Element with ID "${ids[i]}" not found.`);
      continue;
    }

    try {
      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: false,
        scale: 2,
      });

      const imgData = canvas.toDataURL("image/png");
      const imgWidth = pageWidth - margin * 2;
      const ratio = canvas.height / canvas.width;
      const imgHeight = imgWidth * ratio;

      if (i > 0) {
        pdf.addPage();
      }

      pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);
    } catch (error) {
      console.error(`Error rendering element "${ids[i]}":`, error);
    }
  }

  pdf.save(fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`);
};
