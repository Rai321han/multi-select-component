import { Option } from "../../constants";

type InputProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  handleSelectOption: (option: Option) => void;
  searchText: string;
};

import { CreateAbleObject } from "./utils";

export default function Input({
  inputText,
  setInputText,
  handleSelectOption,
  searchText,
}: InputProps) {
  return (
    <input
      type="text"
      className="text-sm w-[20px] flex flex-grow outline-none px-1"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSelectOption(CreateAbleObject(searchText));
      }}
    />
  );
}
