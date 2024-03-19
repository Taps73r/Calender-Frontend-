import axios, { AxiosResponse } from "axios";
import { IEvent } from "../types/Event.interface";
import { ICalenderData } from "../types/Calender.interface";
import { Dispatch, SetStateAction } from "react";

export function sendEvent(
    eventData: IEvent,
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>,
    calenderData: ICalenderData | null
) {
    const url = `http://localhost:3000/events`;
    return axios
        .post(url, eventData)
        .then((response: AxiosResponse) => {
            const updatedDay = response.data;
            if (calenderData) {
                const updatedCalendarData: ICalenderData = { ...calenderData };
                updatedCalendarData.days?.forEach((day, index) => {
                    if (
                        day.day === updatedDay.day &&
                        day.month === updatedDay.month &&
                        day.year === updatedDay.year
                    ) {
                        updatedCalendarData.days[index] = updatedDay;
                    }
                });
                setCalenderData(updatedCalendarData);
            }
        })
        .catch((error) => {
            console.error("Error send event:", error);
            throw error;
        });
}
