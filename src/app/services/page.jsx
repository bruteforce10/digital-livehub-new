import Hiro from "@/components/Hiro";
import ListSection from "@/components/ListSection";
import ListSectionDark from "@/components/ListSectionDark";
import DistributionSection from "@/components/DistributionSection";

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

const regulatoryData = [
  {
    icon: "/operation/consumble.svg",
    title: "Brand Registration & Halal Certification",
    items: [
      "Brand registration and trademark protection",
      "Halal certification process",
      "BPOM registration",
      "Product compliance verification",
      "Regulatory documentation",
    ],
  },
  {
    icon: "/operation/to-do-list.svg",
    title: "Warehousing & Inventory Management",
    items: [
      "Strategic warehouse locations",
      "Real-time inventory tracking",
      "Quality control processes",
      "Temperature-controlled storage",
      "Automated reorder systems",
    ],
  },
  {
    icon: "/operation/supply-chain.svg",
    title: "Import & Compliance Process",
    items: [
      "Import permit acquisition",
      "Customs clearance",
      "Tax optimization strategies",
      "Documentation management",
      "Regulatory compliance monitoring",
    ],
  },
  {
    icon: "/operation/consumble.svg",
    title: "Order Fulfillment",
    items: [
      "Same-day processing",
      "Multi-channel integration",
      "Last-mile delivery optimization",
      "Returns management",
      "Customer service support",
    ],
  },
];

export default function AboutPage() {
  return (
    <div suppressHydrationWarning>
      <Hiro
        title="Discover the Power of Our Services"
        desc={"Home/Services"}
        button={false}
      />
      <ListSection title="Why Choose Us" data={whyData} />
      <ListSectionDark
        title="Regulatory & Operations"
        data={regulatoryData}
        className="md:grid-cols-2"
      />
      <DistributionSection />
    </div>
  );
}
