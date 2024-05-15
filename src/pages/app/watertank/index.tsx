import { getWaterTankByLevel } from "@/api";
import { AreaChartCustom } from "@/components/charts/area-chart";
import { LineChartCustom } from "@/components/charts/line-chart";
import { useParams } from "react-router-dom";

export function WaterTank() {
  const params = useParams();
  const waterTankLevel = params.waterTankLevel as string;
  let waterTank = getWaterTankByLevel(waterTankLevel);


  if (waterTank && waterTank.data.data_distance && waterTank.data.data_temperature) {
    const dataDistance = waterTank.data.data_distance.map((distance, index) => ({
      axisX: index,
      axisY: distance.fieldValue as number,
    }));

    const dataBoardVoltage = waterTank.data.data_boardVoltage.map(
      (boardVoltage, index) => ({
        axisX: index,
        axisY: boardVoltage.fieldValue as number,
      }),
    );

    const dataTemperature = waterTank.data.data_temperature.map(
      (temperature, index) => ({
        axisX: index,
        axisY: temperature.fieldValue as number,
      }),
    );

    const dataCounter = waterTank.data.data_counter.map((distance, index) => ({
      axisX: index,
      axisY: distance.fieldValue as number,
    }));

    const dataHumidity = waterTank.data.data_humidity.map((humidity, index) => ({
      axisX: index,
      axisY: humidity.fieldValue as number,
    }));

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
          <div className="flex flex-col items-center justify-center gap-2 border-border">
            <span className="text-md">Grafico Data_Counter</span>
            <AreaChartCustom data={dataCounter} />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border-r-2 border-border">
            <span className="text-md">Grafico Temperatura</span>

            <LineChartCustom data={dataTemperature} strokeColor="#ee680f" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-md">Grafico Umidade</span>

            <LineChartCustom data={dataHumidity} strokeColor="#1ba4c2" />
          </div>
        </div>
      </>
    );
  } else {
    return <div>Não foi possível carregar os dados do tanque de água.</div>;
  }
}
