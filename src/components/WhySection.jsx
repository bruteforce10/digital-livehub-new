"use client";
import Image from "next/image";

const whyData = [
  {
    icon: "/why/integrated.svg",
    title: "Integrated Solution",
    desc: "Logistics + Marketing + Maximum efficiency",
  },
  {
    icon: "/why/local.svg",
    title: "Local Execution",
    desc: "No cultural or regulatory barriers",
  },
  {
    icon: "/why/fast.svg",
    title: "Fast ROI",
    desc: "Start selling from day one",
  },
  {
    icon: "/why/scale.svg",
    title: "Scale Support",
    desc: "Ready for expansion to Malaysia, Singapore, Thailand",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 bg-pink-50 border-y-2 border-primary-custom">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyData.map((item, i) => (
            <div className="text-center" key={i}>
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
