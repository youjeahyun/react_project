import {Link} from "react-router-dom";

const Error = () => {
    return (
        <>
            페이지를 찾을 수 없습니다.<br/>
            <Link to='/'>홈으로 돌아가기</Link>
        </>
    )
}

export default Error;