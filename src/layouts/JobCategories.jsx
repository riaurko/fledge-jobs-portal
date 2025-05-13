import {
	Code2Icon,
	HandCoinsIcon,
	LanguagesIcon,
	PaletteIcon,
	PenIcon,
	RocketIcon,
	TagIcon,
} from "lucide-react";
import CategoryCard from "../components/CategoryCard";
import { useState } from "react";

const JobCategories = () => {
	const [roundedIconBox, setRoundedIconBox] = useState(false);
	const categories = [
		{
			icon: (
				<Code2Icon
					size={40}
					stroke="#009000"
				/>
			),
			name: "Development",
			cardClasses: "hover:bg-green-700/20 hover:border-green-400",
			iconClasses: "bg-green-400/40",
			description: "Developing websites, apps, and softwares.",
			opportunities: 11,
		},
		{
			icon: (
				<PaletteIcon
					size={40}
					stroke="#ff6900"
				/>
			),
			name: "Design",
			cardClasses: "hover:bg-orange-700/20 hover:border-orange-400",
			iconClasses: "bg-orange-400/40",
			description: "UI/UX, figma, web, app, and graphic Design.",
			opportunities: 7,
		},
		{
			icon: (
				<RocketIcon
					size={40}
					stroke="#0c70ff"
				/>
			),
			name: "Project Management",
			cardClasses: "hover:bg-blue-700/20 hover:border-blue-400",
			iconClasses: "bg-blue-400/40",
			description: "Organizing team, and tech-based projects.",
			opportunities: 4,
		},
		{
			icon: (
				<PenIcon
					size={40}
					stroke="#008080"
				/>
			),
			name: "Writing",
			cardClasses: "hover:bg-teal-700/20 hover:border-teal-400",
			iconClasses: "bg-teal-400/40",
			description: "Writing documents, reports, and presentations.",
			opportunities: 2,
		},
		{
			icon: (
				<LanguagesIcon
					size={40}
					stroke="#ff0000"
				/>
			),
			name: "Translation",
			cardClasses: "hover:bg-red-700/20 hover:border-red-400",
			iconClasses: "bg-red-400/40",
			description: "Translating documents, speeches, and apps.",
			opportunities: 4,
		},
		{
			icon: (
				<HandCoinsIcon
					size={40}
					stroke="#dd8400"
				/>
			),
			name: "Finance",
			cardClasses: "hover:bg-yellow-700/20 hover:border-yellow-400",
			iconClasses: "bg-yellow-400/40",
			description: "Managing budgets, audits, and forecasts.",
			opportunities: 5,
		},
	];
	return (
		<section
			id="job-categories"
			className="mt-24 px-60 space-y-12"
		>
			{/* Section Header */}
			<div className="flex items-center justify-center gap-x-4">
				<TagIcon
					size={40}
					fill="dodgerblue"
					strokeWidth={1.25}
					className="motion-safe:animate-bounce"
				/>
				<h2 className="text-4xl font-bold">
					Explore Job <span className="text-primary">Categories</span>
				</h2>
			</div>
			{/* Categories displaying in Grid layout */}
			<div
				id="categories-grid"
				className="grid grid-cols-3 gap-6"
			>
				{categories.map((category) => (
					<CategoryCard
						key={category.name}
						category={category}
						roundedIconBox={roundedIconBox}
						setRoundedIconBox={setRoundedIconBox}
					/>
				))}
			</div>
		</section>
	);
};

export default JobCategories;
