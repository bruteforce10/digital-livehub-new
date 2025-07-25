import { CheckCircle } from "lucide-react";
import { Card } from "./ui/card";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import EachUtils from "@/lib/EachUtils";
import { SOLVE_CN, SOLVE_EN, SOLVE_ID } from "@/constant/solveData";

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
            : "我们解决的问题"}
        </h2>
        <p className="text-lg text-center mb-12 mx-auto">
          Breaking into a new market is never easy, especially in Southeast
          Asia. Brands often face:
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <EachUtils
              of={
                language === "EN"
                  ? SOLVE_EN
                  : language === "ID"
                  ? SOLVE_ID
                  : SOLVE_CN
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
            We exist to eliminate these barriers and transform complexity into
            clarity . Our role is to help brands grow faster, stronger, and
            without borders. Most importantly, we grow together. Every challenge
            is ours to solve, because we win by helping you grow
          </p>
        </div>
      </div>
    </section>
  );
}
