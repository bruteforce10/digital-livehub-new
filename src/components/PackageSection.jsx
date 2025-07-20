"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const packages = [
  {
    name: "Market Entry Package",
    price: "$XXX",
    features: [
      "Brand registration",
      "Basic marketplace setup",
      "Initial inventory management",
      "Basic marketing support",
    ],
    popular: false,
  },
  {
    name: "Regional Expansion",
    price: "$XXX",
    features: [
      "Multi-marketplace presence",
      "Advanced inventory systems",
      "Comprehensive marketing",
      "Reseller network access",
    ],
    popular: false,
  },
  {
    name: "Growth Acceleration",
    price: "$XXX",
    features: [
      "Full-service solution",
      "AI-driven optimization",
      "International expansion",
      "Dedicated account manager",
    ],
    popular: true,
  },
];

const PackageSection = () => {
  return (
    <section
      id="packages"
      className="bg-gradient-to-r from-pink-800 to-purple-800 py-20 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Choose Your Growth Path
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <Card
              key={pkg.name}
              className={
                pkg.popular
                  ? "bg-white/20 backdrop-blur border-white/30 text-white ring-2 ring-white/50"
                  : "bg-white/10 backdrop-blur border-white/20 text-white"
              }
            >
              <CardContent className="p-8">
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-pink-600 px-3 py-1 rounded-full text-sm font-bold">
                      POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li className="flex items-center space-x-2" key={i}>
                      <CheckCircle className="w-5 h-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-pink-600 hover:bg-gray-100">
                  GET STARTED
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
