import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/languageAtom";

const SwitchLanguage = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="EN">EN</SelectItem>
        <SelectItem value="ID">ID</SelectItem>
        <SelectItem value="CN">CN</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SwitchLanguage;