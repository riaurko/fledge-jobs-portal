const Stats = () => {
	return (
		<section className="my-24 px-60 grid grid-cols-4">
			<div className="flex flex-col items-center gap-y-2">
				<h2 className="text-4xl font-bold">190+</h2>
				<p className="text-lg text-slate-700 font-medium">Candidates got hired</p>
			</div>
			<div className="flex flex-col items-center gap-y-2">
				<h2 className="text-4xl font-bold">50+</h2>
				<p className="text-lg text-slate-700 font-medium">Open job opportunities</p>
			</div>
			<div className="flex flex-col items-center gap-y-2">
				<h2 className="text-4xl font-bold">210+</h2>
				<p className="text-lg text-slate-700 font-medium">Happy clients</p>
			</div>
			<div className="flex flex-col items-center gap-y-2">
				<h2 className="text-4xl font-bold">10+</h2>
				<p className="text-lg text-slate-700 font-medium">Curated job categories</p>
			</div>
		</section>
	);
};

export default Stats;
