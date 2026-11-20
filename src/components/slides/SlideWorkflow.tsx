import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Database, Play } from 'lucide-react';
import { WORKFLOW_STEPS } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

export const SlideWorkflow: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const { contextSafe } = useGSAP(
    () => {
      gsap.fromTo(
        '.wf-step-card',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  const runWalkthrough = contextSafe(() => {
    const tl = gsap.timeline();
    WORKFLOW_STEPS.forEach((_, idx) => {
      tl.call(() => setActiveStep(idx), undefined, idx * 0.75);
    });
  });

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
            4 · LUỒNG NGHIỆP VỤ TỔNG THỂ
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
            Ghi nhận → Sử dụng → Đối chiếu → Mua tiếp
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-xl border border-[#E7D8D4] bg-white px-3 py-1.5 text-xs font-bold text-[#2D2524]">
            Ví dụ: Gói thịt bò 500 g
          </span>
          <button
            type="button"
            onClick={runWalkthrough}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#D43A52] px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#B72F45]"
          >
            <Play className="h-3.5 w-3.5" />
            Chạy luồng
          </button>
        </div>
      </div>

      {/* 6 Step Grid */}
      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {WORKFLOW_STEPS.map((s, idx) => {
          const active = idx === activeStep;
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`wf-step-card flex cursor-pointer flex-col justify-between rounded-2xl border p-4 text-left transition-all ${
                active
                  ? 'border-[#D43A52] bg-white shadow-md ring-2 ring-[#FFE6E2]'
                  : 'border-[#E7D8D4] bg-white hover:border-[#FFC4BC]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`rounded-lg px-2.5 py-1 text-xs font-extrabold ${
                      active
                        ? 'bg-[#D43A52] text-white'
                        : 'bg-[#FFF3F0] text-[#B72F45]'
                    }`}
                  >
                    Bước {s.step} · {s.phase}
                  </span>
                  <span className="text-[11px] font-bold text-[#756966]">{s.feature}</span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-[#2D2524]">
                  {s.action}
                </p>
              </div>
              <div className="mt-3 rounded-xl bg-[#FFF8F7] px-3 py-2 text-xs font-bold text-[#B72F45]">
                {s.data}
              </div>
            </button>
          );
        })}
      </div>

      {/* 3 Connected Data Types */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#E7D8D4] bg-white px-4 py-2.5 text-xs font-semibold text-[#625653]">
        <div className="flex items-center gap-2 font-bold text-[#2D2524]">
          <Database className="h-4 w-4 text-[#D43A52]" />
          3 loại dữ liệu kết nối:
          <span className="rounded-md bg-[#FFF3F0] px-2 py-0.5 text-[#B72F45]">
            Bản ghi thực phẩm
          </span>
          <span className="rounded-md bg-[#FFF3F0] px-2 py-0.5 text-[#B72F45]">
            Sự kiện số lượng
          </span>
          <span className="rounded-md bg-[#FFF3F0] px-2 py-0.5 text-[#B72F45]">
            Mục mua &amp; liên kết kho
          </span>
        </div>
        <span>Số liệu chỉ dùng để minh họa nghiệp vụ.</span>
      </div>
    </div>
  );
};
