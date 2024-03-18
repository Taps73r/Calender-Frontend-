import axios, { AxiosResponse } from "axios";
import { ICalenderData } from "../types/Calender.interface";

export function fetchCalender(
    year: number,
    month: string
): Promise<ICalenderData> {
    const url = `http://localhost:3000/events/${year}/${month}`;

    return axios
        .get(url)
        .then((response: AxiosResponse<ICalenderData>) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error("Error fetching calendar data:", error);
            throw error;
        });
}
