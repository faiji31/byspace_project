export default function FilterButton({ icon, label }) {
  return (
    <button
      type="button"
      className="flex h-10 items-center gap-2 rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-800 transition hover:bg-gray-50"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}