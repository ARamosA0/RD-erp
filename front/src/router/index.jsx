import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "../pages/Home";
import Menu from "../pages/Menu";

// LAYOUTS

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/menu" element={<Menu />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;