export interface WaterTankProps {
  id: string;
  name: string;
  data_boardVoltage: number[];
  data_counter: number[];
  data_distance: number[];
  data_humidity: number[];
  data_temperature: number[];
  fCnt: number[];
  rxInfo_altitude_0: number[];
  rxInfo_altitude_1: number[];
  rxInfo_latitude_0: number[];
  rxInfo_latitude_1: number[];
  rxInfo_loRaSNR_0: number[];
  rxInfo_loRaSNR_1: number[];
  rxInfo_longitude_0: number[];
  rxInfo_longitude_1: number[];
  rxInfo_rssi_0: number[];
  rxInfo_rssi_1: number[];
  txInfo_dataRate_spreadFactor: number[];
  txInfo_frequency: number[];
}
export interface DataPoint {
  fieldValue: number | string;
  time: string;
  start: string;
  stop: string;
}

export interface WaterTankLevel {
  data_boardVoltage: DataPoint[];
  data_counter: DataPoint[];
  data_distance: DataPoint[];
  data_humidity: DataPoint[];
  data_temperature: DataPoint[];
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
}

export interface WaterTank {
  [level: string]: WaterTankLevel;
}

export type WaterTanks = { level: string; data: WaterTankLevel; }[]