import { CommonProps } from "./common-props";
import { DataPoint } from "./data-points";

export class ArtesianWell extends CommonProps {
    artesianWellId: string;
    data_pressure_0: DataPoint[];
    data_pressure_1: DataPoint[];

    constructor(data: any, artesianWellId: string) {
        super(data);
        this.artesianWellId = artesianWellId;
        this.data_pressure_0 = data.data_pressure_0;
        this.data_pressure_1 = data.data_pressure_1;
    }

    static adaptResponseArtesianWell(response: any): ArtesianWell[] {
        const adaptedResponse: ArtesianWell[] = [];

        for (const key in response) {
            if (response.hasOwnProperty(key)) {
                adaptedResponse.push(new ArtesianWell(response[key], key));
            }
        }

        return adaptedResponse;
    }
}