import { AreaChartCustom } from "@/components/charts/area-chart";
import { PressureChart } from "@/components/charts/pressure_chart";
import { CardHeader, CardContent } from "@/components/ui/card";
import { DataItemPressure } from "@/interface";
import { useLoaderDataProps } from "@/routes";
import { useLoaderData } from "react-router-dom";
import { DataPoint } from "../../entity/data-points";

export function ManagerDashboard() {
  const { hidrometers, artesianWell } = useLoaderData() as useLoaderDataProps;

  // waterTanks!.forEach((waterTank) => {
  //   let dataPoints: DataItem[] = [];

  //   waterTank.data_distance.forEach((distance, index) => {
  //     dataPoints.push({
  //       axisX: `${waterTank.watertTankId}`,
  //       axisY: distance.fieldValue as number,
  //     });
  //   });
  //   waterTankDataDistances.push(dataPoints);
  // });

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
      <div className="w-full h-1/5 flex flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-bold">Pressão Entrada x Saída</h1>
        <PressureChart pressureChartData={artesianData} />
      </div>
      <div className="grid h-4/5 w-full gap-10 p-4 md:grid-cols-2 md:grid-rows-4 md:gap-y-8 lg:grid-cols-4 lg:grid-rows-2">
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
              className="flex h-full w-full flex-col rounded-xl border-0 shadow-lg shadow-ring transition-shadow duration-300"
            >
              <CardHeader className="mt-0 flex flex-col justify-around space-y-0 rounded-t-xl bg-gray-dark p-4 align-top shadow-sm">
                <h3 className="text-blue-50 text-center text-sm font-bold capitalize text-white ">
                  {hidrometer.hidrometerId}
                </h3>
                <h3 className="text-red-300 text-md  text-center capitalize text-white ">
                  Grafico Litros Acumulados
                </h3>
              </CardHeader>
              <CardContent className="flex h-[20rem] w-full flex-col items-center justify-around p-0">
                <span className="text-md flex">Litros/Minuto</span>
                <div className="h-full w-full pr-4">
                  <AreaChartCustom areaChartData={dataCounter} />
                </div>
              </CardContent>
            </div>
          );
        })}
      </div>
    </div>
  );
}
