import { CustomizeLabelProps, PieChartProps } from "@/interface";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#D5D5D5DB", "#0F8FE4"];

export function CustomizedLabel({ viewBox, value }: CustomizeLabelProps) {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      className="text text-2xl font-bold"
      textAnchor="middle"
      fill="#1ba4c2"
      dominantBaseline="central"
    >
      {value}%
    </text>
  );
}

export function PercentageChart({ pieChartData, maxValue }: PieChartProps) {
  let maxTankLevel = maxValue ?? 5500;
  const filledValue = Math.round((pieChartData[0].value / maxTankLevel) * 100);
  const remainedValue = 100 - filledValue;

  const dataChart = [
    {
      name: "Restante",
      value: remainedValue,
    },
    {
      name: "Atual",
      value: filledValue,
    },
  ];

  const renderCustomizedLabel = ({ cx, cy }: { cx: number; cy: number }) => {
    return (
      <text
        x={cx}
        y={cy}
        fill="#0F8FE4"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-2xl font-bold"
      >
        {filledValue}%
      </text>
    );
  };

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Pie
            label={renderCustomizedLabel}
            labelLine={false}
            data={dataChart}
            outerRadius={90}
            innerRadius={65}
            paddingAngle={10}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {dataChart.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
