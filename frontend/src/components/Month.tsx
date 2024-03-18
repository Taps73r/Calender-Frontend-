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
    setEventModal: Dispatch<SetStateAction<boolean>>;
}

const MonthElement = styled.div`
    padding: 10px;
`;

const ChangeDateContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export function Month({
    calenderData,
    selectedDate,
    setDate,
    setEventModal,
}: IMonthProps): JSX.Element {
    return (
        <MonthElement>
            <ChangeDateContainer>
                <p>{selectedDate.month}</p>
                <p>{selectedDate.year}</p>
                <MonthYearChanger
                    selectedDate={selectedDate}
                    setDate={setDate}
                />
            </ChangeDateContainer>
            <Day days={calenderData.days} setEventModal={setEventModal} />
        </MonthElement>
    );
}
