import { EyeIcon, EyeOffIcon, UserPlus2Icon } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router";
import { useState } from "react";

const SignupCard = () => {
	// State for toggling password visibility
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className="w-2/5 mx-auto p-8 bg-slate-200 border border-slate-300 rounded-3xl hover:drop-shadow-lg transition-[filter] duration-200">
			{/* The heading with an icon and a text */}
			<h3 className="text-3xl font-bold flex items-center justify-center gap-x-4 text-primary mb-4">
				<UserPlus2Icon size={32} />
				SignUp
			</h3>
			{/* A warning-type text aligned to right */}
			<p className="mb-2 text-end text-slate-700">
				<span className="text-red-600">*</span> indicates required field
			</p>
			{/* Signup Form */}
			<form className="space-y-4">
				{/* First Name input */}
				<label className="flex flex-col gap-y-1">
					{/* Label */}
					<span className="flex gap-x-2 text-xl font-medium">
						First Name <span className="text-red-600 text-lg">*</span>
					</span>
					{/* Input field */}
					<input
						type="text"
						name="userFirstName"
						placeholder="Steve"
						className="p-3 text-lg text-slate-700 border border-slate-400 focus:bg-slate-300 focus:outline-none focus:border-primary/60 rounded-xl caret-primary"
					/>
				</label>
				{/* Last Name input */}
				<label className="flex flex-col gap-y-1">
					{/* Label */}
					<span className="text-xl font-medium">Last Name</span>
					{/* Input field */}
					<input
						type="text"
						name="userLastName"
						placeholder="Potter"
						className="p-3 text-lg text-slate-700 border border-slate-400 focus:bg-slate-300 focus:outline-none focus:border-primary/60 rounded-xl caret-primary"
					/>
				</label>
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
					/>
				</label>
				{/* Phone Number input */}
				<label className="flex flex-col gap-y-1">
					{/* Label */}
					<span className="text-xl font-medium">Phone Number</span>
					{/* Input field */}
					<input
						type="tel"
						name="userPhone"
						placeholder="0123456789"
						className="p-3 text-lg text-slate-700 border border-slate-400 focus:bg-slate-300 focus:outline-none focus:border-primary/60 rounded-xl caret-primary"
					/>
				</label>
				{/* Password input */}
				<label className="flex flex-col gap-y-1 relative">
					{/* Label */}
					<span className="flex gap-x-2 text-xl font-medium">
						Password <span className="text-red-600 text-lg">*</span>
					</span>
					{/* Input field */}
					<input
						type={showPassword ? "text" : "password"}
						name="userPassword"
						placeholder="********"
						className="p-3 text-lg text-slate-700 border border-slate-400 focus:bg-slate-300 focus:outline-none focus:border-primary/60 rounded-xl caret-primary"
					/>
					{/* Eye icon that toggles password visibility */}
					<Button
						padx="px-1"
						pady="py-1"
						rounded="rounded-md"
						customClasses="absolute right-2 bottom-2"
					>
						{showPassword ? (
							<EyeOffIcon
								size={28}
								color="#eee"
								onClick={() => setShowPassword(false)}
							/>
						) : (
							<EyeIcon
								size={28}
								color="#eee"
								onClick={() => setShowPassword(true)}
							/>
						)}
					</Button>
				</label>
				{/* Submit button */}
				<div className="flex justify-center mt-6">
					<Button
						type="submit"
						padx="px-6"
						fontSize="text-2xl"
					>
						Sign Up
					</Button>
				</div>
			</form>
			{/* Text with Link that redirects to Login page */}
			<p className="text-center text-lg font-medium mt-4">
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
