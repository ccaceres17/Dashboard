export default function DashboardCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
      <h2 className="text-white font-semibold mb-4">
        {title}
      </h2>

      {children}
    </div>
  );
}