import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function WaterTankLayout() {
  return (
    <div className="text-slate-50 flex h-screen flex-col gap-24 font-medium tracking-wide">
      <Header headerTitle="<" />
      <div className="w-100 mt-10 flex h-full flex-col items-center justify-around pl-10 pr-10">
        <Outlet />
      </div>
    </div>
  );
}
