import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import type { WireframePair } from '../data/slidesData';

gsap.registerPlugin(useGSAP);

interface WireframeCompareProps {
  items: WireframePair[];
}

interface FrameCardProps {
  type: 'Low-fi' | 'Mid-fi';
  src: string;
  alt: string;
}

const ZOOM_LEVELS = [1.5, 1.75, 2.0] as const;
type ZoomLevel = typeof ZOOM_LEVELS[number];
const DEFAULT_SCALE: ZoomLevel = 1.75;

const FrameCard: React.FC<FrameCardProps> = ({ type, src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentScale, setCurrentScale] = useState<ZoomLevel>(DEFAULT_SCALE);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const panRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{
    startX: number;
    startY: number;
    startPanX: number;
    startPanY: number;
    hasMoved: boolean;
  }>({
    startX: 0,
    startY: 0,
    startPanX: 0,
    startPanY: 0,
    hasMoved: false,
  });

  const isLowfi = type === 'Low-fi';
  const borderClass = isLowfi ? 'border-[#E7D8D4]' : 'border-[#FFC4BC]';
  const headerBg = isLowfi ? 'bg-white' : 'bg-[#FFE6E2]';
  const headerBorder = isLowfi ? 'border-[#E7D8D4]' : 'border-[#FFE0DC]';
  const titleColor = isLowfi ? 'text-[#625653]' : 'text-[#B72F45]';

  const toggleZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed((prev) => {
      panRef.current = { x: 0, y: 0 };
      setPan({ x: 0, y: 0 });
      if (!prev) setCurrentScale(DEFAULT_SCALE);
      return !prev;
    });
  };

  const resetCenter = (e: React.MouseEvent) => {
    e.stopPropagation();
    panRef.current = { x: 0, y: 0 };
    setPan({ x: 0, y: 0 });
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPanX: panRef.current.x,
      startPanY: panRef.current.y,
      hasMoved: false,
    };

    if (isZoomed) {
      isDraggingRef.current = true;
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      setIsDragging(true);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isZoomed || !isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;

    if (Math.hypot(dx, dy) > 3) {
      dragStartRef.current.hasMoved = true;
    }

    let newX = dragStartRef.current.startPanX + dx;
    let newY = dragStartRef.current.startPanY + dy;

    if (containerRef.current && imgRef.current) {
      const cW = containerRef.current.clientWidth;
      const cH = containerRef.current.clientHeight;
      const scaledW = imgRef.current.offsetWidth * currentScale;
      const scaledH = imgRef.current.offsetHeight * currentScale;
      const maxPanX = Math.max(60, (scaledW - cW) / 2 + 50);
      const maxPanY = Math.max(60, (scaledH - cH) / 2 + 50);
      newX = Math.max(-maxPanX, Math.min(maxPanX, newX));
      newY = Math.max(-maxPanY, Math.min(maxPanY, newY));
    }

    panRef.current = { x: newX, y: newY };
    setPan({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isZoomed) {
      const dx = e.clientX - dragStartRef.current.startX;
      const dy = e.clientY - dragStartRef.current.startY;
      if (Math.hypot(dx, dy) < 6) {
        setIsZoomed(true);
        setCurrentScale(DEFAULT_SCALE);
        panRef.current = { x: 0, y: 0 };
        setPan({ x: 0, y: 0 });
      }
      return;
    }

    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      setIsDragging(false);

      if (!dragStartRef.current.hasMoved) {
        setIsZoomed(false);
        panRef.current = { x: 0, y: 0 };
        setPan({ x: 0, y: 0 });
      }
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      setIsDragging(false);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    if (e.deltaY < 0) {
      setCurrentScale((prev) => (prev === 1.5 ? 1.75 : 2.0));
    } else if (e.deltaY > 0) {
      setCurrentScale((prev) => (prev === 2.0 ? 1.75 : 1.5));
    }
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsZoomed((prev) => {
      panRef.current = { x: 0, y: 0 };
      setPan({ x: 0, y: 0 });
      return !prev;
    });
  };

  const isMoved = pan.x !== 0 || pan.y !== 0;

  return (
    <div
      className={`group/card wf-card flex flex-col overflow-hidden rounded-xl border ${borderClass} bg-[#FFF8F7]`}
    >
      {/* Frame Header */}
      <div className={`flex items-center justify-between border-b ${headerBorder} ${headerBg} px-3 py-1.5`}>
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-bold uppercase tracking-wider ${titleColor}`}>
            {type}
          </span>
          {isZoomed && (
            <div className="flex items-center gap-1.5">
              {/* Stepper buttons 150%, 175%, 200% */}
              <div className="flex items-center rounded-md border border-[#E7D8D4] bg-white p-0.5 shadow-2xs">
                {ZOOM_LEVELS.map((lvl) => {
                  const isCurrent = currentScale === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentScale(lvl);
                      }}
                      className={`cursor-pointer rounded px-1.5 py-0.5 text-[10px] font-bold transition-all ${
                        isCurrent
                          ? 'bg-[#D43A52] text-white shadow-2xs'
                          : 'text-[#625653] hover:bg-[#FFF3F0] hover:text-[#D43A52]'
                      }`}
                    >
                      {Math.round(lvl * 100)}%
                    </button>
                  );
                })}
              </div>

              {isMoved && (
                <button
                  type="button"
                  onClick={resetCenter}
                  className="flex cursor-pointer items-center gap-0.5 rounded bg-white px-1.5 py-0.5 text-[10px] font-bold text-[#625653] shadow-2xs hover:bg-[#FFF3F0] hover:text-[#D43A52]"
                  title="Đặt lại vị trí về giữa"
                >
                  <RotateCcw className="h-2.5 w-2.5" />
                  Về giữa
                </button>
              )}
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={toggleZoom}
          className={`cursor-pointer rounded p-1 transition-colors ${
            isLowfi
              ? 'text-[#756966] hover:bg-[#FFF3F0] hover:text-[#D43A52]'
              : 'text-[#B72F45] hover:bg-white/70'
          }`}
          title={isZoomed ? 'Thu nhỏ về vừa khung' : 'Phóng to (kéo chuột để lia)'}
        >
          {isZoomed ? <ZoomOut className="h-3.5 w-3.5" /> : <ZoomIn className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* In-frame Zoomable & Draggable Canvas */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onWheel={handleWheel}
        onDoubleClick={handleDoubleClick}
        style={{
          touchAction: 'none',
          cursor: isZoomed ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
        }}
        className="relative flex flex-1 select-none items-center justify-center overflow-hidden p-2"
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          draggable={false}
          style={{
            transform: isZoomed
              ? `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${currentScale})`
              : 'translate3d(0, 0, 0) scale(1)',
            transformOrigin: 'center center',
            transition: isDragging
              ? 'none'
              : 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="pointer-events-none max-h-[340px] w-auto select-none rounded-lg border border-[#E7D8D4] bg-white object-contain shadow-xs will-change-transform"
        />

        {/* Floating guidance hints */}
        {isZoomed ? (
          <div className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1.5 rounded-md bg-[#2D2524]/85 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs">
            <span>Kéo chuột để lia</span>
            <span className="text-white/40">·</span>
            <span>Cuộn chuột đổi mức zoom</span>
          </div>
        ) : (
          <div className="pointer-events-none absolute bottom-2 left-2 rounded-md bg-[#2D2524]/75 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover/card:opacity-100">
            Click để phóng to 175%
          </div>
        )}
      </div>
    </div>
  );
};

export const WireframeCompare: React.FC<WireframeCompareProps> = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(0);
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

      {/* Low-fi vs Mid-fi side-by-side with In-Frame Drag-to-Pan */}
      <div
        className={`grid flex-1 gap-3 ${
          current.device === 'Web' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2'
        }`}
      >
        <FrameCard
          key={`${current.id}-lowfi`}
          type="Low-fi"
          src={current.lowfiSrc}
          alt={`${current.label} Low-fi`}
        />
        <FrameCard
          key={`${current.id}-midfi`}
          type="Mid-fi"
          src={current.midfiSrc}
          alt={`${current.label} Mid-fi`}
        />
      </div>
    </div>
  );
};
