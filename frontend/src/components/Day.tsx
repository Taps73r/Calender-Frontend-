import { ICalenderData, IDay } from "../types/Calender.interface";
import { Dispatch, SetStateAction, useState } from "react";
import { IEvent } from "../types/Event.interface";
import Cookies from "js-cookie";
import {
    DayContainer,
    DayElement,
    DayName,
    EventContainer,
    HolidayContainer,
    WeekColumn,
} from "../styles/Day.styles";
import axios from "axios";

interface IDayProps {
    days: IDay[];
    setEventModal: Dispatch<SetStateAction<boolean>>;
    setModalData: Dispatch<SetStateAction<IDay | undefined>>;
    setEventData: Dispatch<SetStateAction<IEvent | undefined>>;
    setEventMenu: Dispatch<SetStateAction<boolean>>;
    calenderData: ICalenderData | null;
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>;
    setErrorHandler: Dispatch<SetStateAction<string | null>>;
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>;
}

export function Day({
    days,
    setEventModal,
    setModalData,
    setEventData,
    setEventMenu,
    calenderData,
    setErrorHandler,
    setCalenderData,
    setErrorResponse,
}: IDayProps): JSX.Element {
    const weeks = [];

    const [draggedEvent, setDraggedEvent] = useState<IEvent | null | undefined>(
        null
    );

    const handleDragStart = (eventItem: IEvent) => {
        setDraggedEvent(eventItem);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>, day: IDay) => {
        event.preventDefault();
        if (draggedEvent) {
            console.log(`Перетягнуто на день: ${day.day}`);
            console.log("Перетягувана подія:", draggedEvent);
            const token = Cookies.get("token");
            axios
                .put(
                    `http://localhost:3000/events/update-date/${draggedEvent.id}`,
                    {
                        newDate: {
                            year: draggedEvent.date.year,
                            month: draggedEvent.date.month,
                            day: day.day,
                        },
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((response) => {
                    const updatedDay = response.data;
                    if (calenderData) {
                        const updatedCalendarData: ICalenderData = {
                            ...calenderData,
                        };
                        updatedCalendarData.days?.forEach((day, index) => {
                            if (
                                day.day === draggedEvent.date.day &&
                                day.month === draggedEvent.date.month &&
                                day.year === draggedEvent.date.year
                            ) {
                                updatedCalendarData.days[index].event = null;
                            }
                        });
                        updatedCalendarData.days?.forEach((day, index) => {
                            if (
                                day.day === updatedDay.day &&
                                day.month === updatedDay.month &&
                                day.year === updatedDay.year
                            ) {
                                updatedCalendarData.days[index] = updatedDay;
                            }
                        });
                        setCalenderData(updatedCalendarData);
                    }
                })
                .catch((error) => {
                    setErrorHandler(error.response.data.message);
                    setErrorResponse(error.response.status);
                });
            setDraggedEvent(null);
        }
    };

    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    return (
        <DayContainer>
            {weeks.map((week, weekIndex) => (
                <WeekColumn key={weekIndex} className="week">
                    {week.map((day, dayIndex) => (
                        <DayElement
                            onDragOver={(event) => handleDragOver(event)}
                            onDrop={(event) => handleDrop(event, day)}
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
                            <EventContainer
                                color={day.event?.color}
                                draggable={!!day.event}
                                onDragStart={() => handleDragStart(day.event)}
                            >
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
