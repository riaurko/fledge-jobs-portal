import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const CategoryCard = ({ category, roundedIconBox = false, setRoundedIconBox }) => {
	return (
		<div
			key={category.name}
			className={`p-8 bg-slate-200 border border-slate-300 ${category.cardClasses} rounded-2xl transition-colors flex flex-col items-center gap-y-5`}
		>
			{/* Tooltip */}
			<Tooltip
				anchorSelect=".switch-shape"
				offset={16}
				style={{
					paddingInline: "0.5rem",
					paddingBlock: "0.4rem",
				}}
			>
				Click to change Shape
			</Tooltip>
			{/* Category icon box */}
			<div
				className={`w-fit ${category.iconClasses} p-4 ${
					roundedIconBox ? "rounded-full" : "rounded-lg"
				} cursor-pointer`}
				onClick={() => setRoundedIconBox(!roundedIconBox)}
			>
				<a className="switch-shape">{category.icon}</a>
			</div>
			{/* Category content */}
			<div className="text-center space-y-2">
				<h4 className="text-2xl font-bold">{category.name}</h4>
				<p className="text-slate-600 font-medium">{category.description}</p>
			</div>
			<p className="text-slate-500">({category.opportunities} Available Opportunities)</p>
		</div>
	);
};

export default CategoryCard;
