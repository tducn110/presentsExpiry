import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { TRACEABILITY_DATA } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

export const SlideTraceability: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.tr-anim',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.48, stagger: 0.08, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-4">
      <div className="tr-anim">
        <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
          3 · TRUY VẾT &amp; RÀNG BUỘC PHẠM VI
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
          Truy vết từ mục tiêu đến thiết kế và cách kiểm chứng
        </h2>
      </div>

      {/* Demand quote */}
      <div className="tr-anim rounded-2xl border border-[#FFC4BC] bg-white px-5 py-3.5">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#D43A52]">
          Nhu cầu minh họa
        </span>
        <p className="mt-1 text-lg font-extrabold text-[#2D2524]">
          {TRACEABILITY_DATA.exampleNeed}
        </p>
      </div>

      {/* Traceability Chain */}
      <div className="tr-anim grid grid-cols-1 items-stretch gap-2.5 lg:grid-cols-5">
        {TRACEABILITY_DATA.chain.map((node, idx) => (
          <div key={node.code} className="flex items-stretch gap-2">
            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-[#E7D8D4] bg-white p-4">
              <div>
                <span className="inline-block rounded-lg bg-[#D43A52] px-2.5 py-1 text-xs font-extrabold text-white">
                  {node.code}
                </span>
                <p className="mt-2.5 text-sm font-bold leading-snug text-[#2D2524]">
                  {node.label}
                </p>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-[#625653]">{node.role}</span>
            </div>
            {idx < TRACEABILITY_DATA.chain.length - 1 && (
              <div className="hidden items-center lg:flex">
                <ArrowRight className="h-4 w-4 text-[#D43A52]" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* G6 Scope Constraint + Footer Note */}
      <div className="tr-anim grid grid-cols-1 gap-3 md:grid-cols-12">
        <div className="flex items-start gap-3 rounded-2xl border border-[#E7D8D4] bg-white p-4 md:col-span-8">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#853426]" />
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wide text-[#853426]">
              {TRACEABILITY_DATA.g6Title}
            </div>
            <p className="mt-1 text-sm font-semibold text-[#2D2524]">
              {TRACEABILITY_DATA.g6Text}
            </p>
          </div>
        </div>
        <div className="flex items-center rounded-2xl border border-[#E7D8D4] bg-[#FFF3F0] px-4 py-3 text-sm font-bold text-[#2D2524] md:col-span-4">
          {TRACEABILITY_DATA.summaryNote}
        </div>
      </div>
    </div>
  );
};
