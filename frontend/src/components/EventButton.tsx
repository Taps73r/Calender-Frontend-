import { useContext } from "react";
import styled from "styled-components";
import plusImg from "../assets/plus.svg";
import { GlobalContext } from "../context/GlobalContext";

const Button = styled.button`
    border: 1px solid #cbd5e0;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

const ButtonText = styled.span`
    padding-left: 0.75rem;
    padding-right: 1.75rem;
`;

export function EventButton(): JSX.Element {
    const { setShowEventModal } = useContext(GlobalContext);

    return (
        <Button onClick={() => setShowEventModal(true)}>
            <img src={plusImg} alt="create_event" width="28" height="28" />{" "}
            <ButtonText>Create</ButtonText>
        </Button>
    );
}
