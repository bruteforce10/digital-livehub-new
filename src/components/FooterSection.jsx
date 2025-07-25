"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import LogoDigitalLiveHub from "../../public/logo.svg";
import Link from "next/link";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/languageAtom";

export default function FooterSection() {
  const [language] = useAtom(languageAtom);

  return (
    <footer className="bg-white py-12 border-t" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <LogoDigitalLiveHub className="w-36 h-auto" />
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">
              {language === "EN"
                ? "Services"
                : language === "ID"
                ? "Layanan"
                : "服务"}
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/services#packages">
                  {language === "EN"
                    ? "Packages"
                    : language === "ID"
                    ? "Paket"
                    : "套餐"}
                </Link>
              </li>
              <li>
                <Link href="/services#digital-strategy">
                  {language === "EN"
                    ? "Our Programs"
                    : language === "ID"
                    ? "Program Kami"
                    : "我们的计划"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">
              {language === "EN"
                ? "We Can't Wait to Hear From You!"
                : language === "ID"
                ? "Kami Tidak Sabar Mendengar Dari Anda!"
                : "我们期待听到您的消息！"}
            </h4>
            <p className="text-gray-600 text-sm">
              <ul className="space-y-2 list-disc">
                <li>
                  Gd. Agro Plaza Kuningan, Jakarta Selatan, Indonesia - HQ
                </li>
                <li>
                  Mega Bekasi Hypermall Lt. 1, Bekasi, Indonesia - Live Studio
                </li>
                <li>Lvl 4-1, Sunway Putra Mall, KL, Malaysia - MY Branch</li>
                <li>190 Clemenceau Avenue #06-01, Singapore - SG Branch</li>
              </ul>
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">
              {language === "EN"
                ? "Contact Us"
                : language === "ID"
                ? "Hubungi Kami"
                : "联系我们"}
            </h4>
            <p className="text-gray-600 text-sm">
              Email: info@digitallivehubumkm.co.id
              <br />
              Phone: +62 898-0961-999
              <br />
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
