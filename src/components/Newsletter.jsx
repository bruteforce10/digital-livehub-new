import { useAtom } from "jotai";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { languageAtom } from "@/lib/languageAtom";
import {
  NEWSLETTER_CN,
  NEWSLETTER_EN,
  NEWSLETTER_ID,
} from "@/constant/newsletterData";

export default function NewsletterSection() {
  const [language] = useAtom(languageAtom);

  return (
    <section className="bg-gradient-to-r from-pink-500 to-pink-600 py-12 text-white">
      <div className="container flex justify-between lg:flex-row flex-col items-center mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">
            {language === "EN"
              ? NEWSLETTER_EN.title
              : language === "ID"
              ? NEWSLETTER_ID.title
              : NEWSLETTER_CN.title}
          </h2>
          <p className="mb-8 max-w-[400px] mx-auto text-md">
            {language === "EN"
              ? NEWSLETTER_EN.description
              : language === "ID"
              ? NEWSLETTER_ID.description
              : NEWSLETTER_CN.description}
          </p>
        </div>
        <div className="flex gap-2 lg:flex-[.6] max-lg:max-w-[400px] w-full mx-auto">
          <Input
            placeholder={
              language === "EN"
                ? NEWSLETTER_EN.placeholder
                : language === "ID"
                ? NEWSLETTER_ID.placeholder
                : NEWSLETTER_CN.placeholder
            }
            className="bg-white text-gray-900 border-0 w-full h-12"
          />
          <Button className="bg-white  hover:bg-gray-800 hover:text-white text-gray-900 px-6">
            {language === "EN"
              ? NEWSLETTER_EN.buttonText
              : language === "ID"
              ? NEWSLETTER_ID.buttonText
              : NEWSLETTER_CN.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
