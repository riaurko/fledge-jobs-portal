import { Link } from "react-router";

const CallToActionCard = ({ userRole = "", actionDescription = "", actions = [] }) => {
	return (
		<div className="p-10 rounded-3xl bg-slate-200">
			<h3 className="text-3xl font-bold mb-2">
				For <span className="text-indigo-900">{userRole}s</span>
			</h3>
			<p className="text-lg font-medium text-slate-600">{actionDescription}</p>
			<div className="w-4/5 mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
				{actions.map((action) =>
					action.isAnchor ? (
						<a
							href={action.reference}
							target="_blank"
						>
							<button className="w-full py-2 bg-primary text-lg font-medium text-light rounded-full cursor-pointer">
								{action.name}
							</button>
						</a>
					) : (
						<Link to={action.reference}>
							<button className="w-full py-2 bg-primary text-lg font-medium text-light rounded-full cursor-pointer">
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
