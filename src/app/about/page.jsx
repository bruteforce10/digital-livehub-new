import EvolutionSection from "@/components/aboutComponents/EvolutionSection";
import VisiSection from "@/components/aboutComponents/VisiSection";
import Hiro from "@/components/Hiro";

export default function AboutPage() {
  return (
    <div className="h-[3000px]">
      <Hiro title="Meet the team" desc={"Home/About Us"} button={false} />
      <EvolutionSection />
      <VisiSection />
    </div>
  );
}
