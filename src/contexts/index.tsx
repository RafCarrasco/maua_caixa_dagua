import { fetchArtesianWellPeriodically } from "@/api/get-artesian-well";
import { fetchHidrometerPeriodically } from "@/api/get-hidrometer";
import { fetchWaterTankLevelPeriodically } from "@/api/get-watertank";
import { createContext, useContext, useEffect, useState } from "react";

interface ApplicationContextProps {
  waterTanks: WaterTankLevel[];
  hidrometers: Hidrometer[];
  artesianWells: ArtesianWell[];
  isDataLoaded: boolean;
}

const ApplicationContext = createContext<ApplicationContextProps | undefined>(
  undefined,
);

export const useApplication = (): ApplicationContextProps => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error("useApplication must be used within a ApplicationProvider");
  }
  return context;
};

export const ApplicationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [waterTanks, setWaterTanks] = useState<WaterTankLevel[]>([]);
  const [hidrometers, setHidrometers] = useState<Hidrometer[]>([]);
  const [artesianWells, setArtesianWells] = useState<ArtesianWell[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    const intervalForHidrometer = fetchHidrometerPeriodically(setHidrometers);
    const intervalForArtesianWell =
      fetchArtesianWellPeriodically(setArtesianWells);
    const intervalForWaterTank = fetchWaterTankLevelPeriodically(setWaterTanks);

    const checkDataLoaded = () => {
      if (
        waterTanks.length > 0 &&
        hidrometers.length > 0 &&
        artesianWells.length > 0
      ) {
        setIsDataLoaded(true);
      }
    };

    checkDataLoaded();

    return () => {
      clearInterval(intervalForHidrometer);
      clearInterval(intervalForArtesianWell);
      clearInterval(intervalForWaterTank);
    };
  }, [waterTanks, hidrometers, artesianWells]);

  return (
    <ApplicationContext.Provider
      value={{ waterTanks, hidrometers, artesianWells, isDataLoaded }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
