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
import { getHiroData } from "@/lib/hookData";

const whyData = [
  {
    icon: "/why/integrated.svg",
    title: "Integrated Solution",
    desc: "Logistics + Marketing + Maximum efficiency",
  },
  {
    icon: "/why/local.svg",
    title: "Local Execution",
    desc: "No cultural or regulatory barriers",
  },
  {
    icon: "/why/fast.svg",
    title: "Fast ROI",
    desc: "Start selling from day one",
  },
  {
    icon: "/why/scale.svg",
    title: "Scale Support",
    desc: "Ready for expansion to Malaysia, Singapore, Thailand",
  },
];

const endToEndData = [
  {
    icon: "/end-to-end/task.svg",
    alt: "Registration",
    title: "Regulatory & Operations",
    items: [
      "Brand Registration & Halal Certification",
      "Import Permits & Tax Setup",
      "Warehousing & Inventory Management",
      "Order Processing & Customer Service",
    ],
  },
  {
    icon: "/end-to-end/user.svg",
    alt: "Distribution",
    title: "Distribution Network",
    items: [
      "Marketplace Operations (Shopee, Tokopedia, Lazada)",
      "Retail Chain Partnerships",
      "Direct-to-Consumer Channels",
      "B2B Sales & Distribution",
    ],
  },
  {
    icon: "/end-to-end/goal.svg",
    alt: "Digital",
    title: "Digital Strategy & Execution",
    items: [
      "Brand Positioning & Messaging",
      "Content Creation & Social Media",
      "Paid Advertising & Influencer Marketing",
      "Performance Analytics & Optimization",
    ],
  },
];



export default function Home() {
  const hiroData = getHiroData();

  return (
    <div suppressHydrationWarning>
      <EachUtils of={hiroData} render={(item, index) => (
        <Hiro key={index} title={item.title} subtitle={item.subtitle} desc={item.desc} />
      )} />
      <ServiceSection />
      <MapBenefitSection />
      <ListSection title="Why Choose Us" data={whyData} />
      <TableSection />
      <ListSectionDark
        title="End-to-End Market Launch & Growth Support"
        data={endToEndData}
      />
      <CTASection
        title="Ready to Enter Southeast Asia Without Guesswork?"
        desc="Let's explore how your brand can succeed in Indonesia and Southeast Asia"
        link="/services#packages"
      />
      <NewsletterSection />
    </div>
  );
}
