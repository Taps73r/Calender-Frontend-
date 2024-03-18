import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import { GlobalContext } from "../context/GlobalContext";

interface IDayProps {
    day: Dayjs;
    rowIndex: number;
}

interface IEvent {
    id: number;
    title: string;
    description: string;
    label: string;
    day: Dayjs;
}


const DayContainer = styled.div`
    border: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
`;

const DayHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DayOfWeek = styled.p`
    font-size: 0.75rem;
    margin-top: 0.25rem;
`;

interface IDayNumberProps {
    isCurrentDay: boolean;
}

const DayNumber = styled.p<IDayNumberProps>`
    font-size: 0.75rem;
    padding: 0.25rem;
    margin: 0.25rem;
    text-align: center;
    border-radius: 9999px;
    width: 1.75rem;
    color: #color;
    background-color: ${(props) =>
        props.isCurrentDay ? "#3182ce" : "transparent"};
`;

const DayEventsContainer = styled.div`
    flex: 1;
    cursor: pointer;
`;

interface IEventProps {
    color: string;
}

const Event = styled.div<IEventProps>`
    background-color: ${(props) => `#${props.color}-200`};
    padding: 0.25rem;
    margin-right: 0.75rem;
    color: #4a5568;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.25rem;
`;

export function Day({ day, rowIndex }: IDayProps) {
    const [dayEvents, setDayEvents] = useState<IEvent[]>([]);
    const {
        setDaySelected,
        setShowEventModal,
        filteredEvents,
        setSelectedEvent,
    } = useContext(GlobalContext);

    useEffect(() => {
        const events =
            filteredEvents?.filter(
                (evt) =>
                    dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
            ) || [];
        setDayEvents(events);
    }, [filteredEvents, day]);

    const getCurrentDayClass = (): boolean => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
    };

    return (
        <DayContainer>
            <DayHeader>
                {rowIndex === 0 && (
                    <DayOfWeek>{day.format("ddd").toUpperCase()}</DayOfWeek>
                )}
                <DayNumber isCurrentDay={getCurrentDayClass()}>
                    {day.format("DD")}
                </DayNumber>
            </DayHeader>
            <DayEventsContainer
                onClick={() => {
                    setDaySelected(day);
                    setShowEventModal(true);
                }}
            >
                {dayEvents.map((evt, idx) => (
                    <Event
                        key={idx}
                        color={evt.label}
                        onClick={() => setSelectedEvent(evt)}
                    >
                        {evt.title}
                    </Event>
                ))}
            </DayEventsContainer>
        </DayContainer>
    );
}
