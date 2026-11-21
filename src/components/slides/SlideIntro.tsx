import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { ExpiryLogo } from '../ExpiryLogo';
import { HERO_META } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

interface SlideIntroProps {
  onStart: () => void;
}

export const SlideIntro: React.FC<SlideIntroProps> = ({ onStart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [playCount, setPlayCount] = useState(0);

  const { contextSafe } = useGSAP(
    () => {
      const counter = { sec: 10 };
      setSecondsLeft(10);

      const tl = gsap.timeline({
        onComplete: () => {
          // Keep completed state
        },
      });

      // 10s progress bar + countdown
      tl.fromTo(
        '.intro-progress-fill',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 10,
          ease: 'none',
        },
        0
      );

      tl.to(
        counter,
        {
          sec: 0,
          duration: 10,
          ease: 'none',
          onUpdate: () => {
            setSecondsLeft(Math.max(0, Math.ceil(counter.sec)));
          },
        },
        0
      );

      // Phase 1 (0s - 1.2s): Ambient circles + Logo + Tagline
      tl.fromTo(
        '.intro-orb',
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' },
        0
      )
        .fromTo(
          '.intro-logo',
          { y: 22, opacity: 0, scale: 0.94 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.4)' },
          0.15
        )
        .fromTo(
          '.intro-tagline',
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          0.6
        );

      // Phase 2 (1.0s - 2.8s): Main title + team metadata
      tl.fromTo(
        '.intro-title',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        1.0
      ).fromTo(
        '.intro-meta',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: 'power2.out' },
        1.6
      );

      // Phase 3 (2.5s - 7.5s): 5-step loop lights up sequentially
      tl.fromTo(
        '.intro-loop-wrap',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        2.5
      );

      HERO_META.loop.forEach((_, idx) => {
        const startAt = 3.0 + idx * 0.85;
        tl.to(
          `.intro-step-${idx}`,
          {
            backgroundColor: '#D43A52',
            color: '#FFFFFF',
            borderColor: '#D43A52',
            scale: 1.05,
            duration: 0.35,
            ease: 'back.out(1.5)',
          },
          startAt
        ).to(
          `.intro-step-${idx}`,
          {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          },
          startAt + 0.38
        );

        if (idx < HERO_META.loop.length - 1) {
          tl.fromTo(
            `.intro-arrow-${idx}`,
            { opacity: 0.25, x: -3 },
            { opacity: 1, x: 0, color: '#D43A52', duration: 0.3, ease: 'power2.out' },
            startAt + 0.25
          );
        }
      });
    },
    { scope: containerRef, dependencies: [playCount] }
  );

  const handleReplay = contextSafe(() => {
    setPlayCount((prev) => prev + 1);
  });

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-[#E7D8D4] bg-[#FFF8F7] px-6 py-6 sm:px-10 sm:py-8"
    >
      {/* Ambient background glow */}
      <div
        className="intro-orb pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(212,58,82,0.12) 0%, rgba(255,248,247,0) 70%)',
        }}
      />
      <div
        className="intro-orb pointer-events-none absolute -bottom-28 -left-20 h-96 w-96 rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,196,188,0.3) 0%, rgba(255,248,247,0) 70%)',
        }}
      />

      {/* Top spacer */}
      <div className="shrink-0" />

      {/* Main Center Content */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* Brand Lockup */}
        <div className="intro-logo flex items-center justify-center rounded-2xl border border-[#E7D8D4] bg-white px-6 py-3 shadow-2xs">
          <ExpiryLogo variant="primary" />
        </div>

        <div className="intro-tagline mt-3 inline-flex items-center gap-2 rounded-full bg-[#FFE6E2] px-3.5 py-1 text-xs font-bold text-[#B72F45]">
          Biết hạn. Dùng kịp.
        </div>

        {/* Project Title */}
        <h1 className="intro-title mt-5 max-w-4xl text-xl font-extrabold leading-snug tracking-tight text-[#2D2524] sm:text-2xl lg:text-3xl">
          <span className="block">
            Xây dựng hệ thống quản lý và cảnh báo vòng đời thực phẩm cá nhân
          </span>
          <span className="mt-1 block text-[#D43A52]">
            dựa trên dữ liệu hạn sử dụng và phản hồi của người dùng
          </span>
        </h1>

        {/* Course & Team Metadata */}
        <div className="intro-meta mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-[#625653]">
          <span className="rounded-full border border-[#E7D8D4] bg-white px-3.5 py-1 text-[#2D2524]">
            {HERO_META.course} · Báo cáo cuối kỳ
          </span>
          <span className="rounded-full border border-[#E7D8D4] bg-white px-3.5 py-1 font-bold text-[#D43A52]">
            {HERO_META.team}
          </span>
        </div>

        {/* 5-step loop */}
        <div className="intro-loop-wrap mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {HERO_META.loop.map((label, idx) => (
            <React.Fragment key={label}>
              <div
                className={`intro-step-${idx} rounded-xl border border-[#E7D8D4] bg-white px-3.5 py-2 text-xs font-bold text-[#2D2524] shadow-2xs sm:text-sm`}
              >
                {label}
              </div>
              {idx < HERO_META.loop.length - 1 && (
                <ArrowRight
                  className={`intro-arrow-${idx} h-3.5 w-3.5 text-[#BDAEAA]`}
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Timeline Controls */}
      <div className="relative z-10 flex w-full max-w-xl items-center justify-between gap-3 rounded-xl border border-[#E7D8D4] bg-white/80 px-4 py-2 backdrop-blur-xs">
        <div className="flex flex-1 items-center gap-2.5">
          <span className="w-8 text-xs font-bold tabular-nums text-[#625653]">
            {secondsLeft}s
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E7D8D4]">
            <div
              className="intro-progress-fill h-full w-full origin-left scale-x-0 rounded-full"
              style={{ backgroundColor: '#D43A52' }}
            />
          </div>
          <button
            type="button"
            onClick={handleReplay}
            className="cursor-pointer rounded p-1 text-[#625653] transition-colors hover:bg-[#FFF3F0] hover:text-[#D43A52]"
            title="Phát lại animation 10 giây"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={onStart}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#D43A52] px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#B72F45]"
        >
          Vào mục lục
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
