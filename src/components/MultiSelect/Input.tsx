import { useContext } from "react";
import { SelectContext } from "./MultiSelect";
import { CreateAbleObject } from "./utils";

export default function Input() {
  const context = useContext(SelectContext);

  return (
    <input
      type="text"
      className={`text-sm w-[20px] flex flex-grow outline-none px-1  ${
        context?.controlledProp.bgColor
          ? context?.controlledProp.bgColor
          : "bg-transparent"
      }`}
      value={context?.inputText}
      onChange={(e) => context?.setInputText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (context?.inputText !== "")
            context?.handleSelectOption(CreateAbleObject(context?.inputText));
        }
      }}
    />
  );
}
