import { useForm } from "react-hook-form";
import { IRegisterFields } from "../types/Register.interface";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
    Button,
    Error,
    Input,
    RegistrationFormContainer,
} from "../styles/Registration.styles";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";

interface IRegistrationFormProps {
    setErrorHandler: Dispatch<SetStateAction<string | null>>;
    setErrorResponse: Dispatch<SetStateAction<number | undefined>>;
}

export function RegistrationForm({
    setErrorHandler,
    setErrorResponse,
}: IRegistrationFormProps): JSX.Element {
    const history = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterFields>();

    const onSubmit = (data: IRegisterFields) => {
        const url = "http://localhost:3000/register";
        return axios
            .post(url, data)
            .then((response) => {
                const token = response.data.token;
                if (token) {
                    Cookies.set("token", token, {
                        expires: 1,
                        sameSite: "strict",
                    });
                }
                history("/main");
            })
            .catch((error) => {
                setErrorHandler(error.response.data.message);
                setErrorResponse(error.response.status);
            });
    };

    return (
        <RegistrationFormContainer onSubmit={handleSubmit(onSubmit)}>
            <h1>Registration</h1>
            <label htmlFor="email">Email:</label>
            <Input
                type="email"
                id="email"
                {...register("email", {
                    required: "Email is required",
                    minLength: {
                        value: 7,
                        message: "Email must be at least 7 characters long",
                    },
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                    },
                })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}

            <label htmlFor="password">Password:</label>
            <Input
                type="password"
                id="password"
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                    },
                })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}

            <Button type="submit">Register</Button>
            <Link to="/login">Go to Login</Link>
        </RegistrationFormContainer>
    );
}
