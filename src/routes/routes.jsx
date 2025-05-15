import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/signup",
				Component: SignUp,
			},
		],
	},
]);

export default router;
