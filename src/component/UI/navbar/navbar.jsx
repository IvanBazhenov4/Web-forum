import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../../context/context";
import MsButton from "../button/MsButton";

const Navbar = () => {
    const {isAuth, setIsAuth}= useContext(AuthContext);
    const logout=()=>{
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            <MsButton onClick={logout()}>
                Exit
            </MsButton>
            <div className='navbar__links'>
                <Link to="/about">Saite</Link>
                <Link to="/Posts">Pages</Link>
            </div>
        </div>
    );
};

export default Navbar;