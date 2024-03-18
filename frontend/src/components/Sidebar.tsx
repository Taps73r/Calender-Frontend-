import styled from "styled-components";
import { EventButton } from "./EventButton";
import { Labels } from "./Labels";

const SidebarContainer = styled.aside`
    border: 1px solid #e2e8f0;
    padding: 1.25rem;
    width: 16rem;
`;

export function Sidebar(): JSX.Element {
    return (
        <SidebarContainer>
            <EventButton />
            <Labels />
        </SidebarContainer>
    );
}
