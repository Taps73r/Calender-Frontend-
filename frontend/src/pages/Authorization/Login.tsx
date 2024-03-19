import styled from "styled-components";
import { LoginForm } from "../../components/LoginForm";

const LoginContainer = styled.div`
    width: 100svw;
    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export function Login(): JSX.Element {
    return (
        <LoginContainer>
            <LoginForm />
        </LoginContainer>
    );
}
