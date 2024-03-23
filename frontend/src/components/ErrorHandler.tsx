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
    font-size: 22px;
    font-weight: bold;
    word-wrap: break-word;
    background-color: white;
    padding: 20px;
    z-index: 5;
    max-width: 400px;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #4a4e69;

    p {
        word-wrap: break-word;
    }

    button {
        margin-top: 20px;
        font-size: 20px;
        padding: 5px 14px;
        border: 1px solid #b1a7a6;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            background-color: #eb5e28;
        }
    }
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
