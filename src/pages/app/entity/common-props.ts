import { DataPoint } from "./data-points";

export class CommonProps {
    data_boardVoltage: DataPoint[];
    fCnt: DataPoint[];
    rxInfo_altitude_0: DataPoint[];
    rxInfo_altitude_1: DataPoint[];
    rxInfo_latitude_0: DataPoint[];
    rxInfo_latitude_1: DataPoint[];
    rxInfo_loRaSNR_0: DataPoint[];
    rxInfo_loRaSNR_1: DataPoint[];
    rxInfo_longitude_0: DataPoint[];
    rxInfo_longitude_1: DataPoint[];
    rxInfo_rssi_0: DataPoint[];
    rxInfo_rssi_1: DataPoint[];
    txInfo_dataRate_spreadFactor: DataPoint[];
    txInfo_frequency: DataPoint[];

    constructor(data: any) {
        this.data_boardVoltage = data.data_boardVoltage;
        this.fCnt = data.fCnt;
        this.rxInfo_altitude_0 = data.rxInfo_altitude_0;
        this.rxInfo_altitude_1 = data.rxInfo_altitude_1;
        this.rxInfo_latitude_0 = data.rxInfo_latitude_0;
        this.rxInfo_latitude_1 = data.rxInfo_latitude_1;
        this.rxInfo_loRaSNR_0 = data.rxInfo_loRaSNR_0;
        this.rxInfo_loRaSNR_1 = data.rxInfo_loRaSNR_1;
        this.rxInfo_longitude_0 = data.rxInfo_longitude_0;
        this.rxInfo_longitude_1 = data.rxInfo_longitude_1;
        this.rxInfo_rssi_0 = data.rxInfo_rssi_0;
        this.rxInfo_rssi_1 = data.rxInfo_rssi_1;
        this.txInfo_dataRate_spreadFactor = data.txInfo_dataRate_spreadFactor;
        this.txInfo_frequency = data.txInfo_frequency;
    }

    static adaptCommonProps(data: any): CommonProps {
        return new CommonProps(data);
    }
}