const StepCard = ({ step }) => {
	return (
		<div className="p-4 bg-slate-200 rounded-xl space-y-2 hover:shadow-lg transition-shadow duration-200">
			<div className="flex items-center gap-x-4">
				{/* Step icon */}
				<div className="bg-slate-300 p-3 rounded-full">{step.icon}</div>
				{/* Step title/name */}
				<div>
					<h5 className="text-xl font-bold">{step.name}</h5>
				</div>
			</div>
			{/* Step short-description */}
			<p className="text-slate-600 font-medium">{step.description}</p>
		</div>
	);
};

export default StepCard;
