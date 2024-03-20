import styled from "styled-components";
import { IEvent } from "../types/Event.interface";
import { Dispatch, SetStateAction } from "react";
import { ICalenderData } from "../types/Calender.interface";
import { deleteEvent } from "../api/deleteEvent";

interface IEventMenuProps {
    eventData?: IEvent;
    setEventMenu: Dispatch<SetStateAction<boolean>>;
    calenderData: ICalenderData | null;
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>;
}

const EventMenuContainer = styled.div`
    position: absolute;
    background-color: white;
    z-index: 5;
    top: 20%;
    left: 20%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 20px;
    border-radius: 10px;
    overflow: hidden;
`;

const EventMenuBg = styled.div`
    position: absolute;
    z-index: 4;
    background-color: grey;
    height: 100svh;
    width: 100svw;
    opacity: 0.5;
    overflow: hidden;
    cursor: pointer;
`;

const EventMenuButton = styled.div``;

export function EventMenu({
    eventData,
    setEventMenu,
    calenderData,
    setCalenderData,
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
                <p>{eventData?.title}</p>
                <p>{eventData?.description}</p>
                <p>Color: {eventData?.color}</p>
                <EventMenuButton>
                    <button>Update</button>
                    <button
                        onClick={() => {
                            handleDeleteEvent(eventData?.id);
                            setEventMenu(false);
                        }}
                    >
                        Delete
                    </button>
                </EventMenuButton>
            </EventMenuContainer>
            <EventMenuBg onClick={() => setEventMenu(false)}></EventMenuBg>
        </>
    );
}
