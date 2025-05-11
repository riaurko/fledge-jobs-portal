import Hero from '../layouts/Hero';
import JobCategories from '../layouts/JobCategories';
import TrustedByTopCompanies from '../layouts/TrustedByTopCompanies';

const Home = () => {
    return (
        <main>
            <Hero />
            <TrustedByTopCompanies />
            <JobCategories />
        </main>
    );
};

export default Home;