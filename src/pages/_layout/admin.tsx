import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AdminAppLayout() {
  return (
    <div className="text-slate-50 flex h-screen flex-col gap-4 font-medium tracking-wide">
      <Header headerTitle="<" />
      <div className="mt-10 flex h-full w-full flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
