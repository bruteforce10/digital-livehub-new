"use client";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/languageAtom";
import {
  SERVICE_CN,
  SERVICE_ID,
  SERVICE_KR,
  SERVICE_TITLE_CN,
  SERVICE_TITLE_EN,
  SERVICE_TITLE_ID,
  SERVICE_TITLE_KR,
} from "@/constant/serviceData";
import EachUtils from "@/lib/EachUtils";

const SERVICE_EN = [
  {
    image: "/service/distribution.png",
    alt: "Distribution",
    title: "Distribution Powerhouse",
    items: [
      "Prime Registration & Compliance",
      "Import & Customs & Clearance",
      "Warehousing & Fulfillment",
      "Omnichannel Distribution",
    ],
  },
  {
    image: "/service/marketing.png",
    alt: "Marketing",
    title: "Marketing Accelerator",
    items: [
      "Creative Content & Social Media",
      "Paid & Influencer Campaigns",
      "SEO & Content Marketing",
      "Live Streaming & Affiliate Networks",
    ],
  },
];

export default function ServiceSection() {
  const [language] = useAtom(languageAtom);

  return (
    <section className="py-20" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <h2 className="text-4xl font-semibold text-center mb-16">
          {language === "EN"
            ? SERVICE_TITLE_EN
            : language === "ID"
            ? SERVICE_TITLE_ID
            : language === "CN"
            ? SERVICE_TITLE_CN
            : SERVICE_TITLE_KR}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <EachUtils
            of={
              language === "EN"
                ? SERVICE_EN
                : language === "ID"
                ? SERVICE_ID
                : language === "CN"
                ? SERVICE_CN
                : SERVICE_KR
            }
            render={(service) => (
              <Card className="overflow-hidden pt-0" key={service.title}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-auto"
                  width={500}
                  height={500}
                />
                <CardContent className="p-6 pt-0">
                  <h3 className="text-2xl font-bold mb-4 text-primary-custom">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li className="flex items-center space-x-2" key={i}>
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          />
        </div>
      </div>
    </section>
  );
}
