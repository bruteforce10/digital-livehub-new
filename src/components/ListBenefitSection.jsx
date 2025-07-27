"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import EachUtils from "@/lib/EachUtils";
import {
  STRATEGY_CN,
  STRATEGY_EN,
  STRATEGY_ID,
  STRATEGY_KR,
} from "@/constant/strategyData";

export default function ListBenefitSection() {
  const [language] = useAtom(languageAtom);

  return (
    <section id="digital-strategy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {language === "EN"
            ? "Digital Strategy & Execution"
            : language === "ID"
            ? "Strategi Digital & Eksekusi"
            : language === "KR"
            ? "디지털 전략 및 실행"
            : "数字战略与执行"}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <EachUtils
            of={
              language === "EN"
                ? STRATEGY_EN
                : language === "ID"
                ? STRATEGY_ID
                : language === "KR"
                ? STRATEGY_KR
                : STRATEGY_CN
            }
            render={(benefit) => (
              <Card className="overflow-hidden pt-0" key={benefit.title}>
                <div className="relative h-[600px]">
                  <Image
                    src={benefit.image}
                    alt={benefit.alt}
                    fill
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <CardContent className="p-6 pt-0">
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {benefit.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          />
        </div>
      </div>
    </section>
  );
}
