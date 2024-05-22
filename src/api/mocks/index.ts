import { ArtesianWell } from "@/pages/app/entity/artesian-well";
import { Hidrometer } from "@/pages/app/entity/hidrometer";
import { WaterTankLevel } from "@/pages/app/entity/water-tank-level";

export interface mockProps {
    waterTanks: WaterTankLevel[],
    hidrometers: Hidrometer[],
    artesianWell: ArtesianWell[]
}