export default function CncControlPanel() {
  return (
    <div className="space-y-3">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        <button className="bg-blue-600 hover:bg-blue-700 rounded-lg p-4 text-white font-semibold text-sm md:text-base">
          HOME
        </button>

        <button className="bg-green-600 hover:bg-green-700 rounded-lg p-4 text-white font-semibold text-sm md:text-base">
          EXTENDER BANDEJA
        </button>

        <button className="bg-amber-500 hover:bg-amber-600 rounded-lg p-4 text-white font-semibold text-sm md:text-base">
          RETRAER BANDEJA
        </button>

        <button className="bg-purple-600 hover:bg-purple-700 rounded-lg p-4 text-white font-semibold text-sm md:text-base">
          BRAZO 1
        </button>

        <button className="bg-purple-600 hover:bg-purple-700 rounded-lg p-4 text-white font-semibold text-sm md:text-base">
          BRAZO 2
        </button>

      </div>

      <button className="w-full bg-red-600 hover:bg-red-700 rounded-lg p-4 text-white font-bold text-sm md:text-base">
        CICLO COMPLETO
      </button>

    </div>
  );
}