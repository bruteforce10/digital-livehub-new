"use client";
import Image from "next/image";

export default function EndToEndSection() {
  return (
    <section className="bg-black border-y-2 border-primary-custom text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          End-to-End Market Launch & Growth Support
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center border-[1.5px] rounded-2xl border-white bg-[#473939]/20 py-18 ">
            <div className="w-16 h-16 border-2 border-primary-custom rounded-lg flex items-center justify-center mx-auto mb-4">
              <Image
                src="/end-to-end/task.svg"
                alt="Registration"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Regulatory & Operations</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Brand Registration & Halal Certification</li>
              <li>Import Permits & Tax Setup</li>
              <li>Warehousing & Inventory Management</li>
              <li>Order Processing & Customer Service</li>
            </ul>
          </div>
          <div className="text-center border-[1.5px] rounded-2xl border-white bg-[#473939]/20 py-18 ">
            <div className="w-16 h-16 border-2 border-primary-custom rounded-lg flex items-center justify-center mx-auto mb-4">
              <Image
                src="/end-to-end/user.svg"
                alt="Distribution"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Distribution Network</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Marketplace Operations (Shopee, Tokopedia, Lazada)</li>
              <li>Retail Chain Partnerships</li>
              <li>Direct-to-Consumer Channels</li>
              <li>B2B Sales & Distribution</li>
            </ul>
          </div>
          <div className="text-center border-[1.5px] rounded-2xl border-white bg-[#473939]/20 py-18 ">
            <div className="w-16 h-16 border-2 border-primary-custom rounded-lg flex items-center justify-center mx-auto mb-4">
              <Image
                src="/end-to-end/goal.svg"
                alt="Digital"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Digital Strategy & Execution
            </h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Brand Positioning & Messaging</li>
              <li>Content Creation & Social Media</li>
              <li>Paid Advertising & Influencer Marketing</li>
              <li>Performance Analytics & Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
