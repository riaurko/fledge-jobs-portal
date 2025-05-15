import { UserPlus2Icon } from "lucide-react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router";

const SignupCard = () => {
	return (
		<div className="w-2/5 mx-auto p-8 bg-slate-200 border border-slate-300 rounded-3xl hover:drop-shadow-lg transition-[filter] duration-200 space-y-8">
			<h3 className="text-3xl font-bold flex items-center justify-center gap-x-4 text-primary">
				<UserPlus2Icon size={32} />
				Sign Up
			</h3>
			<form className="space-y-4">
				<InputField
					label="First Name"
					name="userFirstName"
					id="user-firstname"
					placeholder="Kakashi"
				/>
				<InputField
					label="Last Name"
					name="userLastName"
					id="user-lastname"
					placeholder="Hatake"
					required={false}
				/>
				<InputField
					label="Email"
					type="email"
					name="userEmail"
					id="user-email"
					placeholder="name@example.com"
				/>
				<InputField
					label="Phone Number"
					type="tel"
					name="userPhone"
					id="user-phone"
					placeholder="0123456789"
				/>
				<InputField
					label="Password"
					type="password"
					name="userPassword"
					id="user-password"
					placeholder="********"
				/>
				<InputField
					label="Confirm Password"
					type="password"
					name="userConfirmPassword"
					id="user-confirm-password"
					placeholder="********"
				/>
				<div className="flex justify-center">
					<Button
						type="submit"
						padx="px-6"
						fontSize="text-2xl"
					>
						Sign Up
					</Button>
				</div>
			</form>
			<p className="text-center text-lg font-medium">
				Already have an account?{" "}
				<Link
					to="/login"
					className="text-primary hover:underline hover:underline-offset-3"
				>
					Login
				</Link>
			</p>
		</div>
	);
};

export default SignupCard;
