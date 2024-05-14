import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigator = useNavigate();
  return (
    <div className="flex h-[50%] flex-col items-center justify-between">
      <header className="text-gray-800 my-4 flex items-center justify-center space-x-10 rounded-lg p-12 shadow-lg shadow-ring">
        <h1 className="spacing  p-4 font-sans text-6xl  font-bold tracking-widest  ">
          WaterTank
        </h1>
        <Droplet size={84} fill="#1ba4c2" className="flex animate-bounce" />
      </header>
      <div className="flex w-full  items-center justify-center  p-4 text-center">
        <Button
          onClick={() => navigator("/login")}
          className="w-full rounded-lg p-6 text-2xl tracking-widest shadow-md shadow-ring"
        >
          Navegar para o site
        </Button>
      </div>
    </div>
  );
}
