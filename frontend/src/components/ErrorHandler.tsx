import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ModalBg } from "../styles/Modal.styles";
import Cookies from "js-cookie";

interface ErrorHandlerProps {
    setErrorHandler: Dispatch<SetStateAction<string | null>>;
    errorHandler: string;
    errorResponse: number | undefined;
}

const ErrorHandlerContainer = styled.div`
    position: absolute;
    background-color: white;
    width: 400px;
    height: 440px;
    z-index: 5;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #4a4e69;
`;

export function ErrorHandler({
    setErrorHandler,
    errorHandler,
    errorResponse,
}: ErrorHandlerProps): JSX.Element {
    const history = useNavigate();

    const handleConfirm = () => {
        setErrorHandler(null);

        if (errorResponse === 403) {
            Cookies.remove("token");
            history("/login");
        }
    };

    return (
        <>
            <ErrorHandlerContainer>
                <p>{errorHandler}</p>
                <button onClick={handleConfirm}>Confirm</button>
            </ErrorHandlerContainer>
            <ModalBg />
        </>
    );
}
