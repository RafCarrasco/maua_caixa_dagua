export interface DataItem {
    axisX?: string;
    axisY?: number;
}

export interface AreaChartProps {
    areaChartData: DataItem[];
    chartHeight?: number;
    chartWidth?: number;
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
}


export interface DataItemPressure {
    pressure_in?: number;
    pressure_out?: number;
}

export interface PressureChartProps {
    strokeColorPressureIn: string;
    strokeColorPressureOut: string;
    pressureChartData: DataItemPressure[];
}

export interface WaterTanksProps {
    data: DataItem[][];
}