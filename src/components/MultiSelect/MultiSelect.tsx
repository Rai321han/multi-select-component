import { useEffect, useState } from "react";
import { Option } from "../../constants";
import OptionsList from "./OptionsList";
import Input from "./Input";
import Button from "./Button";
import { Tag } from "../../App";
import { Style } from "./style";
import { SelectContext } from "./SelectContext";
import "./style.css";

// type ContextType = {
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   options: string[];
//   tags: Tag[];
//   setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
//   setInputText: React.Dispatch<React.SetStateAction<string>>;
//   inputText: string;
//   controlledProp: controlledPropType;
//   handleSelectOption: (option: Option) => void;
//   handleClickRemove: (tag: Tag) => void;
//   removeAlltags: () => void;
//   handleClickOpen: () => void;
//   optionsList: Option[];
//   isOpen: boolean;
// };

type controlledPropType = {
  limit?: number;
  default?: string[] | undefined;
  isMulti?: boolean;
  isRounded?: boolean;
  isCreateable?: boolean;
  isSingleClearable?: boolean;
  isSearchable?: boolean;
  // color properties
  width?: string;
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
  optionHoverBgColor?: string;
  selectedBgColor?: string;
  individualRemoveColor?: string;
  inputBtnColor?: string;
  inputTextColor?: string;
  optionBorderColor?: string;
  optionHoverTextColor?: string;
  defaultBgColor?: string;
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
        <div
          className={`px-2 py-1 ${controlledProp.textSize || Style.textSize}`}
        >
          {controlledProp.placeholder}
        </div>
        {/* <div className=" text-gray-400 py-1 hover:text-gray-700  hover:bg-red-300 px-1 place-items-stretch rounded-r-lg"></div> */}
      </div>
    );
  }

  const renderedTags = tags.map((tag) => {
    const content: JSX.Element | null =
      tag.isDefault || !controlledProp.isMulti ? null : (
        <div
          className={`text-[${
            controlledProp.selectedTextColor || Style.selectedTextColor
          }] py-1 px-1 place-items-stretch rounded-r-lg flex items-center`}
          onClick={(e) => {
            handleClickRemove(tag);
            e.stopPropagation();
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <svg
            className={`w-1.5 h-1.5`}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.61991 8.03412L11.8256 13.2398L13.2398 11.8256L8.03412 6.61991L13.2398 1.41421L11.8256 0L6.61991 5.2057L1.41421 0L0 1.41421L5.2057 6.61991L0 11.8256L1.41421 13.2398L6.61991 8.03412Z"
              fill={`${
                controlledProp.individualRemoveColor ||
                Style.individualRemoveColor
              } `}
            />
          </svg>
        </div>
      );

    return (
      <div
        key={tag.tagId}
        className={`cursor-pointer ${
          tag.isDefault
            ? controlledProp.defaultBgColor || Style.defaultBgColor
            : controlledProp.selectedBgColor || Style.selectedBgColor
        } ${
          controlledProp.selectedTextColor || Style.selectedTextColor
        } flex flex-row rounded-[10px] shadow-lg max-w-[90px] items-stretch truncate ...`}
      >
        <div
          className={`text-[0.7rem] ${
            tag.isDefault || !controlledProp.isMulti ? "px-2" : "pr-1 pl-2"
          } py-1 truncate ...`}
        >
          <p className="truncate ...">{tag.tagValue}</p>
        </div>
        {content}
      </div>
    );
  });

  const handleClickOpen = function () {
    setIsOpen((prev) => !prev);
  };

  const value = {
    setIsOpen,
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
        tabIndex={0}
        onClick={() => {
          handleClickOpen();
        }}
        onBlur={() => {
          setIsOpen(false);
        }}
        className={` text-[${
          controlledProp.textSize || Style.textSize
        }] rounded-[15px] text-[${controlledProp.textSize || Style.textSize}] ${
          controlledProp.borderColor || Style.borderColor
        }  solid ${
          controlledProp.inputBorderSize || Style.inputBorderSize
        } shadow-xl font-poppins w-[100%] sm:w-[450px] min-w-[200px] `}
      >
        <div className="relative tracking-wide w-[100%] z-1000">
          <div
            //

            className={`${
              controlledProp.bgColorInput || Style.bgColorInput
            } flex flex-row px-1.5 py-1.5 max-w-[100%]  justify-between rounded-[15px]`}
          >
            <div
              className={`flex-1 flex text-[${
                controlledProp.textSize || Style.textSize
              }] flex-row  flex-wrap items-center gap-1 max-w-[100%] pr-1`}
            >
              {placeHolderTag}
              {tags.length ? renderedTags : ""}
              <Input />
            </div>

            <div className="flex flex-row items-center gap-[0.3em] justify-center">
              {tags.length > defaultSelected.length ? (
                <Button onClick={removeAlltags} />
              ) : null}
              {/* <div className="py-2 border-l-2 solid border-l-gray-400"></div> */}
              <div
                className={`flex flex-row items-center justify-center ${
                  controlledProp.textColor || Style.textColor
                }`}
              >
                <svg
                  className={`min-w-fit h-4 text-center`}
                  viewBox="0 0 3 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.912842 31V0H2.91284V31H0.912842Z"
                    fill={`${
                      controlledProp.inputBtnColor || Style.inputBtnColor
                    } `}
                  />
                </svg>
              </div>
              <svg
                className={`mr-1 w-[10px] h-[10px]`}
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.205811 1.70718L1.62002 0.292969L8.91292 7.58586L16.2058 0.292969L17.62 1.70718L8.91292 10.4143L0.205811 1.70718Z"
                  fill={`${
                    controlledProp.inputBtnColor || Style.inputBtnColor
                  } `}
                />
              </svg>
            </div>
          </div>

          <OptionsList />
        </div>
      </div>
    </SelectContext.Provider>
  );
}
