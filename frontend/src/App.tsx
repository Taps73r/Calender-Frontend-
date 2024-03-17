import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Main } from "./pages/Main/Main";
import { getMonth } from "./util";

function App() {
    console.table(getMonth());
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />} path="/main" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
