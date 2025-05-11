import Hero from '../layouts/Hero';
import JobCategories from '../layouts/JobCategories';
import Testimonials from '../layouts/Testimonials';
import TrustedByTopCompanies from '../layouts/TrustedByTopCompanies';

const Home = () => {
    return (
        <main>
            <Hero />
            <TrustedByTopCompanies />
            <JobCategories />
            <Testimonials />
        </main>
    );
};

export default Home;