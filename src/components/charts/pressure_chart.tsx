import { LineChartProps, PressureChartProps } from "@/interface";
import {
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LineChart } from "recharts";

export function PressureChart({
  strokeColorPressureIn,
  strokeColorPressureOut,
  pressureChartData,
}: PressureChartProps) {
  return (
    <ResponsiveContainer>
      <LineChart
        width={400}
        data={pressureChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Tooltip />
        <Legend />

        <CartesianGrid />
        <XAxis
          dataKey="axisX"
          tick={{ fill: "#8884d8" }}
          tickSize={10}
          padding={{ left: 15, right: 15 }}
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

        <Line
          type="monotone"
          dataKey="pressure_in"
          data
          stroke={strokeColorPressureIn}
          isAnimationActive
          activeDot={{ r: 8 }}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="pressure_out"
          data
          stroke={strokeColorPressureOut}
          isAnimationActive
          activeDot={{ r: 8 }}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
