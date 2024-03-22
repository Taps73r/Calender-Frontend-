import styled from "styled-components";

export const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 98svh;
`;

export const WeekColumn = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const DayElement = styled.div`
    background-color: grey;
    width: 11svw;
    display: flex;
    height: 18.5svh;
    background-color: #fff;
    gap: 10px;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`;

export const DayName = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const EventContainer = styled.div`
    padding: 2px;
    word-wrap: break-word;
    background-color: ${({ color }) => color || "transparent"};
    border-radius: 2px;
    max-height: 48px;
    overflow: hidden;
`;

export const HolidayContainer = styled.div`
    word-wrap: break-word;
    padding: 2px;
    background-color: ${({ color }) => color || "transparent"};
    border-radius: 2px;
    max-height: 70px;
    overflow: hidden;
`;
