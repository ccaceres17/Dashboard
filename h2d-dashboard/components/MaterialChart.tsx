"use client";

type Props = {
  material: string;
  available: number;
  printId: string;
  completed: number;
  total: number;
};

export default function MaterialChart({
  material,
  available,
  printId,
  completed,
  total,
}: Props) {
  return (
    <div className="space-y-4">

      <div>
        <p className="text-slate-400 text-sm">
          Material Actual
        </p>

        <h2 className="text-2xl font-bold text-white">
          {material}
        </h2>
      </div>

      <div>
        <p className="text-slate-400 text-sm">
          Disponible
        </p>

        <h2 className="text-2xl font-bold text-green-500">
          {available} g
        </h2>
      </div>

      <div>
        <p className="text-slate-400 text-sm">
          Producción
        </p>

        <h2 className="text-xl font-bold text-cyan-400">
          {completed}/{total}
        </h2>
      </div>

      <div>
        <p className="text-slate-400 text-sm">
          Print ID
        </p>

        <h2 className="text-xl font-bold text-white">
          #{printId}
        </h2>
      </div>

    </div>
  );
}