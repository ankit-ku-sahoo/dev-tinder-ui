import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

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