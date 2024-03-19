import styled from "styled-components";
import { useForm } from "react-hook-form";
import { InputError } from "./InputError";
import { IModal } from "../types/Modal.interface";
import { Dispatch, SetStateAction } from "react";
import { sendEvent } from "../api/sendEvent";
import { IEvent } from "../types/Event.interface";
import { ICalenderData, IDay } from "../types/Calender.interface";

interface IModalProps {
    setEventModal: Dispatch<SetStateAction<boolean>>;
    modalData?: IDay;
    calenderData: ICalenderData | null;
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>;
}

const ModalBg = styled.div`
    position: absolute;
    z-index: 4;
    background-color: grey;
    height: 100svh;
    width: 100svw;
    opacity: 0.5;
    overflow: hidden;
    cursor: pointer;
`;

const ModalContainer = styled.form`
    position: absolute;
    background-color: white;
    z-index: 5;
    top: 20%;
    left: 50%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 20px;
    border-radius: 10px;
    overflow: hidden;
`;

const Input = styled.input`
    margin-bottom: 10px;
    width: 220px;
    height: 30px;
`;

const Select = styled.select`
    margin-bottom: 10px;
    width: 224px;
    height: 30px;
`;

const Textarea = styled.input`
    margin-bottom: 10px;
    width: 220px;
    height: 30px;
`;

const ButtonSend = styled.button`
    width: 224px;
    height: 30px;
    cursor: pointer;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
        padding: 3px 5px;
        cursor: pointer;
    }
`;

const Date = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export function Modal({
    setEventModal,
    modalData,
    calenderData,
    setCalenderData,
}: IModalProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IModal>();

    const onSubmit = (data: IModal) => {
        const eventData: IEvent = {
            title: data.name,
            description: data.description,
            color: data.color,
            date: {
                year: modalData?.year,
                month: modalData?.month,
                day: modalData?.day,
                dayOfWeek: modalData?.dayOfWeek,
            },
        };
        sendEvent(eventData, setCalenderData, calenderData);
        setEventModal(false);
    };

    return (
        <>
            <ModalContainer onSubmit={handleSubmit(onSubmit)}>
                <Date>
                    <p>{modalData?.day}</p>
                    <p>{modalData?.month}</p>
                    <p>{modalData?.year}</p>
                </Date>
                <Header>
                    <label>Create event</label>
                    <button onClick={() => setEventModal(false)}>X</button>
                </Header>
                <Input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Name"
                />
                {errors.name && (
                    <InputError errorMessage={errors.name.message} />
                )}
                <Select {...register("color")}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </Select>
                <Textarea
                    {...register("description")}
                    placeholder="Description"
                ></Textarea>
                <ButtonSend type="submit">Submit</ButtonSend>
            </ModalContainer>
            <ModalBg onClick={() => setEventModal(false)}></ModalBg>
        </>
    );
}
