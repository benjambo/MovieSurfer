import React from "react";
import {Route, Redirect} from "react-router-dom"
import isAuthenticated from "./isAuthenticated";
export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/sign",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};