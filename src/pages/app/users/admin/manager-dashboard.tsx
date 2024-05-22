import { AreaChartCustom } from "@/components/charts/area-chart";
import { WaterTanksCustom } from "@/components/charts/watertanks-chart";
import { CardHeader, CardContent } from "@/components/ui/card";
import { DataItem } from "@/interface";
import { useLoaderDataProps } from "@/routes";
import { useLoaderData } from "react-router-dom";

export function ManagerDashboard() {
  const { waterTanks, hidrometers } = useLoaderData() as useLoaderDataProps;

  const waterTankDataDistances: DataItem[][] = [];

  waterTanks!.forEach((waterTank) => {
    let dataPoints: DataItem[] = [];

    waterTank.data_distance.forEach((distance, index) => {
      const date = new Date(distance.timestamp);
      const hours = date.getUTCHours().toString().padStart(2, "0");
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");
      dataPoints.push({
        axisX: index.toString(),
        axisY: distance.fieldValue as number,
      });
    });
    waterTankDataDistances.push(dataPoints);
  });

  return (
    <div className="flex h-fit flex-col justify-between gap-6 pt-6">
      <div className="m-auto flex h-72 w-3/5 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Pressure In/Out Chart</h1>
        <WaterTanksCustom data={waterTankDataDistances} />
      </div>
      <div className="mt-6 grid h-[80%] w-full gap-10 p-4 md:grid-cols-2 md:grid-rows-4 md:gap-y-8 lg:grid-cols-4 lg:grid-rows-2">
        {hidrometers?.map((hidrometer) => {
          const dataCounter = hidrometer!.data_counter.map((counter, _) => {
            const date = new Date(counter.timestamp);
            const hours = date.getUTCHours().toString().padStart(2, "0");
            const minutes = date.getUTCMinutes().toString().padStart(2, "0");
            return {
              axisX: `${hours}:${minutes}`,
              axisY: counter.fieldValue as number,
            };
          });

          return (
            <div
              key={hidrometer.hidrometerId}
              className="flex h-full flex-col rounded-xl border-0 shadow-lg shadow-ring transition-shadow duration-300"
            >
              <CardHeader className="mt-0 flex flex-col justify-around space-y-0 rounded-t-xl bg-gray-dark p-4 align-top shadow-sm">
                <h3 className="text-blue-50 text-center text-sm capitalize text-white font-bold ">
                  {hidrometer.hidrometerId}
                </h3>
                <h3 className="text-red-300 text-center  capitalize text-white text-md ">
                  Grafico Litros Acumulados
                </h3>
              </CardHeader>
              <CardContent className="flex  w-full h-fit items-center justify-around flex-col">
                <span className="flex text-md">
                  Litros/Minuto
                </span>
                <div className="pr-10">
                  <AreaChartCustom areaChartData={dataCounter} chartWidth={300} chartHeight={150} />
                </div>
              </CardContent>
            </div>
          );
        })}
      </div>
    </div>
  );
}
