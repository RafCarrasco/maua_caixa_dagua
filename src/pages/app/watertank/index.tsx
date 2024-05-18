import { getWaterTankById } from "@/api";
import { AreaChartCustom } from "@/components/charts/area-chart";
import { useParams } from "react-router-dom";

export function WaterTank() {
  const params = useParams();
  const waterTankLevel = params.waterTankId as string;
  let waterTank = getWaterTankById(waterTankLevel);

  if (waterTank && waterTank.data_distance) {
    const dataDistance = waterTank.data_distance.map((distance, index) => ({
      axisX: index,
      axisY: distance.fieldValue as number,
    }));

    const dataBoardVoltage = waterTank.data_boardVoltage.map(
      (boardVoltage, index) => ({
        axisX: index,
        axisY: boardVoltage.fieldValue as number,
      }),
    );
    return (
      <>
        <div className="grid h-1/2 w-full grid-cols-3 grid-rows-2 gap-y-8  p-4 pt-0">
          <div className="flex flex-col items-center justify-center gap-2 border-r-2 border-border">
            <span className="text-md">Grafico Data_BoardVoltage</span>

            <AreaChartCustom data={dataBoardVoltage} />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border-r-2 border-border">
            <span className="text-md">Grafico Data_Distance</span>

            <AreaChartCustom data={dataDistance} />
          </div>
        </div>
      </>
    );
  } else {
    return <div>Não foi possível carregar os dados do tanque de água.</div>;
  }
}
