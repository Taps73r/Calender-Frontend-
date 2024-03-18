import styled from "styled-components";

interface IInputErrorProps {
    errorMessage?: string;
}

const ErrorInput = styled.div``;

export function InputError({ errorMessage }: IInputErrorProps): JSX.Element {
    return <ErrorInput>{errorMessage}</ErrorInput>;
}
