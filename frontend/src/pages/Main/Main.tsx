import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { getMonth } from "../../util.ts";
import { GlobalContext } from "../../context/GlobalContext.tsx";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Month } from "../../components/Month.tsx";
import { Modal } from "../../components/Modal.tsx";

const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    flex: 1;
    display: flex;
`;

export function Main() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <>
            {showEventModal && <Modal />}

            <MainContainer>
                <Header />
                <ContentContainer>
                    <Sidebar />
                    <Month currentMonth={currentMonth} />
                </ContentContainer>
            </MainContainer>
        </>
    );
}
