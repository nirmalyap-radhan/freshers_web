import { jsPDF } from 'jspdf';

interface PassData {
  name: string;
  rollNumber: string;
  program: string;
  batch: string;
  photoUrl?: string;
}

/**
 * Loads an image from URL/DataURL into an HTMLImageElement
 */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
}

/**
 * Generates a high-quality PDF by rendering directly onto a 2D HTML5 Canvas.
 * This guarantees 100% pixel-perfect text placement, crisp rendering, and ZERO DOM layout shifts!
 */
export async function generatePassPdfDirect(
  data: PassData,
  studentName: string
): Promise<void> {
  // 1. Native Template Dimensions
  const canvasWidth = 1024;
  const canvasHeight = 1536;

  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  // 2. Load background template image (public/image.png)
  const templateImg = await loadImage('/image.png');
  ctx.drawImage(templateImg, 0, 0, canvasWidth, canvasHeight);

  // 3. Draw User Profile Photo if uploaded inside circular avatar gold ring
  if (data.photoUrl) {
    try {
      const photoImg = await loadImage(data.photoUrl);
      ctx.save();

      // Circular avatar gold ring bounds: Center (512, 621), Radius 125
      const centerX = 512;
      const centerY = 621;
      const radius = 124;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

      // Draw uploaded photo scaled inside the clipped circle
      ctx.drawImage(photoImg, centerX - radius, centerY - radius, radius * 2, radius * 2);
      ctx.restore();
    } catch (err) {
      console.warn('Failed to draw photo on canvas PDF, continuing with text:', err);
    }
  }

  // 4. Draw Student Details Text at exact pixel coordinates
  ctx.fillStyle = '#3A1F45';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';

  const fontFamily = '"Cormorant Garamond", Georgia, "Times New Roman", serif';

  // NAME FIELD (Y = 790)
  ctx.font = `bold 28px ${fontFamily}`;
  ctx.fillText(data.name, 422, 791);

  // ROLL NO FIELD (Y = 862)
  ctx.font = `bold 28px ${fontFamily}`;
  ctx.fillText(data.rollNumber, 422, 863);

  // PROGRAM FIELD (Y = 932)
  ctx.font = `bold 26px ${fontFamily}`;
  ctx.fillText(data.program, 422, 933);

  // BATCH FIELD (Y = 1004)
  ctx.font = `bold 28px ${fontFamily}`;
  ctx.fillText(data.batch, 422, 1004);

  // 5. Convert canvas to high-quality PNG data URL
  const imgData = canvas.toDataURL('image/png', 1.0);

  // 6. Generate jsPDF document matching 1024x1536 aspect ratio (130mm x 195mm)
  const pdfWidth = 130; // mm
  const pdfHeight = (pdfWidth * canvasHeight) / canvasWidth; // 195 mm

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

// Fallback exported wrapper function for compatibility
export async function generatePassPdf(
  _elementId: string,
  studentName: string,
  passData?: PassData
): Promise<void> {
  if (passData) {
    return generatePassPdfDirect(passData, studentName);
  }
}
