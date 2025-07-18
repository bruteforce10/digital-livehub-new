import React from "react";

const timelineData = [
  {
    year: "2023",
    title: "b2b business",
    description: "Started as a B2B focused company serving business clients",
    gradient: "from-purple-700 to-pink-500",
  },
  {
    year: "2024",
    title: "digital marketing",
    description: "Expanded into comprehensive digital marketing solutions",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    year: "2025",
    title: "AI driven & international market",
    description: "AI-powered solutions for global market expansion",
    gradient: "from-pink-600 to-red-500",
    isHighlighted: true,
  },
];

const TimelineItem = ({
  year,
  title,
  description,
  gradient,
  isHighlighted,
}) => (
  <div className={`text-center ${isHighlighted ? "scale-110" : ""}`}>
    <div
      className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
    >
      <span className="text-white font-bold text-lg">{year}</span>
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const EvolutionSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Company Evolution Timeline
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="w-[calc(100%-12rem)] max-md:hidden mx-auto inset-x-0 h-[1px] bg-gray-200 absolute -z-10 top-9"></div>
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;
