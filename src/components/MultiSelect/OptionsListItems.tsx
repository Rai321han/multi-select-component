import { Option } from "../../constants";

type OptionsListProps = {
  optionsList: Option[];
  handleSelectOption: (option: Option) => void;
};

export default function OptionsListItems({
  optionsList,
  handleSelectOption,
}: OptionsListProps) {
  const renderedOptions = optionsList.map((option) => {
    return (
      <li
        key={option.id}
        className="px-4 py-1 cursor-pointer hover:bg-zinc-800"
        onClick={() => {
          handleSelectOption(option);
        }}
      >
        {option.value}
      </li>
    );
  });
  return <ul className="bg-slate-50">{renderedOptions}</ul>;
}
