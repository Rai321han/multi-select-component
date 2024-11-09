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
    <div className="flex flex-row  pl-1  max-w-fit">
      <p className="text-white text-center px-2  bg-slate-700 rounded-l-md">
        {label}
      </p>
      <input
        type="number"
        min={1}
        max={20}
        className={`bg-gray-200 ${style?.textColor || "text-white"} 
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[35px] h-[25px]  text-center outline-none rounded-r-md`}
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
