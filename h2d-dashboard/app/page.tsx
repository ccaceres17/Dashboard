import DashboardLayout from "@/components/DashboardLayout";
import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";

import TemperatureChart from "@/components/TemperatureChart";
import MaterialChart from "@/components/MaterialChart";
import CameraFeed from "@/components/CameraFeed";
import AlertsTable from "@/components/AlertsTable";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Navbar />

      <div className="grid grid-cols-3 gap-4">
        <DashboardCard title="Temperatures">
          <TemperatureChart />
        </DashboardCard>

        <DashboardCard title="Production">
          <TemperatureChart />
        </DashboardCard>

        <DashboardCard title="Camera">
          <CameraFeed />
        </DashboardCard>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <DashboardCard title="Materials">
          <MaterialChart />
        </DashboardCard>

        <div className="col-span-2">
          <DashboardCard title="Alerts">
            <AlertsTable />
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
}