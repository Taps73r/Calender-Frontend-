import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IDate } from "../types/Date.interface";
import { InputError } from "./InputError";
import { IModal } from "../types/Modal";
import { Dispatch, SetStateAction } from "react";

interface IModalProps {
    selectedDate: IDate;
    setEventModal: Dispatch<SetStateAction<boolean>>;
}

const ModalContainer = styled.form``;

const Input = styled.input`
    margin-bottom: 10px;
`;

const Select = styled.select`
    margin-bottom: 10px;
`;

const Textarea = styled.textarea`
    margin-bottom: 10px;
`;

const Header = styled.div``;

export function Modal({
    selectedDate,
    setEventModal,
}: IModalProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IModal>();

    const onSubmit = (data: any) => {
        console.log(data); // Обробка даних форми
    };

    return (
        <ModalContainer onSubmit={handleSubmit(onSubmit)}>
            <Header>
                <label>Create event</label>
                <button onClick={() => setEventModal(false)}>X</button>
            </Header>
            <Input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
            />
            {errors.name && <InputError errorMessage={errors.name.message} />}
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
            <button type="submit">Submit</button>
        </ModalContainer>
    );
}
