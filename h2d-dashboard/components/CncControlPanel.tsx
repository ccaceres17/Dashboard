export default function CncControlPanel() {

  const api = "http://127.0.0.1:8000";

  const sendCommand = async (endpoint: string) => {

    try {

      const response = await fetch(
        `${api}${endpoint}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      console.log(data);

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <div className="space-y-3">

      <div className="grid grid-cols-2 gap-3">

        <button
          onClick={() => sendCommand("/cnc/xplus")}
          className="bg-blue-600 hover:bg-blue-700 rounded-lg p-4 text-white font-semibold"
        >
          X+
        </button>

        <button
          onClick={() => sendCommand("/cnc/xminus")}
          className="bg-blue-600 hover:bg-blue-700 rounded-lg p-4 text-white font-semibold"
        >
          X-
        </button>

        <button
          onClick={() => sendCommand("/cnc/yplus")}
          className="bg-green-600 hover:bg-green-700 rounded-lg p-4 text-white font-semibold"
        >
          Y+
        </button>

        <button
          onClick={() => sendCommand("/cnc/yminus")}
          className="bg-green-600 hover:bg-green-700 rounded-lg p-4 text-white font-semibold"
        >
          Y-
        </button>

        <button
          onClick={() => sendCommand("/cnc/zplus")}
          className="bg-purple-600 hover:bg-purple-700 rounded-lg p-4 text-white font-semibold"
        >
          Z+
        </button>

        <button
          onClick={() => sendCommand("/cnc/zminus")}
          className="bg-purple-600 hover:bg-purple-700 rounded-lg p-4 text-white font-semibold"
        >
          Z-
        </button>

      </div>

      <div className="grid grid-cols-2 gap-3">

        <button
          className="bg-orange-600 rounded-lg p-4 text-white font-semibold"
        >
          BRAZO 1
        </button>

        <button
          className="bg-orange-600 rounded-lg p-4 text-white font-semibold"
        >
          BRAZO 2
        </button>

        <button
          className="bg-cyan-600 rounded-lg p-4 text-white font-semibold"
        >
          EXTENDER BANDEJA
        </button>

        <button
          className="bg-cyan-600 rounded-lg p-4 text-white font-semibold"
        >
          RETRAER BANDEJA
        </button>

      </div>

      <button
        className="w-full bg-red-600 rounded-lg p-4 text-white font-bold"
      >
        CICLO COMPLETO
      </button>

    </div>
  );
}