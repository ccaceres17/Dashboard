type Props = {
  title: string;
  value: string;
};

export default function StatusCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-2xl font-bold">
        {value}
      </h2>
    </div>
  );
}