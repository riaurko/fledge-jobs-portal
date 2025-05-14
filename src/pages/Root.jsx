import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router";
import Footer from "../layouts/Footer";

const Root = () => {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </Fragment>
    );
};

export default Root;
