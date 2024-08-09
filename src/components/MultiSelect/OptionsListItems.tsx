import { useContext } from "react";
import { CreateAbleObject } from "./utils";
// import { SelectContext } from "./MultiSelect";
import SingleListItem from "./SingleListItem";
import NoOption from "./NoOption";
import { SelectContext } from "./SelectContext";

export default function OptionsListItems() {
  const context = useContext(SelectContext);

  const renderedOptions: JSX.Element[] = [];
  context?.optionsList.forEach((option) => {
    if (context?.inputText === "")
      renderedOptions.push(
        <SingleListItem
          option={option}
          onClick={context.handleSelectOption}
          key={option.id}
        />
      );
    else if (
      option.value.toLowerCase().startsWith(context.inputText.toLowerCase())
    ) {
      renderedOptions.push(
        <SingleListItem
          option={option}
          onClick={context.handleSelectOption}
          key={option.id}
        />
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
        key={createableOption.id}
      />
    );
  } else if (renderedOptions.length === 0) {
    renderedOptions.push(<NoOption />);
  }

  return <ul className="tracking-wide listParent">{renderedOptions}</ul>;
}
