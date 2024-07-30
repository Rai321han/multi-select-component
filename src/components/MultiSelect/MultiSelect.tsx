import { useState } from "react";
import { Option } from "../../constants";
import OptionsList from "./OptionsList";
import Input from "./Input";
import Button from "./Button";
import { Tag } from "../../App";

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

  const handleSelectOption = function (option: Option) {
    const updatedTags = [...tags, { tagId: option.id, tagValue: option.value }];
    const updatedOptions = optionsList.filter(
      (thisOption) => thisOption.id !== option.id
    );
    setOptionsList(updatedOptions);
    setTags(updatedTags);
  };

  const handleClickRemove = function (tag: Tag) {
    const updatedTags = tags.filter((tagItem) => tagItem.tagId !== tag.tagId);
    const updatedOptions = [
      ...optionsList,
      {
        id: tag.tagId,
        value: tag.tagValue,
      },
    ];
    setOptionsList(updatedOptions);
    setTags(updatedTags);
  };

  const removeAlltags = function () {
    const updatedOptions: Option[] = [];
    tags.forEach((tag) => {
      updatedOptions.push({
        id: tag.tagId,
        value: tag.tagValue,
      });
    });

    setOptionsList([...updatedOptions, ...optionsList]);
    setTags([]);
  };

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
          <div className="  flex-1 flex flex-row flex-wrap items-center gap-2">
            <div className="flex flex-row flex-wrap gap-1">
              {tags.length ? renderedTags : ""}
            </div>
            <Input />
          </div>

          <div className="flex flex-row items-center gap-2 px-2">
            <Button onClick={removeAlltags} />
            <div className="cursor-pointer p-1 border-l-2 solid border-l-gray-400 border-b-2 solid border-gray-400 -rotate-45"></div>
          </div>
        </div>

        <OptionsList
          isOpen={isOpen}
          handleClickOpen={handleClickOpen}
          optionsList={optionsList}
          handleSelectOption={handleSelectOption}
        />
      </div>
    </div>
  );
}
