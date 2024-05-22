import { CommonProps } from "./common-props";
import { DataPoint } from "./data-points";

export class WaterTankLevel extends CommonProps {
    watertTankId: string;
    data_distance: DataPoint[];

    constructor(data: any, watertTankId: string) {
        super(data);
        this.watertTankId = watertTankId;
        this.data_distance = data.data_distance;
    }

    static adaptResponseWaterTankLevel(response: any): WaterTankLevel[] {
        const adaptedResponse: WaterTankLevel[] = [];

        for (const key in response) {
            if (response.hasOwnProperty(key)) {
                adaptedResponse.push(new WaterTankLevel(response[key], key));
            }
        }

        return adaptedResponse;
    }

}