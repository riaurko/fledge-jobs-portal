import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { LayersIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<nav className="px-6 md:px-20 lg:px-32 2xl:px-72 py-4 flex gap-x-12 md:gap-0 justify-center md:justify-between items-center">
			{/* Dropdown Links | Appears on Mobile and Tablet */}
			<div
				id="dropdown-menu"
				className="relative block md:hidden"
			>
				<LayersIcon
					size={32}
					className="cursor-pointer"
					onClick={() => setShowDropdown(!showDropdown)}
				/>
				<ul
					className={`${
						showDropdown ? "block" : "hidden"
					} absolute top-10 -left-16 p-3 space-y-2 bg-zinc-200 rounded-xl w-max cursor-auto`}
				>
					<Navlink to="/">Home</Navlink>
					<Navlink to="/jobs-grid">Find Opportunities</Navlink>
					<li className="relative group cursor-pointer px-2 py-1">
						On This Page →
						<ul className="hidden group-hover:block absolute top-0 left-36 p-3 space-y-2 bg-zinc-200 rounded-xl w-max cursor-auto">
							<Navlink to="/#job-categories">Job Categories</Navlink>
							<Navlink to="/#top-opportunities">Top Opportunities</Navlink>
							<Navlink to="/#testimonials">What Our Users Say</Navlink>
							<Navlink to="/#how-it-works">How It Works</Navlink>
							<Navlink to="/#faq">Frequently Asked Questions</Navlink>
							<Navlink to="/#recent-blogs">Recent Blogs</Navlink>
							<Navlink to="/#call-to-action">Get Started</Navlink>
						</ul>
					</li>
				</ul>
			</div>
			{/* Logo | Positioned Left */}
			<Link to="/">
				<div
					id="logo"
					className="flex items-center gap-x-3 md:gap-x-4 select-none"
				>
					<img
						src={logo}
						alt="Logo"
						className="w-11 md:w-14 lg:w-11 2xl:w-14"
					/>
					<h3 className="text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl font-bold tracking-wide">
						<span className="text-primary">F</span>ledge
						<span className="text-primary">J</span>obs
					</h3>
				</div>
			</Link>
			{/* Links | Positioned Center */}
			<ul
				id="nav-links"
				className="hidden lg:flex items-center gap-x-4 2xl:text-lg font-medium"
			>
				<Navlink to="/">Home</Navlink>
				<Navlink to="/jobs-grid">Find Opportunities</Navlink>
				<li className="relative group cursor-pointer px-2 py-1">
					On This Page ▼
					<ul className="hidden group-hover:block absolute top-8 p-3 space-y-2 bg-zinc-200 rounded-xl w-max cursor-auto">
						<Navlink to="/#job-categories">Job Categories</Navlink>
						<Navlink to="/#top-opportunities">Top Opportunities</Navlink>
						<Navlink to="/#testimonials">What Our Users Say</Navlink>
						<Navlink to="/#how-it-works">How It Works</Navlink>
						<Navlink to="/#faq">Frequently Asked Questions</Navlink>
						<Navlink to="/#recent-blogs">Recent Blogs</Navlink>
						<Navlink to="/#call-to-action">Get Started</Navlink>
					</ul>
				</li>
			</ul>
			{/* Buttons | Positioned Right */}
			<div
				id="nav-buttons"
				className="hidden md:flex items-center gap-x-4"
			>
				<NavLink to="/login">
					<button
						type="button"
						className="px-5 lg:px-6 py-3 rounded-xl text-lg 2xl:text-xl font-medium bg-primary text-light hover:drop-shadow-[0_0_6px_var(--color-primary)] active:drop-shadow-none transition-[filter] duration-200 cursor-pointer"
					>
						Login
					</button>
				</NavLink>
				<NavLink to="/signup">
					<button
						type="button"
						className="px-5 lg:px-6 py-3 rounded-xl text-lg 2xl:text-xl font-medium bg-primary text-light hover:drop-shadow-[0_0_6px_var(--color-primary)] active:drop-shadow-none transition-[filter] duration-200 cursor-pointer"
					>
						Sign Up
					</button>
				</NavLink>
			</div>
		</nav>
	);
};

const Navlink = ({ to = "/", children }) => {
	return (
		<li>
			<NavLink
				to={to}
				className="px-2 py-1 rounded-lg hover:text-primary"
			>
				{children}
			</NavLink>
		</li>
	);
};

export default Navbar;
