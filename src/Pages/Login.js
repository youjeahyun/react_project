import { useState } from "react";
import { AXIOS_OPTION, SERVER_URL } from "../Util/Env";
import axios from "axios";
import { setCookie } from "../Util/Cookies";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    
    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const navigate = useNavigate()

    const onSubmit = (data) => {

        // console.log(userId, '유저 아이디')
        // console.log(userPw, '유저 pw')

        const param = new FormData();
        param.append('userid', userId);
        param.append('userpwd', userPw);
        // param.append('userpwd', data.userpwd);

        // export const setCookie = (name, value, options) => {
        //     return cookies.set(name, value, { ...options });
        // };

        axios.post(SERVER_URL + '/sadm/login/login', param, AXIOS_OPTION).then(res => {
            // console.log(res.data, '응답값')
            if(res.data.code === 200) {
                console.log('응답성공했음')
                console.log(res.data.data._SOL_ADMIN.token)
                setCookie('X-AUTH-TOKEN', res.data.data._SOL_ADMIN.token )
                navigate('/profile')
            } else {
                // console.log(res.data.msg)
                alert(res.data.msg)
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <input type="text" placeholder="id" onChange={(e)=> {setUserId(e.target.value)}}/>
            <input type="password" placeholder="pw"onChange={(e)=> {setUserPw(e.target.value)}}/>
            <button onClick={onSubmit}>로그인</button>
        </>
    )
}

export default Login;