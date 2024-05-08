import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout(){
    return (
        <div className="flex h-screen flex-col gap-4 font-medium tracking-wide text-slate-50">
           <Header/>
            <div className="flex flex-col items-center justify-center p-16 w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}