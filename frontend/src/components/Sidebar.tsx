import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { IDate } from "../types/Date.interface";
import { MonthYearChanger } from "./MonthYearChanger";

interface ISideBarProps {
    setDate: Dispatch<SetStateAction<IDate>>;
    selectedDate: IDate;
}

const SideBarContainer = styled.div``;

export function SideBar({ setDate, selectedDate }: ISideBarProps): JSX.Element {
    return (
        <SideBarContainer>
            <p>{selectedDate.month}</p>
            <p>{selectedDate.year}</p>
            <MonthYearChanger selectedDate={selectedDate} setDate={setDate} />
        </SideBarContainer>
    );
}
