import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { MessageSquareQuoteIcon } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			userName: "Baran Akilli",
			userDesignation: "Full-Stack Web Developer",
			userImage: "https://i.ibb.co.com/rKqssctL/baran-akilli.jpg",
			reviewTitle: "The support is awesome",
			reviewDescription:
				"I joined FledgeJobs to explore new dev gigs and instantly found high-quality offers. The support team was always ready to answer my queries. The platform just feels built for developers.",
		},
		{
			id: 2,
			userName: "Brian Takara",
			userDesignation: "Japanese Translator",
			userImage: "https://i.ibb.co.com/fVMTcyGX/brian-takara.jpg",
			reviewTitle: "A dream for freelancers",
			reviewDescription:
				"Finding translation work used to be a hassle, but not anymore. FledgeJobs connects me with reliable clients who value my skills. I highly recommend it to fellow freelancers.",
		},
		{
			id: 3,
			userName: "Zohaib Aslam",
			userDesignation: "React.js and Next.js Expert",
			userImage: "https://i.ibb.co.com/W4jYppNj/zohaib-aslam.jpg",
			reviewTitle: "Front-end friendly platform",
			reviewDescription:
				"The UI/UX of the site is sleek and responsive makes finding jobs actually enjoyable. Most listings are legit and well-structured. Definitely a platform I'll keep using.",
		},
		{
			id: 4,
			userName: "Muhammad Wahab",
			userDesignation: "Full-Stack MERN Developer",
			userImage: "https://i.ibb.co.com/HLK6MB8X/muhammad-wahab.jpg",
			reviewTitle: "Jobs that match your skill",
			reviewDescription:
				"Unlike other platforms, FledgeJobs actually recommends jobs I can do. I don't waste time scrolling irrelevant listings. The filter system is accurate and helpful.",
		},
		{
			id: 5,
			userName: "Danial Daud",
			userDesignation: "Financial Analyst",
			userImage: "https://i.ibb.co.com/g0GZ3C2/danial-daud.jpg",
			reviewTitle: "Efficient and reliable",
			reviewDescription:
				"I was able to land a contract within days of signing up. Everything from job listing to application is streamlined. It saves time and delivers results.",
		},
		{
			id: 6,
			userName: "Ali Ahmad Jan",
			userDesignation: "Data Analyst",
			userImage: "https://i.ibb.co.com/7x6VR9Vd/ali-jan.jpg",
			reviewTitle: "Smart recommendations",
			reviewDescription:
				"The job suggestions are based on real user profiles and history. I feel like the algorithm understands what I want. It's a refreshing experience in job hunting.",
		},
		{
			id: 7,
			userName: "Nazli Patasa",
			userDesignation: "Turkish Translator",
			userImage: "https://i.ibb.co.com/4nVbDrv7/nazli-patasa.jpg",
			reviewTitle: "Great for language experts",
			reviewDescription:
				"There's a surprising number of listings for native translators. I've worked with international clients directly through this platform. Payment and communication are smooth.",
		},
		{
			id: 8,
			userName: "Ahmed Asif",
			userDesignation: "Technical Project Manager",
			userImage: "https://i.ibb.co.com/q3D9hn7v/ahmed-asif.jpg",
			reviewTitle: "Makes hiring easier",
			reviewDescription:
				"As a hiring lead, this platform helps me quickly spot qualified candidates. The dashboard is intuitive and keeps everything organized. FledgeJobs reduced our hiring time significantly.",
		},
		{
			id: 9,
			userName: "Naruto Uzumaki",
			userDesignation: "Content Writer",
			userImage: "https://i.ibb.co.com/5W106Zb8/naruto-uzumaki.jpg",
			reviewTitle: "Believe it",
			reviewDescription:
				"I never imagined finding quality gigs would be this smooth. The writing jobs are diverse and challenging in the best way. FledgeJobs gave me my first remote mission!",
		},
		{
			id: 10,
			userName: "Itachi Uchiha",
			userDesignation: "Video Editor",
			userImage: "https://i.ibb.co.com/pr1zwsyk/itachi-uchiha.png",
			reviewTitle: "Professional and Clean UI",
			reviewDescription:
				"From layout to listings, everything feels polished. Editing jobs are clearly described and easy to apply to. I focus more on work, less on platform issues.",
		},
	];
	return (
		<section
			id="testimonials"
			className="my-24 px-60 space-y-12"
		>
			<div className="flex items-center justify-center gap-x-4">
				<MessageSquareQuoteIcon
					size={40}
					fill="dodgerblue"
					strokeWidth={1.5}
				/>
				<h2 className="text-4xl font-bold md">
					What Our <span className="text-primary">Users</span> Say
				</h2>
			</div>
			<Swiper
				modules={[Navigation]}
				navigation={{
					enabled: true,
				}}
				slidesPerView={3}
			>
				{testimonials.map((testimonial) => (
					<SwiperSlide
						key={testimonial.id}
						className="!h-auto !flex"
					>
						<TestimonialCard testimonial={testimonial} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
