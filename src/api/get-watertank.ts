import { env } from "@/env";
import { api } from "@/lib/axios";
import { mockWaterTanks } from "./mocks/get-waterbox-mock";
import { WaterTankLevel } from "@/pages/app/entity/water-tank-level";

export const getWaterTankLevel = async (): Promise<WaterTankLevel[]> => {
  if (env.MODE !== "development") {
    const response = await api.get("/WaterTanks");
    return WaterTankLevel.adaptResponseWaterTankLevel(response.data);
  }
  return mockWaterTanks;
};

export const fetchWaterTankLevelPeriodically = (
  updateWaterTankLevel: (data: WaterTankLevel[]) => void,
) => {
  async function fetchWaterTankLevel() {
    try {
      updateWaterTankLevel(await getWaterTankLevel());
    } catch (error) {
      console.error("Error fetching water tank level:", error);
    }
  };

  fetchWaterTankLevel();
  const intervalId = setInterval(fetchWaterTankLevel, 10 * 60 * 60 * 1000); // 10 horas em milissegundos
  return intervalId;
};
