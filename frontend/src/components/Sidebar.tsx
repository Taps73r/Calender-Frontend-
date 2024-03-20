import { Dispatch, SetStateAction } from "react";
import { IDate } from "../types/Date.interface";
import { MonthYearChanger } from "./MonthYearChanger";
import { SideBarContainer } from "../styles/SideBar.style";

interface ISideBarProps {
    setDate: Dispatch<SetStateAction<IDate>>;
    selectedDate: IDate;
}

export function SideBar({ setDate, selectedDate }: ISideBarProps): JSX.Element {
    return (
        <SideBarContainer>
            <p>{selectedDate.month}</p>
            <p>{selectedDate.year}</p>
            <MonthYearChanger selectedDate={selectedDate} setDate={setDate} />
        </SideBarContainer>
    );
}
