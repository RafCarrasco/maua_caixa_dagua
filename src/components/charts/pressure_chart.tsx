import { PressureChartProps } from "@/interface";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function PressureChart({ pressureChartData }: PressureChartProps) {
  return (
    <ResponsiveContainer width="100%" height="120%">
      <BarChart
        data={pressureChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={50}
      >
        <XAxis
          dataKey="axisX"
          type="category"
          tickMargin={5}
          axisType="xAxis"
          padding={{ left: 20, right: 20 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pressao_in_bar" fill="#8884d8" />
        <Bar dataKey="pressao_out_bar" fill="#82ca9e" />
      </BarChart>
    </ResponsiveContainer>
  );
}
