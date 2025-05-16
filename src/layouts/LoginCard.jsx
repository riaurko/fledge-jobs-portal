import { LogInIcon } from "lucide-react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { useForm } from "react-hook-form";

const LoginCard = () => {
	// loginUser function fetched from AuthContext
	const { loginUser, errorMessage, setLoading } = useAuthContext();
	// Navigate hook for navigating to Dashboard after successful Login
	const navigate = useNavigate();
	// Hook Form declaration
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	// Form submit handler
	const onSubmit = async (data) => {
		try {
			await loginUser(data);
			reset();
			setLoading(true);
			navigate("/dashboard");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="w-2/5 mx-auto p-8 bg-slate-200 border border-slate-300 rounded-3xl hover:drop-shadow-lg transition-[filter] duration-200">
			{/* The heading with an icon and a text */}
			<h3 className="text-3xl font-bold flex items-center justify-center gap-x-4 text-primary mb-4">
				<LogInIcon size={32} />
				Log In
			</h3>
			{/* A warning-type text aligned to right */}
			<p className="mb-2 text-end text-slate-700">
				<span className="text-red-600">*</span> indicates required field
			</p>
			{/* Login Form */}
			<form
				className="space-y-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* Email input */}
				<label className="flex flex-col gap-y-1">
					{/* Label */}
					<span className="flex gap-x-2 text-xl font-medium">
						Email <span className="text-red-600 text-lg">*</span>
					</span>
					{/* Input field */}
					<input
						type="email"
						name="userEmail"
						placeholder="name@example.com"
						className="p-3 text-lg text-slate-700 border border-slate-400 focus:bg-slate-300 focus:outline-none focus:border-primary/60 rounded-xl caret-primary"
						{...register("email", { required: "This information is required" })}
					/>
					{/* Field error */}
					{errors.email ? (
						<p className="text-red-600">{errors.email.message}</p>
					) : null}
				</label>
				{/* Password input */}
				<label className="flex flex-col gap-y-1">
					{/* Label */}
					<span className="flex gap-x-2 text-xl font-medium">
						Password <span className="text-red-600 text-lg">*</span>
					</span>
					{/* Input field */}
					<input
						type="password"
						name="userPassword"
						placeholder="********"
						className="p-3 text-lg text-slate-600 border border-slate-400 focus:bg-slate-300 focus:outline-none focus:border-primary/60 rounded-xl caret-primary"
						{...register("password", { required: "This information is required" })}
					/>
					{/* Field error */}
					{errors.password ? (
						<p className="text-red-600">{errors.password.message}</p>
					) : null}
				</label>
				{/* Submit button */}
				<div className="flex justify-center mt-6">
					<Button
						type="submit"
						padx="px-6"
						fontSize="text-2xl"
					>
						Login
					</Button>
				</div>
			</form>
			{/* Non-field error */}
			{errorMessage ? <p className="text-red-600 mt-4">{errorMessage}</p> : null}
			{/* Text with Link that redirects to Signup page */}
			<p className="text-center text-lg font-medium mt-4">
				Don't have an account?{" "}
				<Link
					to="/signup"
					className="text-primary hover:underline hover:underline-offset-3"
				>
					Sign Up
				</Link>
			</p>
		</div>
	);
};

export default LoginCard;
