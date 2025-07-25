"use client";
import CTASection from "@/components/CTASection";
import ListSectionDark from "@/components/ListSectionDark";
import Hiro from "@/components/Hiro";
import MapBenefitSection from "@/components/MapBenefitSection";
import NewsletterSection from "@/components/Newsletter";
import ServiceSection from "@/components/ServiceSection";
import TableSection from "@/components/TableSection";
import ListSection from "@/components/ListSection";
import EachUtils from "@/lib/EachUtils";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import { HIRO_CN, HIRO_EN, HIRO_ID } from "@/constant/hiroData";
import {
  WHYDATA_CN,
  WHYDATA_EN,
  WHYDATA_ID,
  WHYDATA_TITLE_CN,
  WHYDATA_TITLE_EN,
  WHYDATA_TITLE_ID,
} from "@/constant/whyData";
import {
  ENDTOENDATA_CN,
  ENDTOENDATA_EN,
  ENDTOENDATA_ID,
  ENDTOENDATA_TITLE_CN,
  ENDTOENDATA_TITLE_EN,
  ENDTOENDATA_TITLE_ID,
} from "@/constant/endToEndData";
import { CTADATA_CN, CTADATA_EN, CTADATA_ID } from "@/constant/ctaData";
import AISection from "@/components/AISection";

export default function Home() {
  const [language] = useAtom(languageAtom);

  return (
    <div suppressHydrationWarning>
      <EachUtils
        of={language === "EN" ? HIRO_EN : language === "ID" ? HIRO_ID : HIRO_CN}
        render={(item, index) => (
          <Hiro
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.desc}
            language={language}
          />
        )}
      />
      <ServiceSection />
      <MapBenefitSection />
      <ListSection
        title={
          language === "EN"
            ? WHYDATA_TITLE_EN
            : language === "ID"
            ? WHYDATA_TITLE_ID
            : WHYDATA_TITLE_CN
        }
        data={
          language === "EN"
            ? WHYDATA_EN
            : language === "ID"
            ? WHYDATA_ID
            : WHYDATA_CN
        }
      />
      <AISection />
      <TableSection />
      <ListSectionDark
        title={
          language === "EN"
            ? ENDTOENDATA_TITLE_EN
            : language === "ID"
            ? ENDTOENDATA_TITLE_ID
            : ENDTOENDATA_TITLE_CN
        }
        data={
          language === "EN"
            ? ENDTOENDATA_EN
            : language === "ID"
            ? ENDTOENDATA_ID
            : ENDTOENDATA_CN
        }
      />
      <CTASection
        title={
          language === "EN"
            ? CTADATA_EN.title
            : language === "ID"
            ? CTADATA_ID.title
            : CTADATA_CN.title
        }
        desc={
          language === "EN"
            ? CTADATA_EN.desc
            : language === "ID"
            ? CTADATA_ID.desc
            : CTADATA_CN.desc
        }
        link={
          language === "EN"
            ? CTADATA_EN.link
            : language === "ID"
            ? CTADATA_ID.link
            : CTADATA_CN.link
        }
        language={language}
      />
      <NewsletterSection />
    </div>
  );
}
