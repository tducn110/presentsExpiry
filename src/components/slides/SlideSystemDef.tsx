import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Box, CheckCircle2, Globe, ShieldOff } from 'lucide-react';
import { HERO_META, SYSTEM_SLIDE } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

export const SlideSystemDef: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.anim-up',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.48, stagger: 0.07, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-4">
      {/* Header */}
      <div className="anim-up">
        <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
          1 · ĐỊNH NGHĨA HỆ THỐNG
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
          {SYSTEM_SLIDE.title}
        </h2>
        <p className="mt-1.5 max-w-4xl text-sm font-medium text-[#625653] sm:text-base">
          {SYSTEM_SLIDE.lead}
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid flex-1 grid-cols-1 gap-3.5 md:grid-cols-2">
        {/* 4 thành phần */}
        <div className="anim-up slide-surface flex flex-col justify-between p-4">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#2D2524]">
            <Box className="h-4 w-4 text-[#D43A52]" />
            4 thành phần hệ thống
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SYSTEM_SLIDE.components.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-[#E7D8D4] bg-[#FFF8F7] px-3 py-2"
              >
                <div className="text-xs font-bold text-[#2D2524]">{c.name}</div>
                <div className="mt-0.5 text-[11px] font-medium text-[#625653]">{c.tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ngoài ranh giới */}
        <div className="anim-up slide-surface flex flex-col justify-between p-4">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#2D2524]">
            <Globe className="h-4 w-4 text-[#D43A52]" />
            Bên ngoài ranh giới
          </div>
          <ul className="mt-3 space-y-2">
            {SYSTEM_SLIDE.outsideBoundary.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-xl bg-[#FFF3F0] px-3 py-2 text-xs font-semibold text-[#2D2524] sm:text-sm"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#D43A52]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Trong phạm vi */}
        <div className="anim-up slide-surface flex flex-col justify-between border-[#FFC4BC] p-4">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#236B45]">
            <CheckCircle2 className="h-4 w-4" />
            Trong phạm vi
          </div>
          <ul className="mt-2.5 space-y-2">
            {SYSTEM_SLIDE.inScope.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl bg-[#E7F5EC]/60 px-3 py-2 text-xs font-semibold text-[#2D2524] sm:text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#236B45]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Ngoài phạm vi */}
        <div className="anim-up slide-surface flex flex-col justify-between p-4">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#853426]">
            <ShieldOff className="h-4 w-4" />
            Ngoài phạm vi
          </div>
          <ul className="mt-2.5 space-y-2">
            {SYSTEM_SLIDE.outScope.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl bg-[#F2D4CB]/45 px-3 py-2 text-xs font-semibold text-[#625653] sm:text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#853426]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom flow strip */}
      <div className="anim-up flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-[#E7D8D4] bg-white px-4 py-2.5">
        {HERO_META.loop.map((step, i) => (
          <React.Fragment key={step}>
            <span className="rounded-lg bg-[#FFF3F0] px-3 py-1 text-xs font-bold text-[#B72F45] sm:text-sm">
              {step}
            </span>
            {i < HERO_META.loop.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 text-[#D43A52]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
