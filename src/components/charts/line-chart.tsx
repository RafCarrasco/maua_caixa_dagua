import { LineChartProps } from "@/interface";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LineChart } from "recharts";

export function LineChartCustom({
  lineChartData,
  strokeColor,
}: LineChartProps) {
  return (
    <ResponsiveContainer>
      <LineChart
        width={500}
        height={300}
        data={lineChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid />

        <XAxis
          dataKey="axisX"
          tick={{ fill: "#8884d8" }}
          tickSize={10}
          padding={{ left: 20, right: 20 }}

          stroke="#ffff"
          strokeOpacity={0.5}
          strokeWidth={2}
        />

        <YAxis
          tick={{ fill: "#8884d8" }}
          tickSize={10}
          padding={{ bottom: 15, top: 15 }}
          stroke="#ffff"
          strokeOpacity={0.5}
          strokeWidth={2}
        />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="axisY"
          data
          stroke={strokeColor}
          isAnimationActive
          activeDot={{ r: 8 }}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
