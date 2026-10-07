import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function generatePassPdf(elementId: string, studentName: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id ${elementId} not found`);
  }

  // 1. Render high-resolution canvas from the pass element
  const canvas = await html2canvas(element, {
    scale: 3, // High DPI resolution (3x)
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#FAF8F4',
    logging: false,
  });

  const imgData = canvas.toDataURL('image/png', 1.0);

  // 2. Determine original aspect ratio dimensions
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const aspectRatio = imgHeight / imgWidth;

  // Set PDF page dimensions matching original pass ratio (e.g. 120mm x 169mm)
  const pdfWidth = 130; // mm
  const pdfHeight = pdfWidth * aspectRatio;

  const pdf = new jsPDF({
    orientation: pdfHeight > pdfWidth ? 'portrait' : 'landscape',
    unit: 'mm',
    format: [pdfWidth, pdfHeight],
  });

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

  // 3. Sanitize student name for safe filename
  const sanitizedName = studentName
    .trim()
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, '-');

  const filename = `Integral-Festa-Fresher-Pass-${sanitizedName || 'Fresher'}.pdf`;

  // 4. Save/Download PDF
  pdf.save(filename);
}
