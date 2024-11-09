import { useContext } from "react";
// import { SelectContext } from "./MultiSelect";
import { SelectContext } from "./SelectContext";
import { Style } from "./style";

export default function Button({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  const context = useContext(SelectContext);
  return (
    <button
      onClick={(e) => {
        onClick();
        e.stopPropagation();
      }}
      className={`text-xl text-gray-400 hover:text-gray-700 ${className}`}
    >
      {/* &times; */}

      <svg
        className={`w-[10 h-2 ${
          context?.controlledProp.inputBtnColor || Style.inputBtnColor
        }`}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.61991 8.03412L11.8256 13.2398L13.2398 11.8256L8.03412 6.61991L13.2398 1.41421L11.8256 0L6.61991 5.2057L1.41421 0L0 1.41421L5.2057 6.61991L0 11.8256L1.41421 13.2398L6.61991 8.03412Z"
          // fill={`${
          //   context?.controlledProp.inputBtnColor || Style.inputBtnColor
          // } `}
        />
      </svg>
    </button>
  );
}
