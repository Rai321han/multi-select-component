import { Option } from "../../constants";
import { CreateAbleObject } from "./utils";

type OptionsListProps = {
  searchText: string;
  optionsList: Option[];
  handleSelectOption: (option: Option) => void;
};

export default function OptionsListItems({
  searchText,
  optionsList,
  handleSelectOption,
}: OptionsListProps) {
  const renderedOptions: JSX.Element[] = [];
  optionsList.forEach((option) => {
    if (searchText === "")
      renderedOptions.push(
        <li
          key={option.id}
          className="px-4 py-1 cursor-pointer hover:bg-zinc-800 hover:text-slate-50"
          onClick={() => {
            handleSelectOption(option);
          }}
        >
          {option.value}
        </li>
      );
    else if (option.value.toLowerCase().startsWith(searchText.toLowerCase())) {
      renderedOptions.push(
        <li
          key={option.id}
          className="px-4 py-1 cursor-pointer hover:bg-zinc-800 hover:text-slate-50"
          onClick={() => {
            handleSelectOption(option);
          }}
        >
          {option.value}
        </li>
      );
    }
  });

  if (renderedOptions.length === 0 && searchText !== "") {
    const createableOption = CreateAbleObject(searchText);
    renderedOptions.push(
      <li
        key={createableOption.id}
        className="px-4 py-1 cursor-pointer hover:bg-zinc-800 hover:text-slate-50"
        onClick={() => {
          handleSelectOption(createableOption);
        }}
      >
        <span className="text-slate-400">select&nbsp;</span>
        {createableOption.value}
      </li>
    );
  } else if (renderedOptions.length === 0) {
    renderedOptions.push(
      <li className="px-4 py-1 cursor-pointer hover:text-slate-50 text-center">
        <span className="text-slate-400 ">No options</span>
      </li>
    );
  }

  return <ul className="bg-slate-50">{renderedOptions}</ul>;
}
