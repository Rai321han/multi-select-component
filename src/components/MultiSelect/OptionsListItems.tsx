import { useContext } from "react";
import { CreateAbleObject } from "./utils";
import { SelectContext } from "./MultiSelect";
import SingleListItem from "./SingleListItem";
import NoOption from "./NoOption";

export default function OptionsListItems() {
  const context = useContext(SelectContext);

  const renderedOptions: JSX.Element[] = [];
  context?.optionsList.forEach((option) => {
    if (context?.inputText === "")
      renderedOptions.push(
        <SingleListItem option={option} onClick={context.handleSelectOption} />
      );
    else if (
      option.value.toLowerCase().startsWith(context.inputText.toLowerCase())
    ) {
      renderedOptions.push(
        <SingleListItem option={option} onClick={context.handleSelectOption} />
      );
    }
  });

  if (
    context?.controlledProp.isCreateable &&
    renderedOptions.length === 0 &&
    context?.inputText !== ""
  ) {
    if (!context?.inputText) return;
    const createableOption = CreateAbleObject(context?.inputText);
    renderedOptions.push(
      <SingleListItem
        option={createableOption}
        onClick={context.handleSelectOption}
        noOption={true}
      />
    );
  } else if (renderedOptions.length === 0) {
    renderedOptions.push(<NoOption />);
  }

  return (
    <ul tabIndex={0} className="px-5 tracking-wide">
      {renderedOptions}
    </ul>
  );
}
