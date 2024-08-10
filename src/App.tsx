import { useState } from "react";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import Checkbox from "./components/Checkbox/Checkbox";
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
  isCreateable: false,
  bgColorInput: "bg-gradient-to-r from-[#2F323A] to-[#212226]",
  selectedBgColor: "bg-[#d6d6d6]",
  selectedTextColor: "text-[#232426]",
  borderColor: "border-[#616267]",
  inputTextColor: "text-white",
  optionListColor: "bg-gradient-to-r from-[#212226] to-[#2F323A]",
  optionBorderSize: "border",
  optionBorderColor: "border-[#5f6269ed]",
  optionHoverBgColor: "hover:bg-[#1b1b1b]",
  optionHoverTextColor: "hover:text-white",
  inputBtnColor: "#A5A9B5", //cannot be tailwind class
  defaultBgColor: "bg-[#a1a1a1]",
  individualRemoveColor: "#232426",
};

type CheckBoxStyleType = {
  textSize?: string;
  textColor?: string;
  checkedColor?: string;
};

const style: CheckBoxStyleType = {
  textSize: "text-[15px]",
  textColor: "text-gray-200",
};

function App() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [isMultiCheck, setIsMultiCheck] = useState<boolean>(false);
  const [isCreateableCheck, setIsCreateableCheck] = useState<boolean>(false);

  return (
    <div className="p-3 flex flex-col justify-center items-center w-screen h-screen gap-2">
      <div className="flex flex-row gap-3">
        <Checkbox
          state={isMultiCheck}
          isDisabled={false}
          text="Multiple"
          handleClick={setIsMultiCheck}
          style={style}
        />
        <Checkbox
          isDisabled={false}
          text="Createable"
          state={isCreateableCheck}
          handleClick={setIsCreateableCheck}
          style={style}
        />
      </div>
      <MultiSelect
        options={options}
        tags={tags}
        setTags={setTags}
        controlledProp={{
          ...controlledProp,
          isMulti: isMultiCheck,
          isCreateable: isCreateableCheck,
        }}
      />
    </div>
  );
}

export default App;
