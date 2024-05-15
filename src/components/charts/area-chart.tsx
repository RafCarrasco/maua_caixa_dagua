import {
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AreaChart } from "recharts";

interface DataItem {
  axisX?: number;
  axisY?: number;
}
interface AreaChartProps {
  data: DataItem[];
}
export function AreaChartCustom({ data }: AreaChartProps) {
  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <XAxis
          dataKey="axisX"
          tick={{ fill: "#8884d8" }}
          tickSize={10}
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
          fontFamily={"Roboto, sans-serif"}
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
