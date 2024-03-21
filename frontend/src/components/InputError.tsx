import styled from "styled-components";

interface IInputErrorProps {
    errorMessage?: string;
}

const ErrorInput = styled.div`
    position: absolute;
    bottom: 59%;
    color: red;
    left: 6%;
`;

export function InputError({ errorMessage }: IInputErrorProps): JSX.Element {
    return <ErrorInput>*{errorMessage}</ErrorInput>;
}
