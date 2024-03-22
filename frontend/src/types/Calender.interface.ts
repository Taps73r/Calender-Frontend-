import { IEvent } from "./Event.interface";

export interface IDay {
    day?: number;
    dayOfWeek?: string;
    month?: string;
    year?: number;
    event?: IEvent | null;
    holiday?: IHoliday |null;
}

export interface IHoliday {
    title: string;
    description: string;
    color: string;
    date: {
        year?: number;
        month?: string;
        day?: number;
    }
}

export interface ICalenderData {
    year?: number;
    month?: string;
    days: IDay[];
}
