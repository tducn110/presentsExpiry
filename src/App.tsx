import React, { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { ExpiryLogo } from './components/ExpiryLogo';
import { SlideIntro } from './components/slides/SlideIntro';
import { SlideToc } from './components/slides/SlideToc';
import { SlideSystemDef } from './components/slides/SlideSystemDef';
import { SlideNeeds } from './components/slides/SlideNeeds';
import { SlideBusinessGoals } from './components/slides/SlideBusinessGoals';
import { SlideTraceability } from './components/slides/SlideTraceability';
import { SlideFeaturesOverview } from './components/slides/SlideFeaturesOverview';
import { SlideUseCases } from './components/slides/SlideUseCases';
import { SlideFeatureGroup } from './components/slides/SlideFeatureGroup';
import { SlideNfr } from './components/slides/SlideNfr';
import { SlideWorkflow } from './components/slides/SlideWorkflow';
import { SlideConclusion } from './components/slides/SlideConclusion';
import {
  F01_F03_DATA,
  F04_F05_DATA,
  F06_DATA,
  SLIDE_TITLES,
} from './data/slidesData';

gsap.registerPlugin(useGSAP);

export default function App() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const deckRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      if (stageRef.current) {
        gsap.fromTo(
          stageRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, duration: 0.35, ease: 'power2.out' }
        );
      }
    },
    { scope: deckRef, dependencies: [slideIdx], revertOnUpdate: true }
  );

  const goToSlide = useCallback(
    contextSafe((nextIdx: number) => {
      const clamped = Math.max(0, Math.min(SLIDE_TITLES.length - 1, nextIdx));
      if (clamped === slideIdx) return;
      if (!stageRef.current) {
        setSlideIdx(clamped);
        return;
      }
      gsap.to(stageRef.current, {
        opacity: 0,
        y: -8,
        duration: 0.16,
        ease: 'power2.in',
        onComplete: () => setSlideIdx(clamped),
      });
    }),
    [slideIdx]
  );

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToSlide(slideIdx + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(slideIdx - 1);
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slideIdx, goToSlide, toggleFullscreen]);

  const renderSlide = () => {
    switch (slideIdx) {
      case 0:
        return <SlideIntro onStart={() => goToSlide(1)} />;
      case 1:
        return <SlideToc onSelectSlide={goToSlide} />;
      case 2:
        return <SlideSystemDef />;
      case 3:
        return <SlideNeeds />;
      case 4:
        return <SlideBusinessGoals />;
      case 5:
        return <SlideTraceability />;
      case 6:
        return <SlideFeaturesOverview />;
      case 7:
        return <SlideUseCases />;
      case 8:
        return (
          <SlideFeatureGroup
            badge={F01_F03_DATA.badge}
            title={F01_F03_DATA.title}
            points={F01_F03_DATA.points}
            wireframes={F01_F03_DATA.wireframes}
          />
        );
      case 9:
        return (
          <SlideFeatureGroup
            badge={F04_F05_DATA.badge}
            title={F04_F05_DATA.title}
            points={F04_F05_DATA.points}
            wireframes={F04_F05_DATA.wireframes}
          />
        );
      case 10:
        return (
          <SlideFeatureGroup
            badge={F06_DATA.badge}
            title={F06_DATA.title}
            points={F06_DATA.points}
            statuses={F06_DATA.statuses}
            wireframes={F06_DATA.wireframes}
          />
        );
      case 11:
        return <SlideNfr />;
      case 12:
        return <SlideWorkflow />;
      case 13:
        return <SlideConclusion />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={deckRef}
      className="flex h-screen w-screen flex-col overflow-hidden bg-[#FFF8F7] text-[#2D2524]"
    >
      {/* Top Bar — Standardized Figma Brand Lockup + Compact Controls */}
      <header className="flex shrink-0 items-center justify-between border-b border-[#E7D8D4] bg-white px-5 py-2.5">
        <div className="flex items-center gap-4">
          <ExpiryLogo variant="compact" />
          <span className="hidden h-4 w-px bg-[#E7D8D4] xl:block" />
          <span className="hidden text-xs font-bold text-[#625653] xl:block">
            Nhóm 2 · Systems Engineering
          </span>
        </div>

        {/* Slide pills */}
        <nav className="scrollbar-thin hidden items-center gap-1 overflow-x-auto lg:flex">
          {SLIDE_TITLES.map((s, idx) => {
            const active = idx === slideIdx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`cursor-pointer rounded-lg px-2 py-1 text-[11px] font-bold whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-[#D43A52] text-white'
                    : 'text-[#625653] hover:bg-[#FFF3F0] hover:text-[#2D2524]'
                }`}
              >
                {s.short}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="cursor-pointer rounded-lg border border-[#E7D8D4] bg-[#FFF8F7] p-1.5 text-[#625653] transition-colors hover:border-[#FFC4BC] hover:text-[#B72F45]"
            title={isFullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình (F)'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Main Slide Canvas */}
      <main className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-8 sm:py-5">
        <div ref={stageRef} className="mx-auto h-full max-w-6xl">
          {renderSlide()}
        </div>
      </main>

      {/* Compact Bottom Navigation */}
      <footer className="flex shrink-0 items-center justify-between border-t border-[#E7D8D4] bg-white px-5 py-2">
        <div className="flex items-center gap-2 text-xs font-bold text-[#625653]">
          <span className="text-[#D43A52]">
            {slideIdx === 0
              ? 'Mở đầu'
              : slideIdx === 1
              ? 'Mục lục'
              : `${slideIdx - 1} / ${SLIDE_TITLES.length - 2}`}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {SLIDE_TITLES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Chuyển đến ${s.short}`}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                idx === slideIdx ? 'w-6 bg-[#D43A52]' : 'w-2 bg-[#E7D8D4] hover:bg-[#FFC4BC]'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={slideIdx === 0}
            onClick={() => goToSlide(slideIdx - 1)}
            className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-[#E7D8D4] bg-white px-3 py-1 text-xs font-bold text-[#2D2524] transition-colors hover:bg-[#FFF3F0] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Trước
          </button>
          <button
            type="button"
            disabled={slideIdx === SLIDE_TITLES.length - 1}
            onClick={() => goToSlide(slideIdx + 1)}
            className="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-[#D43A52] px-3 py-1 text-xs font-bold text-white transition-colors hover:bg-[#B72F45] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Sau
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
