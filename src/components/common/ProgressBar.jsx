export default function DashedProgress({ current, total }) {
  const segments = Array.from({ length: total }, (_, i) => i < current);

  return (
    <div className="flex gap-1 mt-4">
      {segments.map((filled, idx) => (
        <div
          key={idx}
          className={`h-2 flex-1 mt-2 rounded-sm ${
            filled ? "bg-indigo-600" : "bg-slate-600"
          }`}
        />
      ))}
    </div>
  );
}
