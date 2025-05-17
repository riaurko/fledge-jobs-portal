import { RocketIcon } from "lucide-react";
import CallToActionCard from "../components/CallToActionCard";

const CallToAction = () => {
	return (
		<section className="mt-24 px-60 space-y-16">
			{/* Section Header */}
			<div className="space-y-3">
				<div className="flex items-center justify-center gap-x-4">
					<RocketIcon
						size={40}
						fill="dodgerblue"
						strokeWidth={1.25}
						className="motion-safe:animate-pulse"
					/>
					<h2 className="text-4xl font-bold">
						Ready To <span className="text-primary">Dive</span> In?
					</h2>
				</div>
				<p className="text-lg font-medium text-slate-600 text-center">
					Choose your role and begin the journey with full of opportunities!
				</p>
			</div>
			<div className="grid grid-cols-2 gap-8">
				<div className="bg-gradient-to-br from-primary/75 via-purple-600/75 to-indigo-600/75 rounded-3xl p-0.5">
					<CallToActionCard
						userRole="Job Seeker"
						actionDescription="Build your career with jobs that align with your passion and skills. So why hesitate? Meet your Opportunity!"
						actions={[
							{
								name: "Create Account",
								isAnchor: false,
								reference: "/signup",
							},
							{
								name: "Upload Resume",
								isAnchor: false,
								reference: "/profile",
							},
							{
								name: "Find Opportunities",
								isAnchor: false,
								reference: "/jobs",
							},
							{
								name: "Build Resume",
								isAnchor: true,
								reference: "https://www.resume.com",
							},
						]}
					/>
				</div>
				<div className="bg-gradient-to-br from-primary/75 via-purple-600/75 to-indigo-600/75 rounded-3xl p-0.5">
					<CallToActionCard
						userRole="Employer"
						actionDescription="Hire talents who will clean-up your work-stress fantastically. So why hesitate? Find your Talent!"
						actions={[
							{
								name: "Create Account",
								isAnchor: false,
								reference: "/signup",
							},
							{
								name: "Post Job",
								isAnchor: false,
								reference: "/jobs/new",
							},
							{
								name: "Track Report",
								isAnchor: false,
								reference: "/dashboard/posted-jobs",
							},
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
