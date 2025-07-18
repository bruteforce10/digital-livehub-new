"use client";
import Image from "next/image";

const benefits = [
  {
    value: "4th",
    label: "Largest Population Globally",
    desktop: {
      className:
        "left-0 top-0 absolute bg-gradient-to-b from-white/80 via-white/50 to-white/10 rounded-lg px-8 py-4 backdrop-blur-lg",
    },
    mobile: {},
  },
  {
    value: "$1.3T",
    label: "Fastest Plus Commerce Growth Rate",
    desktop: {
      className:
        "-right-8 top-32 absolute bg-gradient-to-b from-white/80 via-white/50 to-white/10 rounded-lg px-8 py-4 backdrop-blur-lg",
    },
    mobile: {},
  },
  {
    value: "170M+",
    label: "Monthly Internet Plus Social Media Users",
    desktop: {
      className:
        "bottom-24 left-0 absolute bg-gradient-to-b from-white/80 via-white/50 to-white/10 rounded-lg px-8 py-4 backdrop-blur-lg",
    },
    mobile: {},
  },
  {
    value: "Gateway",
    label: "Gateway to All SEA Markets",
    desktop: {
      className:
        "bottom-12 right-32 absolute bg-gradient-to-b from-white/80 via-white/50 to-white/10 rounded-lg px-8 py-4 backdrop-blur-lg",
    },
    mobile: {},
  },
];

export default function MapBenefitSection() {
  return (
    <section
      className="py-20 text-white"
      style={{ background: "var(--gradient-custom)" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center md:mb-16">
          Why Indonesia is Your Next Big Opportunity
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative w-full h-[400px]">
            <Image src="/map.png" alt="Map" fill className="object-contain" />
            {/* Desktop benefit boxes */}
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`max-md:hidden ${b.desktop.className}`}
                style={b.desktop.style}
              >
                <div className="text-2xl font-bold text-shadow-sm">
                  {b.value}
                </div>
                <div className="text-sm text-gray-50">{b.label}</div>
              </div>
            ))}
          </div>
          {/* Mobile benefit boxes */}
          <div className="grid md:hidden grid-cols-2 md:grid-cols-4 gap-4 -mt-8 text-center">
            {benefits.map((b, i) => (
              <div className="bg-white/20 rounded-lg p-4" key={i}>
                <div className="text-2xl font-bold">{b.value}</div>
                <div className="text-sm text-shadow-sm">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
