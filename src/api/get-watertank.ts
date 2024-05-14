
export interface GetWaterBoxProps {
}
export interface GetWaterResponse {
  result:{
    "WaterTankLevel_1": GetWaterBoxProps,
    "WaterTankLevel_2": GetWaterBoxProps,
    "WaterTankLevel_3": GetWaterBoxProps,
    "WaterTankLevel_4": GetWaterBoxProps,
    "WaterTankLevel_5": GetWaterBoxProps,
    "WaterTankLevel_6": GetWaterBoxProps,
    "WaterTankLevel_7": GetWaterBoxProps,
    "WaterTankLevel_8": GetWaterBoxProps
  }
}
export async function getWaterBoxes(){
    const response = await api.get<GetWaterResponse>('/watertanklevel',{});

}