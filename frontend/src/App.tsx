import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Main } from "./pages/Main/Main";
import { Register } from "./pages/Authorization/Register";
import { Login } from "./pages/Authorization/Login";
import { useState } from "react";
import { ErrorHandler } from "./components/ErrorHandler";

function App() {
    const [errorHandler, setErrorHandler] = useState<string | null>(null);
    const [errorResponse, setErrorResponse] = useState<number>();

    return (
        <BrowserRouter>
            {errorHandler ? (
                <ErrorHandler
                    errorResponse={errorResponse}
                    setErrorHandler={setErrorHandler}
                    errorHandler={errorHandler}
                />
            ) : (
                <></>
            )}
            <Routes>
                <Route
                    element={
                        <Main
                            setErrorHandler={setErrorHandler}
                            setErrorResponse={setErrorResponse}
                        />
                    }
                    path="/main"
                />
                <Route
                    element={
                        <Register
                            setErrorHandler={setErrorHandler}
                            setErrorResponse={setErrorResponse}
                        />
                    }
                    path="/registration"
                />
                <Route
                    element={
                        <Login
                            setErrorHandler={setErrorHandler}
                            setErrorResponse={setErrorResponse}
                        />
                    }
                    path="/login"
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
