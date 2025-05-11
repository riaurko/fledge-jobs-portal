import {
	BrainIcon,
	BriefcaseBusinessIcon,
	ChartColumnIcon,
	CogIcon,
	FileUserIcon,
	HandshakeIcon,
	NotebookTabsIcon,
	SquarePenIcon,
	UserCircleIcon,
} from "lucide-react";
import StepsDivision from "./StepsDivision";
import GetJob from "../../assets/get-job.png";
import FindTalent from "../../assets/find-talent.png";

const HowItWorks = () => {
	const steps = {
		job_seeker: [
			{
				icon: (
					<UserCircleIcon
						size={32}
						stroke="var(--color-primary)"
					/>
				),
				name: "Create your Profile",
				description: "Organize your profile nicely.",
			},
			{
				icon: (
					<FileUserIcon
						size={32}
						stroke="var(--color-primary)"
					/>
				),
				name: "Upload your Resume",
				description: "Upload your resume to profile.",
			},
			{
				icon: (
					<NotebookTabsIcon
						size={32}
						stroke="var(--color-primary)"
					/>
				),
				name: "Explore and find Job",
				description: "Find your preferred job.",
			},
			{
				icon: (
					<BriefcaseBusinessIcon
						size={32}
						stroke="var(--color-primary)"
					/>
				),
				name: "Get Hired",
				description: "Apply and track your application.",
			},
		],
		employer: [
			{
				icon: (
					<SquarePenIcon
						size={32}
						stroke="var(--color-primary)"
					/>
				),
				name: "Post a Job",
				description: "Describe the work nicely.",
			},
			{
				icon: (
					<BrainIcon
						size={32}
						stroke="var(--color-primary)"
					/>
				),
				name: "Choose the Talent",
				description: "Filter the perfect talent.",
			},
			{
				icon: (
					<HandshakeIcon
						size={32}
						stroke="var(--color-primary)"
					/>
				),
				name: "Hire & Connect",
				description: "Manage offers and communication.",
			},
			{
				icon: (
					<ChartColumnIcon
						size={32}
						stroke="var(--color-primary)"
					/>
				),
				name: "Manage Work Report",
				description: "Track work and transaction report.",
			},
		],
	};
	return (
		<section
			id="how-it-works"
			className="my-24 px-60 space-y-16"
		>
			<div className="flex items-center justify-center gap-x-4">
				<CogIcon
					size={40}
					fill="dodgerblue"
					strokeWidth={1.5}
				/>
				<h2 className="text-4xl font-bold">
					How It <span className="text-primary">Works</span>
				</h2>
			</div>
			<StepsDivision
				description="Build your career with jobs that align with your passion and skills."
				thumbImage={GetJob}
				steps={steps.job_seeker}
			>
				Job Seeker
			</StepsDivision>
			<StepsDivision
				description="Hire talents who will clean-up your work-stress fantastically."
				thumbImage={FindTalent}
				steps={steps.employer}
				reverseDirection={true}
			>
				Employer
			</StepsDivision>
		</section>
	);
};

export default HowItWorks;
