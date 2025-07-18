import Image from "next/image";
import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <Image
        src="/world.svg"
        alt="cta"
        className="w-full h-auto absolute inset-0 opacity-40"
        width={1920}
        height={1080}
      />
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Ready to Enter Southeast Asia Without Guesswork?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's explore how your brand can succeed in Indonesia and Southeast
          Asia
        </p>
        <Button variant={"primary"}>GET STARTED</Button>
      </div>
    </section>
  );
}
