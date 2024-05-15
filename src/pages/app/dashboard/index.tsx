import { CardContent, CardHeader } from "@/components/ui/card";
import { PercentageChart } from "../../../components/charts/pie-chart";
import { useNavigate } from "react-router-dom";
import { useWaterTank } from "@/contexts/water-tank-provider";

export function DashBoard() {
  const { waterTanks } = useWaterTank();
  console.log(waterTanks)
  const navigate = useNavigate();

  return (
    <div className="grid h-full w-full  md:grid-cols-2 md:grid-rows-4 md:gap-x-10 md:gap-y-0 lg:grid-cols-4 lg:grid-rows-2">
      {waterTanks.map((item, index) => {
        function toggleClick() {
          navigate("/dashboard/" + item.level);
        }

        let data_counter = item.data.data_counter;

        return (
          <div
            key={item.level}
            onClick={toggleClick}
            className={` m-6 flex w-full flex-col rounded-xl border-0 shadow-lg shadow-ring transition-shadow duration-300
          `}
          >
            <CardHeader className="mt-0 flex flex-row justify-around space-y-0 rounded-t-xl bg-gray-dark p-4 align-top shadow-sm">
              <h3 className="text-blue-50 text-center text-lg capitalize text-white">
                {item.level}
              </h3>
              <h3 className="text-red-300 text-center text-lg capitalize text-white">
                {data_counter[data_counter.length - 1].fieldValue as number}
              </h3>
            </CardHeader>
            <CardContent className="flex h-[20rem] w-full p-0">
              <PercentageChart
                data={[
                  {
                    name: "Active",
                    value: data_counter[data_counter.length - 1]
                      .fieldValue as number,
                  },
                ]}
                labelData={{
                  viewBox: { cx: "50%", cy: "50%" },
                  value: data_counter[data_counter.length - 1]
                    .fieldValue as number,
                }}
              />
            </CardContent>
          </div>
        );
      })}
    </div>
  );
}
