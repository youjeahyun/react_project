import React from "react";
import {useCookies} from "react-cookie"
import {useNavigate} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";

const Header = () => {
    const [, , removeCookie] = useCookies(['X-AUTH-TOKEN']);
    const navigate = useNavigate();
    const logOut = () => {
        removeCookie("X-AUTH-TOKEN")
        navigate('/login');
    };

    return (
        <>
            <header className="header">
                <ul className="gnb">
                    <li className="deps"><NavLink className={({ isActive }) => (isActive ? 'on' : '')} to="/">홈</NavLink></li>
                    <li className="deps"><NavLink className={({ isActive }) => (isActive ? 'on' : '')} to="/profile">프로필</NavLink></li>
                </ul>
                <button onClick={logOut}>로그아웃</button>
            </header>
        </>

    )
}

export default Header;