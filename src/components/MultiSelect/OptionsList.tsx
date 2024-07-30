import OptionsListItems from "./OptionsListItems";
import { Option } from "../../constants";

type OptionsListProps = {
  isOpen: boolean;
  handleClickOpen: () => void;
  optionsList: Option[];
  handleSelectOption: (option: Option) => void;
};

export default function OptionsList({
  isOpen,
  handleClickOpen,
  optionsList,
  handleSelectOption,
}: OptionsListProps) {
  return (
    <div
      tabIndex={0}
      onBlur={handleClickOpen}
      className={`${
        isOpen ? "block" : "hidden"
      } w-full max-h-40 overflow-y-auto left-0 bg-slate-500 top-[100%] absolute mt-2 rounded-xl shadow-lg`}
    >
      <OptionsListItems
        optionsList={optionsList}
        handleSelectOption={handleSelectOption}
      />
    </div>
  );
}
