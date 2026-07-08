import DashboardLayout from "@/components/DashboardLayout";
import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";

import TemperatureChart from "@/components/TemperatureChart";
import MaterialChart from "@/components/MaterialChart";
import CameraFeed from "@/components/CameraFeed";
import AlertsTable from "@/components/AlertsTable";
import RobotStatusCard from "@/components/RobotStatusCard";
import MetricCard from "@/components/MetricCard";
import CncControlPanel from "@/components/CncControlPanel";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Navbar />

      {/* MÉTRICAS PRINCIPALES */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">

        <MetricCard
          title="Estado H2D"
          value="FINISH"
        />

        <MetricCard
          title="Progreso"
          value="100%"
        />

        <MetricCard
          title="Robot"
          value="READY"
        />

        <MetricCard
          title="Producción"
          value="23 pcs"
        />

      </div>

      {/* FILA PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <DashboardCard title="Temperatures">
          <TemperatureChart />
        </DashboardCard>

        <DashboardCard title="Robot Extractor">
          <RobotStatusCard
            x={150}
            y={300}
            z={0}
            arm1="RETRAÍDO"
            arm2="RETRAÍDO"
          />
        </DashboardCard>

        <DashboardCard title="Control CNC">
          <CncControlPanel />
        </DashboardCard>

        <DashboardCard title="Camera">
          <CameraFeed />
        </DashboardCard>

      </div>

      {/* FILA INFERIOR */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">

        <DashboardCard title="Materials">
          <MaterialChart />
        </DashboardCard>

        <div className="xl:col-span-2">
          <DashboardCard title="Alerts">
            <AlertsTable />
          </DashboardCard>
        </div>

      </div>

    </DashboardLayout>
  );
}