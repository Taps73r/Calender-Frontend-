import React, { Dispatch, SetStateAction } from "react";
import { Dayjs } from "dayjs";

export interface Event {
    id: number;
    title: string;
    description: string;
    label: string;
    day: Dayjs;
}

interface Labels {
    label: string;
    checked: boolean;
}

interface Action {
    type: "delete";
    payload: any;
}

export interface GlobalContextType {
    monthIndex: number;
    setMonthIndex: Dispatch<SetStateAction<number>>;
    smallCalendarMonth: number | null;
    setSmallCalendarMonth: Dispatch<SetStateAction<number | null>>;
    daySelected: Dayjs | null;
    setDaySelected: Dispatch<SetStateAction<Dayjs>>;
    showEventModal: boolean;
    setShowEventModal: Dispatch<SetStateAction<boolean>>;
    dispatchCalEvent: Dispatch<Action>;
    savedEvents: Event[];
    selectedEvent: Event | null;
    setSelectedEvent: Dispatch<SetStateAction<Event | null>>;
    setLabels: Dispatch<SetStateAction<{ label: string; checked: boolean }[]>>;
    labels: Labels[];
    updateLabel: ({
        label,
        checked,
    }: {
        label: string;
        checked: boolean;
    }) => void;
    filteredEvents: Event[];
}

export const GlobalContext = React.createContext<GlobalContextType>({
    monthIndex: 0,
    setMonthIndex: () => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: () => {},
    daySelected: null,
    setDaySelected: () => {},
    showEventModal: false,
    setShowEventModal: () => {},
    dispatchCalEvent: () => {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {},
    setLabels: () => {},
    labels: [],
    updateLabel: () => {},
    filteredEvents: [],
});
