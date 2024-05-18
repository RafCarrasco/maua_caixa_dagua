interface DataPoint {
  fieldValue: number | string;
  time: string;
  start: string;
  stop: string;
}

interface CommonProps {
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
}

export interface WaterTankLevel extends CommonProps {
  watertTankId: string;
  data_distance: DataPoint[];
}

export interface Hidrometer extends CommonProps {
  hidrometerId: string;
  data_counter: DataPoint[];
}

export interface ArtesianWell extends CommonProps {
  artesianWellId: string;
  data_pressure_0: DataPoint[];
  data_pressure_1: DataPoint[];
}


export function adaptCommonProps(data: any): CommonProps {
  return {
    data_boardVoltage: data.data_boardVoltage,
    fCnt: data.fCnt,
    rxInfo_altitude_0: data.rxInfo_altitude_0,
    rxInfo_altitude_1: data.rxInfo_altitude_1,
    rxInfo_latitude_0: data.rxInfo_latitude_0,
    rxInfo_latitude_1: data.rxInfo_latitude_1,
    rxInfo_loRaSNR_0: data.rxInfo_loRaSNR_0,
    rxInfo_loRaSNR_1: data.rxInfo_loRaSNR_1,
    rxInfo_longitude_0: data.rxInfo_longitude_0,
    rxInfo_longitude_1: data.rxInfo_longitude_1,
    rxInfo_rssi_0: data.rxInfo_rssi_0,
    rxInfo_rssi_1: data.rxInfo_rssi_1,
    txInfo_dataRate_spreadFactor: data.txInfo_dataRate_spreadFactor,
    txInfo_frequency: data.txInfo_frequency,
  };
}

export function adaptResponseHidrometer(response: any): Hidrometer[] {
  const adaptedResponse: Hidrometer[] = [];

  for (const key in response) {
    if (response.hasOwnProperty(key)) {
      adaptedResponse.push({
        hidrometerId: key,
        ...adaptCommonProps(response[key]),
        data_counter: response[key].data_counter,
      });
    }
  }

  return adaptedResponse;
}

export function adaptResponseArtesianWell(response: any): ArtesianWell[] {
  const adaptedResponse: ArtesianWell[] = [];

  for (const key in response) {
    if (response.hasOwnProperty(key)) {
      adaptedResponse.push({
        artesianWellId: key,
        ...adaptCommonProps(response[key]),
        data_pressure_0: response[key].data_pressure_0,
        data_pressure_1: response[key].data_pressure_1,
      });
    }
  }

  return adaptedResponse;
}

export function adaptResponseWaterTankLevel(response: any): WaterTankLevel[] {
  const adaptedResponse: WaterTankLevel[] = [];

  for (const key in response) {
    if (response.hasOwnProperty(key)) {
      adaptedResponse.push({
        watertTankId:key,
        ...adaptCommonProps(response[key]),
        data_distance: response[key].data_distance,
      });
    }
  }

  return adaptedResponse;
}