import { Link } from "react-router";

const CallToActionCard = ({ userRole = "", actionDescription = "", actions = [] }) => {
	return (
		<div className="p-10 rounded-3xl bg-gradient-to-br from-slate-200 via-[#a0b1c9] to-slate-300">
			{/* Card Heading (For 'who') */}
			<h3 className="text-3xl font-bold mb-2">
				For <span className="text-indigo-900">{userRole}s</span>
			</h3>
			{/* Card Description */}
			<p className="text-lg font-medium text-slate-600">{actionDescription}</p>
			{/* Actions displaying as Button in a 2x2 Grid layout */}
			<div className="w-4/5 mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
				{actions.map((action) =>
					action.isAnchor ? (
						<a
							key={action.reference}
							href={action.reference}
							target="_blank"
						>
							<button className="w-full py-2 bg-primary text-lg font-medium text-light rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-indigo-500 active:bg-gradient-to-l cursor-pointer">
								{action.name}
							</button>
						</a>
					) : (
						<Link
							key={action.reference}
							to={action.reference}
						>
							<button className="w-full py-2 bg-primary text-lg font-medium text-light rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-indigo-500 active:bg-gradient-to-l cursor-pointer">
								{action.name}
							</button>
						</Link>
					),
				)}
			</div>
		</div>
	);
};

export default CallToActionCard;
