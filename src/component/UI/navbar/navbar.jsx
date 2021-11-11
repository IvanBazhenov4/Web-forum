import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import about from "../../../pages/About";
import Posts from "../../../pages/Posts";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to="/about">Saite</Link>
                <Link to="/Posts">Pages</Link>
            </div>
            <Routes>
                <Route path="/about"  element={<about/>}/>
                <Route path='/Posts'>
                    <Posts/>
                </Route>
            </Routes>
        </div>
    );
};

export default Navbar;