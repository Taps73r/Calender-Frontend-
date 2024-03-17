import { Dayjs } from "dayjs";
import styled from "styled-components";

interface IDayProps {
    day: Dayjs;
    rowIndex: number;
}

const DayElement = styled.div`
    border: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
            font-size: 0.875rem;
            padding: 0 0.25rem;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            text-align: center;
        }
    }
`;

export function Day({ day, rowIndex }: IDayProps): JSX.Element {
    return (
        <DayElement>
            <header>
                <p>{day.format("DD")}</p>
                {rowIndex === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
            </header>
        </DayElement>
    );
}
