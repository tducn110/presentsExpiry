import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_GOALS_ROWS } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

export const SlideBusinessGoals: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.bg-anim',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-3.5">
      <div className="bg-anim">
        <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
          PHẦN II · MỤC TIÊU &amp; YÊU CẦU KINH DOANH (G1–G5)
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
          Từ nhu cầu đến G1–G5 và BREQ-01–05
        </h2>
      </div>

      {/* Column headers */}
      <div className="bg-anim hidden grid-cols-12 gap-3 px-3 text-xs font-extrabold uppercase tracking-wider text-[#625653] md:grid">
        <div className="col-span-3">Nhu cầu người dùng</div>
        <div className="col-span-4">Mục tiêu kinh doanh</div>
        <div className="col-span-5">Yêu cầu kinh doanh</div>
      </div>

      {/* 5 Rows */}
      <div className="flex flex-1 flex-col justify-center gap-2.5">
        {BUSINESS_GOALS_ROWS.map((row) => (
          <div
            key={row.goalCode}
            className="bg-anim grid grid-cols-1 items-center gap-2.5 rounded-2xl border border-[#E7D8D4] bg-white px-4 py-3 md:grid-cols-12"
          >
            <div className="text-sm font-bold text-[#2D2524] md:col-span-3">{row.need}</div>

            <div className="flex items-center gap-2 rounded-xl bg-[#FFE6E2]/70 px-3 py-2 md:col-span-4">
              <ArrowRight className="hidden h-3.5 w-3.5 shrink-0 text-[#B72F45] md:block" />
              <span className="rounded-md bg-[#D43A52] px-2 py-0.5 text-[11px] font-extrabold text-white">
                {row.goalCode}
              </span>
              <span className="text-sm font-bold text-[#2D2524]">{row.goalText}</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-[#FFF8F7] px-3 py-2 md:col-span-5">
              <span className="shrink-0 rounded-md border border-[#E7D8D4] bg-white px-2 py-0.5 text-[11px] font-extrabold text-[#B72F45]">
                {row.breqCode}
              </span>
              <span className="text-sm font-medium text-[#2D2524]">{row.breqText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
