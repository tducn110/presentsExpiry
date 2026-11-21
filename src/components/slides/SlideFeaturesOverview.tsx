import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FEATURE_CARDS } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

export const SlideFeaturesOverview: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.feat-card',
        { y: 20, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
            PHẦN II · BỨC TRANH 6 NHÓM TÍNH NĂNG (31 USE CASES)
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
            6 nhóm tính năng giải quyết nhu cầu (F01–F06)
          </h2>
        </div>
        <span className="rounded-xl border border-[#E7D8D4] bg-white px-3.5 py-1.5 text-xs font-bold text-[#2D2524]">
          31 Use Cases = 2 UC tài khoản + 29 UC thuộc F01–F06
        </span>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURE_CARDS.map((f) => (
          <div
            key={f.code}
            className="feat-card slide-surface flex flex-col justify-between p-5 transition-colors hover:border-[#FFC4BC]"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-lg bg-[#D43A52] px-2.5 py-1 text-xs font-extrabold text-white">
                  {f.code}
                </span>
                <span className="rounded-md bg-[#FFF3F0] px-2 py-0.5 text-[11px] font-bold text-[#625653]">
                  {f.ucs}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-extrabold text-[#2D2524]">{f.name}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#625653]">{f.goal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
