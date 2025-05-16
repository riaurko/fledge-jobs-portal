import { Navigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { InfinitySpin } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuthContext();
	console.log(user, loading);
	if (loading)
		return (
			<div className="flex justify-center mt-8">
				<InfinitySpin
					color="var(--color-primary)"
					width="240"
					aria-label="infinity-spin-loading"
				/>
			</div>
		);
	return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
