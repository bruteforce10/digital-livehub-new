import EvolutionSection from "@/components/aboutComponents/EvolutionSection";
import VisiSection from "@/components/aboutComponents/VisiSection";
import Hiro from "@/components/Hiro";
import ListSection from "@/components/ListSection";
import SolveSection from "@/components/SolveSection";

const whyData = [
  {
    icon: "/drive-us/bold.svg",
    title: "Bold Integration",
    desc: "Logistics + Marketing = Maximum Efficiency",
  },
  {
    icon: "/drive-us/transparent.svg",
    title: "Transparency",
    desc: "No cultural or regulatory barriers",
  },
  {
    icon: "/drive-us/speed.svg",
    title: "Speed as Standard",
    desc: "Start selling from day one",
  },
  {
    icon: "/drive-us/handshake.svg",
    title: "Partnership",
    desc: "Ready for expansion to Malaysia, Singapore, Thailand",
  },
];

export default function AboutPage() {
  return (
    <div className="h-[3000px]">
      <Hiro title="Meet the team" desc={"Home/About Us"} button={false} />
      <EvolutionSection />
      <VisiSection />
      <SolveSection />
      <ListSection title="What Drives Us" data={whyData} />
    </div>
  );
}
