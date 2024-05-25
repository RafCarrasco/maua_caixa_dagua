export interface DataItem {
  axisX?: string;
  axisY?: number;
}

export interface AreaChartProps {
  areaChartData: DataItem[];
}

export interface LineChartProps {
  lineChartData: DataItem[];
  strokeColor: string;
}

// pie chart props
export interface DataItemPieChart {
  name: string;
  value: number;
}

export interface CustomizeLabelProps {
  viewBox: {
    cx: string;
    cy: string;
  };
  value: number;
}

export interface PieChartProps {
  labelData: CustomizeLabelProps;
  pieChartData: DataItemPieChart[];
  maxValue?: number;
}

export interface DataItemPressure {
  pressao_in_bar?: number;
  pressao_out_bar?: number;
  axisX?: string;
}

export interface PressureChartProps {
  pressureChartData: DataItemPressure[];
}

export interface WaterTanksProps {
  data: DataItem[][];
}

export interface RequestBaseProps {
  limit: number | null;
  interval: number | null;
}
