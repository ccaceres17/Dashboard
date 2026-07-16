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

      {/* HOME */}

      <button
        onClick={() => sendCommand("/cnc/home")}
        className="w-full bg-gray-700 hover:bg-gray-800 rounded-lg p-4 text-white font-bold"
      >
        HOME
      </button>

      {/* EJES */}

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

      {/* BRAZOS */}

      <div className="grid grid-cols-2 gap-3">

        <button
          onClick={() => sendCommand("/cnc/arm1/extend")}
          className="bg-orange-600 hover:bg-orange-700 rounded-lg p-4 text-white font-semibold"
        >
          ARM1 +
        </button>

        <button
          onClick={() => sendCommand("/cnc/arm1/retract")}
          className="bg-orange-600 hover:bg-orange-700 rounded-lg p-4 text-white font-semibold"
        >
          ARM1 -
        </button>

        <button
          onClick={() => sendCommand("/cnc/arm2/extend")}
          className="bg-amber-600 hover:bg-amber-700 rounded-lg p-4 text-white font-semibold"
        >
          ARM2 +
        </button>

        <button
          onClick={() => sendCommand("/cnc/arm2/retract")}
          className="bg-amber-600 hover:bg-amber-700 rounded-lg p-4 text-white font-semibold"
        >
          ARM2 -
        </button>

      </div>

      {/* BANDEJA */}

      <div className="grid grid-cols-2 gap-3">

        <button
          onClick={() => sendCommand("/cnc/tray/extend")}
          className="bg-cyan-600 hover:bg-cyan-700 rounded-lg p-4 text-white font-semibold"
        >
          EXTENDER BANDEJA
        </button>

        <button
          onClick={() => sendCommand("/cnc/tray/retract")}
          className="bg-cyan-600 hover:bg-cyan-700 rounded-lg p-4 text-white font-semibold"
        >
          RETRAER BANDEJA
        </button>

      </div>

      {/* CICLO */}

      <button
        onClick={() => sendCommand("/cnc/extract")}
        className="w-full bg-red-600 hover:bg-red-700 rounded-lg p-4 text-white font-bold"
      >
        CICLO COMPLETO
      </button>

    </div>
  );
}