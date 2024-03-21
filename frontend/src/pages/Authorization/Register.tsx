import { Dispatch, SetStateAction } from "react";
import { RegistrationForm } from "../../components/RegistrationForm";
import { RegistrationContainer } from "../../styles/Registration.styles";

interface IRegisterProps {
    setErrorHandler: Dispatch<SetStateAction<string | null>>;
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>;
}

export function Register({
    setErrorHandler,
    setErrorResponse,
}: IRegisterProps): JSX.Element {
    return (
        <RegistrationContainer>
            <RegistrationForm
                setErrorHandler={setErrorHandler}
                setErrorResponse={setErrorResponse}
            />
        </RegistrationContainer>
    );
}
