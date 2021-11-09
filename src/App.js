import React from 'react';
import './style/App.css';
import {BrowserRouter as Router,
    Redirect,
    Route,
    Routes
    } from "react-router-dom";
import about from "./pages/about";
import Posts from "./pages/Posts";
import Navbar from "./component/UI/navbar/navbar";


function App() {
    return(
        <Router>
            <Navbar/>
            <div>
            <Routes>
                <Route path="/about"  element={<about/>}/>
                {/*<Route path='/Posts'>*/}
                {/*    <Posts/>*/}
                {/*</Route>*/}
                {/*<Redirect to='/posts'/>*/}
            </Routes>
            </div>
        </Router>
    )
}
export default App;
