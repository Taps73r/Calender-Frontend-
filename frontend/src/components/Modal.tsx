import { useForm } from "react-hook-form";
import { InputError } from "./InputError";
import { IModal } from "../types/Modal.interface";
import { Dispatch, SetStateAction } from "react";
import { sendEvent } from "../api/sendEvent";
import { IEventData } from "../types/Event.interface";
import { ICalenderData, IDay } from "../types/Calender.interface";
import {
    ButtonSend,
    Date,
    Header,
    Input,
    ModalBg,
    ModalContainer,
    Select,
    Textarea,
} from "../styles/Modal.styles";

interface IModalProps {
    setEventModal: Dispatch<SetStateAction<boolean>>;
    modalData?: IDay;
    calenderData: ICalenderData | null;
    setCalenderData: Dispatch<SetStateAction<ICalenderData | null>>;
    setErrorHandler: Dispatch<SetStateAction<string | null>>;
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>;
}

export function Modal({
    setEventModal,
    modalData,
    calenderData,
    setCalenderData,
    setErrorHandler,
    setErrorResponse,
}: IModalProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IModal>();

    const onSubmit = (data: IModal) => {
        const eventData: IEventData = {
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
        sendEvent(
            eventData,
            setCalenderData,
            calenderData,
            setErrorHandler,
            setErrorResponse
        );
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
                    {...register("name", { required: "name is required" })}
                    type="text"
                    placeholder="Name"
                />
                {errors.name && (
                    <InputError errorMessage={errors.name.message} />
                )}
                <Select {...register("color")}>
                    <option value="#ee6055">Red</option>
                    <option value="#60d394">Blue</option>
                    <option value="#aaf683">Green</option>
                    <option value="#ffd97d">Yellow</option>
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
