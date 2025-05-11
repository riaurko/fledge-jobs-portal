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
			<div className="w-7/12">
				<h3 className="text-3xl font-bold mb-2">
					<span className="text-slate-700">For</span> {children}s
				</h3>
				<p className="text-slate-700 text-lg font-medium">{description}</p>
				<div className="grid grid-cols-2 gap-4 mt-8">
					{steps.map((step) => (
						<StepCard
							key={step.name}
							step={step}
						/>
					))}
				</div>
			</div>
			<div className="h-[26rem] rounded-2xl">
				<img
					src={thumbImage}
					alt="Image behaving like Thumbnail"
					className="w-full h-full rounded-2xl object-cover"
				/>
			</div>
		</section>
	);
};

export default StepsDivision;
