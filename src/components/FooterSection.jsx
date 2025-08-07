"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import LogoDigitalLiveHub from "../../public/logo.svg";
import Link from "next/link";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/languageAtom";

const officeLocationID = [
  {
    country: "Indonesia",
    address: "Gd. Agro Plaza Kuningan, Jakarta Selatan, Indonesia",
    type: "HQ",
  },
  {
    country: "Indonesia",
    address: "Mega Bekasi Hypermall Lt. 1, Bekasi, Indonesia",
    type: "Live Studio",
  },
  {
    country: "Malaysia",
    address: "Lvl 4-1, Sunway Putra Mall, KL",
    type: "",
  },
  {
    country: "Singapore",
    address: "190 Clemenceau Avenue #06-01",
    type: "",
  },
];

const officeLocationKR = [
  {
    country: "인도네시아 본사",
    address: "Gd. Agro Plaza Kuningan",
    type: "자카르타 셀라탄",
  },
  {
    country: "인도네시아 라이브 스튜디오",
    address: "Mega Bekasi Hypermall 1 층",
    type: "브카시",
  },
  {
    country: "🇾말레이시아",
    address: "Lvl 4-1, Sunway Putra Mall",
    type: "쿠알라룸",
  },
  {
    country: "싱가포르",
    address: "190 Clemenceau Avenue #06-01",
    type: "",
  },
];

const contactInfo = {
  EN: {
    email: "marketing@digitallivehub.id",
    phone: "+62 857 1138 1050",
    location: "Jakarta, Indonesia",
  },
  ID: {
    email: "marketing@digitallivehub.id",
    phone: "+62 857 1138 1050",
    location: "Jakarta, Indonesia",
  },
  CN: {
    email: "marketing@digitallivehub.id",
    phone: "+62 857 1138 1050",
    location: "Jakarta, Indonesia",
  },
  KR: {
    email: "이메일: marketing@digitallivehub.id",
    phone: "전화: +62 857 1138 1050",
    location: "자카르타,인도네시아",
  },
};

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
                : language === "CN"
                ? "服务"
                : "패키지"}
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/services#packages">
                  {language === "EN"
                    ? "Packages"
                    : language === "ID"
                    ? "Paket"
                    : language === "CN"
                    ? "服务配套"
                    : "패키지"}
                </Link>
              </li>
              <li>
                <Link href="/services#digital-strategy">
                  {language === "EN"
                    ? "Our Programs"
                    : language === "ID"
                    ? "Program Kami"
                    : language === "CN"
                    ? "专项计划"
                    : "프로그램"}
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
                : language === "CN"
                ? "我们迫不及待想听到您的声音！"
                : "여러분의 소식을 기다리고 있습니다 !"}
            </h4>
            <ul className="space-y-2 list-disc text-muted-foreground text-sm">
              {language === "KR"
                ? officeLocationKR.map((location, index) => (
                    <li key={index}>
                      {location.country}: {location.address}
                      {location.type && ` - ${location.type}`}
                    </li>
                  ))
                : officeLocationID.map((location, index) => (
                    <li key={index}>
                      {location.country}: {location.address}
                      {location.type && ` - ${location.type}`}
                    </li>
                  ))}
            </ul>
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
              {contactInfo[language].email}
              <br />
              {contactInfo[language].phone}
              <br />
              {contactInfo[language].location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
