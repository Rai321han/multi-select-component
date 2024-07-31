import { useEffect, useState } from "react";
import { Option } from "../../constants";
import OptionsList from "./OptionsList";
import Input from "./Input";
import Button from "./Button";
import { Tag } from "../../App";
import angle from "./assets/angle-down.svg";

import { createContext } from "react";

type ContextType = {
  options: string[];
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  inputText: string;
  controlledProp: controlledPropType;
  handleSelectOption: (option: Option) => void;
  handleClickRemove: (tag: Tag) => void;
  removeAlltags: () => void;
  handleClickOpen: () => void;
  optionsList: Option[];
  isOpen: boolean;
};

export const SelectContext = createContext<ContextType | null>(null);

type controlledPropType = {
  limit?: number;
  default?: string[] | undefined;
  isMulti?: boolean;
  isRounded?: boolean;
  isCreateable?: boolean;
  isSingleClearable?: boolean;
  isSearchable?: boolean;
  // color properties
  bgColor?: string;
  borderColor?: string;
  optionColor?: string;
  optionHoverColor?: string;
  selectedBgColor?: string;
  selectedClearColor?: string;
  individualRemoveColor?: string;
  clearAllColor?: string;
};

type MultiSelectProps = {
  options: string[];
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  controlledProp: controlledPropType;
};

export default function MultiSelect({
  options,
  tags,
  setTags,
  controlledProp,
}: MultiSelectProps) {
  let optionId: number = 0;

  const optionsCollection: Option[] = [];
  const defaultSelected: Tag[] = [];

  controlledProp.default?.forEach((option) => {
    defaultSelected.push({
      tagId: optionId++,
      tagValue: option,
      isCustom: false,
      isDefault: true,
    });
  });

  useEffect(() => {
    const updatedTags = [...tags, ...defaultSelected];
    setTags(updatedTags);
  }, []);

  options.forEach((option) => {
    optionsCollection.push({
      id: optionId++,
      value: option,
      isCustom: false,
    });
  });

  const [isOpen, setIsOpen] = useState(false);
  const [optionsList, setOptionsList] = useState(optionsCollection);
  const [inputText, setInputText] = useState("");

  const handleSelectOption = function (option: Option) {
    if (tags.length === controlledProp.limit) {
      return;
    }

    const isCustomValue = option.isCustom ? true : false;
    const updatedTags = [
      ...tags,
      {
        tagId: option.id,
        tagValue: option.value,
        isCustom: isCustomValue,
        isDefault: false,
      },
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
      if (!tag.isCustom && !tag.isDefault) {
        updatedOptions.push({
          id: tag.tagId,
          value: tag.tagValue,
          isCustom: false,
        });
      }
    });

    setOptionsList([...updatedOptions, ...optionsList]);

    const updatedTags = tags.filter((tag) => tag.isDefault === true);
    setTags(updatedTags);
  };

  const placeHolderTag = (
    <div className=" text-gray-200 bg-zinc-500 text-[10px] flex flex-row items-stretch rounded-lg shadow-md">
      <div className="px-2 py-1 ">tags:</div>
      {/* <div className=" text-gray-400 py-1 hover:text-gray-700  hover:bg-red-300 px-1 place-items-stretch rounded-r-lg"></div> */}
    </div>
  );

  const renderedTags = tags.map((tag) => {
    const content: JSX.Element | null = tag.isDefault ? null : (
      <div
        className=" text-gray-400 py-1 hover:text-gray-700  hover:bg-red-300 px-1 place-items-stretch rounded-r-lg"
        onClick={() => handleClickRemove(tag)}
      >
        &times;
      </div>
    );

    return (
      <div
        key={tag.tagId}
        className={`cursor-pointer  text-gray-200 ${
          tag.isDefault ? "bg-zinc-500" : "bg-zinc-950"
        }   text-xs flex flex-row items-stretch rounded-lg shadow-md`}
      >
        <div className="px-2 py-1 ">{tag.tagValue}</div>
        {content}
      </div>
    );
  });

  const handleClickOpen = function () {
    setIsOpen((prev) => !prev);
  };

  const value = {
    options,
    tags,
    setTags,
    inputText,
    setInputText,
    controlledProp,
    handleSelectOption,
    handleClickRemove,
    removeAlltags,
    handleClickOpen,
    optionsList,
    isOpen,
  };

  return (
    <SelectContext.Provider value={value}>
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
              <Input
              // setInputText={setInputText}
              // inputText={inputText}
              // handleSelectOption={handleSelectOption}
              // searchText={inputText}
              />
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

          <OptionsList />
        </div>
      </div>
    </SelectContext.Provider>
  );
}
