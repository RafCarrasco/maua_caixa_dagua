import { AreaChartCustom } from "@/components/charts/area-chart";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Hidrometer } from "@/pages/app/entity/hidrometer";

interface HidrometeCardProps {
  hidrometer: Hidrometer;
}
export function HidrometerCard({ hidrometer }: HidrometeCardProps) {
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
}
