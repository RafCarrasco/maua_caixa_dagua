import { fetchArtesianWellPeriodically } from "@/api/get-artesian-well";
import { fetchHidrometerPeriodically } from "@/api/get-hidrometer";
import { fetchWaterTankLevelPeriodically } from "@/api/get-watertank";
import { ArtesianWell, Hidrometer, WaterTankLevel } from "@/interface";
import { createContext, useContext, useEffect, useState } from "react";

interface ApplicationContextProps {
  waterTanks: WaterTankLevel[];
  hidrometers : Hidrometer[];
  artesianWells : ArtesianWell[]
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

  useEffect(() => {
    const intervalForHidrometer =fetchHidrometerPeriodically(setHidrometers);
    const intervalForArtesianWell = fetchArtesianWellPeriodically(setArtesianWells)
    const intervalForWaterTank = fetchWaterTankLevelPeriodically(setWaterTanks);
    return () => {
      clearInterval(intervalForHidrometer);
      clearInterval(intervalForArtesianWell);
      clearInterval(intervalForWaterTank);

    }
  }, []);

  return (
    <ApplicationContext.Provider value={{ waterTanks,hidrometers,artesianWells }}>
      {children}
    </ApplicationContext.Provider>
  );
};
