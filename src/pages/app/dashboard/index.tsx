import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { useLoaderDataProps } from "@/routes";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SyntheticEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { WaterTankCard } from "./components/watertank_card";

export function DashBoard() {
  const { waterTanks, hidrometers } = useLoaderData() as useLoaderDataProps;
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const [waterTankLevel, setWaterTankLevel] = useState(5500);

  const handleCheckboxChange = (id: string) => {
    setSelectedCheckbox(id);
  };

  function onSubmitDialog(e: SyntheticEvent, id: string) {
    e.preventDefault();
    const level = parseInt(id.split("-")[1], 10);

    setWaterTankLevel(level);
  }

  return (
    <div className="flex h-[120vh] w-full flex-col justify-between gap-2  gap-y-6 p-4 pt-6 ">
      <div className="flex justify-end ">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex px-6 font-bold shadow-sm shadow-ring">
              Definir Nível dos Tanques
            </Button>
          </DialogTrigger>
          <DialogContent className="justif-arund flex h-[20rem] flex-col">
            <DialogHeader className="flex items-center">
              <DialogTitle className="text-2xl">
                Nível Máximo Desejado:
              </DialogTitle>
              <DialogDescription>Nível em milimetros</DialogDescription>
            </DialogHeader>
            <form
              className="flex w-full flex-1 flex-col  items-center justify-around"
              onSubmit={(e) => onSubmitDialog(e, selectedCheckbox)}
            >
              {[1000, 2000, 3000, 4000, 5000].map((level) => (
                <div key={level} className="flex items-center gap-8">
                  <Checkbox
                    id={`n-${level}`}
                    checked={selectedCheckbox === `n-${level}`}
                    onClick={() => handleCheckboxChange(`n-${level}`)}
                  />
                  <label
                    htmlFor={`n-${level}`}
                    className="text-lg font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {level}
                  </label>
                </div>
              ))}
              <Button type="submit" className="w-full">
                Definir
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid h-full w-full gap-10 md:grid-cols-1 md:grid-rows-8 md:gap-y-8 lg:grid-cols-4 lg:grid-rows-2">
        {waterTanks?.map((item, index) => {
          let hidrometerOfTank = hidrometers![index];

          return (
            <WaterTankCard
              hidrometer={hidrometerOfTank}
              key={item.watertTankId}
              waterTank={item}
              waterTankLevel={waterTankLevel}
            />
          );
        })}
      </div>
    </div>
  );
}
