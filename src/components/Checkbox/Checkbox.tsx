type CheckBoxStyleType = {
  textSize?: string;
  textColor?: string;
  checkedColor?: string;
};

type CheckboxType = {
  isDisabled?: boolean;
  text: string;
  style?: CheckBoxStyleType;
  state: boolean;
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Checkbox({
  style,
  text,
  handleClick,
  state,
}: CheckboxType) {
  return (
    <div
      onClick={() => {
        handleClick((prev) => !prev);
      }}
      className="flex flex-row justify-center items-center gap-[5px]"
    >
      <div
        className={`${
          state ? "bg-zinc-900" : "bg-zinc-500"
        } w-[10px] h-[10px] border border-white rounded-lg`}
      ></div>
      <p
        className={`${style?.textColor || "text-black"} ${
          style?.textSize || "2px"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
