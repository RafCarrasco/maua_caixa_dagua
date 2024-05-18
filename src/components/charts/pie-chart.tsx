import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#D5D5D560"];

interface DataItem {
  name: string;
  value: number;
}

interface CustomizeLabelProps {
  viewBox: {
    cx: string;
    cy: string;
  };
  value: number;
}

interface PieChartProps {
  labelData: CustomizeLabelProps;
  data: DataItem[];
}

export function CustomizedLabel({ viewBox, value }: CustomizeLabelProps) {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      className="text text-2xl font-bold"
      textAnchor="middle"
      color="#1ba4c2"
      dominantBaseline="central"
    >
      {value}%
    </text>
  );
}

export function PercentageChart({ labelData, data }: PieChartProps) {
  // assumindo que a amplitude do tanque seja de 4000 militmetros
  const maxValue = 4000;
  const filledValue = (maxValue/ 100) * 360;
  const remainedValue = 360 - data[0].value;

  const dataChart = [
    {
      name: "Restante",
      value: `${remainedValue}%`,
    },
    {
      name: 'Atual',
      value: filledValue,
    },
  ];

  return (
    <div className="h-full w-full">
      <ResponsiveContainer>
        <PieChart>
          <Tooltip/>
          <Pie
            data={dataChart}
            fill="#1ba4c2"
            outerRadius={80}
            innerRadius={60}
            paddingAngle={5}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            blendStroke
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <CustomizedLabel
              viewBox={labelData.viewBox}
              value={labelData.value}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
