import { IDay } from "../types/Calender.interface";
import { Dispatch, SetStateAction } from "react";
import { IEvent } from "../types/Event.interface";
import {
    DayContainer,
    DayElement,
    DayName,
    EventContainer,
    HolidayContainer,
    WeekColumn,
} from "../styles/Day.styles";

interface IDayProps {
    days: IDay[];
    setEventModal: Dispatch<SetStateAction<boolean>>;
    setModalData: Dispatch<SetStateAction<IDay | undefined>>;
    setEventData: Dispatch<SetStateAction<IEvent | undefined>>;
    setEventMenu: Dispatch<SetStateAction<boolean>>;
}

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
                            <DayName>
                                <p>{day.day}</p>
                                <p>{day.dayOfWeek}</p>
                            </DayName>
                            <EventContainer color={day.event?.color}>
                                <p>{day.event?.title}</p>
                            </EventContainer>
                            <HolidayContainer color={day.holiday?.color}>
                                <p>{day.holiday?.title}</p>
                            </HolidayContainer>
                        </DayElement>
                    ))}
                </WeekColumn>
            ))}
        </DayContainer>
    );
}
