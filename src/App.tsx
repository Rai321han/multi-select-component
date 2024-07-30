import { useState } from "react";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import { options } from "./constants";

export type Tag = {
  tagId: number;
  tagValue: string;
};

function App() {
  const [tags, setTags] = useState<Tag[]>([]);
  return (
    <div className="p-10">
      <MultiSelect options={options} tags={tags} setTags={setTags} />
    </div>
  );
}

export default App;
