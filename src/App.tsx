import { useState } from "react";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import NumberInput from "./components/NumberInput/NumberInput";

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
  isRounded: true,
  // default: ["default"],
  textSize: "text-[0.9rem]",
  textColor: "text-white",
  inputShadow: "shadow-md",
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
  inputBtnColor: "fill-[#A5A9B5]",
  defaultBgColor: "bg-[#a1a1a1]",
  individualRemoveColor: "fill-[#232426]",
};

const inputStyle: {
  textSize?: string;

  textColor?: string;
} = {
  textSize: "text-[15px]",
  textColor: "text-slate-700",
};

function App() {
  const [tags1, setTags1] = useState<Tag[]>([]);
  const [tags2, setTags2] = useState<Tag[]>([]);
  const [tags3, setTags3] = useState<Tag[]>([]);

  const [inputNumber, setInputNumber] = useState<number>(5);

  return (
    <div className="p-3  w-screen h-screen flex justify-center">
      <div className="flex flex-col justify-center items-center gap-16 h-full w-[400px] max-w-[450px]">
        <div className="w-full z-30">
          <h1 className="font-poppins font-extrabold text-3xl text-slate-700 mb-5">
            Single Select
          </h1>

          <MultiSelect
            options={options}
            tags={tags2}
            setTags={setTags2}
            controlledProp={{
              ...controlledProp,
              isMulti: false,
              limit: 1,
            }}
          />
        </div>

        <div className="w-full z-20 flex flex-col">
          <h1 className="font-poppins font-extrabold text-3xl text-slate-700 mb-5">
            Multiple Select
          </h1>

          <div className="flex flex-col gap-2">
            <MultiSelect
              options={options}
              tags={tags3}
              setTags={setTags3}
              controlledProp={{
                ...controlledProp,
                isMulti: true,
                limit: inputNumber,
              }}
            />
            <NumberInput
              style={inputStyle}
              onChange={setInputNumber}
              input={inputNumber}
              label="Set limit"
            />
          </div>
        </div>

        <div className="w-full z-10">
          <p className="text-slate-700 italic text-xs">
            Create your own option...
          </p>
          <h1 className="font-poppins font-extrabold text-3xl text-slate-700 mb-5">
            Createable Select
          </h1>

          <MultiSelect
            options={options}
            tags={tags1}
            setTags={setTags1}
            controlledProp={{
              ...controlledProp,
              isMulti: true,
              isCreateable: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
