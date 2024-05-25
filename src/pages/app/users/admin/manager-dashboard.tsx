import { PressureChart } from "@/components/charts/pressure_chart";
import { DataItemPressure } from "@/interface";
import { useLoaderDataProps } from "@/routes";
import { useLoaderData } from "react-router-dom";
import { DataPoint } from "../../entity/data-points";
import { HidrometerCard } from "./components/hidrometer_card";

export function ManagerDashboard() {
  const { hidrometers, artesianWell } = useLoaderData() as useLoaderDataProps;

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
    <div className="flex h-full flex-col justify-between gap-6 ">
      <div className="flex h-1/5 w-full flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-bold">Pressão Entrada x Saída</h1>
        <PressureChart pressureChartData={artesianData} />
      </div>
      <div className="grid h-4/5 w-full gap-10 p-4 md:grid-cols-2 md:grid-rows-4 md:gap-y-8 lg:grid-cols-4 lg:grid-rows-2">
        {hidrometers?.map((hidrometer) => {
          return <HidrometerCard hidrometer={hidrometer} />;
        })}
      </div>
    </div>
  );
}
