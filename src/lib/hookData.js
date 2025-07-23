import { HIRO_CN, HIRO_EN, HIRO_ID } from "@/constant/hiroData";
import { useAtom } from "jotai";
import { languageAtom } from "./languageAtom";


export function getHiroData() {
    const [language] = useAtom(languageAtom);

    
    if (language === "ID") return HIRO_ID;
    if (language === "CN") return HIRO_CN;
    return HIRO_EN;
  }
  