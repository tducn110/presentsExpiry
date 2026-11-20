import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Maximize2, X } from 'lucide-react';
import type { WireframePair } from '../data/slidesData';

gsap.registerPlugin(useGSAP);

interface WireframeCompareProps {
  items: WireframePair[];
}

export const WireframeCompare: React.FC<WireframeCompareProps> = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [zoomed, setZoomed] = useState<{ src: string; title: string } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const current = items[activeIdx] ?? items[0];

  useGSAP(
    () => {
      gsap.fromTo(
        '.wf-card',
        { y: 12, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
    },
    { scope: panelRef, dependencies: [activeIdx], revertOnUpdate: true }
  );

  return (
    <div ref={panelRef} className="flex h-full flex-col rounded-2xl border border-[#E7D8D4] bg-white p-3.5">
      {/* Screen selector tabs */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#F1E8E5] pb-2.5">
        <div className="flex flex-wrap gap-1.5">
          {items.map((item, idx) => {
            const active = idx === activeIdx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                  active
                    ? 'bg-[#D43A52] text-white'
                    : 'bg-[#FFF3F0] text-[#625653] hover:bg-[#FFE6E2] hover:text-[#2D2524]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <span className="rounded-md bg-[#FFF3F0] px-2 py-0.5 text-[11px] font-semibold text-[#625653]">
          Figma · {current.device}
        </span>
      </div>

      {/* Low-fi vs Mid-fi side-by-side */}
      <div
        className={`grid flex-1 gap-3 ${
          current.device === 'Web' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2'
        }`}
      >
        {/* Low-fi */}
        <div className="wf-card flex flex-col overflow-hidden rounded-xl border border-[#E7D8D4] bg-[#FFF8F7]">
          <div className="flex items-center justify-between border-b border-[#E7D8D4] bg-white px-3 py-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#625653]">
              Low-fi
            </span>
            <button
              type="button"
              onClick={() => setZoomed({ src: current.lowfiSrc, title: `${current.label} · Low-fi` })}
              className="cursor-pointer rounded p-1 text-[#756966] hover:bg-[#FFF3F0] hover:text-[#D43A52]"
              title="Phóng to Low-fi"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
          <div
            onClick={() => setZoomed({ src: current.lowfiSrc, title: `${current.label} · Low-fi` })}
            className="flex flex-1 cursor-zoom-in items-center justify-center overflow-hidden p-2"
          >
            <img
              src={current.lowfiSrc}
              alt={`${current.label} Low-fi`}
              className="max-h-[340px] w-auto rounded-lg border border-[#E7D8D4] bg-white object-contain"
            />
          </div>
        </div>

        {/* Mid-fi */}
        <div className="wf-card flex flex-col overflow-hidden rounded-xl border border-[#FFC4BC] bg-[#FFF8F7]">
          <div className="flex items-center justify-between border-b border-[#FFE0DC] bg-[#FFE6E2] px-3 py-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B72F45]">
              Mid-fi
            </span>
            <button
              type="button"
              onClick={() => setZoomed({ src: current.midfiSrc, title: `${current.label} · Mid-fi` })}
              className="cursor-pointer rounded p-1 text-[#B72F45] hover:bg-white/70"
              title="Phóng to Mid-fi"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
          <div
            onClick={() => setZoomed({ src: current.midfiSrc, title: `${current.label} · Mid-fi` })}
            className="flex flex-1 cursor-zoom-in items-center justify-center overflow-hidden p-2"
          >
            <img
              src={current.midfiSrc}
              alt={`${current.label} Mid-fi`}
              className="max-h-[340px] w-auto rounded-lg border border-[#E7D8D4] bg-white object-contain shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D2524]/75 p-4 backdrop-blur-xs"
          onClick={() => setZoomed(null)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#E7D8D4] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E7D8D4] bg-[#FFF8F7] px-4 py-2.5">
              <span className="text-sm font-bold text-[#2D2524]">{zoomed.title}</span>
              <button
                type="button"
                onClick={() => setZoomed(null)}
                className="cursor-pointer rounded-lg p-1.5 text-[#625653] hover:bg-[#FFE6E2] hover:text-[#B72F45]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="scrollbar-thin overflow-auto bg-[#FFF8F7] p-4">
              <img
                src={zoomed.src}
                alt={zoomed.title}
                className="mx-auto max-h-[80vh] w-auto rounded-xl border border-[#E7D8D4] bg-white object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
