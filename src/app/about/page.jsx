"use client";
import EvolutionSection from "@/components/aboutComponents/EvolutionSection";
import VisiSection from "@/components/aboutComponents/VisiSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import Hiro from "@/components/Hiro";
import HiroAbout from "@/components/HiroAbout";
import ListSection from "@/components/ListSection";
import SolveSection from "@/components/SolveSection";
import { DRIVE_CN, DRIVE_EN, DRIVE_ID, DRIVE_KR } from "@/constant/driveData";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";

export default function AboutPage() {
  const [language] = useAtom(languageAtom);

  return (
    <div suppressHydrationWarning>
      <HiroAbout />
      <EvolutionSection />
      <VisiSection />
      <SolveSection />
      <ListSection
        title={
          language === "EN"
            ? "Why Choose Us?"
            : language === "ID"
            ? "Mengapa Memilih Kami"
            : language === "CN"
            ? "为什么选择我们"
            : "왜우리를 선택해야 하나요?"
        }
        data={
          language === "EN"
            ? DRIVE_EN
            : language === "ID"
            ? DRIVE_ID
            : language === "CN"
            ? DRIVE_CN
            : DRIVE_KR
        }
      />
      <GetInTouchSection />
    </div>
  );
}
