import Hero from '../layouts/Hero';
import HowItWorks from '../layouts/HowItWorks/HowItWorks';
import JobCategories from '../layouts/JobCategories';
import Stats from '../layouts/Stats';
import Testimonials from '../layouts/Testimonials';
import TrustedByTopCompanies from '../layouts/TrustedByTopCompanies';

const Home = () => {
    return (
        <main>
            <Hero />
            <TrustedByTopCompanies />
            <JobCategories />
            <Testimonials />
            <Stats />
            <HowItWorks />
        </main>
    );
};

export default Home;