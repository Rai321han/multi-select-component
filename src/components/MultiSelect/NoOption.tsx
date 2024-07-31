export default function NoOption() {
  return (
    <li
      tabIndex={0}
      className="px-4 py-1 cursor-pointer hover:text-slate-50 text-center focus:bg-zinc-800"
    >
      <span className="text-slate-400 ">No options</span>
    </li>
  );
}
