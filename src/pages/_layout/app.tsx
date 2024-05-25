import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout(){
    return (
        <div className="flex h-screen flex-col gap-24 font-medium tracking-wide text-slate-50">
           <Header headerTitle="Visão Geral"/>
            <div className="flex flex-col items-center justify-center w-full h-full px-24">
                <Outlet />
            </div>
        </div>
    )
}