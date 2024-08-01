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
  optionHoverColor: string;
  selectedBgColor: string;
  selectedTextColor: string;
  selectedClearColor: string;
  individualRemoveColor: string;
  inputBtnColor: string;
  inputTextColor: string;
  optionBorderColor: string;
  optionHoverTextColor: string;
};

export const Style: StyleType = {
  width: "150px",
  textSize: "2px",
  textColor: "text-[#A5A9B5]",
  bgColorInput: "bg-gray-200",
  bgColorOption: "bg-gray-200",
  borderColor: "border-[#92a1b5]",
  inputBorderSize: "border",
  optionBorderSize: "border",
  optionListColor: "bg-gray-200",
  optionHoverColor: "bg-black",
  optionHoverTextColor: "text-white",
  selectedBgColor: "bg-gray-600",
  selectedTextColor: "text-gray-900",
  selectedClearColor: "#000000", //cannot be tailwind color class
  individualRemoveColor: "bg-gray-600",
  inputBtnColor: "white", //cannot be tailwind color class
  inputTextColor: "#ffffff", //cannot be tailwind color class
  optionBorderColor: "bg-gray-600",
};
