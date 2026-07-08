type RobotStatusProps = {
  x: number;
  y: number;
  z: number;
  arm1: string;
  arm2: string;
};

export default function RobotStatusCard({
  x,
  y,
  z,
  arm1,
  arm2,
}: RobotStatusProps) {
  return (
    <div className="space-y-3 text-white">
      <div className="flex justify-between">
        <span>Horizontal (X)</span>
        <span>{x} mm</span>
      </div>

      <div className="flex justify-between">
        <span>Elevador (Y)</span>
        <span>{y} mm</span>
      </div>

      <div className="flex justify-between">
        <span>Bandeja (Z)</span>
        <span>{z} mm</span>
      </div>

      <hr className="border-slate-600" />

      <div className="flex justify-between">
        <span>Brazo 1</span>
        <span className="text-green-400">{arm1}</span>
      </div>

      <div className="flex justify-between">
        <span>Brazo 2</span>
        <span className="text-green-400">{arm2}</span>
      </div>

      <div className="flex justify-between">
        <span>Modo</span>
        <span>CNC READY</span>
      </div>
    </div>
  );
}