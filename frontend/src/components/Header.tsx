import { useContext } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { GlobalContext } from "../context/GlobalContext";

const HeaderElement = styled.header`
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    margin-right: 2rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: #718096;
`;

const TodayButton = styled.button`
    border: 1px solid #cbd5e0;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
`;

const NavigationButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
`;

const MonthDisplay = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    color: #718096;
`;

export function Header(): JSX.Element {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    };

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    };

    const handleReset = () => {
        setMonthIndex(
            monthIndex === dayjs().month()
                ? monthIndex + Math.random()
                : dayjs().month()
        );
    };

    return (
        <HeaderElement>
            <Title>Calendar</Title>
            <TodayButton onClick={handleReset}>Today</TodayButton>
            <NavigationButton onClick={handlePrevMonth}>
                <span className="material-icons-outlined text-gray-600">
                    chevron_left
                </span>
            </NavigationButton>
            <NavigationButton onClick={handleNextMonth}>
                <span className="material-icons-outlined text-gray-600">
                    chevron_right
                </span>
            </NavigationButton>
            <MonthDisplay>
                {dayjs(new Date(dayjs().year(), monthIndex)).format(
                    "MMMM YYYY"
                )}
            </MonthDisplay>
        </HeaderElement>
    );
}
