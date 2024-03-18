import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Main } from "./pages/Main/Main";;

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />} path="/main" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
