import { PressureChart } from "@/components/charts/pressure_chart";
import { DataItemPressure } from "@/interface";
import { useLoaderDataProps } from "@/routes";
import { useLoaderData } from "react-router-dom";
import { DataPoint } from "../../entity/data-points";
import { HidrometerCard } from "./components/hidrometer_card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
type Checked = DropdownMenuCheckboxItemProps["checked"];

export function ManagerDashboard() {
  const { hidrometers, artesianWell } = useLoaderData() as useLoaderDataProps;
  const [showStatusBarWaterTank, setShowStatusBarWaterTank] =
    useState<Checked>(true);
  const [showStatusBarHidrometer, setShowStatusBarHidrometer] =
    useState<Checked>(true);
  const [showStatusBarArtesianWell, setShowStatusBarArtesianWell] =
    useState<Checked>(true);

  let artesianData: DataItemPressure[] = artesianWell![0].data_pressure_0.map(
    (item: DataPoint, index: number) => {
      const date = new Date(item.timestamp);
      const hours = date.getUTCHours().toString().padStart(2, "0");
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");
      return {
        axisX: `${hours}:${minutes}`,
        pressao_in_bar: item.fieldValue as number,
        pressao_out_bar: artesianWell![0].data_pressure_1[index]
          .fieldValue as number,
      };
    },
  );
  return (
    <div className="flex h-[170vh] flex-col justify-between gap-6 gap-y-12">
    <div className="m-auto ml-0 flex items-center justify-around gap-x-4 px-4">
        <span className="text-md font-bold">Definir Alertas :</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-md  ">Abrir Opções de Alertas</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>WaterTank</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBarWaterTank}
              onCheckedChange={setShowStatusBarWaterTank}
            >
              Data Distance
            </DropdownMenuCheckboxItem>
            <DropdownMenuLabel>Hidrometer</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBarHidrometer}
              onCheckedChange={setShowStatusBarHidrometer}
            >
              Data Counter
            </DropdownMenuCheckboxItem>
            <DropdownMenuLabel>ArtesianWell</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBarArtesianWell}
              onCheckedChange={setShowStatusBarArtesianWell}
            >
              Pressure In
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showStatusBarArtesianWell}
              onCheckedChange={setShowStatusBarArtesianWell}
            >
              Pressure Out
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex h-3/5 w-full flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-bold">Pressão Entrada x Saída</h1>
        <PressureChart pressureChartData={artesianData} />
      </div>
      <div className="grid h-3/5 w-full gap-10 p-4 md:grid-cols-2 md:grid-rows-4 md:gap-y-8 lg:grid-cols-4 lg:grid-rows-2">
        {hidrometers?.map((hidrometer) => {
          return <HidrometerCard hidrometer={hidrometer} />;
        })}
      </div>
    </div>
  );
}
