import { CommonProps } from "./common-props";
import { DataPoint } from "./data-points";

export class Hidrometer extends CommonProps {
    hidrometerId: string;
    data_counter: DataPoint[];

    constructor(data: any, hidrometerId: string) {
        super(data);
        this.hidrometerId = hidrometerId;
        this.data_counter = data.data_counter;
    }

    static adaptResponseHidrometer(response: any): Hidrometer[] {
        const adaptedResponse: Hidrometer[] = [];

        for (const key in response) {
            if (response.hasOwnProperty(key)) {
                adaptedResponse.push(new Hidrometer(response[key], key));
            }
        }

        return adaptedResponse;
    }
}
