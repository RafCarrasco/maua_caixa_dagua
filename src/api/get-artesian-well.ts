import { ArtesianWell, adaptResponseArtesianWell } from "@/interface";
import { api } from "@/lib/axios";

export const getArtesianWell = async (): Promise<ArtesianWell[]> => {
  const response = await api.get("/ArtesianWell");
  return adaptResponseArtesianWell(response.data);
};

export const fetchArtesianWellPeriodically = (
  updateArtesianWell: (data: ArtesianWell[]) => void,
) => {
  async function fetchArtesianWell() {
    try {
       updateArtesianWell(await getArtesianWell());
    } catch (error) {
      console.error("Error fetching water tank level:", error);
    }
  };

  fetchArtesianWell();
  const intervalId = setInterval(fetchArtesianWell, 10 * 60 * 60 * 1000); // 10 horas em milissegundos
  
  return intervalId;
};
