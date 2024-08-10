type StyleType = {
  width: string;
  textSize: string;
  textColor: string;
  bgColorInput: string;
  bgColorOption: string;
  borderColor: string;
  inputBorderSize: string;
  optionBorderSize: string;
  optionListColor: string;
  optionHoverBgColor: string;
  selectedBgColor: string;
  selectedTextColor: string;
  individualRemoveColor: string;
  inputBtnColor: string;
  inputTextColor: string;
  optionBorderColor: string;
  optionHoverTextColor: string;
  defaultBgColor: string;
};

export const Style: StyleType = {
  width: "150px",
  textSize: "text-[5px]",
  textColor: "text-[#A5A9B5]",
  bgColorInput: "bg-gray-200",
  bgColorOption: "bg-gray-200",
  borderColor: "border-[#92a1b5]",
  inputBorderSize: "border",
  optionBorderSize: "border",
  optionListColor: "bg-gray-200",
  optionHoverBgColor: "bg-red-500",
  optionHoverTextColor: "text-black",
  selectedBgColor: "bg-gray-600",
  selectedTextColor: "text-gray-900",
  individualRemoveColor: "bg-gray-600",
  inputBtnColor: "white", //cannot be tailwind color class
  inputTextColor: "text-black", //cannot be tailwind color class
  optionBorderColor: "border-red-500",
  defaultBgColor: "bg-gray-700",
};
