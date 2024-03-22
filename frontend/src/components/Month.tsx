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
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>;
    setErrorHandler: Dispatch<SetStateAction<string | null>>;
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>;
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
    setCalenderData,
    setErrorResponse,
    setErrorHandler,
}: IMonthProps): JSX.Element {
    return (
        <MonthElement>
            <Day
                setCalenderData={setCalenderData}
                setEventData={setEventData}
                setEventMenu={setEventMenu}
                setModalData={setModalData}
                days={calenderData.days}
                setEventModal={setEventModal}
                calenderData={calenderData}
                setErrorHandler={setErrorHandler}
                setErrorResponse={setErrorResponse}
            />
        </MonthElement>
    );
}
