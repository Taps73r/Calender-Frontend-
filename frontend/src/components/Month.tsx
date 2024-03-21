import styled from "styled-components";
import { ICalenderData, IDay } from "../types/Calender.interface";
import { Day } from "./Day";
import { Dispatch, SetStateAction } from "react";
import { IEvent } from "../types/Event.interface";

interface IMonthProps {
    calenderData: ICalenderData;
    setEventModal: Dispatch<SetStateAction<boolean>>;
    setModalData: Dispatch<SetStateAction<IDay | undefined>>;
    setEventData: Dispatch<SetStateAction<IEvent | undefined>>;
    setEventMenu: Dispatch<SetStateAction<boolean>>;
}

const MonthElement = styled.div`
    padding: 10px;
    height: 100%;
`;

export function Month({
    calenderData,
    setEventModal,
    setModalData,
    setEventData,
    setEventMenu,
}: IMonthProps): JSX.Element {
    return (
        <MonthElement>
            <Day
                setEventData={setEventData}
                setEventMenu={setEventMenu}
                setModalData={setModalData}
                days={calenderData.days}
                setEventModal={setEventModal}
            />
        </MonthElement>
    );
}
