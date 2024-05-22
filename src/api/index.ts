import { env } from "@/env";
import { mockProps } from "./mocks";
import { mockWaterTanks } from "./mocks/get-waterbox-mock";
import { mockHidrometers } from "./mocks/get-hidrometer";
import { mockArtesianWells } from "./mocks/get-artesian-well";
import { useApplication } from "@/contexts";
import { login, LoginResponseProps } from "./login";
import { WaterTankLevel } from "@/pages/app/entity/water-tank-level";
import { Hidrometer } from "@/pages/app/entity/hidrometer";
import { ArtesianWell } from "@/pages/app/entity/artesian-well";

export function fetchData(): mockProps {
  if (env.MODE === "development") {
    return {
      waterTanks: mockWaterTanks,
      artesianWell: mockArtesianWells,
      hidrometers: mockHidrometers,
    };
  }
  else {
    const { artesianWells, hidrometers, waterTanks } = useApplication();
    return {
      artesianWell: artesianWells,
      hidrometers: hidrometers,
      waterTanks: waterTanks
    };

  }

}
export async function loginUser(email: string, password: string): Promise<LoginResponseProps | undefined> {
  if (env.MODE === "development") {
    return {
      username: "admin",
      isAdmin: true,
      email: "admin@admin",
    };
  }
  else {
    return await login({ username: email, password: password });
  }
}
export function getWaterTankById(waterTankId: string): WaterTankLevel | undefined {
  return fetchData().waterTanks.find((waterTank) => waterTank.watertTankId === waterTankId);
}

export function getHidrometerById(hidrometerId: string): Hidrometer | undefined {
  return fetchData().hidrometers.find((hidrometer) => hidrometer.hidrometerId === hidrometerId);
}

export function getArtesianWellById(artesianWellId: string): ArtesianWell | undefined {
  return fetchData().artesianWell.find((artesianWell) => artesianWell.artesianWellId === artesianWellId);
}