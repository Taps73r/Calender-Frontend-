import { RegistrationForm } from "../../components/RegistrationForm";
import { RegistrationContainer } from "../../styles/Registration.styles";

export function Register(): JSX.Element {
    return (
        <RegistrationContainer>
            <RegistrationForm />
        </RegistrationContainer>
    );
}
