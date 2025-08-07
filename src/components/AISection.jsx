import { AIDATA_CN, AIDATA_EN, AIDATA_ID, AIDATA_KR } from "@/constant/AIData";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";

const AISection = () => {
  const [language] = useAtom(languageAtom);

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 py-20 lg:grid-cols-2 lg:gap-8 items-center">
      <div className=" max-lg:text-center lg:order-1 order-2">
        <h2
          className="text-3xl font-bold leading-normal text-transparent bg-clip-text mb-6"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #E96E4D 0%, #D4346A 52%, #644B86 100%)",
          }}
        >
          {language === "EN"
            ? AIDATA_EN.title
            : language === "ID"
            ? AIDATA_ID.title
            : language === "CN"
            ? AIDATA_CN.title
            : AIDATA_KR.title}
        </h2>
        <p>
          {language === "EN"
            ? AIDATA_EN.description
            : language === "ID"
            ? AIDATA_ID.description
            : language === "CN"
            ? AIDATA_CN.description
            : AIDATA_KR.description}
        </p>
      </div>
      <Image
        src={"/ai-image.png"}
        alt="AI Section Image"
        width={500}
        height={500}
        className="mt-8 mx-auto"
      />
    </div>
  );
};

export default AISection;
