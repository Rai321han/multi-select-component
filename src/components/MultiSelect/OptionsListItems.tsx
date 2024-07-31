import { Option } from "../../constants";

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

  if (renderedOptions.length === 0) {
    const createableOption = {
      id: Date.now(),
      value: searchText,
      isCustom: true,
    };
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
  }

  return <ul className="bg-slate-50">{renderedOptions}</ul>;
}
