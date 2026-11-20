import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Eye, Gauge, Lock, ShieldCheck } from 'lucide-react';
import { NFR_DATA } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

const GROUP_ICONS = [Lock, ShieldCheck, Eye, Gauge] as const;

export const SlideNfr: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.nfr-anim',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-3.5">
      <div className="nfr-anim">
        <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
          {NFR_DATA.badge}
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
          {NFR_DATA.title}
        </h2>
      </div>

      {/* 4 NFR Groups (2x2 Grid) */}
      <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-2">
        {NFR_DATA.groups.map((group, idx) => {
          const Icon = GROUP_ICONS[idx] ?? ShieldCheck;
          const isDesignTarget = group.isTarget;
          return (
            <div
              key={group.title}
              className={`nfr-anim slide-surface flex flex-col justify-between p-4 ${
                isDesignTarget ? 'border-[#FFC4BC]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#2D2524]">
                    <Icon className="h-4 w-4 shrink-0 text-[#D43A52]" />
                    <span>{group.title}</span>
                  </div>
                  <span
                    className={`rounded-md px-2 py-0.5 text-[11px] font-extrabold ${
                      isDesignTarget
                        ? 'bg-[#FFF1D6] text-[#80500B]'
                        : 'bg-[#FFF3F0] text-[#B72F45]'
                    }`}
                  >
                    {group.range}
                  </span>
                </div>

                <ul className="mt-2.5 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item.code}
                      className="rounded-xl bg-[#FFF8F7] px-3 py-2 text-xs leading-snug text-[#2D2524] sm:text-[13px]"
                    >
                      <span className="mr-1.5 font-extrabold text-[#D43A52]">{item.code}:</span>
                      <span className="font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Honest Verification Footer */}
      <div className="nfr-anim rounded-xl border border-[#E7D8D4] bg-[#FFF3F0] px-4 py-2.5 text-xs font-semibold text-[#625653]">
        {NFR_DATA.footerNote}
      </div>
    </div>
  );
};
