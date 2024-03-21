import styled from "styled-components";

export const ModalBg = styled.div`
    position: absolute;
    z-index: 4;
    background-color: grey;
    height: 100svh;
    width: 100svw;
    opacity: 0.5;
    overflow: hidden;
    cursor: pointer;
`;

export const ModalContainer = styled.form`
    position: absolute;
    background-color: white;
    width: 400px;
    height: 440px;
    z-index: 5;
    top: 20%;
    left: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #4a4e69;
`;

export const Input = styled.input`
    margin-bottom: 40px;
    width: 90%;
    height: 8%;
    font-size: 20px;
    align-self: center;
    padding-left: 10px;
`;

export const Select = styled.select`
    margin-bottom: 40px;
    width: 90%;
    font-size: 20px;
    height: 8%;
    align-self: center;
`;

export const Textarea = styled.input`
    align-self: center;
    margin-bottom: 40px;
    width: 90%;
    height: 8%;
    font-size: 20px;
    padding-left: 10px;
`;

export const ButtonSend = styled.button`
    width: 90%;
    align-self: center;
    height: 8%;
    font-size: 20px;
    cursor: pointer;
`;

export const Header = styled.div`
    display: flex;
    font-size: 22px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 54%;
    margin: 20px 0;

    button {
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

export const Date = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 20px;
    padding: 5px;
    background-color: #feeafa;
`;
