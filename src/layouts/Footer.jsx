import { MailCheckIcon, MapPinCheckIcon, PhoneCallIcon } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="mt-24 px-60 py-32 bg-dark text-light rounded-t-[8rem] flex flex-col gap-y-20">
			{/* 1st row - Logo, Contact */}
			<div
				id="foot-row-1"
				className="flex justify-around"
			>
				{/* Logo and Slogan */}
				<div
					id="foot-logo"
					className="space-y-4"
				>
					<div className="flex items-center gap-x-3 md:gap-x-4 select-none">
						<img
							src={logo}
							alt="Logo"
							className="w-11 md:w-14 lg:w-11 2xl:w-14"
						/>
						<h3 className="text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl font-bold tracking-wide">
							<span className="text-blue-500">F</span>ledge
							<span className="text-blue-500">J</span>obs
						</h3>
					</div>
					<p className="text-lg text-slate-200">
						Where Talent Meets Opportunity.
						<br />
						Build your Career or Hire Talent.
					</p>
				</div>
				{/* Contact Info */}
				<div
					id="foot-contact"
					className="space-y-4"
				>
					<h5 className="text-xl font-bold uppercase text-slate-300">Contact</h5>
					<ul className="space-y-3 text-xl">
						<li className="flex items-center gap-x-4">
							<MapPinCheckIcon size={24} />
							Horogram Bazar, Rajshahi, Rajshahi 6201
						</li>
						<li className="flex items-center gap-x-4">
							<MailCheckIcon size={24} />
							riaurko@gmail.com
						</li>
						<li className="flex items-center gap-x-4">
							<PhoneCallIcon size={24} />
							+880 1717-549249
						</li>
					</ul>
				</div>
			</div>
			{/* 2nd row - Services, Legal, Social */}
			<div
				id="foot-row-2"
				className="flex justify-between"
			>
				{/* Services Links */}
				<div
					id="foot-services"
					className="space-y-4"
				>
					<h5 className="text-xl font-bold uppercase text-slate-300">Services</h5>
					<ul className="space-y-2 text-lg">
						<li>
							<Link
								to="/jobs-grid"
								target="_blank"
								className="hover:text-blue-500 transition-colors duration-100"
							>
								Jobs
							</Link>
						</li>
						<li>
							<Link
								to="/categories-grid"
								target="_blank"
								className="hover:text-blue-500 transition-colors duration-100"
							>
								Categories
							</Link>
						</li>
						<li>
							<a
								href="https://en.wikipedia.org/wiki/Advertising"
								target="_blank"
								className="hover:text-blue-500 transition-colors duration-100"
							>
								Advertisement
							</a>
						</li>
					</ul>
				</div>
				{/* Legal Links */}
				<div
					id="foot-legal"
					className="space-y-4"
				>
					<h5 className="text-xl font-bold uppercase text-slate-300">Legal</h5>
					<ul className="space-y-2 text-lg">
						<li>
							<a
								href="https://en.wikipedia.org/wiki/Terms_of_service"
								target="_blank"
								className="hover:text-blue-500 transition-colors duration-100"
							>
								Terms and Conditions
							</a>
						</li>
						<li>
							<a
								href="https://en.wikipedia.org/wiki/Privacy_policy"
								target="_blank"
								className="hover:text-blue-500 transition-colors duration-100"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href="https://www.wikicred.org/pages/cookie-policy"
								target="_blank"
								className="hover:text-blue-500 transition-colors duration-100"
							>
								Cookies Policy
							</a>
						</li>
					</ul>
				</div>
				{/* Social Links */}
				<div
					id="foot-social"
					className="space-y-4"
				>
					<h5 className="text-xl font-bold uppercase text-slate-300">Social</h5>
					<ul className="flex gap-x-4">
						<li>
							<a
								href="https://www.linkedin.com/in/riaurko"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={32}
									height={32}
									xmlns="http://www.w3.org/2000/svg"
									shape-rendering="geometricPrecision"
									text-rendering="geometricPrecision"
									image-rendering="optimizeQuality"
									fill-rule="evenodd"
									clip-rule="evenodd"
									viewBox="0 0 512 512"
									className="fill-light hover:fill-blue-500"
								>
									<path d="M474.919 0H38.592C17.72 0 0 16.504 0 36.841V475.14C0 495.496 11.629 512 32.492 512h436.327C489.718 512 512 495.496 512 475.14V36.841C512 16.504 495.809 0 474.919 0zM195.043 195.043h68.928v35.136h.755c10.505-18.945 41.541-38.177 79.921-38.177 73.655 0 94.214 39.108 94.214 111.538v135.321h-73.148V316.883c0-32.427-12.947-60.883-43.227-60.883-36.768 0-54.295 24.889-54.295 65.758v117.103h-73.148V195.043zM73.139 438.861h73.148V195.043H73.139v243.818zm82.289-329.148c0 25.258-20.457 45.715-45.715 45.715-25.258 0-45.715-20.457-45.715-45.715 0-25.258 20.457-45.715 45.715-45.715 25.258 0 45.715 20.457 45.715 45.715z" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/riaurko"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={32}
									height={32}
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-light hover:fill-blue-500"
								>
									<path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://github.com/riaurko"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={32}
									height={32}
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-light hover:fill-blue-500"
								>
									<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://x.com/riaurko"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={32}
									height={32}
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-light hover:fill-blue-500"
								>
									<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/@riaurko"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={32}
									height={32}
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-light hover:fill-blue-500"
								>
									<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://www.upwork.com/freelancers/~019a6b7cbde89135af"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={32}
									height={32}
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-light hover:fill-blue-500"
								>
									<path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
