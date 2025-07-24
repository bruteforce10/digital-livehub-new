import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CTASection({ title, desc, link, language }) {
  return (
    <section className="py-32 relative overflow-hidden">
      <Image
        src="/world.svg"
        alt="cta"
        className="w-full h-auto absolute inset-0 opacity-40 -z-[99]"
        width={1920}
        height={1080}
      />
      <div className="container mx-auto px-4 text-center z-[99]">
        <h2 className="text-4xl font-semibold mb-6">{title}</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{desc}</p>
        <Link href={link}>
          <Button variant={"primary"}>
            {language === "EN"
              ? "GET STARTED"
              : language === "ID"
              ? "MULAI SEKARANG"
              : "开始"}
          </Button>
        </Link>
      </div>
    </section>
  );
}
