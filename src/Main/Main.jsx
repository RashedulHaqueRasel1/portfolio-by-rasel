import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";

const Main = () => {
    return (
        <div className='bg-[#0F0715]  mx-auto container'>

            <Navbar></Navbar>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;