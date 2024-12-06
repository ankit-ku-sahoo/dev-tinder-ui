
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Body = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Body;