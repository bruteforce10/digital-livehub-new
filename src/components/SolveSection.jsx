import { CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const solveData = [
  {
    title: "BEFORE (Traditional Approach)",
    titleClass: "",
    cardClass: "p-6",
    items: [
      { text: "Choose between distribution OR marketing" },
      { text: "Multiple vendors, complex coordination" },
      { text: "Slow market entry, high startup costs" },
      { text: "Cultural gaps, regulatory surprises" },
    ],
    isAfter: false,
  },
  {
    title: "After (Digital LiveHub)",
    titleClass: "text-transparent bg-clip-text",
    cardClass: "p-6 bg-pink-50 border-pink-200",
    items: [
      { text: "Integrated distribution + marketing", icon: true },
      { text: "Single partner, seamless execution", icon: true },
      { text: "Fast market entry, immediate ROI", icon: true },
      { text: "Local expertise, no surprises", icon: true },
    ],
    isAfter: true,
  },
];

export default function SolveSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          The Problem We Solve
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solveData.map((card, idx) => (
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
                        card.isAfter ? "flex items-center space-x-2" : undefined
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
