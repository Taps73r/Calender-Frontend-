import styled from "styled-components";

export const EventMenuContainer = styled.div`
    padding: 10px;
    position: absolute;
    background-color: white;
    width: 400px;
    z-index: 5;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #4a4e69;

    p {
        font-size: 22px;
        word-wrap: break-word;
    }
`;

export const Button = styled.button`
    align-self: flex-end;
    width: 50px;
    font-size: 20px;
    padding: 5px 14px;
    border: 1px solid #b1a7a6;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #eb5e28;
    }
`;

export const EventMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    gap: 20px;
`;

export const EventMenuBg = styled.div`
    position: absolute;
    z-index: 4;
    background-color: grey;
    height: 100svh;
    width: 100svw;
    opacity: 0.5;
    overflow: hidden;
    cursor: pointer;
`;

export const EventName = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EventMenuButton = styled.div`
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    button {
        padding: 4px;
        background-color: #cfdbd5;
        cursor: pointer;
        border: 1px solid #403d39;
        border-radius: 4px;
        font-size: 22px;
    }
`;
