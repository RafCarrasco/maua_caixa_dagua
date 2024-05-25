import { getHidrometerById, getWaterTankById } from "@/api";
import { AreaChartCustom } from "@/components/charts/area-chart";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function WaterTank() {
  const params = useParams();
  const route = params.waterTankId as string;
  let routeValues = route.split("-");

  let waterTankLevelId = routeValues[0];
  let hidrometerId = routeValues[1];

  let waterTank = getWaterTankById(waterTankLevelId);
  let hidrometer = getHidrometerById(hidrometerId);

  let hasHidrometer = hidrometer && hidrometer.data_counter;
  let hasWaterTank = waterTank && waterTank.data_distance;

  if (hasHidrometer && hasWaterTank) {
    const dataDistance = waterTank!.data_distance.map((distance, _) => {
      const date = new Date(distance.timestamp);
      const hours = date.getUTCHours().toString().padStart(2, "0");
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");
      return {
        axisX: `${hours}:${minutes}`,
        axisY: distance.fieldValue as number,
      };
    });
    const dataBoardVoltage = waterTank!.data_boardVoltage.map(
      (boardVoltage, _) => {
        const date = new Date(boardVoltage.timestamp);
        const hours = date.getUTCHours().toString().padStart(2, "0");
        const minutes = date.getUTCMinutes().toString().padStart(2, "0");
        return {
          axisX: `${hours}:${minutes}`,
          axisY: boardVoltage.fieldValue as number,
        };
      },
    );

    return (
      <>
        <div className="flex h-full w-full flex-col items-center justify-center gap-6">
          <div className="flex h-[50%] w-full flex-col items-center  gap-2 px-24">
            <span className="pb-4 text-4xl font-bold">Hidrometer</span>
            <div className="flex items-center justify-around gap-4">
              <DropdownMenu>
                <Button className="text-md w-full rounded-md border-2 px-12 py-2">
                  {" "}
                  <DropdownMenuTrigger>
                    Definir Intervalo de Tempo
                  </DropdownMenuTrigger>
                </Button>

                <DropdownMenuContent>
                  <DropdownMenuLabel> Intervalo em Dias</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>1</DropdownMenuItem>
                  <DropdownMenuItem>3</DropdownMenuItem>
                  <DropdownMenuItem>7</DropdownMenuItem>
                  <DropdownMenuItem>10</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex h-full w-full flex-col items-center  justify-center gap-2 p-4">
              <span className="text-md">Grafico Board_Voltage</span>
              <AreaChartCustom areaChartData={dataBoardVoltage} />
            </div>
          </div>

          <div className="flex h-[50%] w-full flex-col items-center  gap-2 px-24">
            <span className="pb-4 text-4xl font-bold">WaterTank</span>
            <div className="flex items-center justify-around gap-4">
              <DropdownMenu>
                <Button className="text-md w-full rounded-md border-2 px-12 py-2 shadow-sm">
                  {" "}
                  <DropdownMenuTrigger>
                    Definir Intervalo de Tempo
                  </DropdownMenuTrigger>
                </Button>

                <DropdownMenuContent>
                  <DropdownMenuLabel> Intervalo em Dias</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>1</DropdownMenuItem>
                  <DropdownMenuItem>3</DropdownMenuItem>
                  <DropdownMenuItem>7</DropdownMenuItem>
                  <DropdownMenuItem>10</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>{" "}
            <div className="flex h-full w-full flex-col items-center  justify-center gap-2 p-4">
              <span className="text-md">
                Grafico Data_Distance(Milimetros de Distância da Água)
              </span>

              <AreaChartCustom areaChartData={dataDistance} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>Não foi possível carregar os dados do tanque de água.</div>;
  }
}
