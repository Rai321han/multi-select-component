import { useContext } from "react";
// import { SelectContext } from "./MultiSelect";
import { SelectContext } from "./SelectContext";
import { CreateAbleObject } from "./utils";
import { Style } from "./style";
// import { Style } from "./style";
// import useDebounce from "./hooks/useDebounce.ts";
export default function Input() {
  const context = useContext(SelectContext);
  // const [inputText, setInputText] = useState("");
  // const debouncedText = useDebounce(context?.inputText || "");

  // useEffect(() => {
  //   context?.setSearchText(debouncedText);
  // }, [inputText]);

  return (
    <input
      type="text"
      className={`w-[20px] flex flex-grow outline-none px-1 bg-transparent 
        tracking-wide ${
          context?.controlledProp.inputTextColor || Style.inputTextColor
        }`}
      // value={context?.inputText}
      value={context?.inputText}
      placeholder={`${context && context.tags.length < 1 ? "Select..." : ""}`}
      onChange={(e) => {
        // console.log(debouncedText);
        // setInputText(e.target.value);
        context?.setSearchText(e.target.value);
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
