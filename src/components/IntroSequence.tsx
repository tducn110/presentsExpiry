import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { ExpiryLogo } from './ExpiryLogo';
import { HERO_META } from '../data/slidesData';

gsap.registerPlugin(useGSAP);

interface IntroSequenceProps {
  onComplete: () => void;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [secondsLeft, setSecondsLeft] = useState(10);

  const { contextSafe } = useGSAP(
    () => {
      const counter = { sec: 10 };
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      // Continuous 10s progress bar + countdown
      tl.to(
        '.intro-progress-fill',
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

      // Phase 1 (0s - 1.8s): Ambient circles + Logo + Tagline
      tl.fromTo(
        '.intro-orb',
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, stagger: 0.2, ease: 'power3.out' },
        0
      )
        .fromTo(
          '.intro-logo',
          { y: 28, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.4)' },
          0.2
        )
        .fromTo(
          '.intro-tagline',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          0.9
        );

      // Phase 2 (1.6s - 4.0s): Main title + team metadata
      tl.fromTo(
        '.intro-title',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
        1.7
      )
        .fromTo(
          '.intro-meta',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out' },
          2.5
        );

      // Phase 3 (3.8s - 8.2s): 5-step loop lights up sequentially
      tl.fromTo(
        '.intro-loop-wrap',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        3.6
      );

      HERO_META.loop.forEach((_, idx) => {
        const startAt = 4.2 + idx * 0.78;
        tl.to(
          `.intro-step-${idx}`,
          {
            backgroundColor: '#D43A52',
            color: '#FFFFFF',
            borderColor: '#D43A52',
            scale: 1.05,
            duration: 0.35,
            ease: 'back.out(1.6)',
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
            { opacity: 0.25, x: -4 },
            { opacity: 1, x: 0, color: '#D43A52', duration: 0.3, ease: 'power2.out' },
            startAt + 0.25
          );
        }
      });

      // Phase 4 (9.3s - 10.0s): Smooth exit into Slide 1
      tl.to(
        '.intro-stage',
        {
          y: -18,
          opacity: 0,
          duration: 0.65,
          ease: 'power2.in',
        },
        9.35
      );
    },
    { scope: containerRef }
  );

  const handleSkip = contextSafe(() => {
    gsap.to('.intro-stage', {
      y: -14,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete,
    });
  });

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 py-10"
      style={{ backgroundColor: '#FFF8F7' }}
    >
      {/* Subtle Coral Tea geometric atmosphere */}
      <div
        className="intro-orb pointer-events-none absolute -top-28 -right-24 h-[420px] w-[420px] rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(212,58,82,0.12) 0%, rgba(255,248,247,0) 70%)',
        }}
      />
      <div
        className="intro-orb pointer-events-none absolute -bottom-32 -left-24 h-[460px] w-[460px] rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,196,188,0.32) 0%, rgba(255,248,247,0) 70%)',
        }}
      />

      <div className="intro-stage relative z-10 flex w-full max-w-6xl flex-col items-center text-center">
        {/* Brand lockup */}
        <div className="intro-logo flex items-center justify-center rounded-2xl border border-[#E7D8D4] bg-white px-7 py-4 shadow-sm">
          <ExpiryLogo variant="primary" />
        </div>

        <div
          className="intro-tagline mt-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold"
          style={{ backgroundColor: '#FFE6E2', color: '#B72F45' }}
        >
          Biết hạn. Dùng kịp.
        </div>

        {/* Core title (2 lines on desktop) */}
        <h1 className="intro-title mt-7 max-w-6xl text-xl font-extrabold leading-snug tracking-tight text-[#2D2524] sm:text-2xl lg:text-[28px]">
          <span className="block lg:whitespace-nowrap">
            Xây dựng hệ thống quản lý và cảnh báo vòng đời thực phẩm cá nhân
          </span>
          <span className="mt-0.5 block text-[#D43A52] lg:whitespace-nowrap">
            dựa trên dữ liệu hạn sử dụng và phản hồi của người dùng
          </span>
        </h1>

        {/* Course & Team Metadata */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold text-[#625653] sm:text-sm">
          <span className="intro-meta rounded-full border border-[#E7D8D4] bg-white px-3.5 py-1.5 text-[#2D2524]">
            {HERO_META.course} · Báo cáo cuối kỳ
          </span>
          <span className="intro-meta rounded-full border border-[#E7D8D4] bg-white px-3.5 py-1.5 font-bold text-[#D43A52]">
            {HERO_META.team}
          </span>
        </div>

        {/* Animated 5-step loop */}
        <div className="intro-loop-wrap mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {HERO_META.loop.map((label, idx) => (
            <React.Fragment key={label}>
              <div
                className={`intro-step-${idx} rounded-xl border border-[#E7D8D4] bg-white px-4 py-2.5 text-sm font-bold text-[#2D2524] shadow-xs`}
              >
                {label}
              </div>
              {idx < HERO_META.loop.length - 1 && (
                <ArrowRight
                  className={`intro-arrow-${idx} h-4 w-4 text-[#BDAEAA]`}
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom 10s timeline bar + skip button */}
      <div className="absolute right-6 bottom-6 left-6 z-20 mx-auto flex max-w-4xl items-center gap-4">
        <div className="flex flex-1 items-center gap-3">
          <span className="w-12 text-xs font-bold tabular-nums text-[#625653]">
            {secondsLeft}s
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E7D8D4]">
            <div
              className="intro-progress-fill h-full w-full origin-left scale-x-0 rounded-full"
              style={{ backgroundColor: '#D43A52' }}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleSkip}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#D43A52] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#B72F45]"
        >
          Vào slide ngay
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
