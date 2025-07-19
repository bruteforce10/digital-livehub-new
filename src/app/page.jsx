import CTASection from "@/components/CTASection";
import EndToEndSection from "@/components/EndToEndSection";
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

export default function Home() {
  return (
    <div>
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
      <EndToEndSection />
      <CTASection />
      <NewsletterSection />
    </div>
  );
}
