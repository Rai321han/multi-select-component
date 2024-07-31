import { useContext } from "react";
import OptionsListItems from "./OptionsListItems";
import { SelectContext } from "./MultiSelect";

export default function OptionsList() {
  const context = useContext(SelectContext);
  return (
    <div
      tabIndex={0}
      onBlur={context?.handleClickOpen}
      className={`${
        context?.isOpen ? "block" : "hidden"
      } w-full max-h-40 overflow-y-auto left-0 bg-slate-500 top-[100%] absolute mt-2 rounded-xl shadow-lg`}
    >
      <OptionsListItems />
    </div>
  );
}
