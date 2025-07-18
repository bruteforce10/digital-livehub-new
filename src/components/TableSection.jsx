import { CheckCircle } from "lucide-react";

const tableData = [
  {
    title: "Traditional Distributors",
    titleClass: "",
    boxClass:
      "text-center bg-gray-200 p-6 border-black border-[1.5px] max-md:border-b-0 md:border-r-0",
    items: [
      { text: "Move products only" },
      { text: "No marketing support" },
      { text: "Limited market insight" },
    ],
    isHub: false,
  },
  {
    title: "Marketing Agencies",
    titleClass: "",
    boxClass:
      "text-center bg-gray-200 p-6 border-black border-[1.5px] max-md:border-b-0 md:border-r-0",
    items: [
      { text: "Create hype only" },
      { text: "No logistics" },
      { text: "No fulfillment capability" },
    ],
    isHub: false,
  },
  {
    title: "Digital LiveHub",
    titleClass: "text-pink-600",
    boxClass:
      "text-center bg-pink-50 p-6 border-pink-500 border-[1.5px] mx-auto w-full",
    items: [
      { text: "Create demand + fulfill it", icon: true },
      { text: "End-to-end execution", icon: true },
      { text: "Sustainable growth", icon: true },
    ],
    isHub: true,
  },
];

export default function TableSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Most Partners Force You to Choose. We Don't
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3">
            {tableData.map((col, idx) => (
              <div className={col.boxClass} key={col.title}>
                <h3 className={`text-xl font-bold mb-4 ${col.titleClass}`}>
                  {col.title}
                </h3>
                <ul
                  className={
                    col.isHub ? "space-y-2" : "space-y-2 text-gray-600"
                  }
                >
                  {col.items.map((item, i) => (
                    <li
                      className={
                        col.isHub ? "flex items-center space-x-2" : undefined
                      }
                      key={i}
                    >
                      {item.icon && (
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                      )}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
