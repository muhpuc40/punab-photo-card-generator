import { toPng } from 'html-to-image';

export async function exportNodeAsPng(node, fileName) {
  const dataUrl = await toPng(node, { cacheBust: false, pixelRatio: 2, backgroundColor: '#ffffff' });
  const link = document.createElement('a');
  link.download = fileName;
  link.href = dataUrl;
  link.click();
}
