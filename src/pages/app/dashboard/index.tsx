import { PercentageChart } from "@/components/charts/pie-chart";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent } from "@/components/ui/card";
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
import { useNavigate, useLoaderData } from "react-router-dom";

export function DashBoard() {
  const navigate = useNavigate();
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
          function toggleClick() {
            navigate(
              "/dashboard/" +
                item.watertTankId +
                "-" +
                hidrometerOfTank.hidrometerId,
            );
          }

          let distance = item.data_distance;

          return (
            <div
              key={item.watertTankId}
              onClick={toggleClick}
              className="flex h-full flex-col rounded-xl border-0 shadow-lg shadow-ring transition-shadow duration-300"
            >
              <CardHeader className="mt-0 flex flex-row justify-around space-y-0 rounded-t-xl bg-gray-dark p-4 align-top shadow-sm md:flex-col">
                <h3 className="text-blue-50 text-center text-lg capitalize text-white ">
                  {item.watertTankId}
                </h3>
                <h3 className="text-red-300 text-md text-center font-bold capitalize text-white">
                  {`${distance[distance.length - 1].fieldValue as number}mm`}
                </h3>
              </CardHeader>
              <CardContent className="flex h-[20rem] w-full flex-col items-center justify-center p-4">
                <span className="w-full">Nível de Alerta:</span>
                <PercentageChart
                  maxValue={waterTankLevel}
                  pieChartData={[
                    {
                      name: "Active",
                      value: distance[distance.length - 1].fieldValue as number,
                    },
                  ]}
                  labelData={{
                    viewBox: { cx: "50%", cy: "50%" },
                    value: distance[distance.length - 1].fieldValue as number,
                  }}
                />
              </CardContent>
            </div>
          );
        })}
      </div>
    </div>
  );
}
