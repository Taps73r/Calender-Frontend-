import { Dispatch, SetStateAction } from "react";
import { LoginForm } from "../../components/LoginForm";
import { LoginContainer } from "../../styles/Login.styles";

interface ILoginProps {
    setErrorHandler: Dispatch<SetStateAction<string | null>>;
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>;
}

export function Login({
    setErrorHandler,
    setErrorResponse,
}: ILoginProps): JSX.Element {
    return (
        <LoginContainer>
            <LoginForm
                setErrorHandler={setErrorHandler}
                setErrorResponse={setErrorResponse}
            />
        </LoginContainer>
    );
}
