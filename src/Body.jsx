
import Footer from "./footer.jsx";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar.jsx";

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
