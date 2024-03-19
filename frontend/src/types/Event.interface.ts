export interface IEvent {
    id?: string;
    title: string;
    description?: string;
    color?: string;
    date: {
        year?: number;
        month?: string;
        day?: number;
        dayOfWeek?: string;
    };
}
