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
];

export type Tag = {
  tagId: number | string;
  tagValue: string;
  isCustom: boolean;
  isDefault: boolean;
};

const controlledProp = {
  width: "200px",
  limit: 10,
  // default: ["default"],
  textSize: "0.5rem",
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
  selectedClearColor: "#232426",
  inputBtnColor: "#A5A9B5",
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
