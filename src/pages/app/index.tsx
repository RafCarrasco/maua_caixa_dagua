import { Droplet } from "lucide-react";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="bg-gray-100 flex h-[50%] flex-col items-center justify-around ">
      <header className="rounded-md text-gray-800 my-4 flex items-center justify-center  space-x-10  p-10 shadow-inner shadow-gray animation-pulse">
        <h1 className=" rounded-lg tracking-wide font-sans text-5xl font-bold shadow-md p-4 shadow-blue ">WaterBox</h1>
        <Droplet size={72} fill="#1ba4c2" className="animate-bounce flex"  />
      </header>
      <div className="p-4 text-center">
        <p className="mb-4 text-md">Bem-vindo ao nosso site!</p>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 font-bold text-2xl underline"
        >
          Navegar para o site
        </Link>
      </div>
    </div>
  );
}
