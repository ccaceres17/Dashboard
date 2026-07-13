"use client";

import { useEffect, useState } from "react";

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

  const [printer, setPrinter] = useState({
    status: "OFFLINE",
    progress: 0,
    nozzle_temp: 0,
    bed_temp: 0,
    layer: 0,
    total_layers: 0,
    job_name: "",
    wifi_signal: "",
  });

  useEffect(() => {

    const fetchPrinterData = async () => {

      try {

        const response = await fetch(
          "http://localhost:8000/printer/live"
        );

        const data = await response.json();

        setPrinter(data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchPrinterData();

    const interval = setInterval(
      fetchPrinterData,
      5000
    );

    return () => clearInterval(interval);

  }, []);

  return (
    <DashboardLayout>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">

        <MetricCard
          title="Estado H2D"
          value={printer.status}
        />

        <MetricCard
          title="Progreso"
          value={`${printer.progress}%`}
        />

        <MetricCard
          title="Boquilla"
          value={`${printer.nozzle_temp}°C`}
        />

        <MetricCard
          title="Cama"
          value={`${printer.bed_temp}°C`}
        />

      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">

        <MetricCard
          title="Trabajo"
          value={printer.job_name || "N/A"}
        />

        <MetricCard
          title="Capa"
          value={`${printer.layer}/${printer.total_layers}`}
        />

        <MetricCard
          title="WiFi"
          value={printer.wifi_signal}
        />

        <MetricCard
          title="Backend"
          value="ONLINE"
        />

      </div>

    </DashboardLayout>
  );
}