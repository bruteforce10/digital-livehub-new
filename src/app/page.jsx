import CTASection from "@/components/CTASection";
import ListSectionDark from "@/components/ListSectionDark";
import Hiro from "@/components/Hiro";
import MapBenefitSection from "@/components/MapBenefitSection";
import NewsletterSection from "@/components/Newsletter";
import ServiceSection from "@/components/ServiceSection";
import TableSection from "@/components/TableSection";
import ListSection from "@/components/ListSection";

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
  return (
    <div suppressHydrationWarning>
      <Hiro
        title="Redefining Market Entry"
        subtitle="for Southeast Asia"
        desc={
          "Digital Live Hub combines seamless distribution and performance marketing to help global brands win in Indonesia"
        }
      />
      <ServiceSection />
      <MapBenefitSection />
      <ListSection title="Why Choose Us" data={whyData} />
      <TableSection />
      <ListSectionDark
        title="End-to-End Market Launch & Growth Support"
        data={endToEndData}
      />
      <CTASection />
      <NewsletterSection />
    </div>
  );
}
