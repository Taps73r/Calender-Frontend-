import axios, { AxiosResponse } from "axios";
import { IEvent } from "../types/Event.interface";
import { ICalenderData } from "../types/Calender.interface";
import { Dispatch, SetStateAction } from "react";
import Cookies from "js-cookie";

export function updateEvent(
    updatedEventData: IEvent,
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>,
    calenderData: ICalenderData | null,
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>,
    setErrorHandler: Dispatch<SetStateAction<string | null>>
) {
    const token = Cookies.get("token");
    const url = `https://calender-backend-1qdj.onrender.com/events/${updatedEventData?.id}`;
    return axios
        .put(url, updatedEventData, {
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
            setErrorHandler(error.response.data.message);
            setErrorResponse(error.response.status);
        });
}
