"use client";
import EvolutionSection from "@/components/aboutComponents/EvolutionSection";
import VisiSection from "@/components/aboutComponents/VisiSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import Hiro from "@/components/Hiro";
import ListSection from "@/components/ListSection";
import SolveSection from "@/components/SolveSection";
import { DRIVE_CN, DRIVE_EN, DRIVE_ID } from "@/constant/driveData";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";

export default function AboutPage() {
  const [language] = useAtom(languageAtom);

  return (
    <div suppressHydrationWarning>
      <Hiro
        title={
          language === "EN"
            ? "Meet the team"
            : language === "ID"
            ? "Kenali tim kami"
            : "认识我们的团队"
        }
        desc={
          language === "EN"
            ? "Home/About Us"
            : language === "ID"
            ? "Beranda/Tentang Kami"
            : "首页/关于我们"
        }
        button={false}
      />
      <EvolutionSection />
      <VisiSection />
      <SolveSection />
      <ListSection
        title={
          language === "EN"
            ? "Why Drive Us"
            : language === "ID"
            ? "Mengapa Memilih Kami"
            : "为什么选择我们"
        }
        data={
          language === "EN" ? DRIVE_EN : language === "ID" ? DRIVE_ID : DRIVE_CN
        }
      />
      <GetInTouchSection />
    </div>
  );
}
