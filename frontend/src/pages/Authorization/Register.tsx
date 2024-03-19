import styled from "styled-components";
import { RegistrationForm } from "../../components/RegistrationForm";

const RegistrationContainer = styled.div`
    width: 100svw;
    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export function Register(): JSX.Element {
    return (
        <RegistrationContainer>
            <RegistrationForm />
        </RegistrationContainer>
    );
}
