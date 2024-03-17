import styled from "styled-components";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Month } from "../../components/Month";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

export function Main(): JSX.Element {
    return (
        <MainContainer>
            <Header />
            <Content>
                <Sidebar />
                <Month />
            </Content>
        </MainContainer>
    );
}
