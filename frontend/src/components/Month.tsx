import styled from "styled-components";
import { ICalenderData, IDay } from "../types/Calender.interface";
import { Day } from "./Day";
import { Dispatch, SetStateAction } from "react";

interface IMonthProps {
    calenderData: ICalenderData;
    setEventModal: Dispatch<SetStateAction<boolean>>;
    setModalData: Dispatch<SetStateAction<IDay | undefined>>;
}

const MonthElement = styled.div`
    padding: 10px;
`;

export function Month({
    calenderData,
    setEventModal,
    setModalData,
}: IMonthProps): JSX.Element {
    return (
        <MonthElement>
            <Day
                setModalData={setModalData}
                days={calenderData.days}
                setEventModal={setEventModal}
            />
        </MonthElement>
    );
}
