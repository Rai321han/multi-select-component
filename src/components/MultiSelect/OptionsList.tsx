import { useContext } from "react";
import OptionsListItems from "./OptionsListItems";
import { SelectContext } from "./MultiSelect";
import { Style } from "./style";

export default function OptionsList() {
  const context = useContext(SelectContext);
  const userStyle = context?.controlledProp;
  return (
    <div className="overflow-hidden z-[100]">
      <div
        tabIndex={0}
        onBlur={context?.handleClickOpen}
        className={` ${
          context?.isOpen ? "block" : "hidden"
        } w-full max-h-40 overflow-y-auto  left-0 ${
          userStyle?.optionListColor || Style?.optionListColor
        } top-[100%] absolute mt-2 rounded-xl shadow-lg ${
          userStyle?.optionBorderSize || Style.optionBorderSize
        } ${userStyle?.optionBorderSize || Style.optionBorderSize} ${
          userStyle?.borderColor || Style.borderColor
        }`}
      >
        <OptionsListItems />
      </div>
    </div>
  );
}
