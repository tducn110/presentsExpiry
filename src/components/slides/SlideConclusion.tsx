import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CheckCircle2 } from 'lucide-react';
import { CONCLUSION_DATA } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

export const SlideConclusion: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.conc-anim',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-4">
      <div className="conc-anim">
        <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
          KẾT LUẬN
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
          {CONCLUSION_DATA.title}
        </h2>
      </div>

      {/* 6 Features -> Outcomes for Users */}
      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CONCLUSION_DATA.featureOutcomes.map((item) => (
          <div
            key={item.code}
            className="conc-anim slide-surface flex flex-col justify-between p-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-lg bg-[#D43A52] px-2.5 py-0.5 text-xs font-extrabold text-white">
                  {item.code}
                </span>
                <span className="text-xs font-bold text-[#625653]">{item.name}</span>
              </div>
              <p className="mt-2.5 text-sm font-semibold leading-snug text-[#2D2524]">
                {item.outcome}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-[#236B45]/20 bg-[#E7F5EC] px-3.5 py-2.5 text-sm font-extrabold text-[#236B45] sm:text-[15px]">
              <CheckCircle2 className="h-4 w-4 shrink-0 stroke-[2.5]" />
              <span>{item.valueTag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Overall Conclusion Banner */}
      <div
        className="conc-anim flex flex-col justify-between gap-2 rounded-2xl px-5 py-3.5 text-white sm:flex-row sm:items-center"
        style={{ backgroundColor: '#B72F45' }}
      >
        <p className="text-sm font-bold leading-snug sm:text-base">{CONCLUSION_DATA.closing}</p>
        <span className="shrink-0 rounded-xl bg-white/15 px-3 py-1.5 text-xs font-extrabold whitespace-nowrap">
          {CONCLUSION_DATA.statusNote}
        </span>
      </div>
    </div>
  );
};
