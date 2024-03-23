import axios from "axios";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";

export function deleteEvent(
    setErrorHandler: Dispatch<SetStateAction<string | null>>,
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>,
    eventId?: string
) {
    const token = Cookies.get("token");
    const url = `https://calender-backend-1qdj.onrender.com/events/${eventId}`;
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
