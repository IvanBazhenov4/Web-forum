import React, {useContext} from 'react';
import MsImput from "../component/UI/imput/MsImput";
import MsButton from "../component/UI/button/MsButton";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth}= useContext(AuthContext);
    const login= event=>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MsImput type="text" placeholder="Login"/>
                <MsImput type="password" placeholder="Password"/>
                <MsButton>Enter</MsButton>
            </form>
        </div>
    );
};

export default Login;