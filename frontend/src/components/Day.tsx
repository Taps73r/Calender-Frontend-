import styled from "styled-components";
import { IDay } from "../types/Calender.interface";
import { Dispatch, SetStateAction } from "react";
import { IEvent } from "../types/Event.interface";

interface IDayProps {
    days: IDay[];
    setEventModal: Dispatch<SetStateAction<boolean>>;
    setModalData: Dispatch<SetStateAction<IDay | undefined>>;
    setEventData: Dispatch<SetStateAction<IEvent | undefined>>;
    setEventMenu: Dispatch<SetStateAction<boolean>>;
}

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const WeekColumn = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const DayElement = styled.div`
    background-color: grey;
    width: 160px;
    display: flex;
    height: 130px;
    gap: 10px;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
`;

const EventContainer = styled.div``;

export function Day({
    days,
    setEventModal,
    setModalData,
    setEventData,
    setEventMenu,
}: IDayProps): JSX.Element {
    const weeks = [];

    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    return (
        <DayContainer>
            {weeks.map((week, weekIndex) => (
                <WeekColumn key={weekIndex} className="week">
                    {week.map((day, dayIndex) => (
                        <DayElement
                            onClick={() => {
                                if (day.event) {
                                    setEventData(day.event);
                                    setEventMenu(true);
                                } else {
                                    setEventModal(true);
                                    setModalData({
                                        day: day.day,
                                        month: day.month,
                                        year: day.year,
                                        dayOfWeek: day.dayOfWeek,
                                    });
                                }
                            }}
                            key={dayIndex}
                            className="day"
                        >
                            <p>{day.day}</p>
                            <p>{day.dayOfWeek}</p>
                            <EventContainer>
                                <p>{day.event?.title}</p>
                            </EventContainer>
                        </DayElement>
                    ))}
                </WeekColumn>
            ))}
        </DayContainer>
    );
}
