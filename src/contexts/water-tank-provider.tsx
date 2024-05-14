import { fetchWaterTankLevelPeriodically } from "@/api/get-watertank";
import { WaterTanks } from "@/interface";
import { createContext, useContext, useEffect, useState } from "react";

interface WaterTankContextProps {
  waterTanks: WaterTanks;
}

const WaterTankContext = createContext<WaterTankContextProps | undefined>(
  undefined,
);

export const useWaterTank = (): WaterTankContextProps => {
  const context = useContext(WaterTankContext);
  if (!context) {
    throw new Error("useWaterTank must be used within a WaterTankProvider");
  }
  return context;
};

export const WaterTankProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [waterTanks, setWaterTanks] = useState<WaterTanks>([]);

  useEffect(() => {
    const intervalId = fetchWaterTankLevelPeriodically(setWaterTanks);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <WaterTankContext.Provider value={{ waterTanks }}>
      {children}
    </WaterTankContext.Provider>
  );
};
