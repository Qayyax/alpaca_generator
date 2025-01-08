import { useState } from "react";
import Options from "./Options";
import { AlapacaKey, AlapacaType, alpacaObjects } from "../data";
import ImageComp from "./ImageComp";

export default function Home() {
  const [accessorySelected, setAccessorySelected] =
    useState<AlapacaKey>("accessories");
  const [currentSelected, setCurrentSelected] = useState<AlapacaType>({
    accessories: "headphone",
    ears: "default",
    eyes: "default",
    hair: "default",
    leg: "default",
    mouth: "default",
    neck: "default",
    backgrounds: "blue50",
  } as AlapacaType);

  const data = alpacaObjects;

  // categories from data.tsx
  const dataKeys = Object.keys(data) as AlapacaKey[];
  const dataSelectedValues = Object.hasOwn(data, accessorySelected)
    ? data[accessorySelected]
    : ([] as string[]);

  // functions to get the selected options
  const handleAccessorySelected = (item: string | AlapacaKey) => {
    setAccessorySelected(item as AlapacaKey);
  };

  const handleOptionSelected = (item: string) => {
    setCurrentSelected((prev: AlapacaType) => {
      if (data[accessorySelected].includes(item)) {
        return {
          ...prev,
          [accessorySelected]: item,
        };
      }
      return prev;
    });
  };

  const getRandomAlpaca = () => {
    const updateCurrentSelected = { ...currentSelected };
    for (const key of dataKeys) {
      const n = data[key].length;
      const random = Math.floor(Math.random() * n);
      const item = data[key][random];
      updateCurrentSelected[key] = item;
    }
    setCurrentSelected(updateCurrentSelected);
  };

  return (
    <section className="flex flex-col gap-5 md:flex-row md:gap-9 items-center">
      <ImageComp selected={currentSelected} random={getRandomAlpaca} />
      <div className="flex flex-col gap-4">
        <Options
          title="Accessorize the alpaca's"
          categories={dataKeys}
          handleSelected={handleAccessorySelected}
          selected={accessorySelected}
        />
        <Options
          title="style"
          categories={dataSelectedValues}
          handleSelected={handleOptionSelected}
          selected={currentSelected[accessorySelected]}
        />
      </div>
    </section>
  );
}
