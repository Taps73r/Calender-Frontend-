import styled from "styled-components";
import { IDate } from "../types/Date.interface";
import { Dispatch, SetStateAction } from "react";
import { months } from "../contants/months";

interface IMonthYearChangerProps {
    setDate: Dispatch<SetStateAction<IDate>>;
    selectedDate: IDate;
}

const MonthYearChangerContainer = styled.div``;

export function MonthYearChanger({
    setDate,
    selectedDate,
}: IMonthYearChangerProps): JSX.Element {
    const setPrevMonth = () => {
        let prevMonth, prevYear;

        if (selectedDate.month === "January") {
            prevMonth = "December";
            prevYear = selectedDate.year - 1;
        } else {
            const currentMonthIndex = months.indexOf(selectedDate.month);
            prevMonth = months[currentMonthIndex - 1];
            prevYear = selectedDate.year;
        }

        setDate({ month: prevMonth, year: prevYear });
    };

    const setNextMonth = () => {
        let nextMonth, nextYear;

        if (selectedDate.month === "December") {
            nextMonth = "January";
            nextYear = selectedDate.year + 1;
        } else {
            const currentMonthIndex = months.indexOf(selectedDate.month);
            nextMonth = months[currentMonthIndex + 1];
            nextYear = selectedDate.year;
        }

        setDate({ month: nextMonth, year: nextYear });
    };

    return (
        <MonthYearChangerContainer>
            <button onClick={setPrevMonth}>Previous</button>
            <button onClick={setNextMonth}>Next</button>
        </MonthYearChangerContainer>
    );
}
