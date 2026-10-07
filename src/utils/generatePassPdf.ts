import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function generatePassPdf(elementId: string, studentName: string): Promise<void> {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) {
    throw new Error(`Element with id ${elementId} not found`);
  }

  // Render high-resolution canvas using html2canvas with onclone optimization
  const canvas = await html2canvas(targetElement, {
    scale: 2, // 2x high resolution
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#FAF8F4',
    logging: false,
    windowWidth: 1024,
    windowHeight: 1536,
    onclone: (clonedDoc) => {
      const clonedElement = clonedDoc.getElementById(elementId);
      if (clonedElement) {
        // Force the cloned element to render at native template dimensions (1024px x 1536px)
        clonedElement.style.width = '1024px';
        clonedElement.style.height = '1536px';
        clonedElement.style.maxWidth = 'none';
        clonedElement.style.transform = 'none';

        // Fix font sizes and line heights in cloned element for pixel-perfect canvas text rendering
        const fields = clonedElement.querySelectorAll('.absolute');
        fields.forEach((field) => {
          const el = field as HTMLElement;
          // Apply explicit px font size & line height on cloned elements to prevent canvas baseline shifts
          if (!el.querySelector('img')) {
            el.style.fontSize = '24px';
            el.style.lineHeight = '1';
            el.style.display = 'flex';
            el.style.alignItems = 'center';
          }
        });
      }
    },
  });

  const imgData = canvas.toDataURL('image/png', 1.0);

  // PDF Page Dimensions matching original pass ratio (1024 x 1536 -> 130mm x 195mm)
  const pdfWidth = 130; // mm
  const pdfHeight = (pdfWidth * 1536) / 1024; // 195 mm

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: [pdfWidth, pdfHeight],
  });

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

  // Sanitize student name for safe filename
  const sanitizedName = studentName
    .trim()
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, '-');

  const filename = `Integral-Festa-Fresher-Pass-${sanitizedName || 'Fresher'}.pdf`;

  // Download PDF
  pdf.save(filename);
}
