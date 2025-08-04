import { CheckCircle } from "lucide-react";
import { Card } from "./ui/card";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import EachUtils from "@/lib/EachUtils";
import { SOLVE_CN, SOLVE_EN, SOLVE_ID, SOLVE_KR } from "@/constant/solveData";

export default function SolveSection() {
  const [language] = useAtom(languageAtom);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          {language === "EN"
            ? "The Problem We Solve"
            : language === "ID"
            ? "Masalah yang Kami Selesaikan"
            : language === "KR"
            ? "해결하는 문제"
            : "我们解决的问题"}
        </h2>
        <p className="text-lg text-center mb-12 mx-auto">
          {language === "EN"
            ? "In today's fast-paced digital landscape, brands face numerous challenges that hinder their growth and success. From navigating complex digital ecosystems to reaching the right audience, the hurdles are many. We understand these challenges deeply and are committed to providing solutions that empower brands to thrive."
            : language === "ID"
            ? "Di era digital yang serba cepat saat ini, merek menghadapi berbagai tantangan yang menghambat pertumbuhan dan kesuksesan mereka. Dari menavigasi ekosistem digital yang kompleks hingga menjangkau audiens yang tepat, rintangan yang dihadapi sangat banyak. Kami memahami tantangan ini dengan baik dan berkomitmen untuk menyediakan solusi yang memberdayakan merek untuk berkembang."
            : language === "KR"
            ? "오늘날 빠르게 변화하는 디지털 환경 속에서 브랜드들은 성장을 저해하는 다양한 도전에 직면해 있습니다. 복잡한 디지털 생태계를 파악하거나 올바른 타겟 고객에게 도달하는 일까지, 장애물은 매우 많습니다. 우리는 이러한 문제를 깊이 이해하고 있으며, 브랜드가 디지털 시대에서 단순히 생존을 넘어서 성장하고 확장할 수 있도록 돕는 솔루션을 제공합니다."
            : "在当今快速发展的数字环境中，品牌面临着许多阻碍其增长和成功的挑战。从应对复杂的数字生态系统到触及正确的受众，障碍重重。我们深刻理解这些挑战，并致力于提供能够帮助品牌蓬勃发展的解决方案。"}
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <EachUtils
              of={
                language === "EN"
                  ? SOLVE_EN
                  : language === "ID"
                  ? SOLVE_ID
                  : language === "CN"
                  ? SOLVE_CN
                  : SOLVE_KR
              }
              render={(card, index) => (
                <Card className={card.cardClass} key={card.title}>
                  <h3
                    className={`text-2xl font-bold mb-4 ${card.titleClass}`}
                    style={
                      card.isAfter
                        ? {
                            backgroundImage:
                              "linear-gradient(45deg, #E96E4D 0%, #D4346A 52%, #644B86 100%)",
                          }
                        : undefined
                    }
                  >
                    {card.title}
                  </h3>
                  <ul
                    className={
                      card.isAfter ? "space-y-3" : "space-y-3 text-gray-600"
                    }
                  >
                    {card.items.map((item, i) => (
                      <li
                        className={
                          card.isAfter
                            ? "flex items-center space-x-2"
                            : undefined
                        }
                        key={i}
                      >
                        {item.icon && (
                          <CheckCircle className="w-5 h-5 text-pink-500" />
                        )}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            />
          </div>
          <p className="text-md text-muted-foreground text-center mt-10 mx-auto">
            {language === "EN"
              ? "By addressing these challenges, we empower brands to not only survive but thrive in the digital age. Our solutions are designed to simplify complexities, enhance visibility, and drive meaningful engagement with audiences. Together, we can navigate the digital landscape and unlock new opportunities for growth."
              : language === "ID"
              ? "Dengan mengatasi tantangan-tantangan ini, kami memberdayakan merek untuk tidak hanya bertahan tetapi juga berkembang di era digital. Solusi kami dirancang untuk menyederhanakan kompleksitas, meningkatkan visibilitas, dan mendorong keterlibatan yang bermakna dengan audiens. Bersama-sama, kita dapat menavigasi lanskap digital dan membuka peluang baru untuk pertumbuhan."
              : language === "KR"
              ? "이러한 문제들을 해결함으로써, 우리는 브랜드가 디지털 시대에 단순히 생존하는 것을 넘어 진정으로 성장할 수 있도록 돕습니다. 우리의 솔루션은 복잡한 과정을 단순화하고, 브랜드의 가시성과 고객과 의의미 있는 소통을 강화하도록 설계되었습니다. 함께 디지털 환경을 효과적으로 탐색하고, 새로운 성장 기회를 열어갈 수 있습니다."
              : "通过解决这些挑战，我们使品牌不仅能够生存，而且能够在数字时代蓬勃发展。我们的解决方案旨在简化复杂性、增强可见性，并推动与受众的有意义互动。让我们共同导航数字环境，开启新的增长机会。"}
          </p>
        </div>
      </div>
    </section>
  );
}
