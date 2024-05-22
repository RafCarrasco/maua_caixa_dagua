import { env } from "@/env";
import { api } from "@/lib/axios";

export interface WaterTankResponseProps {
    latitude: string
    longitude: string
    waterTankName: string
    sensorAmount: number
}
export async function CreateWaterTank({ latitude, longitude, sensorAmount, waterTankName }: WaterTankResponseProps) {
    if (env.MODE !== "development") {
        try {
            await api.post("/create-water-tank", {
                latitude,
                longitude,
                sensorAmount,
                waterTankName
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    else {

    }
}