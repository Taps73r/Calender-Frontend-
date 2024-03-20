import styled from "styled-components";

export const RegistrationContainer = styled.div`
    width: 100svw;
    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
`;

export const RegistrationFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
    padding: 10px;
    border-radius: 6px;
    overlow: hidden;
    background-color: #d9d9d9;
    gap: 10px;

    label {
        font-size: 25px;
        color: #222831;
        font-weight: 500;
    }

    h1 {
        text-align: center;
    }

    a {
        width: 100%;
        text-align: center;
        text-decoration: none;
        color: black;
        font-size: 24px;

        &:hover {
            color: orange;
        }
    }
`;

export const Input = styled.input`
    padding-left: 10px;
    font-size: 20px;
    height: 45px;
    background-color: #eeeeee;
    border: 2px solid #d9d9d9;
    margin: 6px 0;
    border-radius: 6px;

    &::placeholder {
        font-size: 20px;
    }
`;

export const Button = styled.button`
    font-size: 20px;
    height: 45px;
    background-color: #eeeeee;
    border: 2px solid #d9d9d9;
    margin: 6px 0;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        color: orange;
    }
`;

export const Error = styled.span`
    color: red;
`;
