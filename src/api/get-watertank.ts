import { env } from "@/env";
import { api } from "@/lib/axios";
import { mockWaterTanks } from "./mocks/get-waterbox-mock";
import { WaterTankLevel } from "@/pages/app/entity/water-tank-level";
import { RequestBaseProps } from "@/interface";

export const getWaterTankLevel = async ({
  interval,
  limit,
}: RequestBaseProps): Promise<WaterTankLevel[]> => {
  if (env.MODE !== "development") {
    const response = await api.get("/WaterTanks", {
      params: {
        interval,
        limit,
      },
    });
    return WaterTankLevel.adaptResponseWaterTankLevel(response.data);
  }
  return mockWaterTanks;
};

export const fetchWaterTankLevelPeriodically = (
  updateWaterTankLevel: (data: WaterTankLevel[]) => void,
) => {
  async function fetchWaterTankLevel() {
    try {
      updateWaterTankLevel(
        await getWaterTankLevel({ interval: null, limit: null }),
      );
    } catch (error) {
      console.error("Error fetching water tank level:", error);
    }
  }

  fetchWaterTankLevel();
  const intervalId = setInterval(fetchWaterTankLevel, 10 * 60 * 60 * 1000); // 10 horas em milissegundos
  return intervalId;
};
