import { env } from "@/env";
import { api } from "@/lib/axios";
import { mockHidrometers } from "./mocks/get-hidrometer";
import { Hidrometer } from "@/pages/app/entity/hidrometer";

export const getHidrometer = async (): Promise<Hidrometer[]> => {
  if (env.MODE !== "development") {
    const response = await api.get("/Hidrometers");
    return Hidrometer.adaptResponseHidrometer(response.data);
  }
  return mockHidrometers;
};

export const fetchHidrometerPeriodically = (
  updateHidrometer: (data: Hidrometer[]) => void,
) => {
  async function fetchHidrometer() {
    try {
      updateHidrometer(await getHidrometer());
    } catch (error) {
      console.error("Error fetching water tank level:", error);
    }
  };

  fetchHidrometer();
  const intervalId = setInterval(fetchHidrometer, 10 * 60 * 60 * 1000); // 10 horas em milissegundos
  return intervalId;
};
