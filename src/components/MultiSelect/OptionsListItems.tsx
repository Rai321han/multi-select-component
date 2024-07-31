import { useContext } from "react";

import { CreateAbleObject } from "./utils";
import { SelectContext } from "./MultiSelect";

export default function OptionsListItems() {
  const context = useContext(SelectContext);

  const renderedOptions: JSX.Element[] = [];
  context?.optionsList.forEach((option) => {
    if (context?.inputText === "")
      renderedOptions.push(
        <li
          tabIndex={0}
          key={option.id}
          className="px-4 py-1 cursor-pointer hover:bg-zinc-800 hover:text-slate-50 focus:bg-zinc-800"
          onClick={() => {
            context?.handleSelectOption(option);
          }}
        >
          {option.value}
        </li>
      );
    else if (
      option.value.toLowerCase().startsWith(context.inputText.toLowerCase())
    ) {
      renderedOptions.push(
        <li
          tabIndex={0}
          key={option.id}
          className="px-4 py-1 cursor-pointer hover:bg-zinc-800 hover:text-slate-50 focus:bg-zinc-800"
          onClick={() => {
            context.handleSelectOption(option);
          }}
        >
          {option.value}
        </li>
      );
    }
  });

  if (renderedOptions.length === 0 && context?.inputText !== "") {
    if (!context?.inputText) return;
    const createableOption = CreateAbleObject(context?.inputText);
    renderedOptions.push(
      <li
        tabIndex={0}
        key={createableOption.id}
        className="px-4 py-1 cursor-pointer hover:bg-zinc-800 hover:text-slate-50  focus:bg-zinc-800"
        onClick={() => {
          context.handleSelectOption(createableOption);
        }}
      >
        <span className="text-slate-400">select&nbsp;</span>
        {createableOption.value}
      </li>
    );
  } else if (renderedOptions.length === 0) {
    renderedOptions.push(
      <li
        tabIndex={0}
        className="px-4 py-1 cursor-pointer hover:text-slate-50 text-center focus:bg-zinc-800"
      >
        <span className="text-slate-400 ">No options</span>
      </li>
    );
  }

  return (
    <ul tabIndex={0} className="bg-slate-50">
      {renderedOptions}
    </ul>
  );
}
