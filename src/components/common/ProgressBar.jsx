// export default function ProgressBar({ progress }) {
//   // progress: number between 0 and 100
//   return (
//     <div className="w-full max-w-lg mx-auto mt-6">
//       <div className="relative w-full h-6 bg-slate-700 rounded-full overflow-hidden shadow-inner">
//         {/* Filled part */}
//         <div
//           className="h-full bg-indigo-600 transition-all duration-300 ease-in-out rounded-full"
//           style={{ width: `${progress}%` }}
//         ></div>

//         {/* Percentage label */}
//         <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
//           {progress}%
//         </div>
//       </div>
//     </div>
//   );
// }

export default function DashedProgress({ current, total }) {
  const segments = Array.from({ length: total }, (_, i) => i < current);

  return (
    <div className="flex gap-1 mt-4">
      {segments.map((filled, idx) => (
        <div
          key={idx}
          className={`h-2 flex-1 rounded-full ${
            filled ? "bg-indigo-600" : "bg-slate-600"
          }`}
        />
      ))}
    </div>
  );
}
