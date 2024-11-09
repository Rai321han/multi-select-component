import { useContext } from "react";
// import { SelectContext } from "./MultiSelect";
import { SelectContext } from "./SelectContext";
import { Style } from "./style";

export default function NoOption() {
  const context = useContext(SelectContext);

  return (
    <li
      tabIndex={0}
      className={`px-4 py-1 text-center tracking-wide`}
      // key={123456782434}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.preventDefault()}
    >
      <span
        className={`${context?.controlledProp.textColor || Style.textColor}`}
      >
        No options
      </span>
    </li>
  );
}
