import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ListSectionDark({ title, data, className }) {
  return (
    <section
      className="bg-black border-y-2 border-primary-custom text-white py-20"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
        <div className={cn("grid md:grid-cols-3 gap-8", className)}>
          {data.map((item, index) => (
            <div
              key={index}
              className="text-center border-[1.5px] px-4 rounded-2xl border-white bg-[#473939]/20 py-18"
            >
              <div className="w-16 h-16 border-2 border-primary-custom rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image
                  src={item.icon}
                  alt={item.alt || item.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
