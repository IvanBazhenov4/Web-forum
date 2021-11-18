import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes";
import Login from "../pages/Login";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";
import Posts from "../pages/Posts";

const AppRouter = () => {
    const {isAuth, isLoading}= useContext(AuthContext);
    console.log(isAuth)
    if (isLoading) {
        return <Loader/>
    }
    return (

        isAuth
        ?
            <Routes>
                {privateRoutes.map(route=>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Navigate to='/Posts' />
            </Routes>
        :
            <Routes>
            {publicRoutes.map(route=>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Navigate to='/Login' />
            </Routes>
    );
};

export default AppRouter;