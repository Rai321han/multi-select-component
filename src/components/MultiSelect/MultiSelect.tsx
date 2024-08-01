import { useEffect, useState } from "react";
import { Option } from "../../constants";
import OptionsList from "./OptionsList";
import Input from "./Input";
import Button from "./Button";
import { Tag } from "../../App";
import { Style } from "./style";
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
  textColor?: string;
  selectedTextColor?: string;
  bgColorInput?: string;
  bgColorOption?: string;
  borderColor?: string;
  inputBorderSize?: string;
  optionBorderSize?: string;
  optionListColor?: string;
  optionHoverColor?: string;
  selectedBgColor?: string;
  selectedClearColor?: string;
  individualRemoveColor?: string;
  inputBtnColor?: string;
  inputTextColor?: string;
  optionBorderColor?: string;
  optionHoverTextColor?: string;
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
    setInputText("");
  };

  let placeHolderTag: JSX.Element | null;

  if (!controlledProp.placeholder) placeHolderTag = null;
  else {
    placeHolderTag = (
      <div
        className={`${controlledProp.textColor || Style.textColor} 
        ${controlledProp.selectedBgColor || Style.selectedBgColor} 
        flex flex-row items-stretch rounded-lg shadow-md`}
      >
        <div className="px-2 py-1">{controlledProp.placeholder}</div>
        {/* <div className=" text-gray-400 py-1 hover:text-gray-700  hover:bg-red-300 px-1 place-items-stretch rounded-r-lg"></div> */}
      </div>
    );
  }

  const renderedTags = tags.map((tag) => {
    const content: JSX.Element | null =
      tag.isDefault || !controlledProp.isMulti ? null : (
        <div
          className={`${
            controlledProp.selectedTextColor || Style.selectedTextColor
          } py-1 pr-2 place-items-stretch rounded-r-lg`}
          onClick={() => handleClickRemove(tag)}
        >
          &times;
        </div>
      );

    return (
      <div
        key={tag.tagId}
        className={`cursor-pointer  ${
          controlledProp.selectedTextColor || Style.selectedTextColor
        } ${controlledProp.selectedBgColor || Style.selectedBgColor} ${
          controlledProp.selectedTextColor || Style.selectedTextColor
        } flex flex-row items-center rounded-[10px] shadow-md max-w-[90px]`}
      >
        <div className="px-2  py-1 truncate ">{tag.tagValue}</div>
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
        className={`rounded-[15px] text-xs ${
          controlledProp.borderColor || Style.borderColor
        }  solid ${
          controlledProp.inputBorderSize || Style.inputBorderSize
        } shadow-xl  font-poppins`}
      >
        <div className="relative tracking-wide">
          <div
            tabIndex={0}
            onClick={handleClickOpen}
            className={`${
              controlledProp.bgColorInput || Style.bgColorInput
            } flex flex-row px-1.5 py-1.5 w-[200px]  justify-between rounded-[15px]`}
          >
            <div
              className={`flex-1 flex ${
                controlledProp.textSize || Style.textSize
              } flex-row  flex-wrap items-center gap-1 max-w-[100%] pr-1`}
            >
              {placeHolderTag}
              {tags.length ? renderedTags : ""}
              <Input />
            </div>

            <div className="flex flex-row items-center gap-2 justify-center">
              <Button onClick={removeAlltags} />
              {/* <div className="py-2 border-l-2 solid border-l-gray-400"></div> */}
              <div
                className={`flex flex-row items-center justify-center ${
                  controlledProp.textColor || Style.textColor
                }`}
              >
                <span>|</span>
              </div>
              {/* <div className="cursor-pointer p-1 border-l-2 solid border-l-gray-400 border-b-2 solid border-gray-400 -rotate-45"></div> */}
              <svg
                className={`w-[15px] h-[15px] ${
                  controlledProp.inputBtnColor || Style.inputBtnColor
                } `}
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
