const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function CategoryChips() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((cat, i) => (
        <button
          key={cat}
          type="button"
          className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm transition ${
            i === 0
              ? "bg-[#D9FF3D] font-medium text-black" // Featured = active look
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}