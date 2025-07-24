import { VISION_CN, VISION_EN, VISION_ID } from "@/constant/visiData";
import EachUtils from "@/lib/EachUtils";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import { CheckCircle } from "lucide-react";

const gradientStyle = {
  backgroundImage:
    "linear-gradient(45deg, #E96E4D 0%, #D4346A 52%, #644B86 100%)",
};

export default function VisiSection() {
  const [language] = useAtom(languageAtom);

  return (
    <section className="py-20 bg-gray-50 border-y-2 border-primary-custom">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <EachUtils
            of={
              language === "EN"
                ? VISION_EN
                : language === "ID"
                ? VISION_ID
                : VISION_CN
            }
            render={(item, index) => (
              <div
                key={index}
                className="bg-white/80 border-2 border-white p-8 rounded-lg"
              >
                <h2
                  className="text-3xl font-bold text-transparent bg-clip-text mb-6"
                  style={gradientStyle}
                >
                  {item.title}
                </h2>
                <p className="text-gray-700 mb-6">{item.description}</p>
                {item.bulletPoints.length > 0 && (
                  <ul className="space-y-2">
                    {item.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
