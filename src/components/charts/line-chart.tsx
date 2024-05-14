import { CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { LineChart } from "recharts";

interface DataItem {
  axisX?: number;
  axisY?: number;
}
interface LineChartProps {
  data: DataItem[];
  strokeColor: string;
}
export function LineChartCustom({ data, strokeColor }: LineChartProps) {
  return (
    <ResponsiveContainer>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
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
          tick={{ fill: "#fff" }}
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