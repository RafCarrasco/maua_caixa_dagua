import { AreaChartProps } from "@/interface/charts-data-type";
import {
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AreaChart } from "recharts";

export function AreaChartCustom({
  areaChartData,
  chartHeight,
  chartWidth,
}: AreaChartProps) {
  return (
    <ResponsiveContainer height={chartHeight} width={chartWidth}>
      <AreaChart data={areaChartData}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis
          dataKey="axisX"
          type="category"
          tick={{ fill: "#8884d8" }}
          spacing={10}
          tickMargin={15}
          tickSize={5}
          padding={{ left: 15, right: 15 }}
          stroke="#ffff"
          strokeOpacity={0.5}
          strokeWidth={2}
        />
        <Tooltip
          useTranslate3d
          wrapperStyle={{ backgroundColor: "transparent" }}
        />
        <YAxis
          tick={{ fill: "#8884d8" }}
          tickSize={10}
          padding={{ bottom: 0, top: 15 }}
          stroke="#ffff"
          strokeOpacity={0.5}
          strokeWidth={2}
        />
        <Area
          type="bump"
          dataKey="axisY"
          stroke="#8884d8"
          strokeWidth={3}
          strokeLinecap="round"
          fill="#E6E5EC"
          elevation={5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
