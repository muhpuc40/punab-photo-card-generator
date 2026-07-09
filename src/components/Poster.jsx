import { forwardRef } from 'react';

const POSTER_WIDTH = 1080;
const POSTER_HEIGHT = 1230;

const Poster = forwardRef(function Poster(
  { guestImage, guestName, guestType, guestDesignation },
  ref,
) {
  return (
    <article
      ref={ref}
      className="poster-canvas relative overflow-hidden bg-white text-black"
      style={{ width: POSTER_WIDTH, height: POSTER_HEIGHT }}
    >
      <img
        src="/assets/background-paper.png"
        alt="Poster background"
        draggable="false"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover"
      />

      <img
        src="/assets/bottom-red-scene.png"
        alt="July uprising scene"
        draggable="false"
        className="pointer-events-none absolute inset-x-0 z-[1] w-full select-none object-cover object-bottom"
        style={{ bottom: -65, height: 465 }}
      />

      <img
        src="/assets/logo.png"
        alt="PUNAB logo"
        draggable="false"
        className="pointer-events-none absolute z-10 select-none"
        style={{ left: 88, top: 25, width: 168, height: 'auto' }}
      />

      <img
        src="/assets/program-name.png"
        alt="July Uprising Memorial Award 2026"
        draggable="false"
        className="pointer-events-none absolute z-10 select-none"
        style={{ left: 340, top: 52, width: 560, height: 'auto' }}
      />

      <img
        src="/assets/date-time.png"
        alt="Date time and venue"
        draggable="false"
        className="pointer-events-none absolute z-10 select-none"
        style={{ left: 645, top: 415, width: 385, height: 'auto' }}
      />

      <section
        className="absolute z-10"
        style={{ left: 165, top: 500, width: 292, height: 338 }}
      >
        <div className="guest-frame relative h-full w-full border-[2.5px] border-[#b5231d] bg-transparent">
          <div
            className="absolute overflow-hidden bg-white"
            style={{ left: 12, top: 13, width: 260, height: 302, borderTopLeftRadius: 73 }}
          >
            {guestImage ? (
              <img
                src={guestImage}
                alt="Guest"
                className="h-full w-full object-cover"
                draggable="false"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-200 px-3 text-center text-[22px] font-bold text-slate-500">
                Upload Guest Photo
              </div>
            )}
          </div>
          <div className="absolute bottom-0 right-[68px] h-0 w-0 border-b-[28px] border-r-[28px] border-b-[#c7251d] border-r-transparent" />
        </div>
      </section>

      <section
        className="absolute z-10 font-bangla"
        style={{ left: 480, top: 584, width: 430 }}
      >
        {/* <div className="mb-5 flex items-center gap-2 text-[23px] leading-none text-[#161616]">
          <span className="guest-type">{guestType || 'সম্মানিত অতিথি'}:</span>
          <span className="h-px flex-1 bg-[#777]" />
        </div> */}
        <div className="mb-5 flex w-full items-center gap-2 text-[23px] leading-none text-[#161616]">
          <span className="guest-type flex-shrink-0 whitespace-nowrap">
            {guestType || 'সম্মানিত অতিথি'}:
          </span>

          <span className="h-px min-w-[15px] flex-1 bg-[#777]" />
        </div>
        <h1 className="guest-name m-0 overflow-visible break-words pb-2 text-[41px] font-black leading-[1.22] text-[#b32420]">
          {guestName || 'অতিথির নাম'}
        </h1>

        <p className="guest-designation m-0 mt-3 whitespace-pre-wrap break-words text-[24px] font-semibold leading-[1.26] text-[#111]">
          {guestDesignation || 'অতিথির পদবি / পরিচয়'}
        </p>
      </section>

      <footer className="absolute inset-x-0 bottom-0 z-20 h-[118px] isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(125,0,0,0.58)_0%,rgba(150,0,0,0.52)_38%,rgba(115,0,0,0.55)_65%,rgba(86,0,0,0.62)_100%)]"
          aria-hidden="true"
        />

        <div className="absolute z-10 flex items-center" style={{ left: 292, top: 18 }}>
          <div className="flex h-[72px] w-[94px] items-center justify-center rounded-[18px] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
            <img
              src="/assets/logo.png"
              alt="PUNAB logo"
              className="block h-auto w-[83px] select-none"
              draggable="false"
              style={{ mixBlendMode: 'normal', filter: 'none' }}
            />
          </div>

          <div className="h-[62px] w-[2px] bg-white/90" style={{ marginLeft: 18 }} />

          <p
            className="footer-title ml-[18px] text-[27px] font-black leading-[1.03] tracking-[0.9px] text-white"
            style={{ textShadow: 'none', mixBlendMode: 'normal' }}
          >
            Private University National<br />
            Association of Bangladesh-PUNAB
          </p>
        </div>
      </footer>
    </article >
  );
});

export default Poster;
