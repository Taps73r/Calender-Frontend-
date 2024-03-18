import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styled from "styled-components";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

const ModalContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 25%;
`;

const Header = styled.header`
    background-color: #f3f4f6;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Footer = styled.footer`
    border-top: 1px solid #e5e7eb;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;

const Label = styled.label`
    background-color: ${(props) => props.color};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export function Modal(): JSX.Element {
    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
        useContext(GlobalContext);

    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            : labelsClasses[0]
    );

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected?.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };

        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: calendarEvent });
        } else {
            dispatchCalEvent({ type: "push", payload: calendarEvent });
        }

        setShowEventModal(false);
    }

    return (
        <ModalContainer>
            <Form onSubmit={handleSubmit}>
                <Header>
                    <span className="material-icons-outlined text-gray-400">
                        drag_handle
                    </span>
                    <div>
                        {selectedEvent && (
                            <span
                                onClick={() => {
                                    dispatchCalEvent({
                                        type: "delete",
                                        payload: selectedEvent,
                                    });
                                    setShowEventModal(false);
                                }}
                                className="material-icons-outlined text-gray-400 cursor-pointer"
                            >
                                delete
                            </span>
                        )}
                        <button onClick={() => setShowEventModal(false)}>
                            <span className="material-icons-outlined text-gray-400">
                                close
                            </span>
                        </button>
                    </div>
                </Header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div></div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Add title"
                            value={title}
                            required
                            className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <span className="material-icons-outlined text-gray-400">
                            schedule
                        </span>
                        <p>{daySelected?.format("dddd, MMMM DD")}</p>
                        <span className="material-icons-outlined text-gray-400">
                            segment
                        </span>
                        <input
                            type="text"
                            name="description"
                            placeholder="Add a description"
                            value={description}
                            required
                            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <span className="material-icons-outlined text-gray-400">
                            bookmark_border
                        </span>
                        <div className="flex gap-x-2">
                            {labelsClasses.map((lblClass, i) => (
                                <Label
                                    key={i}
                                    onClick={() => setSelectedLabel(lblClass)}
                                    color={`bg-${lblClass}-500`}
                                >
                                    {selectedLabel === lblClass && (
                                        <span className="material-icons-outlined text-white text-sm">
                                            check
                                        </span>
                                    )}
                                </Label>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                    >
                        Save
                    </button>
                </Footer>
            </Form>
        </ModalContainer>
    );
}
