import Image from "next/image";

export default function DistributionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Distribution Network
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Comprehensive Reach Across Indonesia
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Image
              src={"/marketplace.png"}
              alt="Marketplace Operations"
              width={500}
              height={500}
              className="rounded-lg mb-6"
            />
            <h4 className="text-xl font-bold mb-4">Service Include:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Store setup and optimization</li>
              <li>• Product listing management</li>
              <li>• Inventory synchronization</li>
              <li>• Pricing strategy and promotions</li>
              <li>• Customer service management</li>
              <li>• Performance analytics</li>
              <li>• Advertising</li>
            </ul>
          </div>

          <div>
            <Image
              src={"/network.png"}
              alt="Reseller Network"
              width={500}
              height={500}
              className="rounded-lg mb-6"
            />
            <h4 className="text-xl font-bold mb-4">Service Include:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• 500+ verified reseller partners</li>
              <li>• Nationwide coverage across 34 provinces</li>
              <li>• Training and support programs</li>
              <li>• Performance incentive systems</li>
              <li>• Real-time sales tracking</li>
              <li>• Marketing material support</li>
              <li>• Bulk order management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
