import styled from "styled-components";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Month } from "../../components/Month";
import { useState } from "react";
import { getMonth } from "../../util";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

export function Main(): JSX.Element {
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    return (
        <MainContainer>
            <Header />
            <Content>
                <Sidebar />
                <Month currentMonth={currentMonth} />
            </Content>
        </MainContainer>
    );
}
