import axios from "axios";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";

export function fetchCalender(
    year: number,
    month: string,
    setErrorHandler: Dispatch<SetStateAction<string | null>>,
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>
) {
    const token = Cookies.get("token");
    const url = `http://localhost:3000/events/${year}/${month}`;
    return axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            setErrorHandler(error.response.data.message);
            setErrorResponse(error.response.status);
        });
}
