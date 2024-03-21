import axios from "axios";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";

export function deleteEvent(
    eventId?: string,
    setErrorHandler: Dispatch<SetStateAction<string | null>>,
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>
) {
    const token = Cookies.get("token");
    const url = `http://localhost:3000/events/${eventId}`;
    return axios
        .delete(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .catch((error) => {
            setErrorHandler(error.response.data.message);
            setErrorResponse(error.response.status);
        });
}
