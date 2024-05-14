import { WaterTankProps } from "@/interface";
import { env } from "@/env";
import { mockedDataWaterTank } from "./mocks/get-waterbox-mock";

export function fetchData(): WaterTankProps[] {
  if (env.MODE === "development") {
    return mockedDataWaterTank;
  } else {
    return [];
  }
}
export function getWaterTankById(id: string) {
  return fetchData().find((item) => item.id === id);
}