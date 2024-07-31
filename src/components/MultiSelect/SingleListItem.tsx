import { Option } from "../../constants";

type SingleListItemType = {
  option: Option;
  onClick: (option: Option) => void;
  noOption?: boolean;
};

export default function SingleListItem({
  option,
  onClick,
  noOption = false,
}: SingleListItemType) {
  return (
    <li
      tabIndex={0}
      key={option.id}
      className="px-4 py-1 cursor-pointer bg-[#0d1117] hover:bg-[#171d27] text-slate-200 hover:text-slate-50 focus:bg-zinc-800 truncate ..."
      onClick={() => {
        onClick(option);
      }}
    >
      {noOption ? <span className="text-slate-400">select&nbsp;</span> : null}
      {option.value}
    </li>
  );
}
