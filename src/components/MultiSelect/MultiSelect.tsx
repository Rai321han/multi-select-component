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
  placeholder?: string;
  textSize?: string;
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

  if (controlledProp.isMulti) {
    controlledProp.default?.forEach((option) => {
      defaultSelected.push({
        tagId: optionId++,
        tagValue: option,
        isCustom: false,
        isDefault: true,
      });
    });
  }

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
    if (!controlledProp.isMulti && tags.length === 1) return;

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
    <div className=" text-gray-200 bg-zinc-500 flex flex-row items-stretch rounded-lg shadow-md">
      <div className="px-2 py-1 ">{controlledProp.placeholder}</div>
      {/* <div className=" text-gray-400 py-1 hover:text-gray-700  hover:bg-red-300 px-1 place-items-stretch rounded-r-lg"></div> */}
    </div>
  );

  const renderedTags = tags.map((tag) => {
    const content: JSX.Element | null =
      tag.isDefault || !controlledProp.isMulti ? null : (
        <div
          className=" text-[#161b22] py-1 hover:text-gray-700  hover:bg-red-300 px-1 place-items-stretch rounded-r-lg"
          onClick={() => handleClickRemove(tag)}
        >
          &times;
        </div>
      );

    return (
      <div
        key={tag.tagId}
        className={`cursor-pointer  text-[#161b22] ${
          tag.isDefault ? "bg-zinc-500" : "bg-[#92a1b5]"
        }   text-xs flex flex-row items-center rounded-lg shadow-md max-w-[90px]`}
      >
        <div className="px-1 py-1 truncate">{tag.tagValue}</div>
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
      <div
        className={`rounded-xl text-xs box-border border-[#92a1b5] solid border shadow-lg`}
      >
        <div className="relative">
          <div
            tabIndex={0}
            onClick={handleClickOpen}
            className="flex flex-row px-1.5 py-1 w-[200px]  justify-between"
          >
            <div
              className={`flex-1 flex text-xs flex-row  flex-wrap items-center gap-1 max-w-[100%]`}
            >
              {placeHolderTag}
              {tags.length ? renderedTags : ""}
              <Input />
            </div>

            <div className="flex flex-row items-center gap-2 justify-center">
              <Button onClick={removeAlltags} />
              {/* <div className="py-2 border-l-2 solid border-l-gray-400"></div> */}
              <div className=" flex flex-row items-center justify-center text-[#92a1b5]">
                <span>|</span>
              </div>
              {/* <div className="cursor-pointer p-1 border-l-2 solid border-l-gray-400 border-b-2 solid border-gray-400 -rotate-45"></div> */}
              <svg
                className="w-[15px] h-[15px] fill-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="m12,18c-.4,0-.777-.156-1.061-.439L.112,6.733l.707-.707,10.827,10.827c.189.189.518.189.707,0l10.827-10.827.707.707-10.827,10.827c-.283.283-.66.439-1.061.439Z" />
              </svg>
            </div>
          </div>

          <OptionsList />
        </div>
      </div>
    </SelectContext.Provider>
  );
}
