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
import {
  WHYDATA_CN,
  WHYDATA_EN,
  WHYDATA_ID,
  WHYDATA_KR,
} from "@/constant/whyData";
import {
  REGULATORY_CN,
  REGULATORY_EN,
  REGULATORY_ID,
  REGULATORY_KR,
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
            : language === "KR"
            ? "사용가능성을 찾아보자"
            : "发现我们的服务力量"
        }
        desc={
          language === "EN"
            ? "Home/Services"
            : language === "ID"
            ? "Beranda/Layanan"
            : language === "KR"
            ? "홈/서비스"
            : "主页/服务"
        }
        button={false}
      />
      <ListSection
        title={
          language === "EN"
            ? "Why Choose Us"
            : language === "ID"
            ? "Kenapa Memilih Kami"
            : language === "KR"
            ? "왜 우리를 선택해야 하는가"
            : "为什么选择我们"
        }
        data={
          language === "EN"
            ? WHYDATA_EN
            : language === "ID"
            ? WHYDATA_ID
            : language === "KR"
            ? WHYDATA_KR
            : WHYDATA_CN
        }
      />
      <ListSectionDark
        title={
          language === "EN"
            ? "Regulatory & Operations"
            : language === "ID"
            ? "Regulasi & Operasional"
            : language === "KR"
            ? "규제 및 운영"
            : "法规和运营"
        }
        data={
          language === "EN"
            ? REGULATORY_EN
            : language === "ID"
            ? REGULATORY_ID
            : language === "KR"
            ? REGULATORY_KR
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
            : language === "KR"
            ? "큰 일의 일부가 될 준비가 되셨습니까?"
            : "准备成为大事的一部分吗?"
        }
        language={language}
        link={"/about#contact"}
      />
    </div>
  );
}
