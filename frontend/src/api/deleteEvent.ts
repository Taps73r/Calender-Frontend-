import axios from "axios";
import Cookies from "js-cookie";

export function deleteEvent(eventId?: string) {
    const token = Cookies.get("token");
    const url = `http://localhost:3000/events/${eventId}`;
    return axios.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
