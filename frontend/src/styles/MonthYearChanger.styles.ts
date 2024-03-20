import styled from "styled-components";

export const MonthYearChangerContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;

    button {
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 30px;
        font-weight: bold;
        color: #5c8001;
        background-color: #7cb518;
        border: 2px solid #5c8001;
        transition: 0.5s;
        cursor: pointer;
        outline: none;

        &:hover {
            background-color: #5c8001;
            color: #7cb518;
            border: 2px solid #7cb518;
        }
    }
`;
