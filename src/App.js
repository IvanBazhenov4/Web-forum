import React from 'react';
import './style/App.css';
import {
    BrowserRouter, Navigate,
    Route,
    Routes,
} from "react-router-dom";
import about from "./pages/about";
import Posts from "./pages/Posts";
import Navbar from "./component/UI/navbar/navbar";


function App() {
    return(
        <BrowserRouter>
            <Navbar/>
            <div>
                1234567
            </div>
            <Routes>
                <Route path="/about"  element={<about/>}/>
                <Route path='/Posts'>
                    <Posts/>
                </Route>
                {/*<Redirect to='/posts'/>*/}
                <Navigate to='/posts'/>/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
