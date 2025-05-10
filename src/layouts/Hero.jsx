import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import heroImg1 from "../assets/environment.png";
import heroImg2 from "../assets/get-job.png";
import heroImg3 from "../assets/find-talent.png";
import { Autoplay } from "swiper/modules";

const Hero = () => {
	const slides = [
		{
			image: heroImg1,
		},
		{
			image: heroImg2,
		},
		{
			image: heroImg3,
		},
	];
	return (
		<section className="flex max-h-104">
			{/* Content | Positioned Left */}
			<div
				id="hero-content"
				className="bg-slate-200 w-3/5 grid place-items-center"
			>
				<div className="max-w-3/4">
					<h1 className="text-5xl font-bold">
						Where <span className="text-primary">Talent</span> Meets{" "}
						<span className="text-primary">Opportunity</span>
					</h1>
					<p className="text-xl mt-4">
						Build your career with jobs that align with your passion and skills, or
						hire talents who will clean-up your stress effectively.
					</p>
					<button
						type="button"
						className="mt-8 px-8 py-2 rounded-full bg-primary text-light text-2xl font-medium cursor-pointer"
					>
						Explore
					</button>
				</div>
			</div>
			{/* Image Slide | Positioned Right */}
			<div className="w-2/5 z-[-1]">
				<Swiper
					modules={[Autoplay]}
					autoplay={{
						delay: 5000,
					}}
					className="h-full"
				>
					{slides.map((slide) => (
						<SwiperSlide key={slide.image}>
							<img
								src={slide.image}
								className="size-full"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Hero;
