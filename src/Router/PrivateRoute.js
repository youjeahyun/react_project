import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    function get_cookie(name) {
        let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return value ? value[2] : null;
    }

    return get_cookie('X-AUTH-TOKEN') ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" replace={true} />
    );
};

export default PrivateRoute;
