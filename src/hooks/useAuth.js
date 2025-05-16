import { useEffect, useState } from "react";
import authClient from "../services/auth_client";

const useAuth = () => {
	// User state
	const [user, setUser] = useState(null);
	// Loading state
	const [loading, setLoading] = useState(true);
	// State for Login-Error
	const [loginError, setLoginError] = useState(null);
	// Get and set the token
	const getToken = () => {
		const token = localStorage.getItem("authTokens");
		return token ? JSON.parse(token) : null;
	};
	const [authTokens, setAuthTokens] = useState(getToken());
	useEffect(() => {
		if (authTokens) fetchUserProfile();
		else setLoading(false);
	}, [authTokens]);
	// Fetch user profile
	const fetchUserProfile = async () => {
		setLoading(true);
		try {
			const response = await authClient.get("/users/me/", {
				headers: { Authorization: `JWT ${authTokens?.access}` },
			});
			setUser(response.data);
		} catch (error) {
			console.log(error);
			setUser(null);
		} finally {
			setLoading(false);
		}
	};
	// Login user
	const loginUser = async (userCredentials) => {
		setLoginError(null);
		try {
			const response = await authClient.post("/jwt/create/", userCredentials);
			setAuthTokens(response.data);
			localStorage.setItem("authTokens", JSON.stringify(response.data));
			await fetchUserProfile();
		} catch (error) {
			// Set loginError
			setLoginError({
				code: error.code,
				message: error.response?.data?.detail,
				status: error.response?.status,
				statusText: error.response?.statusText,
			});
		}
	};
	// Provider values
	const result = {
		user,
		loginUser,
		loading,
		setLoading,
		loginError,
	};
	return result;
};

export default useAuth;
