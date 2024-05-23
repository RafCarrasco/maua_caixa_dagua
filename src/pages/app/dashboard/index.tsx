import { CardContent, CardHeader } from "@/components/ui/card";
import { PercentageChart } from "../../../components/charts/pie-chart";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useLoaderDataProps } from "@/routes";

export function DashBoard() {
  const navigate = useNavigate();
  const { waterTanks, hidrometers } = useLoaderData() as useLoaderDataProps;

  return (
    <div className="flex h-[120vh] w-full flex-col justify-between gap-y-6 pt-6">
      <div className="grid h-full w-full gap-10 p-4 md:grid-cols-1 md:grid-rows-8 md:gap-y-8 lg:grid-cols-4 lg:grid-rows-2">
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
                <h3 className="text-red-300 text-center text-md capitalize text-white font-bold">
                  {`${distance[distance.length - 1].fieldValue as number}` +
                    "mm"}
                </h3>
              </CardHeader>
              <CardContent className="flex h-[20rem] w-full items-center justify-center">
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
