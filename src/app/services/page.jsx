"use client";
import Hiro from "@/components/Hiro";
import ListSection from "@/components/ListSection";
import ListSectionDark from "@/components/ListSectionDark";
import DistributionSection from "@/components/DistributionSection";
import ListBenefitSection from "@/components/ListBenefitSection";
import PackageSection from "@/components/PackageSection";
import CTASection from "@/components/CTASection";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/languageAtom";
import { WHYDATA_CN, WHYDATA_EN, WHYDATA_ID } from "@/constant/whyData";
import {
  REGULATORY_CN,
  REGULATORY_EN,
  REGULATORY_ID,
} from "@/constant/regulatorData";

export default function AboutPage() {
  const [language] = useAtom(languageAtom);

  return (
    <div suppressHydrationWarning>
      <Hiro
        title={
          language === "EN"
            ? "Discover the Power of Our Services"
            : language === "ID"
            ? "Temukan Kekuatan Layanan Kami"
            : "探索我们的服务力量"
        }
        desc={
          language === "EN"
            ? "Home/Services"
            : language === "ID"
            ? "Beranda/Layanan"
            : "首页/服务"
        }
        button={false}
      />
      <ListSection
        title={
          language === "EN"
            ? "Why Choose Us"
            : language === "ID"
            ? "Kenapa Memilih Kami"
            : "为什么选择我们"
        }
        data={
          language === "EN"
            ? WHYDATA_EN
            : language === "ID"
            ? WHYDATA_ID
            : WHYDATA_CN
        }
      />
      <ListSectionDark
        title={
          language === "EN"
            ? "Regulatory & Operations"
            : language === "ID"
            ? "Regulasi & Operasional"
            : "法规与运营"
        }
        data={
          language === "EN"
            ? REGULATORY_EN
            : language === "ID"
            ? REGULATORY_ID
            : REGULATORY_CN
        }
        className="md:grid-cols-2"
      />
      <DistributionSection />
      <ListBenefitSection />
      <PackageSection />
      <CTASection
        title={
          language === "EN"
            ? "Ready to Be Part of Something Big?"
            : language === "ID"
            ? "Siap Menjadi Bagian dari Sesuatu yang Besar?"
            : "准备成为伟大事业的一部分吗？"
        }
        link={"/about#contact"}
      />
    </div>
  );
}
