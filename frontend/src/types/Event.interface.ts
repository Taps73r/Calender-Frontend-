export interface IEvent {
    id: string | undefined;
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

export interface IEventData {
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
