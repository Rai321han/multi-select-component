type StyleType = {
  textSize: string;
  textColor: string;
  bgColorInput: string;
  // bgColorOption: string;
  isRounded?: boolean;
  borderColor: string;
  inputBorderSize?: string;
  optionBorderSize?: string;
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
  inputShadow?: string;
};

export const Style: StyleType = {
  textSize: "text-[1rem]",
  textColor: "text-black",
  bgColorInput: "bg-white",
  // bgColorOption: "bg-gray-200",
  // isRounded: true,
  borderColor: "border-gray-400",
  inputBorderSize: "border",
  optionBorderSize: "border",
  optionListColor: "bg-white",
  optionHoverBgColor: "hover:bg-blue-600",
  optionHoverTextColor: "hover:text-white",
  selectedBgColor: "bg-blue-500",
  selectedTextColor: "text-white",
  individualRemoveColor: "fill-white",
  inputBtnColor: "fill-gray-400",
  inputTextColor: "text-black",
  optionBorderColor: "border-gray-300",
  defaultBgColor: "bg-gray-700",
};
