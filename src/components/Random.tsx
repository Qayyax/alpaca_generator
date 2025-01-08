type Prop = {
  random: () => void;
};
export default function Random({ random }: Prop) {
  return (
    <button
      className="flex gap-2 items-center justify-center px-3 font-bold bg-white py-2 border-gray-500 border-2 rounded-md"
      onClick={random}
    >
      <span>🔀</span> <span>Random</span>
    </button>
  );
}
