import { IEvent } from "../types/Event.interface";
import { Dispatch, SetStateAction } from "react";
import { ICalenderData } from "../types/Calender.interface";
import { deleteEvent } from "../api/deleteEvent";
import {
    EventMenuBg,
    Button,
    EventMenuButton,
    EventMenuContainer,
    EventMenuWrapper,
    EventName,
} from "../styles/EventMenu.styles";

interface IEventMenuProps {
    eventData?: IEvent;
    setEventMenu: Dispatch<SetStateAction<boolean>>;
    calenderData: ICalenderData | null;
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>;
    setUpdateEvent: Dispatch<SetStateAction<boolean>>;
}

export function EventMenu({
    eventData,
    setEventMenu,
    calenderData,
    setCalenderData,
    setUpdateEvent,
}: IEventMenuProps): JSX.Element {
    const handleDeleteEvent = (id?: string) => {
        deleteEvent(id).then(() => {
            if (calenderData) {
                const updatedCalenderData = {
                    ...calenderData,
                    days: calenderData.days.map((day) => {
                        if (day.event && day.event.id === id) {
                            day.event = null;
                        }
                        return day;
                    }),
                };
                setCalenderData(updatedCalenderData);
            }
        });
    };
    return (
        <>
            <EventMenuContainer>
                <Button onClick={() => setEventMenu(false)}>X</Button>
                <EventMenuWrapper>
                    <EventName>
                        <p>Event name: </p>
                        <p>{eventData?.title}</p>
                    </EventName>
                    <p>
                        Event description:{" "}
                        {eventData?.description
                            ? eventData?.description
                            : "empty"}
                    </p>
                    <p>Color: {eventData?.color}</p>
                    <EventMenuButton>
                        <button
                            onClick={() => {
                                setEventMenu(false);
                                setUpdateEvent(true);
                            }}
                        >
                            Update
                        </button>
                        <button
                            onClick={() => {
                                handleDeleteEvent(eventData?.id);
                                setEventMenu(false);
                            }}
                        >
                            Delete
                        </button>
                    </EventMenuButton>
                </EventMenuWrapper>
            </EventMenuContainer>
            <EventMenuBg onClick={() => setEventMenu(false)}></EventMenuBg>
        </>
    );
}
