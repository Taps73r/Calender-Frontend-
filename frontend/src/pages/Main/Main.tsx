import { useEffect, useState } from "react";
import styled from "styled-components";
import { Month } from "../../components/Month.tsx";
import { fetchCalender } from "../../api/fetchCalender.ts";
import { ICalenderData, IDay } from "../../types/Calender.interface.ts";
import { Modal } from "../../components/Modal.tsx";
import { SideBar } from "../../components/SideBar.tsx";

const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export function Main() {
    const currentDate = new Date();
    const [date, setDate] = useState({
        year: currentDate.getFullYear(),
        month: currentDate.toLocaleString("en-US", { month: "long" }),
    });
    const [eventModal, setEventModal] = useState(false);

    const [calenderData, setCalenderData] = useState<ICalenderData | null>(
        null
    );

    const [modalData, setModalData] = useState<IDay>();

    useEffect(() => {
        fetchCalender(date.year, date.month)
            .then((data) => {
                setCalenderData(data);
            })
            .catch((error) => {
                console.error("Error fetching calendar data:", error);
            });
    }, [date]);

    return (
        <>
            {eventModal && (
                <Modal
                    modalData={modalData}
                    setEventModal={setEventModal}
                    setCalenderData={setCalenderData}
                    calenderData={calenderData}
                />
            )}
            <MainContainer>
                <SideBar setDate={setDate} selectedDate={date} />
                <ContentContainer>
                    {calenderData && (
                        <Month
                            setModalData={setModalData}
                            calenderData={calenderData}
                            setEventModal={setEventModal}
                        />
                    )}
                </ContentContainer>
            </MainContainer>
        </>
    );
}
