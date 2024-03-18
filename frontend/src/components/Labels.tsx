import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";

const LabelParagraph = styled.p`
    color: #718096;
    font-weight: bold;
    margin-top: 2.5rem;
`;

const LabelContainer = styled.label`
    display: flex;
    align-items: center;
    margin-top: 0.75rem;
`;

const LabelCheckbox = styled.input.attrs({ type: "checkbox" })`
    appearance: none;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    cursor: pointer;

    &:checked {
        background-color: ${(props) => props.color};
    }

    &:focus {
        outline: none;
    }
`;

const LabelText = styled.span`
    color: #4a5568; /* text-gray-700 */
    text-transform: capitalize;
`;

export function Labels(): JSX.Element {
    const { labels, updateLabel } = useContext(GlobalContext);

    return (
        <>
            <LabelParagraph>Label</LabelParagraph>
            {labels.map(({ label: lbl, checked }, idx) => (
                <LabelContainer key={idx}>
                    <LabelCheckbox
                        color={`var(--${lbl}-400)`}
                        checked={checked}
                        onChange={() =>
                            updateLabel({ label: lbl, checked: !checked })
                        }
                    />
                    <LabelText>{lbl}</LabelText>
                </LabelContainer>
            ))}
        </>
    );
}
