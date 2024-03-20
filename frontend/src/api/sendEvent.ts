import axios, { AxiosResponse } from "axios";
import { IEventData } from "../types/Event.interface";
import { ICalenderData } from "../types/Calender.interface";
import { Dispatch, SetStateAction } from "react";
import Cookies from "js-cookie";

export function sendEvent(
    eventData: IEventData,
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>,
    calenderData: ICalenderData | null
) {
    const token = Cookies.get("token");
    const url = `http://localhost:3000/events`;
    return axios
        .post(url, eventData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
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
