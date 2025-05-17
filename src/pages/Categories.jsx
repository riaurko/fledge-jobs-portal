import { useEffect, useState } from "react";
import apiClient from "../services/api_client";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		apiClient.get("/categories/").then((response) => setCategories(response.data.data));
	}, []);
	return (
		<main className="py-12">
			<section className="px-60 space-y-12">
				<h2 className="text-4xl font-bold text-center">Categories</h2>
				<div className="grid grid-cols-4 gap-8">
					{categories.map((category) => (
						<CategoryCard
							key={category.name}
							category={category}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Categories;
