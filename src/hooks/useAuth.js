import { useEffect, useState } from "react";
import authClient from "../services/auth_client";

const useAuth = () => {
	const [user, setUser] = useState(null);
	// Get and set the token
	const getToken = () => {
		const token = localStorage.getItem("authTokens");
		return token ? JSON.parse(token) : null;
	};
	const [authTokens, setAuthTokens] = useState(getToken());
	useEffect(() => {
		if (authTokens) fetchUserProfile();
	}, [authTokens]);
	// Fetch user profile
	const fetchUserProfile = async () => {
		try {
			const response = await authClient.get("/users/me/", {
				headers: { Authorization: `JWT ${authTokens?.access}` },
			});
			setUser(response.data);
		} catch (error) {
			console.log(
				`${error.response?.status} ${error.response?.statusText} : ${error.response?.data?.detail}`
			);
		}
	};
	// Login user
	const loginUser = async (userCredentials) => {
		try {
			const response = await authClient.post(
				"/jwt/create/",
				userCredentials
			);
			setAuthTokens(response.data);
			localStorage.setItem("authTokens", JSON.stringify(response.data));
		} catch (error) {
			console.log(
				`${error.response.status} ${error.response.statusText} : ${error.response.data.detail}`
			);
		}
	};
	// Provider values
	const result = {
		user,
		loginUser,
	};
	return result;
};

export default useAuth;
