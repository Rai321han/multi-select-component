import cross from "./assets/cross.svg";

export default function Button({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xl text-gray-400 hover:text-gray-700 ${className}`}
    >
      {/* &times; */}
      <img src={cross} alt="" className="w-4 px-1" />
    </button>
  );
}
