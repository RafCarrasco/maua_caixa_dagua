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
