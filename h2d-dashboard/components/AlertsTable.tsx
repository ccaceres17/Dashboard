type Props = {
  printId: string;
  jobName: string;
  status: string;
  material: string;
  progress: number;
  layer: number;
  totalLayers: number;
};

export default function AlertsTable({
  printId,
  jobName,
  status,
  material,
  progress,
  layer,
  totalLayers,
}: Props) {
  return (
    <table className="w-full text-sm text-white">
      <thead>
        <tr className="text-slate-400 border-b border-slate-700">
          <th className="text-left p-2">ID</th>
          <th className="text-left p-2">Trabajo</th>
          <th className="text-left p-2">Estado</th>
          <th className="text-left p-2">Material</th>
          <th className="text-left p-2">Progreso</th>
          <th className="text-left p-2">Capa</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="p-2">{printId}</td>

          <td className="p-2">
            {jobName}
          </td>

          <td className="p-2 text-green-400">
            {status}
          </td>

          <td className="p-2">
            {material}
          </td>

          <td className="p-2">
            {progress}%
          </td>

          <td className="p-2">
            {layer}/{totalLayers}
          </td>
        </tr>
      </tbody>
    </table>
  );
}