import { useState } from "react";
import MultiSelect from "./components/MultiSelect/MultiSelect";

const options: string[] = [
  "JavaScript",
  "React",
  "CSS",
  "Angular",
  "TypeScript",
  "Vue",
  "Jest",
  "HTML",
  "SCSS",
  "Vite",
  "Testing",
  "Electron",
];

export type Tag = {
  tagId: number | string;
  tagValue: string;
  isCustom: boolean;
  isDefault: boolean;
};

const controlledProp = {
  width: "200px",
  default: ["default"],
  textSize: "text-[0.9rem]",
  isMulti: true,
  isCreateable: true,
  bgColorInput: "bg-gradient-to-r from-[#2F323A] to-[#212226]",
  selectedBgColor: "bg-gradient-to-r from-[#6F6F6F] via-[#989898] to-[#d6d6d6]",
  selectedTextColor: "text-[#232426]",
  borderColor: "border-[#616267]",
  inputTextColor: "text-white",
  optionListColor: "bg-gradient-to-r from-[#212226] to-[#2F323A]",
  optionBorderSize: "border",
  // optionBorderColor: "border-[#5f6269ed]",
  optionBorderColor: "border-red-500",

  optionHoverColor: "bg-[#1b1b1b]",
  optionHoverTextColor: "text-white",
  inputBtnColor: "#A5A9B5", //cannot be tailwind class
  defaultBgColor: "bg-[#828282]",
  individualRemoveColor: "#232426",
};

function App() {
  const [tags, setTags] = useState<Tag[]>([]);
  return (
    <div className="p-3 flex justify-center items-center">
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
