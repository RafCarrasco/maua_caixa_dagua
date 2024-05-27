import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AdminAppLayout() {
  return (
    <div className="text-slate-50 flex h-[120vh] flex-col gap-24 font-medium tracking-wide">
      <Header headerTitle="<" />
      <div className="flex w-full flex-col items-center justify-start h-screen px-12 pb-12">
        <Outlet />
      </div>
    </div>
  );
}
