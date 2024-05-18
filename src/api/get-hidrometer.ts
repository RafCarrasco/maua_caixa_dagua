import { Hidrometer, adaptResponseHidrometer } from "@/interface";
import { api } from "@/lib/axios";

export const getHidrometer = async (): Promise<Hidrometer[]> => {
  const response = await api.get("/Hidrometers");
  return adaptResponseHidrometer(response.data);
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
