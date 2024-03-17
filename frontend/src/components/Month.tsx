import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import { Day } from "./Day";

interface IMonthProps {
    currentMonth: dayjs.Dayjs[][];
}

const MonthElement = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
    height: 90svh;
`;

export function Month({ currentMonth }: IMonthProps): JSX.Element {
    return (
        <MonthElement>
            {currentMonth.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, index) => (
                        <Day day={day} key={index} rowIndex={i} />
                    ))}
                </React.Fragment>
            ))}
        </MonthElement>
    );
}
