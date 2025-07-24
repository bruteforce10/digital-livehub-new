import {
  EVOLUTION_CN,
  EVOLUTION_EN,
  EVOLUTION_ID,
  EVOLUTION_TITLE_CN,
  EVOLUTION_TITLE_EN,
  EVOLUTION_TITLE_ID,
} from "@/constant/evolutionData";
import EachUtils from "@/lib/EachUtils";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import React from "react";

const TimelineItem = ({
  year,
  title,
  description,
  gradient,
  isHighlighted,
}) => (
  <div className={`text-center ${isHighlighted ? "scale-110" : ""}`}>
    <div
      className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
    >
      <span className="text-white font-bold text-lg">{year}</span>
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const EvolutionSection = () => {
  const [language] = useAtom(languageAtom);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {language === "EN"
            ? EVOLUTION_TITLE_EN
            : language === "ID"
            ? EVOLUTION_TITLE_ID
            : EVOLUTION_TITLE_CN}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="w-[calc(100%-12rem)] max-md:hidden mx-auto inset-x-0 h-[1px] bg-gray-200 absolute -z-10 top-9"></div>
            <EachUtils
              of={
                language === "EN"
                  ? EVOLUTION_EN
                  : language === "ID"
                  ? EVOLUTION_ID
                  : EVOLUTION_CN
              }
              render={(item, index) => (
                <TimelineItem key={item.year} {...item} />
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;
