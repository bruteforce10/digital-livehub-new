import CTASection from "@/components/CTASection";
import EndToEndSection from "@/components/EndToEndSection";
import FooterSection from "@/components/FooterSection";
import Hiro from "@/components/Hiro";
import MapBenefitSection from "@/components/MapBenefitSection";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/Newsletter";
import ServiceSection from "@/components/ServiceSection";
import TableSection from "@/components/TableSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hiro />
      <ServiceSection />
      <MapBenefitSection />
      <WhySection />
      <TableSection />
      <EndToEndSection />
      <CTASection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
}
