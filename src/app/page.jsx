import Hiro from "@/components/Hiro";
import MapBenefitSection from "@/components/MapBenefitSection";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/ServiceSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hiro />
      <ServiceSection />
      <MapBenefitSection />
      <WhySection />
    </div>
  );
}
