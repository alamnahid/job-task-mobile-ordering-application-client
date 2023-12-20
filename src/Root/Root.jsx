import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Root;