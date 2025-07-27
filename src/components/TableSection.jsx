import {
  TABLE_CN,
  TABLE_EN,
  TABLE_ID,
  TABLE_KR,
  TABLE_TITLE_CN,
  TABLE_TITLE_EN,
  TABLE_TITLE_ID,
  TABLE_TITLE_KR,
} from "@/constant/tableData";
import EachUtils from "@/lib/EachUtils";
import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import { CheckCircle } from "lucide-react";

export default function TableSection() {
  const [language] = useAtom(languageAtom);

  return (
    <section className="py-20" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <h2 className="text-4xl font-semibold text-center mb-16">
          {language === "EN"
            ? TABLE_TITLE_EN
            : language === "ID"
            ? TABLE_TITLE_ID
            : language === "CN"
            ? TABLE_TITLE_CN
            : TABLE_TITLE_KR}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3">
            <EachUtils
              of={
                language === "EN"
                  ? TABLE_EN
                  : language === "ID"
                  ? TABLE_ID
                  : language === "CN"
                  ? TABLE_CN
                  : TABLE_KR
              }
              render={(col) => (
                <div className={col.boxClass} key={col.title}>
                  <h3 className={`text-xl font-bold mb-4 ${col.titleClass}`}>
                    {col.title}
                  </h3>
                  <ul
                    className={
                      col.isHub ? "space-y-2" : "space-y-2 text-gray-600"
                    }
                  >
                    {col.items.map((item, i) => (
                      <li
                        className={
                          col.isHub ? "flex items-center space-x-2" : undefined
                        }
                        key={i}
                      >
                        {item.icon && (
                          <CheckCircle className="w-4 h-4 text-pink-500" />
                        )}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
