import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function WaterTankLayout() {
  return (
    <div className="bg- flex h-screen flex-col">
      <Header headerTitle="<"/>
      <div className="w-100 flex h-full flex-col items-center justify-around mt-10 pr-10 pl-10">
        <Outlet />
      </div>
    </div>
  );
}
