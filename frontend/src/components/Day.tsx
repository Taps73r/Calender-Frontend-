import dayjs, { Dayjs } from "dayjs";
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

        .current-day {
            background-color: orange;
            padding: 10px;
            border-radius: 50%;
            font-weight: bold;
        }
    }
`;

export function Day({ day, rowIndex }: IDayProps): JSX.Element {
    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "current-day"
            : "";
    };

    return (
        <DayElement>
            <header>
                <p className={`${getCurrentDayClass()}`}>{day.format("DD")}</p>
                {rowIndex === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
            </header>
        </DayElement>
    );
}
