import { useState } from "react";
import { Option } from "../../constants";
import OptionsList from "./OptionsList";
import Input from "./Input";
import Button from "./Button";
import { Tag } from "../../App";
import angle from "./assets/angle-down.svg";

type MultiSelectProps = {
  options: Option[];
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
};

export default function MultiSelect({
  options,
  tags,
  setTags,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [optionsList, setOptionsList] = useState(options);
  const [inputText, setInputText] = useState("");

  const handleSelectOption = function (option: Option) {
    const isCustomValue = option.isCustom ? true : false;
    const updatedTags = [
      ...tags,
      { tagId: option.id, tagValue: option.value, isCustom: isCustomValue },
    ];

    if (!option.isCustom) {
      const updatedOptions = optionsList.filter(
        (thisOption) => thisOption.id !== option.id
      );
      setOptionsList(updatedOptions);
    }
    setInputText("");
    setTags(updatedTags);
  };

  const handleClickRemove = function (tag: Tag) {
    const updatedTags = tags.filter((tagItem) => tagItem.tagId !== tag.tagId);

    if (!tag.isCustom) {
      const updatedOptions = [
        ...optionsList,
        {
          id: tag.tagId,
          value: tag.tagValue,
          isCustom: false,
        },
      ];
      setOptionsList(updatedOptions);
    }
    setTags(updatedTags);
  };

  const removeAlltags = function () {
    const updatedOptions: Option[] = [];
    tags.forEach((tag) => {
      if (!tag.isCustom) {
        updatedOptions.push({
          id: tag.tagId,
          value: tag.tagValue,
          isCustom: false,
        });
      }
    });

    setOptionsList([...updatedOptions, ...optionsList]);
    setTags([]);
  };

  const placeHolderTag = (
    <div className=" text-gray-200 bg-zinc-500 text-[10px] flex flex-row items-stretch rounded-lg shadow-md">
      <div className="px-2 py-1 ">tags:</div>
      {/* <div className=" text-gray-400 py-1 hover:text-gray-700  hover:bg-red-300 px-1 place-items-stretch rounded-r-lg"></div> */}
    </div>
  );

  const renderedTags = tags.map((tag) => {
    return (
      <div
        key={tag.tagId}
        className="cursor-pointer  text-gray-200 bg-zinc-950 text-xs flex flex-row items-stretch rounded-lg shadow-md"
      >
        <div className="px-2 py-1 ">{tag.tagValue}</div>
        <div
          className=" text-gray-400 py-1 hover:text-gray-700  hover:bg-red-300 px-1 place-items-stretch rounded-r-lg"
          onClick={() => handleClickRemove(tag)}
        >
          &times;
        </div>
      </div>
    );
  });

  const handleClickOpen = function () {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="rounded-xl w-[200px] text-xs box-border border-zinc-950 solid border-2">
      <div className="relative">
        <div
          tabIndex={0}
          onClick={handleClickOpen}
          className="flex flex-row px-1 py-1"
        >
          <div className="  flex-1 flex flex-row flex-wrap items-center gap-1">
            {placeHolderTag}
            {tags.length ? renderedTags : ""}
            <Input setInputText={setInputText} inputText={inputText} />
          </div>

          <div className="flex flex-row items-center gap-2 justify-center">
            <Button onClick={removeAlltags} />
            {/* <div className="py-2 border-l-2 solid border-l-gray-400"></div> */}
            <div className=" flex flex-row items-center justify-center">
              <span>|</span>
            </div>
            {/* <div className="cursor-pointer p-1 border-l-2 solid border-l-gray-400 border-b-2 solid border-gray-400 -rotate-45"></div> */}
            <img src={angle} className="w-5 p-1 " alt="angle-down" />
          </div>
        </div>

        <OptionsList
          searchText={inputText}
          isOpen={isOpen}
          handleClickOpen={handleClickOpen}
          optionsList={optionsList}
          handleSelectOption={handleSelectOption}
        />
      </div>
    </div>
  );
}
