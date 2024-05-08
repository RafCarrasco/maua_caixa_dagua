import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#cecece"];

interface DataItem {
  name: string;
  value: number;
}

interface CustomizeLabelProps {
  viewBox: {
    cx: number;
    cy: number;
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
      dominantBaseline="central"
    >
      {value}%
    </text>
  );
}

export function PercentageChart({ labelData, data }: PieChartProps) {
  const filledValue = (data[0].value / 100) * 360;
  const remainedValue = 360 - data[0].value;

  const dataChart = [
    {
      name: "Remained",
      value: remainedValue,
    },
    {
      name: data[0].name,
      value: filledValue,
    },
  ];

  return (
    <PieChart width={200} height={200} className="bg-black">
      <Pie
        data={dataChart}
        cx={100}
        cy={100}
        fill="#1ba4c2"
        labelLine={false}
        outerRadius={80}
        innerRadius={60}
        paddingAngle={5}
        dataKey="value"
        startAngle={90}
        className="border-0"
        endAngle={-270}
        blendStroke
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <CustomizedLabel viewBox={labelData.viewBox} value={labelData.value} />
      </Pie>
    </PieChart>
  );
}
