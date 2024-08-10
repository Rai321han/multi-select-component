import { useContext } from "react";
import { Option } from "../../constants";
import { Style } from "./style";
// import { SelectContext } from "./MultiSelect";
import { SelectContext } from "./SelectContext";

type SingleListItemType = {
  option: Option;
  onClick: (option: Option) => void;
  noOption?: boolean;
};

export default function SingleListItem({
  option,
  onClick,
  noOption = false,
}: SingleListItemType) {
  const context = useContext(SelectContext);
  const userStyle = context?.controlledProp;

  return (
    <li
      tabIndex={0}
      key={option.id}
      className={`${
        context?.controlledProp.optionBorderColor ||
        userStyle?.optionBorderColor
      } hover:${
        context?.controlledProp.optionHoverColor || userStyle?.optionHoverColor
      } tracking-wide hover:${
        userStyle?.optionHoverTextColor || Style.optionHoverTextColor
      } px-5  py-[0.35rem] cursor-pointer
        truncate ... ${userStyle?.textSize || Style.textSize} `}
      onClick={(e) => {
        onClick(option);
        e.stopPropagation();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick(option);
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      {noOption ? <span>create&nbsp;</span> : null}
      <span className={`${userStyle?.textColor || Style.textColor}`}>
        {noOption ? `"${option.value}"` : option.value}
      </span>
    </li>
  );
}
