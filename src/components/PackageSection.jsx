"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import EachUtils from "@/lib/EachUtils";
import {
  PACKAGES_CN,
  PACKAGES_EN,
  PACKAGES_ID,
  PACKAGES_KR,
} from "@/constant/packagesData";

const PackageSection = () => {
  const [language] = useAtom(languageAtom);

  return (
    <section
      id="packages"
      className="bg-gradient-to-r from-pink-800 to-purple-800 py-20 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {language === "EN"
            ? "Choose Your Growth Path"
            : language === "ID"
            ? "Pilihan Paket Pertumbuhan"
            : language === "KR"
            ? "성장 경로 선택"
            : "选择成长路径"}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <EachUtils
            of={
              language === "EN"
                ? PACKAGES_EN
                : language === "ID"
                ? PACKAGES_ID
                : language === "KR"
                ? PACKAGES_KR
                : PACKAGES_CN
            }
            render={(pkg, index) => (
              <Card
                key={pkg.name}
                className={
                  pkg.popular
                    ? "bg-white/20 backdrop-blur border-white/30 text-white ring-2 ring-white/50"
                    : "bg-white/10 backdrop-blur border-white/20 text-white"
                }
              >
                <CardContent className="p-8">
                  {pkg.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-white text-pink-600 px-3 py-1 rounded-full uppercase text-sm font-bold">
                        {language === "EN"
                          ? "Popular"
                          : language === "ID"
                          ? "Populer"
                          : language === "KR"
                          ? "인기"
                          : "热门"}
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-6">{pkg.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li className="flex items-center space-x-2" key={i}>
                        <CheckCircle className="w-5 h-5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-pink-600 hover:bg-gray-100">
                    {language === "EN"
                      ? "GET STARTED"
                      : language === "ID"
                      ? "MULAI SEKARANG"
                      : language === "KR"
                      ? "시작하기"
                      : "开始"}
                  </Button>
                </CardContent>
              </Card>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
