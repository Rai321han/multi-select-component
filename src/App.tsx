import { useState } from "react";
import MultiSelect from "./components/MultiSelect/MultiSelect";

const options: string[] = ["first", "second", "third", "frouth"];

export type Tag = {
  tagId: number | string;
  tagValue: string;
  isCustom: boolean;
  isDefault: boolean;
};

const controlledProp = {
  limit: 10,
  default: ["default"],
  textSize: "10px",
  isMulti: true,
  // placeholder: "tag:",
  isCreateable: true,

  bgColorInput: "bg-gradient-to-r from-[#2F323A] to-[#212226]",
  selectedBgColor: "bg-[#939599]",
  selectedTextColor: "text-[#232426]",
  borderColor: "border-[#616267]",
  inputTextColor: "#ffffff",
  optionListColor: "bg-gradient-to-r from-[#212226] to-[#2F323A]",
  optionBorderSize: "border",
  optionBorderColor: "#5f6269ed",
  optionHoverTextColor: "#ffffff",
};

function App() {
  const [tags, setTags] = useState<Tag[]>([]);
  return (
    <div className="p-10">
      <MultiSelect
        options={options}
        tags={tags}
        setTags={setTags}
        controlledProp={controlledProp}
      />
    </div>
  );
}

export default App;
