import RightQuote from "../assets/end-quote.png";
import LeftQuote from "../assets/start-quote.png";

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className="mx-4 p-8 bg-slate-200 rounded-3xl space-y-6 relative hover:bg-gradient-to-br hover:from-slate-300 hover:to-slate-200">
			{/* Quote image at top right corner */}
			<img
				src={RightQuote}
				alt="Right Double Quote"
				className="size-8 absolute top-6 right-6 motion-safe:animate-bounce"
			/>
			{/* Reviewer information */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-x-4">
					<img
						src={testimonial.userImage}
						alt="User Picture"
						className="size-16 rounded-full"
					/>
					<div>
						<h4 className="text-2xl font-bold">{testimonial.userName}</h4>
						<p className="text-slate-600 font-medium">
							{testimonial.userDesignation}
						</p>
					</div>
				</div>
			</div>
			{/* Review content */}
			<div className="space-y-4">
				<h4 className="text-xl font-bold">{testimonial.reviewTitle}</h4>
				<p>{testimonial.reviewDescription}</p>
			</div>
			{/* Quote image at bottom left corner */}
			<img
				src={LeftQuote}
				alt="Left Double Quote"
				className="size-8 absolute bottom-3 left-4 animate-pulse"
			/>
		</div>
	);
};

export default TestimonialCard;
