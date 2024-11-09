import { createContext } from "react";
import { Tag } from "../../App";
import { Option } from "../../constants";
type ContextType = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  options: string[];
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  inputText: string;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  controlledProp: controlledPropType;
  handleSelectOption: (option: Option) => void;
  handleClickRemove: (tag: Tag) => void;
  removeAlltags: () => void;
  handleClickOpen: () => void;
  optionsList: Option[];
  isOpen: boolean;
};

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
  placeholderColor?: string;
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
  selectedClearColor?: string;
  individualRemoveColor?: string;
  inputBtnColor?: string;
  inputTextColor?: string;
  optionBorderColor?: string;
  optionHoverTextColor?: string;
  defaultBgColor?: string;
};

export const SelectContext = createContext<ContextType | null>(null);
