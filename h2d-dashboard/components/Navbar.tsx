export default function Navbar() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6 flex justify-between items-center">
      <div>
        <h1 className="text-white text-xl font-bold">
          Hello Administrator
        </h1>

        <p className="text-slate-400 text-sm">
          H2D Production Monitoring
        </p>
      </div>

      <div className="flex gap-3">
        <button className="bg-slate-800 text-white px-4 py-2 rounded-lg">
          New Automation
        </button>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          New Print
        </button>
      </div>
    </div>
  );
}