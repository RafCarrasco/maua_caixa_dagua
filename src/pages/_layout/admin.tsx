import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AdminAppLayout() {
  return (
    <div className="text-slate-50 flex h-[120vh] flex-col gap-24 font-medium tracking-wide">
      <Header headerTitle="<" />
      <div className="flex h-full w-full flex-col items-center justify-start px-24">
        <Outlet />
      </div>
    </div>
  );
}
