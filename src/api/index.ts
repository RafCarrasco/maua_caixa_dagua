import { env } from "@/env";
import { mockProps } from "./mocks";
import { mockWaterTanks } from "./mocks/get-waterbox-mock";
import { mockHidrometers } from "./mocks/get-hidrometer";
import { mockArtesianWells } from "./mocks/get-artesian-well";
import { useApplication } from "@/contexts";

export function fetchData(): mockProps {
  const { artesianWells, hidrometers, waterTanks } = useApplication();

  if (env.MODE === "development") {
    return {
      artesianWell: artesianWells,
      hidrometer: hidrometers,
      waterTank: waterTanks
    };

  }
  else {
    return {
      waterTank: mockWaterTanks,
      artesianWell: mockArtesianWells,
      hidrometer: mockHidrometers,
    };

  }

}
export function getWaterTankById(waterTankId: string) {
  return fetchData().waterTank.find((waterTank) => waterTank.watertTankId === waterTankId);
}

export function getHidrometerById(hidrometerId: string) {
  return fetchData().hidrometer.find((hidrometer) => hidrometer.hidrometerId === hidrometerId);
}

export function getArtesianWellById(artesianWellId: string) {
  return fetchData().artesianWell.find((artesianWell) => artesianWell.artesianWellId === artesianWellId);
}


