import { useContext } from "react";
import { Option } from "../../constants";
import { Style } from "./style";
import { SelectContext } from "./MultiSelect";

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
      className={`tracking-wide hover:text-[${
        userStyle?.optionHoverTextColor || Style.optionHoverTextColor
      }] solid border-b-[0.01px] border-b-[${
        userStyle?.optionBorderColor || Style.optionBorderColor
      }] py-2 cursor-pointer hover:${
        userStyle?.optionHoverColor || Style.optionHoverColor
      } 
      ${userStyle?.textColor || Style.textColor} hover:${
        userStyle?.textColor || Style.textColor
      } truncate ...`}
      onClick={() => {
        onClick(option);
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
