const StepCard = ({ step }) => {
	return (
		<div className="p-4 bg-slate-200 rounded-xl space-y-2">
			<div className="flex items-center gap-x-4">
				<div className="bg-slate-300 p-3 rounded-full">{step.icon}</div>
				<div>
					<h5 className="text-xl font-bold">{step.name}</h5>
				</div>
			</div>
			<p className="text-slate-600 font-medium">{step.description}</p>
		</div>
	);
};

export default StepCard;
