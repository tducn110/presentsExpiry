import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Maximize2, X } from 'lucide-react';
import { USE_CASE_DIAGRAMS } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

export const SlideUseCases: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = USE_CASE_DIAGRAMS[activeIdx] ?? USE_CASE_DIAGRAMS[0];

  useGSAP(
    () => {
      gsap.fromTo(
        '.uc-anim',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        '.uc-stage-img',
        { opacity: 0, scale: 0.985 },
        { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' }
      );
    },
    { scope: ref, dependencies: [activeIdx], revertOnUpdate: true }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-3">
      {/* Header */}
      <div className="uc-anim flex flex-wrap items-end justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
            MÔ HÌNH HÓA USE CASE (31 UC)
          </span>
          <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
            Sơ đồ Use Case từ FigJam theo Tài khoản &amp; 6 nhóm tính năng
          </h2>
        </div>
        <span className="rounded-xl border border-[#E7D8D4] bg-white px-3 py-1.5 text-xs font-bold text-[#625653]">
          1 tác nhân ngoài (Người dùng cá nhân) · 31 UC
        </span>
      </div>

      {/* Main Diagram Card */}
      <div className="uc-anim flex min-h-0 flex-1 flex-col rounded-2xl border border-[#E7D8D4] bg-white p-3.5">
        {/* Tabs + Zoom button */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#F1E8E5] pb-2.5">
          <div className="flex flex-wrap gap-1.5">
            {USE_CASE_DIAGRAMS.map((item, idx) => {
              const active = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                    active
                      ? 'bg-[#D43A52] text-white'
                      : 'bg-[#FFF3F0] text-[#625653] hover:bg-[#FFE6E2] hover:text-[#2D2524]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E7D8D4] bg-[#FFF8F7] px-2.5 py-1 text-xs font-bold text-[#625653] transition-colors hover:border-[#FFC4BC] hover:text-[#B72F45]"
            title="Phóng to sơ đồ"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span>Phóng to</span>
          </button>
        </div>

        {/* Diagram Image Stage */}
        <div
          onClick={() => setZoomed(true)}
          className="uc-stage-img flex min-h-0 flex-1 cursor-zoom-in items-center justify-center overflow-hidden rounded-xl border border-[#F1E8E5] bg-[#FFF8F7] p-2"
        >
          <img
            src={current.src}
            alt={current.title}
            className="max-h-full max-w-full rounded-lg bg-white object-contain"
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D2524]/75 p-4 backdrop-blur-xs"
          onClick={() => setZoomed(false)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#E7D8D4] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E7D8D4] bg-[#FFF8F7] px-4 py-2.5">
              <span className="text-sm font-bold text-[#2D2524]">{current.title}</span>
              <button
                type="button"
                onClick={() => setZoomed(false)}
                className="cursor-pointer rounded-lg p-1.5 text-[#625653] hover:bg-[#FFE6E2] hover:text-[#B72F45]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="scrollbar-thin overflow-auto bg-[#FFF8F7] p-4">
              <img
                src={current.src}
                alt={current.title}
                className="mx-auto max-h-[82vh] w-auto rounded-xl border border-[#E7D8D4] bg-white object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
