export interface IDay {
    day: number;
    dayOfWeek: string;
}

export interface ICalenderData {
    year: number;
    month: string;
    days: IDay[];
}
