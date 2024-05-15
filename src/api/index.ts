import {  WaterTanks } from "@/interface";
import { env } from "@/env";
import { mock } from "./mocks/get-waterbox-mock";
import { useWaterTank } from "@/contexts/water-tank-provider";

export function fetchData(): WaterTanks | [] {
  const { waterTanks } = useWaterTank();
  
  if (env.MODE === "development") {
    return waterTanks;

  } 
  else{
    return mock;

  }
  
}
export function getWaterTankByLevel(level: string) {
  return fetchData().find((item) => item.level === level);
}