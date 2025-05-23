import StepCard from "../../components/StepCard";

const StepsDivision = ({
	children,
	description = "",
	steps = [],
	thumbImage,
	reverseDirection = false,
}) => {
	return (
		<section
			className={`flex ${
				reverseDirection ? "flex-row-reverse" : "flex-row"
			} items-center gap-x-24`}
		>
			{/* Content | Positioned left */}
			<div className="w-7/12">
				{/* Heading (For 'who') */}
				<h3 className="text-3xl font-bold mb-2">
					<span className="text-slate-700">For</span> {children}s
				</h3>
				{/* Description */}
				<p className="text-slate-700 text-lg font-medium">{description}</p>
				{/* Steps displaying as Card in a 2x2 Grid layout */}
				<div className="grid grid-cols-2 gap-4 mt-8">
					{steps.map((step) => (
						<StepCard
							key={step.name}
							step={step}
						/>
					))}
				</div>
			</div>
			{/* Image | Positioned right */}
			<div className="h-[26rem] rounded-2xl overflow-hidden">
				<img
					src={thumbImage}
					alt="Thumbnail-like Image"
					className="w-full h-full rounded-2xl object-cover hover:scale-110 transition-transform duration-200"
				/>
			</div>
		</section>
	);
};

export default StepsDivision;
