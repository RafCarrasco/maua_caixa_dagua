import { CardContent, CardHeader } from "@/components/ui/card";
import { PercentageChart } from "../../../components/charts/pie-chart";
import { useLoaderData, useNavigate } from "react-router-dom";
import { PressureChart } from "@/components/charts/pressure_chart";
import { useLoaderDataProps } from "@/routes";
import { DataPoint } from "../entity/data-points";
import { DataItemPressure } from "@/interface";

export function DashBoard() {
  const navigate = useNavigate();
  const { waterTanks, artesianWell, hidrometers } =
    useLoaderData() as useLoaderDataProps;

  let artesianData: DataItemPressure[] = artesianWell![0].data_pressure_0.map(
    (item: DataPoint, index: number) => ({
      axisX: index,
      pressure_in: item.fieldValue as number,
      pressure_out: artesianWell![0].data_pressure_1[index]
        .fieldValue as number,
    }),
  );

  return (
    <div className="flex h-[120vh] w-full flex-col justify-between gap-y-6 pt-6">
      <div className="m-auto flex h-72 w-3/5 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Pressure In/Out Chart</h1>
        <PressureChart
          pressureChartData={artesianData}
          strokeColorPressureIn={"#8884d8"}
          strokeColorPressureOut={"#82ca9d"}
        />
      </div>
      <div className="grid h-[70%] w-full gap-10 p-4 md:grid-cols-2 md:grid-rows-4 md:gap-y-8 lg:grid-cols-4 lg:grid-rows-2">
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
              <CardHeader className="mt-0 flex flex-row justify-around space-y-0 rounded-t-xl bg-gray-dark p-4 align-top shadow-sm">
                <h3 className="text-blue-50 text-center text-lg capitalize text-white">
                  {item.watertTankId}
                </h3>
                <h3 className="text-red-300 text-center text-lg capitalize text-white">
                  {`${distance[distance.length - 1].fieldValue as number}` +
                    "mm"}
                </h3>
              </CardHeader>
              <CardContent className="flex h-[20rem] w-full items-center justify-center p-0">
                <PercentageChart
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
