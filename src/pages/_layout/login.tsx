import { Outlet } from "react-router-dom";
import { Header } from "../auth/header";

export function LoginLayout() {
  return (
    <div className="  flex h-screen flex-col">
      <Header />
      <div className=" flex flex-1 items-center justify-center mt-10 pr-10 pl-10">
        <Outlet />
      </div>
    </div>
  );
}
