import { TagIcon } from "lucide-react";
import CategoryCard from "../components/CategoryCard";
import apiClient from "../services/api_client";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import Button from "../components/Button";
import { Link } from "react-router";

const JobCategories = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		apiClient.get("/categories/").then((response) => setCategories(response.data.data));
	}, []);
	// console.log(categories);
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
				id="categories"
				className="grid grid-cols-3 gap-6"
			>
				{categories.slice(0, 6).map((category) => (
					<CategoryCard
						key={category.name}
						category={category}
					/>
				))}
			</div>
			<div className="text-center">
				<Link
					to="/categories"
					target="_blank"
				>
					<Button
						padx="px-6"
						pady="py-3"
						fontSize="text-2xl"
						rounded="rounded-lg"
					>
						View All
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default JobCategories;
