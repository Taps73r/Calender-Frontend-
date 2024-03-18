import styled from "styled-components";
import { IDay } from "../types/Calender.interface";
import { Dispatch, SetStateAction } from "react";

interface IDayProps {
    days: IDay[];
    setEventModal: Dispatch<SetStateAction<boolean>>;
}

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const WeekColumn = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: row;
    border: 1px solid black;
`;

const DayElement = styled.div`
    background-color: grey;
    width: 160px;
    height: 130px;
    cursor: pointer;
`;

export function Day({ days, setEventModal }: IDayProps): JSX.Element {
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }
    console.log(weeks);
    return (
        <DayContainer>
            {weeks.map((week, weekIndex) => (
                <WeekColumn key={weekIndex} className="week">
                    {week.map((day, dayIndex) => (
                        <DayElement
                            onClick={() => setEventModal(true)}
                            key={dayIndex}
                            className="day"
                        >
                            <p>{day.day}</p>
                            <p>{day.dayOfWeek}</p>
                        </DayElement>
                    ))}
                </WeekColumn>
            ))}
        </DayContainer>
    );
}
