type InputProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export default function Input({ inputText, setInputText }: InputProps) {
  return (
    <input
      type="text"
      className="text-sm w-[20px] flex flex-grow outline-none px-1"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
  );
}
