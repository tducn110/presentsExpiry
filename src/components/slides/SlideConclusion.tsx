import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONCLUSION_DATA } from '../../data/slidesData';

gsap.registerPlugin(useGSAP);

export const SlideConclusion: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.conc-anim',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out' }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-full flex-col justify-between gap-3.5">
      <div className="conc-anim">
        <span className="inline-block rounded-full bg-[#FFE6E2] px-3 py-1 text-xs font-bold text-[#B72F45]">
          PHẦN IV · KẾT LUẬN &amp; KẾ HOẠCH TIẾP THEO
        </span>
        <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-[#2D2524] sm:text-3xl">
          {CONCLUSION_DATA.title}
        </h2>
      </div>

      {/* 6 Features -> Outcomes for Users */}
      <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {CONCLUSION_DATA.featureOutcomes.map((item) => (
          <div
            key={item.code}
            className="conc-anim slide-surface flex flex-col justify-between p-3.5"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-lg bg-[#D43A52] px-2.5 py-0.5 text-xs font-extrabold text-white">
                  {item.code}
                </span>
                <span className="text-xs font-bold text-[#625653]">{item.name}</span>
              </div>
              <p className="mt-2 text-xs font-semibold leading-snug text-[#2D2524] sm:text-[13px]">
                {item.outcome}
              </p>
            </div>
            <div className="mt-2.5 flex items-center gap-2 rounded-xl border border-[#236B45]/20 bg-[#E7F5EC] px-3 py-1.5 text-xs font-extrabold text-[#236B45] sm:text-sm">
              <CheckCircle2 className="h-4 w-4 shrink-0 stroke-[2.5]" />
              <span>{item.valueTag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 2 Blocks: Kết quả đạt được & Kế hoạch tiếp theo */}
      <div className="conc-anim grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-[#E7D8D4] bg-white p-3.5">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#236B45]">
            <CheckCircle2 className="h-4 w-4" />
            Kết quả đạt được (Figma &amp; SE)
          </div>
          <p className="mt-1 text-xs font-medium leading-relaxed text-[#2D2524]">
            Đặc tả hoàn chỉnh 31 Use Cases, thiết kế 53 màn hình Figma (Low-fi thô $\rightarrow$ Mid-fi chuẩn màu), và kiểm chứng chạy thử trọn vẹn 1 vòng nghiệp vụ không bị đứt đoạn.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="rounded-md bg-[#E7F5EC] px-2 py-0.5 text-[10px] font-bold text-[#236B45]">
              31 Use Cases
            </span>
            <span className="rounded-md bg-[#E7F5EC] px-2 py-0.5 text-[10px] font-bold text-[#236B45]">
              53 Wireframes Figma
            </span>
            <span className="rounded-md bg-[#E7F5EC] px-2 py-0.5 text-[10px] font-bold text-[#236B45]">
              Vòng đời khép kín
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-[#FFC4BC] bg-[#FFF8F7] p-3.5">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#D43A52]">
            <ArrowRight className="h-4 w-4" />
            Kế hoạch tiếp theo
          </div>
          <p className="mt-1 text-xs font-medium leading-relaxed text-[#2D2524]">
            Hiện thực hóa toàn bộ giao diện Figma thành phiên bản web hoàn chỉnh và tiến hành thử nghiệm với người dùng cá nhân để đo lường mức độ giảm quên món &amp; mua trùng.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="rounded-md bg-[#FFE6E2] px-2 py-0.5 text-[10px] font-bold text-[#B72F45]">
              Hiện thực hóa Web App
            </span>
            <span className="rounded-md bg-[#FFE6E2] px-2 py-0.5 text-[10px] font-bold text-[#B72F45]">
              Thử nghiệm người dùng thực tế
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
