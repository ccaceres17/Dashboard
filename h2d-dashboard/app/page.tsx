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

interface PrinterStatus {
  status: string;
  progress: number;

  left_nozzle_temp: number;
  right_nozzle_temp: number;

  bed_temp: number;
  ambient_temp: number;

  layer: number;
  total_layers: number;

  job_name: string;
  wifi_signal: string;

  print_id: "";

  prints_completed: number;
  prints_total: number;

  material_used: string;
  material_available: number;

  remaining_time: number;
  camera_url: string;
}

export default function Dashboard() {
  const [printer, setPrinter] = useState<PrinterStatus>({
    status: "OFFLINE",
    progress: 0,

    left_nozzle_temp: 0,
    right_nozzle_temp: 0,

    bed_temp: 0,
    ambient_temp: 0,

    layer: 0,
    total_layers: 0,

    job_name: "",
    wifi_signal: "",

    print_id: "",

    prints_completed: 0,
    prints_total: 0,

    material_used: "",
    material_available: 0,

    remaining_time: 0,
    camera_url: "",
  });

  const [backendOnline, setBackendOnline] = useState(false);

  useEffect(() => {
    const fetchPrinterData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/printer/live"
        );

        if (!response.ok) {
          throw new Error("Backend unavailable");
        }

        const data = await response.json();

        setPrinter({
        status: data.status ?? "OFFLINE",
        progress: data.progress ?? 0,

        left_nozzle_temp: data.left_nozzle_temp ?? 0,
        right_nozzle_temp: data.right_nozzle_temp ?? 0,

        bed_temp: data.bed_temp ?? 0,
        ambient_temp: data.ambient_temp ?? 0,

        layer: data.layer ?? 0,
        total_layers: data.total_layers ?? 0,

        job_name: data.job_name ?? "",
        wifi_signal: data.wifi_signal ?? "",

        print_id: data.print_id ?? "",

        prints_completed: data.prints_completed ?? 0,
        prints_total: data.prints_total ?? 0,

        material_used: data.material_used ?? "",
        material_available: data.material_available ?? 0,

        remaining_time: data.remaining_time ?? 0,
        camera_url: data.camera_url ?? "",
    });

        setBackendOnline(true);

      } catch (error) {

        console.error("Connection error:", error);

        setBackendOnline(false);
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

    {/* OVERVIEW */}

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">

  <MetricCard
    title="Estado H2D"
    value={printer.status}
  />

  <MetricCard
    title="Print ID"
    value={printer.print_id}
  />

  <MetricCard
    title="Progreso"
    value={`${printer.progress}%`}
  />

  <MetricCard
    title="Remaining Time"
    value={`${printer.remaining_time} min`}
  />

</div>

    {/* PRINT PROGRESS */}

    <DashboardCard title="Print Progress">

      <div className="w-full bg-slate-700 rounded-full h-6 overflow-hidden">

        <div
          className="bg-green-500 h-6 rounded-full transition-all duration-700"
          style={{
            width: `${printer.progress}%`,
          }}
        />

      </div>

      <div className="flex justify-between mt-3">

        <span className="text-white font-semibold">
          Progress: {printer.progress}%
        </span>

        <span className="text-white font-semibold">
          Layer {printer.layer}/{printer.total_layers}
        </span>

      </div>

    </DashboardCard>

    {/* MAIN PANELS */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">

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

    {/* MATERIALS + ALERTS */}

    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-4">

      <div className="xl:col-span-1">
      <DashboardCard title="Materials">

    <MaterialChart
      material={printer.material_used}
      available={printer.material_available}
      completed={printer.prints_completed}
      total={printer.prints_total}
      printId={printer.print_id}
      />

  </DashboardCard>
</div>

      <div className="xl:col-span-3">

        <DashboardCard title="Current Print">
    <AlertsTable
      printId={printer.print_id}
      jobName={printer.job_name}
      status={printer.status}
      material={printer.material_used}
      progress={printer.progress}
      layer={printer.layer}
      totalLayers={printer.total_layers}
      />
        </DashboardCard>

      </div>

    </div>

    {/* SYSTEM STATUS */}

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">



      <MetricCard
        title="WiFi"
        value={printer.wifi_signal}
      />

      <MetricCard
        title="Backend"
        value={backendOnline ? "ONLINE" : "OFFLINE"}
      />

      <MetricCard
        title="Layer"
        value={`${printer.layer}/${printer.total_layers}`}
      />

    </div>

  </DashboardLayout>
);
}