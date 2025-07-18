"use client";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const services = [
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
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          The Only Partner You Need for Southeast Asia
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, idx) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
