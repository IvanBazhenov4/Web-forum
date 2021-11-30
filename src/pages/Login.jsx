import React, {useContext} from 'react';
import MsButton from "../component/UI/button/MsButton";
import MsInput from "../component/UI/input/MsInput";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MsInput type="text" placeholder="Введите логин"/>
                <MsInput type="password" placeholder="Введите пароль"/>
                <MsButton>Войти</MsButton>
            </form>
        </div>
    );
};

export default Login;