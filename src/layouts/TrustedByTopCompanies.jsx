import { HeartHandshakeIcon } from "lucide-react";
import Brandfetch from "../assets/brandfetch.png";
import Envato from "../assets/envato.png";
import Github from "../assets/github.png";
import InteractiveCares from "../assets/interactive-cares.png";
import SSLCommerz from "../assets/sslcommerz.png";
import TailwindCSS from "../assets/tailwindcss.png";
import Upwork from "../assets/upwork.png";
import Vercel from "../assets/vercel.png";
import Youtube from "../assets/youtube.png";

const TrustedByTopCompanies = () => {
	const companies = [
		{
			image: Brandfetch,
			width: 96,
		},
		{
			image: Envato,
			width: 96,
		},
		{
			image: Github,
			width: 96,
		},
		{
			image: SSLCommerz,
			width: 144,
		},
		{
			image: TailwindCSS,
			width: 144,
		},
		{
			image: Upwork,
			width: 96,
		},
		{
			image: Vercel,
			width: 96,
		},
		{
			image: Youtube,
			width: 112,
		},
	];
	return (
		<section className="mt-6 px-6 md:px-20 lg:px-32 2xl:px-60 space-y-8">
			<div className="flex justify-center items-center gap-x-4">
				<HeartHandshakeIcon
					size={40}
					fill="dodgerblue"
					strokeWidth={1.5}
				/>
				<h2 className="text-4xl font-bold">
					Trusted by <span className="text-primary">Top Companies</span>
				</h2>
			</div>
			<div
				id="companies-row"
				className="grid grid-cols-2 md:grid-cols-4 gap-y-6 place-items-center 2xl:flex 2xl:items-center 2xl:justify-between"
			>
				{companies.map((company, index) => (
					<img
						key={index}
						src={company.image}
						width={company.width}
						className="contrast-50 hover:contrast-100 cursor-pointer transition-[filter] duration-100"
					/>
				))}
			</div>
		</section>
	);
};

export default TrustedByTopCompanies;
