import { useEffect, useRef, useState } from 'react';
import Poster from './components/Poster.jsx';
import ControlPanel from './components/ControlPanel.jsx';
import DownloadButton from './components/DownloadButton.jsx';

const POSTER_WIDTH = 1080;
const DEFAULT_VALUES = { guestImage: '', guestName: '', guestType: '', guestDesignation: '' };

export default function App() {
  const posterRef = useRef(null);
  const previewViewportRef = useRef(null);
  const [form, setForm] = useState(DEFAULT_VALUES);
  const [previewScale, setPreviewScale] = useState(1);

  const updateField = (field, value) => setForm((previous) => ({ ...previous, [field]: value }));

  useEffect(() => {
    if (!previewViewportRef.current) return;
    const updateScale = () => {
      const viewport = previewViewportRef.current;
      if (!viewport) return;
      const safeWidth = viewport.clientWidth - 32;
      const nextScale = Math.min(1, safeWidth / POSTER_WIDTH);
      setPreviewScale(nextScale > 0 ? nextScale : 0.1);
    };
    updateScale();
    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(previewViewportRef.current);
    window.addEventListener('resize', updateScale);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 p-3 sm:p-4 lg:flex-row lg:items-start lg:p-5">
        <aside className="w-full shrink-0 lg:w-[360px] xl:w-[390px]">
          <ControlPanel values={form} onChange={updateField} />
          <DownloadButton targetRef={posterRef} fileName="punab-july-uprising-award-card.png" />
        </aside>

        <section className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-sm sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h1 className="text-lg font-bold sm:text-xl">PUNAB Photo Card Preview</h1>
          </div>
          <div ref={previewViewportRef} className="flex w-full max-w-full min-h-[240px] items-start justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-200 p-2 sm:p-4">
            <div className="poster-preview-stage" style={{ '--preview-scale': previewScale }}>
              <div className="poster-preview-scale">
                <Poster ref={posterRef} {...form} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
