import styled from "styled-components";

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    background-color: #f6ae2d;
    width: 400px;
    border-radius: 0 10px 10px 0;

    p {
        color: #a41623;
        height: 50px;
        font-size: 44px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 100px;
    color: #5c8001;
    background-color: #7cb518;
    border: 2px solid #5c8001;
    transition: 0.5s;
    font-size: 22px;

    &:hover {
        background-color: #5c8001;
        color: #7cb518;
        border: 2px solid #7cb518;
    }
`;

export const FindEvent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 90%;
    margin-top: 40px;

    input {
        padding: 10px;
        font-size: 20px;
        outline: none;
    }

    button {
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        color: #5c8001;
        background-color: #7cb518;
        border: 2px solid #5c8001;
        transition: 0.5s;
        font-size: 22px;

        &:hover {
            background-color: #5c8001;
            color: #7cb518;
            border: 2px solid #7cb518;
        }
    }
`;
