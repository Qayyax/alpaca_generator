import { AlapacaKey } from "../data";
import Option from "./Option";

type Props = {
  title: string;
  categories: string[] | AlapacaKey[];
  handleSelected: (item: string | AlapacaKey) => void;
  selected: string | AlapacaKey | undefined;
};

export default function Options({
  title,
  categories,
  selected,
  handleSelected,
}: Props) {
  return (
    <div className="border-2 border-purple-900 rounded-lg flex flex-col items-start gap-y-2">
      {/*the width is full*/}
      <h2 className="font-semibold">{title.toUpperCase()}</h2>
      <div className="flex flex-wrap gap-2 border-2 p-4 border-red-700 rounded-lg">
        {/*any option selected here should be saved*/}
        {categories &&
          categories.map((option) => (
            <Option
              category={option}
              key={option}
              onClick={handleSelected}
              isSelected={selected === option}
            />
          ))}
      </div>
    </div>
  );
}
