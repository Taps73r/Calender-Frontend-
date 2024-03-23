import { useForm } from "react-hook-form";
import { FindEvent, SideBarContainer, Button } from "../styles/SideBar.styles";
import { MonthYearChanger } from "./MonthYearChanger";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";
import { IDate } from "../types/Date.interface";
import { ICalenderData } from "../types/Calender.interface";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IFormData {
    eventName: string;
}

interface ISideBarProps {
    setDate: Dispatch<SetStateAction<IDate>>;
    selectedDate: IDate;
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>;
    setErrorHandler: Dispatch<SetStateAction<string | null>>;
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>;
}

export function SideBar({
    setDate,
    selectedDate,
    setCalenderData,
    setErrorResponse,
    setErrorHandler,
}: ISideBarProps): JSX.Element {
    const { register, handleSubmit } = useForm<IFormData>();
    const history = useNavigate();

    const handleLogOut = () => {
        Cookies.remove("token");
        history("/login");
    };

    const onSubmit = async (data: IFormData) => {
        const title = data.eventName;
        const token = Cookies.get("token");
        const url = `http://localhost:3000/events/${title}`;
        return axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setDate({
                    month: response.data.month,
                    year: response.data.year,
                });
                setCalenderData(response.data);
            })
            .catch((error) => {
                console.error(error);
                setErrorHandler(error.response.data);
                setErrorResponse(error.response.status);
            });
    };

    return (
        <SideBarContainer>
            <p>{selectedDate.month}</p>
            <p>{selectedDate.year}</p>
            <MonthYearChanger selectedDate={selectedDate} setDate={setDate} />
            <FindEvent onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Enter event name"
                    {...register("eventName", { required: true })}
                />
                <button type="submit">Search</button>
            </FindEvent>
            <Button onClick={handleLogOut}>Log Out</Button>
        </SideBarContainer>
    );
}
