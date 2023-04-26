import {Outlet} from "react-router-dom";
import Header from "../Components/Layout/Headers";

const LayoutType1 = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default LayoutType1;