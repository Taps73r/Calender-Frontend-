import styled from "styled-components";

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    background-color: #f6ae2d;
    width: 100%;
    border-radius: 0 10px 10px 0;

    p {
        color: #a41623;
        height: 50px;
        font-size: 44px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
`;