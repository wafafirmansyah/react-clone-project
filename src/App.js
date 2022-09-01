import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Docs from "./pages/Docs";
import Home from "./pages/Home";

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/docs' element={<Docs/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;