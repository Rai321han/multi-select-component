import { useState } from "react";
import MultiSelect from "./components/MultiSelect/MultiSelect";
// import Checkbox from "./components/Checkbox/Checkbox";
// import NumberInput from "./components/NumberInput/NumberInput";

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
  // default: ["default"],
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

// type CheckBoxStyleType = {
//   textSize?: string;
//   textColor?: string;
//   checkedColor?: string;
// };

// const style: CheckBoxStyleType = {
//   textSize: "text-[15px]",
//   textColor: "text-gray-200",
// };

// const inputStyle: {
//   textSize?: string;
//   bgColor?: string;
//   textColor?: string;
// } = {
//   textSize: "text-[15px]",
//   bgColor: "bg-zinc-500",
//   textColor: "text-gray-200",
// };

function App() {
  const [tags1, setTags1] = useState<Tag[]>([]);
  const [tags2, setTags2] = useState<Tag[]>([]);
  const [tags3, setTags3] = useState<Tag[]>([]);

  // const [isMultiCheck, setIsMultiCheck] = useState<boolean>(false);
  // const [isCreateableCheck, setIsCreateableCheck] = useState<boolean>(false);
  // const [inputNumber, setInputNumber] = useState<number>(5);

  return (
    <div className="p-3  w-screen h-screen flex justify-center">
      <div className="flex flex-col justify-center items-center gap-16 h-full min-w-[200px] max-w-[450px]">
        <div className="w-full">
          <h1 className="font-poppins font-extrabold text-3xl text-white mb-5">
            Single Select
          </h1>

          <MultiSelect
            options={options}
            tags={tags2}
            setTags={setTags2}
            controlledProp={{
              ...controlledProp,
              isMulti: false,
              // isCreateable: true,
              limit: 1,
            }}
          />
        </div>

        <div className="w-full">
          <h1 className="font-poppins font-extrabold text-3xl text-white mb-5">
            Multiple Select
          </h1>

          <MultiSelect
            options={options}
            tags={tags3}
            setTags={setTags3}
            controlledProp={{
              ...controlledProp,
              isMulti: true,
              // isCreateable: true,
              limit: 10,
            }}
          />
        </div>

        <div className="w-full">
          <h1 className="font-poppins font-extrabold text-3xl text-white mb-5">
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
              // limit: inputNumber,
            }}
          />
        </div>
      </div>
      {/* <div className="flex flex-row gap-3">
        <NumberInput
          style={inputStyle}
          onChange={setInputNumber}
          input={inputNumber}
        />
        <Checkbox
          state={isMultiCheck}
          isDisabled={false}
          text="MultiSelect"
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
      </div> */}
      {/* <MultiSelect
        options={options}
        tags={tags}
        setTags={setTags}
        controlledProp={{
          ...controlledProp,
          isMulti: isMultiCheck,
          isCreateable: isCreateableCheck,
          limit: inputNumber,
        }}
      /> */}
    </div>
  );
}

export default App;
