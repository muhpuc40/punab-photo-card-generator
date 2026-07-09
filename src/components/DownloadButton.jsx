import { useState } from 'react';
import { exportNodeAsPng } from '../utils/exportNodeAsPng.js';

export default function DownloadButton({ targetRef, fileName }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = async () => {
    if (!targetRef.current || isDownloading) return;
    try { setIsDownloading(true); await exportNodeAsPng(targetRef.current, fileName); }
    catch (error) { console.error(error); alert('Download failed. Please try again.'); }
    finally { setIsDownloading(false); }
  };
  return <button type="button" onClick={handleDownload} disabled={isDownloading} className="mt-4 w-full rounded-2xl bg-[#b51f18] px-5 py-4 text-base font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-[#9d1914] disabled:cursor-not-allowed disabled:opacity-60">{isDownloading ? 'Preparing PNG...' : 'Download High-Quality PNG'}</button>;
}
