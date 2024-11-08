type Style = {
  textSize?: string;
  textColor?: string;
  bgColor?: string;
};

type NumberInputType = {
  style?: Style;
  input: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  label?: string;
};

export default function NumberInput({
  style,
  input,
  onChange,
  label,
}: NumberInputType) {
  return (
    <div className="flex flex-row gap-[10px] py-3">
      <p
        className={`${style?.textColor || "text-white"} ${
          style?.textSize || "16px"
        }`}
      >
        {label}
      </p>
      <input
        type="number"
        min={1}
        max={20}
        className={`${style?.textColor || "text-white"} 
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[35px] h-[25px] ${
              style?.bgColor || "bg-white"
            } text-center outline-none`}
        value={input}
        onChange={(e) => {
          const inputValue = Number(e.target.value);
          if (isNaN(inputValue)) onChange(1);
          else {
            if (inputValue < 0) onChange(-inputValue);
            else if (inputValue > 20) onChange(20);
            else onChange(inputValue);
          }
        }}
      />
    </div>
  );
}
