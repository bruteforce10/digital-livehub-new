import { CheckCircle } from "lucide-react";

export default function VisiSection() {
  return (
    <section className="py-20 bg-gray-50 border-y-2 border-primary-custom">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/80 border-2 border-white p-8 rounded-lg ">
            <h2
              className="text-3xl font-bold text-transparent bg-clip-text mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #E96E4D 0%, #D4346A 52%, #644B86 100%)",
              }}
            >
              Vision
            </h2>
            <p className="text-gray-700 mb-6">
              Today, we empower global brands to conquer Indonesia and Malaysia,
              Tomorrow, we'll unlock China, Thailand, Japan, Korea, Vietnam, and
              the Philippines, creating a pan-Asian commerce network.
            </p>
          </div>
          <div className="bg-white/80 border-2 border-white p-8 rounded-lg ">
            <h2
              className="text-3xl font-bold text-transparent bg-clip-text mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #E96E4D 0%, #D4346A 52%, #644B86 100%)",
              }}
            >
              Mission
            </h2>
            <p className="text-gray-700 mb-6">
              We fuel brands' success through our dual-core business model:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5" />
                <span className="text-gray-700">
                  Distribution Powerhouse - Handle all logistics & compliance
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5" />
                <span className="text-gray-700">
                  Marketing Accelerator - Create demand & drive sales
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
