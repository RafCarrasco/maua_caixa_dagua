import { useNavigate } from "react-router-dom";
import { WaterTankLevel } from "../../entity/water-tank-level";
import { Hidrometer } from "../../entity/hidrometer";
import { CardContent, CardHeader } from "@/components/ui/card";
import { PercentageChart } from "@/components/charts/pie-chart";

interface WaterTankCardProps {
  waterTank: WaterTankLevel;
  hidrometer: Hidrometer;
  waterTankLevel: number;
}
function setWaterTankAlert(waterTankLevel : number,maxValue : number) {
  const filledValue = Math.round((waterTankLevel / maxValue) * 100);
  console.log(filledValue);
    if (filledValue <= 15) {
      return "Alarmante"    }
    if (filledValue <= 50) {
      return "Crítico"
    }
    return "Normal"
}
export function WaterTankCard({
  waterTank,
  hidrometer,
  waterTankLevel,
}: WaterTankCardProps) {
  const navigate = useNavigate();
  function toggleClick() {
    navigate(
      "/dashboard/" + waterTank.watertTankId + "-" + hidrometer.hidrometerId,
    );
  }
  return (
    <div
      key={waterTank.watertTankId}
      onClick={toggleClick}
      className="flex h-full flex-col rounded-xl border-0 shadow-lg shadow-ring transition-shadow duration-300"
    >
      <CardHeader className="mt-0 flex flex-row justify-around space-y-0 rounded-t-xl bg-gray-dark p-4 align-top shadow-sm md:flex-col">
        <h3 className="text-blue-50 text-center text-lg capitalize text-white ">
          {waterTank.watertTankId}
        </h3>
        <h3 className="text-red-300 text-md text-center font-bold capitalize text-white">
          {`${waterTank.data_distance[waterTank.data_distance.length - 1].fieldValue as number}mm`}
        </h3>
      </CardHeader>
      <CardContent className="flex h-[20rem] w-full flex-col items-center justify-center p-4">
        <span className="w-full text-sm font-bold">Nível de Alerta:{setWaterTankAlert(waterTank.data_distance[waterTank.data_distance.length - 1].fieldValue as number,waterTankLevel)}</span>
        <PercentageChart
          maxValue={waterTankLevel}
          pieChartData={[
            {
              name: "Active",
              value: waterTank.data_distance[waterTank.data_distance.length - 1]
                .fieldValue as number,
            },
          ]}
          labelData={{
            viewBox: { cx: "50%", cy: "50%" },
            value: waterTank.data_distance[waterTank.data_distance.length - 1]
              .fieldValue as number,
          }}
        />
      </CardContent>
    </div>
  );
}
