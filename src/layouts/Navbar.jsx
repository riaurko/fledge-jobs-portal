import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { LayersIcon } from "lucide-react";
import { useState } from "react";
import Headroom from "react-headroom";

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<Headroom>
			<nav className="relative top-0 left-0 w-full px-6 md:px-20 lg:px-32 2xl:px-60 py-4 flex gap-x-12 md:gap-0 justify-center md:justify-between items-center bg-gradient-to-r from-light/60 to-light/60 backdrop-blur-lg">
				{/* Dropdown Links | Appears on Mobile and Tablet */}
				<div
					id="dropdown-menu"
					className="relative block lg:hidden"
				>
					<LayersIcon
						size={32}
						className="cursor-pointer"
						onClick={() => setShowDropdown(!showDropdown)}
					/>
					<ul
						className={`${
							showDropdown ? "flex flex-col" : "hidden"
						} absolute top-10 -left-16 p-3 bg-slate-200 rounded-xl w-max cursor-auto`}
					>
						<a
							href="/"
							className="px-2 py-1 rounded hover:text-primary"
						>
							Home
						</a>
						<a
							href="/jobs-grid"
							className="px-2 py-1 rounded hover:text-primary"
						>
							Find Opportunities
						</a>
						<li className="relative group cursor-pointer px-2 py-1">
							On Home Page →
							<ul className="hidden group-hover:flex flex-col absolute top-0 left-36 p-3 bg-slate-200 rounded-xl w-max cursor-auto">
								<a
									href="#job-categories"
									className="px-2 py-1 rounded hover:text-primary"
								>
									Job Categories
								</a>
								<a
									href="#top-opportunities"
									className="px-2 py-1 rounded hover:text-primary"
								>
									Top Opportunities
								</a>
								<a
									href="#testimonials"
									className="px-2 py-1 rounded hover:text-primary"
								>
									What Our Users Say
								</a>
								<a
									href="#how-it-works"
									className="px-2 py-1 rounded hover:text-primary"
								>
									How It Works
								</a>
								<a
									href="#faq"
									className="px-2 py-1 rounded hover:text-primary"
								>
									Frequently Asked Questions
								</a>
								<a
									href="#recent-blogs"
									className="px-2 py-1 rounded hover:text-primary"
								>
									Recent Blogs
								</a>
								<a
									href="#call-to-action"
									className="px-2 py-1 rounded hover:text-primary"
								>
									Get Started
								</a>
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
					<NavLink
						to="/"
						className="px-2 py-1 rounded hover:text-primary"
					>
						Home
					</NavLink>
					<NavLink
						to="/jobs-grid"
						className="px-2 py-1 rounded hover:text-primary"
					>
						Find Opportunities
					</NavLink>
					<li className="relative group cursor-pointer px-2 py-1">
						On Home Page ▼
						<ul className="hidden group-hover:flex flex-col absolute top-8 p-3 bg-slate-200 rounded-xl w-max cursor-auto">
							<a
								href="#job-categories"
								className="px-2 py-1 rounded hover:text-primary"
							>
								Job Categories
							</a>
							<a
								href="#top-opportunities"
								className="px-2 py-1 rounded hover:text-primary"
							>
								Top Opportunities
							</a>
							<a
								href="#testimonials"
								className="px-2 py-1 rounded hover:text-primary"
							>
								What Our Users Say
							</a>
							<a
								href="#how-it-works"
								className="px-2 py-1 rounded hover:text-primary"
							>
								How It Works
							</a>
							<a
								href="#faq"
								className="px-2 py-1 rounded hover:text-primary"
							>
								Frequently Asked Questions
							</a>
							<a
								href="#recent-blogs"
								className="px-2 py-1 rounded hover:text-primary"
							>
								Recent Blogs
							</a>
							<a
								href="#call-to-action"
								className="px-2 py-1 rounded hover:text-primary"
							>
								Get Started
							</a>
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
							className="px-5 lg:px-6 py-3 rounded-xl text-lg 2xl:text-xl font-medium bg-primary text-light hover:bg-gradient-to-r hover:from-primary hover:to-indigo-500 active:bg-gradient-to-l cursor-pointer"
						>
							Login
						</button>
					</NavLink>
					<NavLink to="/signup">
						<button
							type="button"
							className="px-5 lg:px-6 py-3 rounded-xl text-lg 2xl:text-xl font-medium bg-primary text-light hover:bg-gradient-to-r hover:from-primary hover:to-indigo-500 active:bg-gradient-to-l duration-200 cursor-pointer"
						>
							Sign Up
						</button>
					</NavLink>
				</div>
			</nav>
		</Headroom>
	);
};

const Navlink = ({ to = "/", children }) => {
	return (
		<li>
			<NavLink
				to={to}
				className="px-2 py-1 rounded hover:text-primary"
			>
				{children}
			</NavLink>
		</li>
	);
};

export default Navbar;
