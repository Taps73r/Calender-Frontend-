import styled from "styled-components";
import { IDate } from "../types/Date.interface";

interface IModalProps {
    selectedDate: IDate;
}

const ModalContainer = styled.form``;

export function Modal({ selectedDate }: IModalProps): JSX.Element {
    return <ModalContainer></ModalContainer>;
}