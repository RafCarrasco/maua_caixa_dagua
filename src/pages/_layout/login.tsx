import { Outlet } from "react-router-dom";
import { Header } from "../auth/header";

export function LoginLayout() {
  return (
    <div className="text-slate-50 flex h-screen flex-col gap-24 font-medium tracking-wide">
      <Header />
      <div className="flex flex-1 items-center justify-center px-24">
        <Outlet />
      </div>
    </div>
  );
}
