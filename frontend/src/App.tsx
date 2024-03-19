import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Main } from "./pages/Main/Main";
import { Register } from "./pages/Authorization/Register";
import { Login } from "./pages/Authorization/Login";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />} path="/main" />
                <Route element={<Register />} path="/registration" />
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
