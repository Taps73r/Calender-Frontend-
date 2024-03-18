import styled from "styled-components";
import { ICalenderData } from "../types/Calender.interface";
import { Day } from "./Day";
import { Dispatch, SetStateAction } from "react";
import { IDate } from "../types/Date.interface";
import { MonthYearChanger } from "./MonthYearChanger";

interface IMonthProps {
    calenderData: ICalenderData;
    setDate: Dispatch<SetStateAction<IDate>>;
    selectedDate: IDate;
}

const MonthElement = styled.div`
    padding: 10px;
`;

export function Month({
    calenderData,
    selectedDate,
    setDate,
}: IMonthProps): JSX.Element {
    return (
        <MonthElement>
            <MonthYearChanger selectedDate={selectedDate} setDate={setDate} />
            <Day days={calenderData.days} />
        </MonthElement>
    );
}
