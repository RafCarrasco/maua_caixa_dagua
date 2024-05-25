import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function WaterTankLayout() {
  return (
    <div className="text-slate-50 flex h-[120vh] flex-col gap-24 font-medium tracking-wide">
      <Header headerTitle="<" />
      <div className="w-100 flex h-full flex-col items-center justify-around px-24">
        <Outlet />
      </div>
    </div>
  );
}
