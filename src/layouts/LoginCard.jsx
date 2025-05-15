import { LogInIcon } from "lucide-react";
import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const LoginCard = () => {
	return (
		<div className="w-2/5 mx-auto p-8 bg-slate-200 border border-slate-300 rounded-3xl space-y-8">
			<h3 className="text-3xl font-bold flex items-center justify-center gap-x-4 text-primary">
				<LogInIcon size={32} />
				Log In
			</h3>
			<form className="space-y-4">
				<InputField
					label="Email"
					type="email"
					name="userEmail"
					id="user-email"
					placeholder="name@example.com"
					required
				/>
				<InputField
					label="Password"
					type="password"
					name="userPassword"
					id="user-password"
					placeholder="********"
					required
				/>
				<div className="flex justify-center">
					<Button
						type="submit"
						padx="px-6"
						fontSize="text-2xl"
					>
						Login
					</Button>
				</div>
			</form>
		</div>
	);
};

export default LoginCard;
