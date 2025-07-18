import CTASection from "@/components/CTASection";
import EndToEndSection from "@/components/EndToEndSection";
import Hiro from "@/components/Hiro";
import MapBenefitSection from "@/components/MapBenefitSection";
import NewsletterSection from "@/components/Newsletter";
import ServiceSection from "@/components/ServiceSection";
import TableSection from "@/components/TableSection";
import WhySection from "@/components/WhySection";

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
      <WhySection />
      <TableSection />
      <EndToEndSection />
      <CTASection />
      <NewsletterSection />
    </div>
  );
}
