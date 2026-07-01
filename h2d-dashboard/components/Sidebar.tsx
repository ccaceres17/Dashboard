import Link from "next/link";
import {
  Home,
  Printer,
  Camera,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-20 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-6 gap-8">
      <Link href="/dashboard">
        <Home className="text-slate-400 hover:text-green-500" />
      </Link>

      <Link href="/printers">
        <Printer className="text-slate-400 hover:text-green-500" />
      </Link>

      <Link href="/cameras">
        <Camera className="text-slate-400 hover:text-green-500" />
      </Link>

      <Link href="/history">
        <BarChart3 className="text-slate-400 hover:text-green-500" />
      </Link>

      <Link href="/settings">
        <Settings className="text-slate-400 hover:text-green-500" />
      </Link>
    </aside>
  );
}