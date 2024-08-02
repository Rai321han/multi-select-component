import { useContext } from "react";
// import { SelectContext } from "./MultiSelect";
import { SelectContext } from "./SelectContext";
import { CreateAbleObject } from "./utils";
import { Style } from "./style";
// import { Style } from "./style";

export default function Input() {
  const context = useContext(SelectContext);

  return (
    <input
      type="text"
      className={`w-[20px] flex flex-grow outline-none px-1 bg-transparent text-[${
        context?.controlledProp.inputTextColor || Style.inputTextColor
      }] tracking-wide`}
      value={context?.inputText}
      onChange={(e) => {
        context?.setInputText(e.target.value);
        context?.setIsOpen(true);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (context?.inputText !== "")
            context?.handleSelectOption(CreateAbleObject(context?.inputText));
        }
      }}
    />
  );
}
