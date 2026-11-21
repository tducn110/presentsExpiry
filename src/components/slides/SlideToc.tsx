import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Clock } from 'lucide-react';
import { TOC_SECTIONS } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

interface SlideTocProps {
  onSelectSlide: (idx: number) => void;
}

export const SlideToc: React.FC<SlideTocProps> = ({ onSelectSlide }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.toc-anim',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-4">
      {/* Header */}
      <div className="toc-anim">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
            MỤC LỤC BÁO CÁO CUỐI KỲ
          </span>
          <span className="text-xs font-semibold text-[#625653]">
            Thời lượng: ~10 phút · 4 phần trình bày · 11 nội dung trọng tâm
          </span>
        </div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
          Lộ trình báo cáo Systems Engineering — Đề tài Expiry
        </h2>
      </div>

      {/* 4 Agenda Columns */}
      <div className="grid flex-1 grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-4">
        {TOC_SECTIONS.map((sec) => (
          <div
            key={sec.part}
            className="toc-anim flex flex-col justify-between rounded-2xl border border-[#E7D8D4] bg-white p-4 shadow-xs"
          >
            <div>
              {/* Part Header */}
              <div className="flex items-center justify-between border-b border-[#F1E8E5] pb-2.5">
                <span className="rounded-md bg-[#FFF3F0] px-2.5 py-0.5 text-xs font-extrabold text-[#D43A52]">
                  {sec.part}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#625653]">
                  <Clock className="h-3 w-3 text-[#B72F45]" />
                  {sec.duration}
                </span>
              </div>

              {/* Part Title */}
              <div className="mt-3">
                <h3 className="text-base font-extrabold leading-snug text-[#2D2524]">
                  {sec.title}
                </h3>
              </div>

              {/* Slide List */}
              <div className="mt-4 space-y-2">
                {sec.slides.map((s) => (
                  <button
                    key={s.code}
                    type="button"
                    onClick={() => onSelectSlide(s.idx)}
                    className="group flex w-full cursor-pointer items-center gap-2.5 rounded-xl border border-[#F1E8E5] bg-[#FFF8F7] px-3 py-2.5 text-left transition-all hover:border-[#FFC4BC] hover:bg-[#FFE6E2]"
                  >
                    <span className="inline-block shrink-0 rounded bg-[#D43A52] px-1.5 py-0.5 text-[11px] font-black text-white group-hover:bg-[#B72F45]">
                      {s.code}
                    </span>
                    <span className="min-w-0 flex-1 text-xs font-bold leading-tight text-[#2D2524] group-hover:text-[#B72F45]">
                      {s.title}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#625653] opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
