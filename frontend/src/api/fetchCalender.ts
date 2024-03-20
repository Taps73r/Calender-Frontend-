import axios, { AxiosResponse } from "axios";
import { ICalenderData } from "../types/Calender.interface";
import Cookies from "js-cookie";

export function fetchCalender(
    year: number,
    month: string
): Promise<ICalenderData> {
    const token = Cookies.get("token");
    const url = `http://localhost:3000/events/${year}/${month}`;
    return axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response: AxiosResponse<ICalenderData>) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error("Error fetching calendar data:", error);
            throw error;
        });
}
