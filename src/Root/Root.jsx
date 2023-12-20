import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Root;