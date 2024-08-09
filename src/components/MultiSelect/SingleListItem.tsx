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
      className={`hover:bg-[#1b1b1b] tracking-wide hover:text-[${
        userStyle?.optionHoverTextColor || Style.optionHoverTextColor
      }]  border-b-[${
        userStyle?.optionBorderColor || Style.optionBorderColor
      }] px-5  py-[0.35rem] cursor-pointer
        ${userStyle?.textColor || Style.textColor} truncate ... text-[${
        userStyle?.textSize || Style.textSize
      }]`}
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
      {noOption ? (
        <span className={`${userStyle?.textColor || Style.textColor}`}>
          select&nbsp;
        </span>
      ) : null}
      {option.value}
    </li>
  );
}
