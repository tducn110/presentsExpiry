import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { WireframeCompare } from '../WireframeCompare';
import type { WireframePair } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

interface FeaturePoint {
  label: string;
  text: string;
}

interface StatusPill {
  label: string;
  meaning: string;
  fg: string;
  bg: string;
}

interface SlideFeatureGroupProps {
  badge: string;
  title: string;
  points: FeaturePoint[];
  statuses?: StatusPill[];
  wireframes: WireframePair[];
}

export const SlideFeatureGroup: React.FC<SlideFeatureGroupProps> = ({
  badge,
  title,
  points,
  statuses,
  wireframes,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.fg-anim',
        { x: -14, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col gap-4">
      {/* Header */}
      <div className="fg-anim">
        <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
          {badge}
        </span>
        <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
          {title}
        </h2>
      </div>

      {/* Main 2-column split: Core Rules Left + Figma Low-fi/Mid-fi Right */}
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Left: Core logic */}
        <div className="flex flex-col justify-center gap-2.5 lg:col-span-5">
          {points.map((pt) => (
            <div
              key={pt.label}
              className="fg-anim rounded-2xl border border-[#E7D8D4] bg-white px-4 py-3"
            >
              <div className="text-xs font-extrabold uppercase tracking-wide text-[#D43A52]">
                {pt.label}
              </div>
              <div className="mt-1 text-sm font-medium leading-snug text-[#2D2524]">
                {pt.text}
              </div>
            </div>
          ))}

          {statuses && (
            <div className="fg-anim rounded-2xl border border-[#E7D8D4] bg-white p-3.5">
              <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-[#625653]">
                4 trạng thái đối chiếu kho (UC-31)
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {statuses.map((st) => (
                  <div
                    key={st.label}
                    className="rounded-xl border border-[#E7D8D4] bg-[#FFF8F7] p-2.5"
                  >
                    <span
                      className="inline-block rounded-md px-2 py-0.5 text-[11px] font-extrabold"
                      style={{ color: st.fg, backgroundColor: st.bg }}
                    >
                      {st.label}
                    </span>
                    <div className="mt-1.5 text-xs font-medium leading-snug text-[#625653]">
                      {st.meaning}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Direct Figma Low-fi & Mid-fi Wireframes */}
        <div className="min-h-0 lg:col-span-7">
          <WireframeCompare items={wireframes} />
        </div>
      </div>
    </div>
  );
};
