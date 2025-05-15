import { LogInIcon } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import { useState } from "react";

const LoginCard = () => {
	const { loginUser } = useAuthContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data) => {
		loginUser(data);
		reset();
	};
	return (
		<div className="w-2/5 mx-auto p-8 bg-slate-200 border border-slate-300 rounded-3xl hover:drop-shadow-lg transition-[filter] duration-200">
			<h3 className="text-3xl font-bold flex items-center justify-center gap-x-4 text-primary mb-4">
				<LogInIcon size={32} />
				Log In
			</h3>
			<p className="mb-2 text-end text-slate-700">
				<span className="text-red-600">*</span> indicates required field
			</p>
			<form
				className="space-y-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<label className="flex flex-col gap-y-1">
					<span className="flex gap-x-2 text-xl font-medium">
						Email <span className="text-red-600 text-lg">*</span>
					</span>
					<input
						type="email"
						name="userEmail"
						placeholder="name@example.com"
						className="p-3 text-lg text-slate-700 border border-slate-400 focus:bg-slate-300 focus:outline-none focus:border-primary/60 rounded-xl caret-primary"
						{...register("email", { required: "This field is required" })}
					/>
					{errors.email ? (
						<p className="text-red-600">{errors.email.message}</p>
					) : null}
				</label>
				<label className="flex flex-col gap-y-1">
					<span className="flex gap-x-2 text-xl font-medium">
						Password <span className="text-red-600 text-lg">*</span>
					</span>
					<input
						type="password"
						name="userPassword"
						placeholder="********"
						className="p-3 text-lg text-slate-600 border border-slate-400 focus:bg-slate-300 focus:outline-none focus:border-primary/60 rounded-xl caret-primary"
						{...register("password", { required: "This field is required" })}
					/>
				</label>
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
