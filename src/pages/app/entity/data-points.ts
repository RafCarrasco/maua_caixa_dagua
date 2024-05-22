export class DataPoint {
    fieldValue: number | string;
    timestamp: string;
    start: string;
    stop: string;

    constructor(fieldValue: number | string, timestamp: string, start: string, stop: string) {
        this.fieldValue = fieldValue;
        this.timestamp = timestamp;
        this.start = start;
        this.stop = stop;
    }
}