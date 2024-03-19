import { IEvent } from "./Event.interface";

export interface IDay {
    day?: number;
    dayOfWeek?: string;
    month?: string;
    year?: number;
    event?: IEvent;
}

export interface ICalenderData {
    year?: number;
    month?: string;
    days: IDay[];
}
