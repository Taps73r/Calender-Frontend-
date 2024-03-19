import axios from "axios";
import Cookies from "js-cookie";
import { IRegisterFields } from "../types/Register.interface";

export function fetchLogin(data: IRegisterFields) {
    const url = "http://localhost:3000/login";
    return axios
        .post(url, data)
        .then((response) => {
            const token = response.data.token;
            if (token) {
                Cookies.set("token", token, { expires: 1, sameSite: "strict" });
            }
        })
        .catch((error) => {
            console.error("Error registering:", error);
        });
}