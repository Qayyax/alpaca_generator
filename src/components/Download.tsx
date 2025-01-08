type Prop = {
  downloadJpg: () => void;
};
export default function Download({ downloadJpg }: Prop) {
  return (
    <button
      type="button"
      onClick={downloadJpg}
      className="flex gap-2 font-bold border-gray-500 border-2 rounded-md items-center justify-center py-2 px-3"
    >
      <span>🖼️</span> <span>Download</span>
    </button>
  );
}
