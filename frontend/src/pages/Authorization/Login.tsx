import { LoginForm } from "../../components/LoginForm";
import { LoginContainer } from "../../styles/Login.styles";

export function Login(): JSX.Element {
    return (
        <LoginContainer>
            <LoginForm />
        </LoginContainer>
    );
}
