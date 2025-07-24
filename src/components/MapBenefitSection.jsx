import {
  BENEFIT_CN,
  BENEFIT_EN,
  BENEFIT_ID,
  BENEFIT_TITLE_CN,
  BENEFIT_TITLE_EN,
  BENEFIT_TITLE_ID,
} from "@/constant/benefitData";
import EachUtils from "@/lib/EachUtils";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import Image from "next/image";

export default function MapBenefitSection() {
  const [language] = useAtom(languageAtom);

  return (
    <section
      className="py-20 text-white"
      style={{ background: "var(--gradient-custom)" }}
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <h2 className="text-4xl font-semibold text-center md:mb-16">
          {language === "EN"
            ? BENEFIT_TITLE_EN
            : language === "ID"
            ? BENEFIT_TITLE_ID
            : BENEFIT_TITLE_CN}
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative w-full h-[400px]">
            <Image src="/map.png" alt="Map" fill className="object-contain" />
            <EachUtils
              of={
                language === "EN"
                  ? BENEFIT_EN
                  : language === "ID"
                  ? BENEFIT_ID
                  : BENEFIT_CN
              }
              render={(b, i) => (
                <div
                  key={i}
                  className={`max-md:hidden ${b.desktop.className}`}
                  style={b.desktop.style}
                >
                  <div className="text-2xl font-bold text-shadow-sm">
                    {b.value}
                  </div>
                  <div className="text-sm text-gray-50">{b.label}</div>
                </div>
              )}
            />
          </div>
          {/* Mobile benefit boxes */}
          <div className="grid md:hidden grid-cols-2 md:grid-cols-4 gap-4 -mt-8 text-center">
            <EachUtils
              of={
                language === "EN"
                  ? BENEFIT_EN
                  : language === "ID"
                  ? BENEFIT_ID
                  : BENEFIT_CN
              }
              render={(b, i) => (
                <div className="bg-white/20 rounded-lg p-4" key={i}>
                  <div className="text-2xl font-bold">{b.value}</div>
                  <div className="text-sm text-shadow-sm">{b.label}</div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
