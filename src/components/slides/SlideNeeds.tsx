import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { NEEDS_ROWS } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

export const SlideNeeds: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.need-anim',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.09, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-4">
      <div className="need-anim">
        <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
          2 · VÌ SAO CẦN EXPIRY?
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
          Từ giả định hiện trạng đến nhu cầu người dùng
        </h2>
      </div>

      {/* 3-Column Header + Rows */}
      <div className="flex flex-1 flex-col justify-center gap-3">
        <div className="need-anim hidden grid-cols-12 gap-3 px-3 text-xs font-extrabold uppercase tracking-wider text-[#625653] md:grid">
          <div className="col-span-4">Giả định hiện trạng</div>
          <div className="col-span-4">Vấn đề phát sinh</div>
          <div className="col-span-4">Nhu cầu người dùng</div>
        </div>

        {NEEDS_ROWS.map((row, idx) => (
          <div
            key={idx}
            className="need-anim grid grid-cols-1 items-center gap-3 rounded-2xl border border-[#E7D8D4] bg-white p-4 shadow-2xs md:grid-cols-12"
          >
            {/* Assumption */}
            <div className="flex items-center gap-3 md:col-span-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FFF3F0] text-xs font-extrabold text-[#B72F45]">
                {idx + 1}
              </span>
              <span className="text-sm font-semibold text-[#2D2524]">{row.assumption}</span>
            </div>

            {/* Problem */}
            <div className="flex items-center gap-2 rounded-xl bg-[#FFF1D6]/75 px-3.5 py-2.5 md:col-span-4">
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#80500B] md:block" />
              <span className="text-sm font-semibold text-[#80500B]">{row.problem}</span>
            </div>

            {/* Need + Feature link */}
            <div className="flex items-center justify-between gap-2 rounded-xl bg-[#FFE6E2]/70 px-3.5 py-2.5 md:col-span-4">
              <div className="flex items-center gap-2">
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#B72F45] md:block" />
                <span className="text-sm font-bold text-[#2D2524]">{row.need}</span>
              </div>
              <span className="shrink-0 rounded-md bg-white px-2 py-0.5 text-[11px] font-extrabold text-[#D43A52]">
                {row.feature}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Factual boundary note */}
      <div className="need-anim rounded-xl border border-[#E7D8D4] bg-[#FFF3F0] px-4 py-2.5 text-xs font-semibold text-[#625653]">
        Lưu ý: Các giả định trên là giả thuyết thiết kế của nhóm theo 3 persona định hướng, chưa phải kết quả khảo sát thực tế.
      </div>
    </div>
  );
};
