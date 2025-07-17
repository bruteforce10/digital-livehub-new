import { CheckCircle, Target, TrendingUp, Users } from "lucide-react";
import FastIcon from "../../public/why/fast.svg";

export default function WhySection() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FastIcon width={32} height={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Integrated Solution</h3>
            <p className="text-gray-600">
              Logistics + Marketing + Maximum efficiency
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Local Execution</h3>
            <p className="text-gray-600">No cultural or regulatory barriers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast ROI</h3>
            <p className="text-gray-600">Start selling from day one</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Scale Support</h3>
            <p className="text-gray-600">
              Ready for expansion to Malaysia, Singapore, Thailand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
