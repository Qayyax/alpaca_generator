type Props = {
  category: string;
  onClick: (item: string) => void;
  isSelected: boolean;
};

export default function Option({ category, onClick, isSelected }: Props) {
  const notSelectedStyle = `border-2 border-purple-800 text-purple-800 focus:outline-purple-800 hover:font-bold hover:border-[3px]`;
  const selectedStyle = `border-none bg-purple-800 text-white`;
  const styleUsed = isSelected ? selectedStyle : notSelectedStyle;
  return (
    <button
      className={`rounded-3xl  px-4 py-2 focus:border-[3px] ${styleUsed}`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
}
