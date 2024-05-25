import { WaterTanksProps } from "@/interface";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LineChart } from "recharts";

const COLORS = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#bcbd22",
];

const convertTimeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const convertMinutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
};

export function WaterTanksCustom({ data }: WaterTanksProps) {
  console.log(data);
  const allXValues = data
    .flat()
    .map((item) => convertTimeToMinutes(item.axisX || "00:00"));
  const minX = Math.min(...allXValues);
  const maxX = Math.max(...allXValues);
  console.log(minX, maxX);
  return (
    <ResponsiveContainer width="100%">
      <LineChart
        data={data.flat()}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid />

        <XAxis
          type="number"
          domain={[minX, maxX]}
          tick={{ fill: "#8884d8" }}
          tickSize={10}
          padding={{ left: 20, right: 20 }}
          stroke="#ffff"
          strokeOpacity={0.5}
          strokeWidth={2}
          // tickFormatter={(value: number) => convertMinutesToTime(value)}
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
        {data.map((line, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey="axisY"
            data={line}
            stroke={COLORS[index % COLORS.length]}
            isAnimationActive
            activeDot={{ r: 8 }}
            dot={{ r: 4 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
