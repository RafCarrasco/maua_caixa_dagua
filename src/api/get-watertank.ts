import { WaterTank, WaterTanks } from "@/interface";
import { api } from "@/lib/axios";


export const transformObjectToList = (
  obj: WaterTank,
): WaterTanks => {
  return Object.entries(obj).map(([level, data]) => ({ level, data }));
};

export const getWaterTankLevel = async (): Promise<WaterTanks> => {
  const response = await api.get("/watertanklevel");
  return transformObjectToList(response.data);
};

export const fetchWaterTankLevelPeriodically = (
  updateWaterTankLevel: (data: WaterTanks) => void,
) => {
  async function fetchWaterTankLevel() {
    try {
      const waterTankLevel = await getWaterTankLevel();
      updateWaterTankLevel(waterTankLevel);
    } catch (error) {
      console.error("Error fetching water tank level:", error);
    }
  };

  fetchWaterTankLevel();
  const intervalId = setInterval(fetchWaterTankLevel, 10 * 60 * 60 * 1000); // 10 horas em milissegundos
  return intervalId;
};
