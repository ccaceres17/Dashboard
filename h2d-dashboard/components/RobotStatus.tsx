export default function RobotStatusCard({
  x,
  y,
  z,
  arm1,
  arm2,
}: {
  x: number;
  y: number;
  z: number;
  arm1: string;
  arm2: string;
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-4 shadow">
      <h2 className="text-xl font-bold mb-4">
        🤖 Robot Extractor
      </h2>

      <div className="space-y-2">
        <p>Horizontal (X): {x} mm</p>
        <p>Elevador (Y): {y} mm</p>
        <p>Bandeja (Z): {z} mm</p>

        <hr className="border-slate-600" />

        <p>Brazo 1: {arm1}</p>
        <p>Brazo 2: {arm2}</p>
      </div>
    </div>
  );
}