import { env } from "@/env";
import { api } from "@/lib/axios";
import { mockArtesianWells } from "./mocks/get-artesian-well";
import { ArtesianWell } from "@/pages/app/entity/artesian-well";
import { RequestBaseProps } from "@/interface";

export const getArtesianWell = async ({
  interval,
  limit,
}: RequestBaseProps): Promise<ArtesianWell[]> => {
  if (env.MODE !== "development") {
    const response = await api.get(`/ArtesianWell`, {
      params: {
        interval,
        limit,
      },
    });
    return ArtesianWell.adaptResponseArtesianWell(response.data);
  }

  return mockArtesianWells;
};

export const fetchArtesianWellPeriodically = (
  updateArtesianWell: (data: ArtesianWell[]) => void,
) => {
  async function fetchArtesianWell() {
    try {
      updateArtesianWell(
        await getArtesianWell({ interval: null, limit: null }),
      );
    } catch (error) {
      console.error("Error fetching water tank level:", error);
    }
  }

  fetchArtesianWell();
  const intervalId = setInterval(fetchArtesianWell, 10 * 60 * 60 * 1000); // 10 horas em milissegundos
  return intervalId;
};
