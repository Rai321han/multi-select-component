import { useState } from "react";
import MultiSelect from "./components/MultiSelect/MultiSelect";

const options: string[] = ["first", "second", "third", "frouth"];

export type Tag = {
  tagId: number | string;
  tagValue: string;
  isCustom: boolean;
  isDefault: boolean;
};

const controlledProp = {
  limit: 10,
  default: ["default1", "default3", "default4"],
  textSize: "10px",
  isMulti: false,
  placeholder: "tag:",
  isCreateable: false,
};

function App() {
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <div className="p-10">
      <MultiSelect
        options={options}
        tags={tags}
        setTags={setTags}
        controlledProp={controlledProp}
      />
    </div>
  );
}

export default App;
