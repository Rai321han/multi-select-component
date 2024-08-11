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
      className={`w-[20px] flex flex-grow outline-none px-1 bg-transparent 
        tracking-wide ${
          context?.controlledProp.inputTextColor || Style.inputTextColor
        }`}
      value={context?.inputText}
      placeholder={`${context && context.tags.length < 1 ? "Select..." : ""}`}
      onChange={(e) => {
        context?.setInputText(e.target.value);
        context?.setIsOpen(true);
      }}
      onKeyDown={(e) => {
        if (context?.controlledProp.isCreateable && e.key === "Enter") {
          if (context?.inputText !== "")
            context?.handleSelectOption(CreateAbleObject(context?.inputText));
        }
      }}
    />
  );
}
