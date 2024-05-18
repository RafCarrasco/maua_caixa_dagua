import { adaptResponseWaterTankLevel, WaterTankLevel } from "@/interface";
import { api } from "@/lib/axios";

export const getWaterTankLevel = async (): Promise<WaterTankLevel[]> => {
  const response = await api.get("/WaterTanks");
  return adaptResponseWaterTankLevel(response.data);
};

export const fetchWaterTankLevelPeriodically = (
  updateWaterTankLevel: (data: WaterTankLevel[]) => void,
) => {
  async function fetchWaterTankLevel() {
    try {
      updateWaterTankLevel (await getWaterTankLevel());
    } catch (error) {
      console.error("Error fetching water tank level:", error);
    }
  };

  fetchWaterTankLevel();
  const intervalId = setInterval(fetchWaterTankLevel, 10 * 60 * 60 * 1000); // 10 horas em milissegundos
  return intervalId;
};
