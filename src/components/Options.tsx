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
    <div className="flex flex-col items-start gap-y-2">
      {/*the width is full*/}
      <h2 className="font-extrabold">{title.toUpperCase()}</h2>
      <div className="flex flex-wrap gap-2 max-w-[450px] p-4 border-red-700 rounded-lg">
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
