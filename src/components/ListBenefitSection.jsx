"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const benefits = [
  {
    title: "Social Media & Community",
    image: "/digital-strategy/social-media.png",
    alt: "Social Media & Community",
    items: [
      "Content strategy development",
      "Community management",
      "Social media advertising",
      "Influencer partnerships",
      "Engagement optimization",
    ],
  },
  {
    title: "Content Creation",
    image: "/digital-strategy/content-creator.gif",
    alt: "Content Creation",
    items: [
      "Professional photography",
      "Video production",
      "Graphic design",
      "Copywriting",
      "Brand storytelling",
    ],
  },
  {
    title: "KOL & Influencer Campaigns",
    image: "/digital-strategy/kol-review.gif",
    alt: "KOL & Influencer Campaigns",
    items: [
      "Influencer identification",
      "Campaign strategy",
      "Content collaboration",
      "Performance tracking",
      "ROI optimization",
    ],
  },
  {
    title: "Affiliate Marketing",
    image: "/digital-strategy/affiliate-marketing.png",
    alt: "Affiliate Marketing",
    items: [
      "Affiliate network development",
      "Commission structure design",
      "Performance monitoring",
      "Partner recruitment",
      "Training programs",
    ],
  },
  {
    title: "Live Streaming",
    image: "/digital-strategy/live-streaming.gif",
    alt: "Live Streaming",
    items: [
      "Live commerce setup",
      "Host training",
      "Technical support",
      "Audience engagement",
      "Sales conversion optimization",
    ],
  },
  {
    title: "Ads Management",
    image: "/digital-strategy/ads-management.png",
    alt: "Ads Management",
    items: [
      "Google Ads optimization",
      "Facebook & Instagram ads",
      "TikTok advertising",
      "Performance analytics",
      "Budget optimization",
    ],
  },
];

export default function ListBenefitSection() {
  return (
    <section id="digital-strategy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Digital Strategy & Execution
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <Card className="overflow-hidden pt-0" key={benefit.title}>
              <div className="relative h-[600px]">
                <Image
                  src={benefit.image}
                  alt={benefit.alt}
                  fill
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <CardContent className="p-6 pt-0">
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {benefit.items.map((item, i) => (
                    <li key={i}>• {item}</li>
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
