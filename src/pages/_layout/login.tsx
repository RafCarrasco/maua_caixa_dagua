import { Outlet } from "react-router-dom";
import { Header } from "../auth/header";

export function LoginLayout() {
  return (
    <div className="text-slate-50 flex h-screen flex-col gap-24 font-medium tracking-wide">
      <Header />
      <div className=" mt-10 flex flex-1 items-center justify-center pl-10 pr-10">
        <Outlet />
      </div>
    </div>
  );
}
