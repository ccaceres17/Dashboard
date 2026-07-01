type Props = {
  title: string;
  value: string;
  unit?: string;
};

export default function MetricCard({
  title,
  value,
  unit,
}: Props) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        {value}
        <span className="text-green-500 ml-2">
          {unit}
        </span>
      </h2>
    </div>
  );
}