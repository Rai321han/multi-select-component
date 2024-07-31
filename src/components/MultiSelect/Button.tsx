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
      <svg
        className="w-[10px] h-[10px] fill-slate-300"
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="512"
        height="512"
      >
        <polygon points="24 1.414 22.586 0 12 10.586 1.414 0 0 1.414 10.586 12 0 22.586 1.414 24 12 13.414 22.586 24 24 22.586 13.414 12 24 1.414" />
      </svg>
    </button>
  );
}
