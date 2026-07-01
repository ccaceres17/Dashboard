export default function AlertsTable() {
  return (
    <table className="w-full text-white">
      <thead>
        <tr className="border-b border-slate-700">
          <th className="text-left p-2">
            ID
          </th>

          <th className="text-left p-2">
            Status
          </th>

          <th className="text-left p-2">
            Material
          </th>

          <th className="text-left p-2">
            Qty
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="p-2">
            COD1234
          </td>

          <td className="text-yellow-400 p-2">
            PRINTING
          </td>

          <td className="p-2">
            PETG
          </td>

          <td className="p-2">
            23
          </td>
        </tr>

        <tr>
          <td className="p-2">
            COD1235
          </td>

          <td className="text-green-400 p-2">
            FINISHED
          </td>

          <td className="p-2">
            PLA
          </td>

          <td className="p-2">
            15
          </td>
        </tr>
      </tbody>
    </table>
  );
}