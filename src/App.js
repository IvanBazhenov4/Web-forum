import React from 'react';
import './style/App.css';
import {
    BrowserRouter, Navigate,
    Route,
    Routes,
} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./component/UI/navbar/navbar";
import Erros from "./pages/Erros";


function App() {
    return(
        <BrowserRouter>
            <Navbar/>
            <div>
                123

            </div>
            <Routes>
                <Route path="/about"  element={<About/>}/>
                <Route path='/Posts' element={<Posts/>}/>
                <Route path='/erros' element={<Erros/>}/>
                <Navigate to='/erros'/>/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
