import { useContext, useEffect, useState } from "react";
import { CreateAbleObject } from "./utils";
// import { SelectContext } from "./MultiSelect";
import SingleListItem from "./SingleListItem";
import NoOption from "./NoOption";
import { SelectContext } from "./SelectContext";
import useDebounce from "./hooks/useDebounce";

export default function OptionsListItems() {
  const context = useContext(SelectContext);
  const debouncedText = useDebounce(context?.searchText || "", 250);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setSearchText(debouncedText);
  }, [debouncedText]);

  const renderedOptions: JSX.Element[] = [];
  context?.optionsList.forEach((option) => {
    if (searchText === "")
      renderedOptions.push(
        <SingleListItem
          option={option}
          onClick={context.handleSelectOption}
          key={option.id}
        />
      );
    else if (option.value.toLowerCase().startsWith(searchText.toLowerCase())) {
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
    searchText !== ""
  ) {
    if (!searchText) return;
    const createableOption = CreateAbleObject(searchText);
    renderedOptions.push(
      <SingleListItem
        option={createableOption}
        onClick={context.handleSelectOption}
        noOption={true}
        key={createableOption.id}
      />
    );
  } else if (renderedOptions.length === 0) {
    renderedOptions.push(<NoOption key={crypto.randomUUID()} />);
  }

  return <ul className="tracking-wide listParent">{renderedOptions}</ul>;
}
